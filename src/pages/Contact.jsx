import React, { useRef } from "react";
import CommonSection from "../components/ui/CommonSection/CommonSection";
import { Container, Row, Col } from "reactstrap";

const Contact = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const subjectRef = useRef("");
  const messageRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <CommonSection title="Contact" />
      <section>
        <Row>
          <Col lg="6" md="6" className="m-auto text-center">
            <h2>Drop a Message</h2>
            <p>
              lorem ipsum dolor sit amet, consectetur adip locus, sed diam
              nonumy eirmod tempor inviduer et ullamcorper lorem sed
            </p>
            <div className="contact mt-4">
              <form onSubmit={handleSubmit}>
                <div className="form__input">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    ref={nameRef}
                  />
                </div>
                <div className="form__input">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    ref={emailRef}
                  />
                </div>
                <div className="form__input">
                  <input
                    type="text"
                    placeholder="Enter subject"
                    ref={subjectRef}
                  />
                </div>
                <div className="form__input">
                  <textarea
                    rows="7"
                    placeholder="Write message"
                    ref={messageRef}
                  ></textarea>
                </div>
                <button
                  className="send__btn"
                  style={{
                    border: "none",
                    padding: "7px 25px",
                    borderRadius: "5px",
                    marginTop: "20px",
                  }}
                >
                  Send a Message
                </button>
              </form>
            </div>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default Contact;
