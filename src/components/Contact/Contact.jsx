import { useState } from "react";
import "./Contact.css";
import { useEffect } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: null,
    email: null,
    phone_number: null,
    post_code: null,
    subject: null,
    message: null,
  });
  const [error, setError] = useState(null);

  function updateForm(event) {
    console.log(event.target.value, event.target.dataset.purpose);
    if (!(event.target.value === "")) {
      const modifiedData = { ...formData };
      modifiedData[event.target.dataset.purpose] = event.target.value;
      setFormData(modifiedData);
    } else {
      const modifiedData = { ...formData };
      modifiedData[event.target.dataset.purpose] = null;
      setFormData(modifiedData);
    }
  }

  function sendForm() {
    const regex = {
      name: /^[A-Za-z][A-Za-z\s\-']*$/,
      email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    };
    if (
      regex.name.test(formData.name) &&
      regex.email.test(formData.email) &&
      formData.subject &&
      formData.message
    ) {
      setError(null);
    } else {
      setError(
        "Please make sure your name, email address, subject and message are not empty and in the correct format."
      );
    }
  }

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <main>
      <h1 className="global-css-page-title">Contact</h1>
      <h2 className="contact-further-info">
        CONTACT ME & AND BOOK YOUR FREE CONSULTATION SESSION
      </h2>
      <section className="contact">
        <summary className="image-div">
          <img
            className="contact-image"
            src="images/VIPLifeCoachBusinessCard.jpg"
          />
        </summary>
        <aside className="form">
          <div className="form-line">
            <input
              data-purpose="name"
              onChange={updateForm}
              className="input-general"
              placeholder="Name *"
            />
            <input
              data-purpose="email"
              onChange={updateForm}
              className="input-general"
              placeholder="Email *"
            />
          </div>
          <div className="form-line">
            <input
              data-purpose="phone_number"
              onChange={updateForm}
              className="input-general"
              placeholder="Phone Number"
            />
            <input
              data-purpose="post_code"
              onChange={updateForm}
              className="input-general"
              placeholder="Post Code"
            />
          </div>
          <div className="form-line">
            <input
              data-purpose="subject"
              onChange={updateForm}
              className="input-general"
              placeholder="Subject *"
            />
          </div>
          <div className="form-line">
            <textarea
              data-purpose="message"
              onChange={updateForm}
              className="input-general"
              placeholder="Message *"
            />
          </div>
          <p className="error-info" style={{ margin: 0 }}>
            {error}
          </p>
          <div className="form-line">
            <button onClick={sendForm} className="send-form-button">
              SEND
            </button>
          </div>
        </aside>
      </section>
    </main>
  );
};

export default Contact;
