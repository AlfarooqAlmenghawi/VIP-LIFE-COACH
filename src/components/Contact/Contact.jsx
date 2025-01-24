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
        <aside>
          <input placeholder="Name" />
        </aside>
      </section>
    </main>
  );
};

export default Contact;
