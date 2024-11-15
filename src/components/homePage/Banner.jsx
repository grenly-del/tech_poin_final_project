import { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const Banner = () => {
  const [banner, setBanner] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const bannerRef = ref(db, "homepage/banner");
    onValue(bannerRef, (snapshot) => {
      const data = snapshot.val();
      console.log("Data from Firebase:", data);
      setBanner(data);
    });
  }, []);

  // Debugging: Cek apakah subtitle adalah objek
  console.log("Banner subtitle:", banner.subtitle);

  return (
    <>
      <section className="banner-section">
        <div className="container">
          <div className="banner-content">
            <div className="banner-content__text">
              <h2>{banner?.title || "loading..."}</h2>
              <p>
                {typeof banner?.subtitle === "object" ? (
                  <>
                    {banner.subtitle?.sub1 || "loading..."}
                    <br />
                    <span>{banner.date}</span>{" "}
                    {banner.subtitle?.sub2 || "loading..."}
                  </>
                ) : (
                  "Subtitle not found"
                )}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
