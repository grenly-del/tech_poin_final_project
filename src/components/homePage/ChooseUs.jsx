import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const ChooseUs = () => {
  const [chooseus, setChoose] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const chooseRef = ref(db, "homepage/chooseUs");
    onValue(chooseRef, (snapshot) => {
      const data = snapshot.val();
      setChoose(data);
    });
  }, []);

  return (
    <>
      <section className="choose-section">
        <div className="container">
          <div className="choose-container">
            <img
              className="choose-container__img"
              src={chooseus?.images?.main || "not found"}
              alt="car_img"
            />
            <div className="text-container">
              <div className="text-container__left">
                <h4>{chooseus?.section1?.title || "Loading..."}</h4>
                <h2>{chooseus?.section1?.subtitle || "Loading..."}</h2>
                <p>{chooseus?.section1?.desc || "Loading..."}</p>
                <a href="#home">
                  {chooseus?.section1?.btndetails || "Find Details"} &nbsp;
                  <i className="fa-solid fa-angle-right"></i>
                </a>
              </div>
              <div className="text-container__right">
                <div className="text-container__right__box">
                  <img
                    src={chooseus?.images?.icon1 || "not found"}
                    alt="icon-img"
                  />
                  <div className="text-container__right__box__text">
                    <h4>{chooseus?.section2?.title || "Loading..."}</h4>
                    <p>{chooseus?.section2?.desc || "Loading..."}</p>
                  </div>
                </div>

                <div className="text-container__right__box">
                  <img
                    src={chooseus?.images?.icon2 || "Loading"}
                    alt="icon-img"
                  />
                  <div className="text-container__right__box__text">
                    <h4>{chooseus?.section3?.title || "Loading..."}</h4>
                    <p>{chooseus?.section3?.desc || "Loading..."}</p>
                  </div>
                </div>

                <div className="text-container__right__box">
                  <img
                    src={chooseus?.images?.icon3 || "not found"}
                    alt="icon-img"
                  />
                  <div className="text-container__right__box__text">
                    <h4>{chooseus?.section3?.title || "Loading..."}</h4>
                    <p>{chooseus?.section3?.desc || "Loading..."}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChooseUs;
