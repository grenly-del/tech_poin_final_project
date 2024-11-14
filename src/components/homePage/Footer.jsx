import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Footer = () => {
  const [footer, setFooter] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const footerRef = ref(db, "footer/");
    onValue(footerRef, (snapshot) => {
      const data = snapshot.val();
      setFooter(data);
    });
  }, []);
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content__1">
              <li>
                <span>{footer.car}</span> {footer.rental}
              </li>
              <li>
                {footer.cartext}
              </li>
              <li>
                <a href="tel:123456789">
                  <i className="fa-solid fa-phone"></i> &nbsp; {footer.number}
                </a>
              </li>

              <li>
                <a
                  href="mailto: 
                carrental@gmail.com"
                >
                  <i className="fa-solid fa-envelope"></i>
                  &nbsp; {footer.email}
                </a>
              </li>
            </ul>
            <ul className="footer-content__2">
              <li>{footer.company}</li>
              <li>
                <a href="#home">{footer.gallery}</a>
              </li>
              <li>
                <a href="#home">{footer.careers}</a>
              </li>
              <li>
                <a href="#home">{footer.mobil}</a>
              </li>
              <li>
                <a href="#home">{footer.blog}</a>
              </li>
              <li>
                <a href="#home">{footer.how}</a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>{footer.working}</li>
              <li>{footer.date}</li>
              <li>{footer.time}</li>
              <li>{footer.close}</li>
            </ul>

            <ul className="footer-content__2">
              <li>{footer.sub}</li>
              <li>
                <p>{footer.subscribe}</p>
              </li>
              <li>
                <input type="email" placeholder="Enter Email Address"></input>
              </li>
              <li>
                <button className="submit-email">{footer.submit}</button>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
