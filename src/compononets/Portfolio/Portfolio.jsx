import React from "react";

export default function Portfolio() {
  return (
    <section id="portfoli">
      <div className="container pt-5">
        <div className="vh-100 flex-column d-flex justify-content-center align-items-center">
          <h2 className="heading">PORTFOLIO COMPONENT</h2>
          {/* start icon */}
          <div className=" mb-4 d-flex align-items-center">
              <div className="secondry-color line me-3"></div>
              <div>
                <i className="secondry-color-text fa-solid fa-star"></i>
              </div>
              <div className="secondry-color line ms-3"></div>
            </div>
          <div className="row gy-4">
            <div className="col-md-6 col-lg-4">
              <div className="frame rounded-3 overflow-hidden">
                <img
                  src="https://routeegy.github.io/startFramework/assets/images/poert1.png"
                  alt=""
                />
                <div className="layer position-absolute top-0 bottom-0 start-0 end-0">
                  <i className="fa-solid fa-plus fa-4x"></i>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="frame rounded-3 overflow-hidden">
                <img
                  src="https://routeegy.github.io/startFramework/assets/images/port2.png"
                  alt=""
                />
                <div className="layer position-absolute top-0 bottom-0 start-0 end-0">
                  <i className="fa-solid fa-plus fa-4x"></i>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="frame rounded-3 overflow-hidden">
                <img
                  src="https://routeegy.github.io/startFramework/assets/images/port3.png"
                  alt=""
                />
                <div className="layer position-absolute top-0 bottom-0 start-0 end-0">
                  <i className="fa-solid fa-plus fa-4x"></i>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="frame rounded-3 overflow-hidden">
                <img
                  src="https://routeegy.github.io/startFramework/assets/images/poert1.png"
                  alt=""
                />
                <div className="layer position-absolute top-0 bottom-0 start-0 end-0">
                  <i className="fa-solid fa-plus fa-4x"></i>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="frame rounded-3 overflow-hidden">
                <img
                  src="https://routeegy.github.io/startFramework/assets/images/port2.png"
                  alt=""
                />
                <div className="layer position-absolute top-0 bottom-0 start-0 end-0">
                  <i className="fa-solid fa-plus fa-4x"></i>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="frame rounded-3 overflow-hidden">
                <img
                  src="https://routeegy.github.io/startFramework/assets/images/port3.png"
                  alt=""
                />
                <div className="layer position-absolute top-0 bottom-0 start-0 end-0">
                  <i className="fa-solid fa-plus fa-4x"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
