import Footer from "../components/homePage/Footer";
import HeroPages from "../components/homePage/index";
import PlanTrip from "../components/homePage/PlanTrip";
import { useEffect, useState } from "react";
import { getDatabase, onValue, ref } from "firebase/database";
import LoadingBars from "../components/loadingBars";

const About = () => {
  const [about, setAbout] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const getData = () => {
    const db = getDatabase();
    const heroRef = ref(db, "/homepage");
    onValue(heroRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data.about);
      setAbout(data.about); // Ensure hero is not null
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getData();
  }, [isLoading]);
  return (
    <>
      {!isLoading ? (
        <>
          <section className="about-page">
            <HeroPages name="About" />
            <div className="container">
              <div className="about-main">
                <img
                  className="about-main__img"
                  src={about.image}
                  alt="car-renting"
                />
                <div className="about-main__text">
                  <h3>{about.desc}</h3>
                  <h2>{about.tagline}</h2>
                  <p>{about.paragraph}</p>
                  <div className="about-main__text__icons">
                    {about.utils.map((val, index) => (
                      <div key={index} className="about-main__text__icons__box">
                        <img src={val.image} alt="car-icon" />
                        <span>
                          <h4>{val.count}</h4>
                          <p>{val.type}</p>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <PlanTrip data={about} />
            </div>
          </section>
          <div className="book-banner">
            <div className="book-banner__overlay"></div>
            <div className="container">
              <div className="text-content">
                <h2>Book a car by getting in touch with us</h2>
                <span>
                  <i className="fa-solid fa-phone"></i>
                  <h3>(123) 456-7869</h3>
                </span>
              </div>
            </div>
          </div>
          <Footer />
        </>
      ) : (
        <LoadingBars />
      )}
    </>
  );
};

export default About;
