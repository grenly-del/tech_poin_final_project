/* eslint-disable react/prop-types */



const PlanTrip = ({data}) => {
  return (
    <>
      <section className="plan-section">
        <div className="container">
          <div className="plan-container">
            <div className="plan-container__title">
              <h3>{data.subtitle}</h3>
              <h2>{data.title}</h2>
            </div>

            <div className="plan-container__boxes">
              {data.card.map((val, index) => (
              <div key={index} className="plan-container__boxes__box">
                <img src={val.image} alt="icon_img" />
                <h3>{val.name}</h3>
                <p>
                  {val.desc}
                </p>
              </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PlanTrip;
