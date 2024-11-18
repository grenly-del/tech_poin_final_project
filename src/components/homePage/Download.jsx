import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Download = () => {
  const [download, setDownload] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const downloadRef = ref(db, "homepage/download");
    onValue(downloadRef, (snapshot) => {
      const data = snapshot.val();
      setDownload(data);
    });
  }, []);
  return (
    <>
      <section className="download-section">
        <div className="container">
          <div className="download-text">
            <h2>{download.judul}</h2>
            <p>{download.text}</p>
            <div className="download-text__btns">
              <img alt="download_img" src={download.gambar1} />
              <img alt="download_img" src={download.gambar2} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Download;
