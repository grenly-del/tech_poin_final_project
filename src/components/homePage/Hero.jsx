import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

// Komponen Hero
function Hero({ data }) {
  const [goUp, setGoUp] = useState(false);
  const [hero, setHero] = useState({});
  const [loading, setLoading] = useState(true);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const bookBtn = () => {
    document.querySelector("#booking-section").scrollIntoView({ behavior: "smooth" });
  };

  // Menangani scroll untuk menampilkan tombol "scroll up"
  useEffect(() => {
    const onPageScroll = () => {
      setGoUp(window.pageYOffset > 600);
    };
    window.addEventListener("scroll", onPageScroll);
    return () => window.removeEventListener("scroll", onPageScroll);
  }, []);

  // Menggunakan useEffect untuk memperbarui state 'hero' ketika props 'data' berubah
  useEffect(() => {
    if (data) {
      setHero(data);
      setLoading(false);  // Setelah data diterima, set loading menjadi false
    }
  }, [data]);  // Hanya dipanggil ketika 'data' props berubah

  if (loading) {
    return <div>Loading...</div>;  // Tampilkan loading jika data belum tersedia
  }

  return (
    <section id="home" className="hero-section">
      <div className="container">
        {/* Pastikan properti hero.images.background ada sebelum mencoba merender */}
        <img className="bg-shape" src={hero.images.background} alt="bg-shape" />
        <div className="hero-content">
          <div className="hero-content__text">
            <h4>{hero.title || ""}</h4>
            <h1>
              {hero.subtitle?.first}{" "}
              <span>{hero.subtitle?.second}</span>{" "}
              {hero.subtitle?.third}
            </h1>
            <p>{hero.desc}</p>
            <div className="hero-content__text__btns">
              <Link onClick={bookBtn} className="hero-content__text__btns__book-ride" to="/">
                {hero.btnbook} &nbsp; <i className="fa-solid fa-circle-check"></i>
              </Link>
              <Link className="hero-content__text__btns__learn-more" to="/">
                {hero.btnlearn} &nbsp; <i className="fa-solid fa-angle-right"></i>
              </Link>
            </div>
          </div>

          {/* Pastikan properti hero.images.content ada sebelum mencoba merender */}
          <img src={hero.images.content} alt="car-img" className="hero-content__car-img" />
        </div>
      </div>

      {/* page up */}
      <div onClick={scrollToTop} className={`scroll-up ${goUp ? "show-scroll" : ""}`}>
        <i className="fa-solid fa-angle-up"></i>
      </div>
    </section>
  );
}

export default Hero;
