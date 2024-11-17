import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Testimonials = () => {
  const [testimonial, setTestimonials] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const testimonialRef = ref(db, "homepage/testimonial");
    onValue(testimonialRef, (snapshot) => {
      const data = snapshot.val();
      setTestimonials(data);
    });
  }, []);

  return (
    <>
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-content">
            <div className="testimonials-content__title">
              <h4>{testimonial.title}</h4>
              <h2>{testimonial.subtitle}</h2>
              <p>{testimonial.desc}</p>
            </div>

            <div className="all-testimonials">
              <div className="all-testimonials__box">
                <span className="quotes-icon">
                  <i className="fa-solid fa-quote-right"></i>
                </span>
                <p>{testimonial.review1?.desc || "Loading..."}</p>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile">
                    <img
                      src={testimonial.review1?.photo || "not found"}
                      alt="user_img"
                    />
                    <span>
                      <h4>{testimonial.review1?.name || "Loading..."}</h4>
                      <p>{testimonial.review1?.username || "Loading..."}</p>
                    </span>
                  </div>
                </div>
              </div>

              <div className="all-testimonials__box box-2">
                <span className="quotes-icon">
                  <i className="fa-solid fa-quote-right"></i>
                </span>
                <p>{testimonial.review2?.desc || "Loading..."}</p>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile">
                    <img
                      src={testimonial.review2?.photo || "not found"}
                      alt="user_img"
                    />
                    <span>
                      <h4>{testimonial.review2?.name || "Loading..."}</h4>
                      <p>{testimonial.review2?.username || "Loading..."}</p>
                    </span>
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

export default Testimonials;
