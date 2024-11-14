import Footer from "../components/homePage/Footer";
import HeroPages from "../components/homePage";
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Contact = () => {
  const [contact, setContact] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const contactRef = ref(db, "contact/");
    onValue(contactRef, (snapshot) => {
      const data = snapshot.val();
      setContact(data);
    });
  }, []);
  return (
    <>
      <section className="contact-page">
        <HeroPages name="Contact" />
        <div className="container">
          <div className="contact-div">
            <div className="contact-div__text">
              <h2>{contact.information}</h2>
              <p>{contact.informationtext}</p>
              <a href="/">
                <i className="fa-solid fa-phone"></i>&nbsp; {contact.number}
              </a>
              <a href="/">
                <i className="fa-solid fa-envelope"></i>&nbsp;
                {contact.gmail}
              </a>
              <a href="/">
                <i className="fa-solid fa-location-dot"></i>&nbsp; {contact.alamat}
              </a>
            </div>
            <div className="contact-div__form">
              <form>
                <label>
                  {contact.name} <b>*</b>
                </label>
                <input type="text" placeholder='E.g: "Joe Shmoe"'></input>

                <label>
                  {contact.email} <b>*</b>
                </label>
                <input type="email" placeholder="youremail@example.com"></input>

                <label>
                  {contact.tell} <b>*</b>
                </label>
                <textarea placeholder="Write Here.."></textarea>

                <button type="submit">
                  <i className="fa-solid fa-envelope-open-text"></i>&nbsp; {contact.send}
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>{contact.book}</h2>
              <span>
                <i className="fa-solid fa-phone"></i>
                <h3>{contact.number}</h3>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Contact;
