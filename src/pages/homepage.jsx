import Hero from "../components/homePage/Hero";
import BookCar from "../components/homePage/BookCar";
import PlanTrip from "../components/homePage/PlanTrip";
import PickCar from "../components/homePage/PickCar";
import Banner from "../components/homePage/Banner";
import ChooseUs from "../components/homePage/ChooseUs";
import Testimonials from "../components/homePage/Testimonials";
import Faq from "../components/homePage/Faq";
import Download from "../components/homePage/Download";
import Footer from "../components/homePage/Footer";
import { useState, useEffect } from "react";
import { getDatabase, onValue, ref } from "firebase/database";
import LoadingBars from "../components/loadingBars";

function Home() {
  const [about, setAbout] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const getData = () => {
    const db = getDatabase();
    const heroRef = ref(db, "/homepage");
    onValue(heroRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data.Hero);
      setAbout(data.about); // Ensure hero is not nul
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {!isLoading ? (
        <div>
          <Hero />
          <BookCar />
          <PlanTrip data={about} />
          <PickCar />
          <Banner />
          <ChooseUs />
          <Testimonials />
          <Faq />
          <Download />
          <Footer />
        </div>
      ) : (
        <LoadingBars />
      )}
    </>
  );
}

export default Home;
