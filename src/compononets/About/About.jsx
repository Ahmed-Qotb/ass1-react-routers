import React from "react";

export default function About() {
  return (
    <>
      <section id="about">
        <div className="container">
          <div className="vh-98 text-white flex-column d-flex justify-content-center align-items-center">
            {/* about title */}
            <h2 className="fw-bolder text-white">ABOUT COMPONENT</h2>

            {/* about title star icon */}
            <div className="d-flex align-items-center">
              <div className="line me-3"></div>
              <div>
                <i className="fa-solid fa-star"></i>
              </div>
              <div className="line ms-3"></div>
            </div>

            {/* about paragraphs */}
            <div className="about words d-flex">
              <div className="row">
                <div className="col-md-6">
                  <p>
                    Freelancer is a free bootstrap theme created by Route. The
                    download includes the complete source files including HTML,
                    CSS, and JavaScript as well as optional SASS stylesheets for
                    easy customization.
                  </p>
                </div>
                <div className="col-md-6">
                  <p>
                    Freelancer is a free bootstrap theme created by Route. The
                    download includes the complete source files including HTML,
                    CSS, and JavaScript as well as optional SASS stylesheets for
                    easy customization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
