import { useState, useEffect } from "react";

function CarBox({ data, carID }) {
  const [carLoad, setCarLoad] = useState(true);
  const [newCarData, setNewCarData] = useState({})

  useEffect(() => {
    if(data.length != 0) {
      setNewCarData(data[carID])
      setCarLoad(false)
      console.log(data[carID].img)
    }
  }, [data])
  return (
    <>
      <div className="box-cars">
          {/* car */}
          <div className="pick-car">
            {carLoad && <span className="loader"></span>}
            <img
              style={{ display: carLoad ? "none" : "block" }}
              src={newCarData.img}
              alt="car_img"
              onLoad={() => setCarLoad(false)}
            />
          </div>
          {/* description */}
          <div className="pick-description">
            <div className="pick-description__price">
              <span>${newCarData.price}</span>/ rent per day
            </div>
            <div className="pick-description__table">
              <div className="pick-description__table__col">
                <span>Model</span>
                <span>{newCarData.model}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Mark</span>
                <span>{newCarData.mark}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Year</span>
                <span>{newCarData.year}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Doors</span>
                <span>{newCarData.doors}</span>
              </div>

              <div className="pick-description__table__col">
                <span>AC</span>
                <span>{newCarData.air}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Transmission</span>
                <span>{newCarData.transmission}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Fuel</span>
                <span>{newCarData.fuel}</span>
              </div>
            </div>
            {/* btn cta */}
            <a className="cta-btn" href="#booking-section">
              Reserve Now
            </a>
          </div>
    </div>


    </>
  );
}




export default CarBox;
