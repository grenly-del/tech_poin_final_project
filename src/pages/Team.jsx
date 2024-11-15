import Footer from "../components/homePage/Footer";
import HeroPages from "../components/homePage";
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Team = () => {
  const [ourteam, setTeam] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const ourteamRef = ref(db, "ourteam/");
    onValue(ourteamRef, (snapshot) => {
      const data = snapshot.val();
      setTeam(data);
      console.log(data);
    });
  }, []);

  const teamPpl = [
    {
      img: ourteam.foto1?.img1 || "loading image",
      name: ourteam.foto1?.nama1,
      job: ourteam.foto1?.desc,
    },
    {
      img: ourteam.foto2?.img2 || "loading image",
      name: ourteam.foto2?.nama2,
      job: ourteam.foto2?.desc,
    },
    {
      img: ourteam.foto1?.img1 || "loading image",
      name: ourteam.foto3?.nama3,
      job: ourteam.foto3?.desc3,
    },
    {
      img: ourteam.foto4?.img4 || "loading image",
      name: ourteam.foto4?.nama4,
      job: ourteam.foto4?.desc4,
    },
  ];

  return (
    <>
      <section className="team-page">
        <HeroPages name="Our Team" />
        <div className="container">
          <div className="team-container">
            {teamPpl.map((ppl, id) => (
              <div key={id} className="team-container__box">
                <div className="team-container__box__img-div">
                  <img src={ppl.img} alt="team_img" />
                </div>
                <div className="team-container__box__descr">
                  <h3>{ppl.name}</h3>
                  <p>{ppl.job}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>{ourteam.book}</h2>
              <span>
                <i className="fa-solid fa-phone"></i>
                <h3>{ourteam.no}</h3>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Team;
