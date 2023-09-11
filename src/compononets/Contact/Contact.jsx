import React from "react";

export default function Contact() {
  return (
    <>
      <section id="contact">
        <div className="container vh-98">
          <div className="parent vh-98 d-flex justify-content-center align-items-center flex-column">
            <h2 className="heading">PORTFOLIO COMPONENT</h2>
            {/* start icon */}
            <div className=" mb-4 d-flex align-items-center">
              <div className="secondry-color line me-3"></div>
              <div>
                <i className="secondry-color-text fa-solid fa-star"></i>
              </div>
              <div className="secondry-color line ms-3"></div>
            </div>

            <div className="forms d-flex flex-column align-items-center">
              <input type="text" placeholder="userName" />
              <input type="text" placeholder="userAge" />
              <input type="text" placeholder="userEmail" />
              <input type="text" placeholder="userPassword" />
              <div className="w-50">
                <button className="justify-self-end btn">send Message</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
