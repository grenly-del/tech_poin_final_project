import { useEffect, useState } from "react";
import CarBox from "../CarBox";
import { CAR_DATA } from "../CarData";

function PickCar({data}) {
  const [active, setActive] = useState("SecondCar");
  const [colorBtn, setColorBtn] = useState("btn1");
  const [vehicle, setVehicle] = useState({})
  const [carData, setCarData] = useState([])

  useEffect(() => {
    if(data) {
      setVehicle(data)
      let dataCars = []
      data.cars.map((val, index) => {
        dataCars.push(
            {
              name: val.name,
              price: val.price,
              img: val.image,
              model: val.model,
              mark: val.mark,
              year: val.year,
              doors: val.doors,
              air: val.ac,
              transmission: val.transmission,
              fuel: val.fuel,
            }
          )
      })
      setCarData(dataCars.reverse())
    }
  }, [data])


  const btnID = (id) => {
    setColorBtn(colorBtn === id ? "" : id);
  };

  const coloringButton = (id) => {
    return colorBtn === id ? "colored-button" : "";
  };

  return (
    <>
      <section className="pick-section">
        <div className="container">
          <div className="pick-container">
            <div className="pick-container__title">
              <h3>{vehicle.subtitle}</h3>
              <h2>{vehicle.title}</h2>
              <p>
                {vehicle.desc}
              </p>
            </div>
            <div className="pick-container__car-content">
              {/* pick car */}
              <div className="pick-box">
                <button
                  className={`${coloringButton("btn1")}`}
                  onClick={() => {
                    setActive("SecondCar");
                    btnID("btn1");
                  }}
                >
                  Audi A1 S-Line
                </button>
                <button
                  className={`${coloringButton("btn2")}`}
                  id="btn2"
                  onClick={() => {
                    setActive("FirstCar");
                    btnID("btn2");
                  }}
                >
                  VW Golf 6
                </button>
                <button
                  className={`${coloringButton("btn3")}`}
                  id="btn3"
                  onClick={() => {
                    setActive("ThirdCar");
                    btnID("btn3");
                  }}
                >
                  Toyota Camry
                </button>
                <button
                  className={`${coloringButton("btn4")}`}
                  id="btn4"
                  onClick={() => {
                    setActive("FourthCar");
                    btnID("btn4");
                  }}
                >
                  BMW 320 ModernLine
                </button>
                <button
                  className={`${coloringButton("btn5")}`}
                  id="btn5"
                  onClick={() => {
                    setActive("FifthCar");
                    btnID("btn5");
                  }}
                >
                  Mercedes-Benz GLK
                </button>
                <button
                  className={`${coloringButton("btn6")}`}
                  id="btn6"
                  onClick={() => {
                    setActive("SixthCar");
                    btnID("btn6");
                  }}
                >
                  VW Passat CC
                </button>
              </div>

              {active === "FirstCar" && <CarBox data={carData} carID={1} />}
              {active === "SecondCar" && <CarBox data={carData} carID={0} />}
              {active === "ThirdCar" && <CarBox data={carData} carID={2} />}
              {active === "FourthCar" && <CarBox data={carData} carID={3} />}
              {active === "FifthCar" && <CarBox data={carData} carID={5} />}
              {active === "SixthCar" && <CarBox data={carData} carID={4} />} 
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PickCar;
