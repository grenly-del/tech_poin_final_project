import Footer from "../components/homePage/Footer";
import HeroPages from "../components/homePage";
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Person1 = "./images/team/1.png";
const Person2 = "./images/team/2.png";
const Person3 = "./images/team/3.png";
const Person4 = "./images/team/4.png";

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
    { img: Person1, name: "Grantly", job: "test" },
    { img: Person2, name: "Grantly", job: "test" },
    { img: Person3, name: "Grantly", job: "test" },
    { img: Person4, name: "Grantly", job: "test" },
  ];

  return (
    <>
      <section className="team-page">
        <HeroPages name="Our Team" />
        <div className="cotnainer">
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
