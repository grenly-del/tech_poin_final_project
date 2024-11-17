import Footer from "../components/homePage/Footer";
import HeroPages from "../components/homePage";
const CarImg1 = "./images/cars-big/audi-box.png";
const CarImg2 = "./images/cars-big/golf6-box.png";
const CarImg3 = "./images/cars-big/toyota-box.png";
const CarImg4 = "./images/cars-big/bmw-box.png";
const CarImg5 = "./images/cars-big/benz-box.png";
const CarImg6 = "./images/cars-big/passat-box.png";
import {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import { getDatabase, onValue, ref } from "firebase/database";
import LoadingBars from "../components/loadingBars";
const Models = () => {
  const [vehicle, setVehicle] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const getData = () => {
    const db = getDatabase();
    const modelsRef = ref(db, "/homepage");
    onValue(modelsRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data.vehicle)
      setVehicle(data.vehicle)
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {!isLoading ? (
        <section className="models-section">
        <HeroPages name="Vehicle Models" />
        <div className="container">
          <div className="models-div">
            {vehicle.cars.map((val, index) => (
              <div key={index} className="models-div__box">
                <div className="models-div__box__img">
                  <img src={val.image} alt="car_img" />
                  <div className="models-div__box__descr">
                    <div className="models-div__box__descr__name-price">
                      <div className="models-div__box__descr__name-price__name">
                        <p style={{fontSize: '19px'}}>{val.name}</p>
                        <span>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </span>
                      </div>
                      <div className="models-div__box__descr__name-price__price">
                        <h4>{val.price}</h4>
                        <p>per day</p>
                      </div>
                    </div>
                    <div className="models-div__box__descr__name-price__details">
                      <span>
                        <i className="fa-solid fa-car-side"></i> &nbsp; {val.model}
                      </span>
                      <span style={{ textAlign: "right" }}>
                        {val.doors} &nbsp; <i className="fa-solid fa-car-side"></i>
                      </span>
                      <span>
                        <i className="fa-solid fa-car-side"></i> &nbsp; {val.transmission}
                      </span>
                      <span style={{ textAlign: "right" }}>
                        {val.fuel} &nbsp; <i className="fa-solid fa-car-side"></i>
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__btn">
                      <Link onClick={() => window.scrollTo(0, 0)} to="/">
                        Book Ride
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
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
      </section>
      ) : (
        <LoadingBars />
      )}
    </>
  );
};

export default Models;
