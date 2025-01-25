import "./Contact.css";

const Contact = () => {
  return (
    <main>
      <h1 className="global-css-page-title">Contact</h1>
      <h2>CONTACT ME & AND BOOK YOUR FREE CONSULTATION SESSION</h2>
      <section className="contact">
        <summary>
          <img
            className="contact-image"
            src="images/VIPLifeCoachBusinessCard.jpg"
          />
        </summary>
        <aside className="form">
          <div className="form-line">
            <input className="input-general" placeholder="Name *" />
            <input className="input-general" placeholder="Email *" />
          </div>
          <div className="form-line">
            <input className="input-general" placeholder="Phone Number" />
            <input className="input-general" placeholder="Post Code" />
          </div>
          <div className="form-line">
            <input className="input-general" placeholder="Subject *" />
          </div>
          <div className="form-line">
            <textarea className="input-general" placeholder="Message *" />
          </div>
          <div className="form-line">
            <button className="send-form-button">SEND</button>
          </div>
        </aside>
      </section>
    </main>
  );
};

export default Contact;
