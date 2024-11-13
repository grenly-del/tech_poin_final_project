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

function Home() {
  return (
    <>
      <Hero />
      <BookCar />
      <PlanTrip />
      <PickCar />
      <Banner />
      <ChooseUs />
      <Testimonials />
      <Faq />
      <Download />
      <Footer />
    </>
  );
}

export default Home;
