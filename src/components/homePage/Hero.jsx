import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
// test
// test push adit

const Hero = () => {
  const [goUp, setGoUp] = useState(false);
  const [hero, setHero] = useState({});
  const [loading, setLoading] = useState(true);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const bookBtn = () => {
    document
      .querySelector("#booking-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const onPageScroll = () => {
      setGoUp(window.pageYOffset > 600);
    };
    window.addEventListener("scroll", onPageScroll);
    return () => window.removeEventListener("scroll", onPageScroll);
  }, []);

  useEffect(() => {
    const db = getDatabase();
    const heroRef = ref(db, "homepage/");
    onValue(heroRef, (snapshot) => {
      const data = snapshot.val();
      setHero(data || {}); // Ensure hero is not null
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section id="home" className="hero-section">
        <div className="container">
          <img
            className="bg-shape"
            src={hero.Hero.images.background}
            alt="bg-shape"
          />
          <div className="hero-content">
            <div className="hero-content__text">
              <h4>{hero.Hero.title || ""}</h4>
              <h1>
                {hero.Hero.subtitle.first}{" "}
                <span>{hero.Hero.subtitle.second}</span>{" "}
                {hero.Hero.subtitle.third}
              </h1>
              <p>{hero.Hero.desc}</p>
              <div className="hero-content__text__btns">
                <Link
                  onClick={bookBtn}
                  className="hero-content__text__btns__book-ride"
                  to="/"
                >
                  {hero.Hero.btnbook} &nbsp;{" "}
                  <i className="fa-solid fa-circle-check"></i>
                </Link>
                <Link className="hero-content__text__btns__learn-more" to="/">
                  {hero.Hero.btnlearn} &nbsp;{" "}
                  <i className="fa-solid fa-angle-right"></i>
                </Link>
              </div>
            </div>

            {/* img */}
            <img
              src={hero.Hero.images.content}
              alt="car-img"
              className="hero-content__car-img"
            />
          </div>
        </div>

        {/* page up */}
        <div
          onClick={scrollToTop}
          className={`scroll-up ${goUp ? "show-scroll" : ""}`}
        >
          <i className="fa-solid fa-angle-up"></i>
        </div>
      </section>
    </>
  );
};

export default Hero;
