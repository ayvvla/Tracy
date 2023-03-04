import React, {useRef} from "react";
import emailjs from "@emailjs/browser"
import { CiMail } from "react-icons/ci";

const Contact = () => {
  const form = useRef()
  console.log(process.env)
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_PUBLIC_KEY,
    )
      .then (
        result => {console.log(result.text)
                console.log("message sent")
        },
        error => console.log(error.text)
    )

    e.target.reset()
  }

  return (
    <section id="contact" className="contact">
      <div className="contact--main">
        <div className="contact--text">
          <CiMail size={40} />
          <p className="contact--text__para">
            For commissions and project inquiries, please email :
          </p>
          <span className="contact--text__span">
            <a href="mailto:melontracy6@gmail.com">melontracy6@gmail.com</a>
          </span>
          <p className="contact--text__message">
            or Send a message via this form
          </p>
        </div>

        <section className="contact--form">
          <h1 className="contact--form--title">Contact</h1>
          <form className="form" ref={form} onSubmit={sendEmail}>
            <div className="form--name">
              <div className="column column-name">
                <label htmlFor="firstName" className="label">
                  First Name
                </label>
                <input id="firstName" name="firstname" />
              </div>

              <div className="column column-name">
                <label htmlFor="lastName" className="label">
                  Last Name
                </label>
                <input id="lastName" name="lastname"></input>
              </div>
            </div>

            <div className="form--email">
              <div className="column">
                <label htmlFor="mail" className="label">
                  Email
                </label>
                <input type="email" id="mail" name="email" required></input>
              </div>
            </div>

            <div className="form--message">
              <div className="column textarea">
                <label htmlFor="message" className="label">
                  Write a message
                </label>
                <textarea id="message" name="message"></textarea>
              </div>
            </div>

            <button className="btn" type="submit">Submit</button>
          </form>
        </section>
      </div>
    </section>
  );
};

export default Contact;
