import React, {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/contact.css'

const Contact = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, easing: 'linear' });
        AOS.refresh();
    }, []);
  return (
    <div>
          <section className="contact-me" id="contact">
              <div className="contact-me-container">
                  <h2 className="contact-me-header-text" data-aos="fade-right">I'm always interested <br/> in hearing about new projects,<br/>
                      so if you'd like <br/> to chat please get in touch.</h2>
                  <form action="https://formspree.io/f/mlezzzyn" method="post" id="form" data-aos="fade-left">
                      <div className="form">
                          <label htmlFor="name" />
                          <input type="text" id="name" name="name" className="no-border name" minLength={1} maxLength={30} placeholder="Enter Full name" required />


                          <label htmlFor="email" />
                          <input type="email" name="email" id="email" className="no-border email" placeholder="Enter email adress" required />


                          <label htmlFor="msg" />
                          <textarea name="message" id="msg" className="msg" minLength={1} maxLength={500} required placeholder="Enter text here" />
                      </div>
                      <div className="contain-error">
                          <small id="error" className="error-message" />
                          <button className="form-button" type="submit">Get in touch</button>
                      </div>

                  </form>
              </div>
             
          </section>
    </div>
  )
}

export default Contact
