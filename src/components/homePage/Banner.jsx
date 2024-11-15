import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Banner = () => {
  const [banner, setBanner] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const bannerRef = ref(db, "homepage/banner");
    onValue(bannerRef, (snapshot) => {
      const data = snapshot.val();
      setBanner(data);
    });
  }, []);
  return (
    <>
      <section className="banner-section">
        <div className="container">
          <div className="banner-content">
            <div className="banner-content__text">
              <h2>{banner.save}</h2>
              <p>
                {banner.top}
                <span>{banner.date}</span> {banner.support}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
