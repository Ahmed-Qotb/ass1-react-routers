import React from "react";

export default function Home() {
  return (
    <>
      <section id="home">
        <div className="container-fluid pt-5">
          <div className="parent vh-98 d-flex justify-content-center align-items-center flex-column text-white">
            <div className="frame w-25 mb-3">
              <img
                src="https://routeegy.github.io/startFramework/assets/images/avataaars.svg"
                alt=""
              />
            </div>

            {/* home title */}
            <h2 className="fw-bolder fa-3x fw-bold text-white">START FRAMEWORK</h2>

            {/* home title star icon */}
            <div className="d-flex align-items-center my-3">
              <div className="line me-3"></div>
              <div>
                <i className="fa-solid fa-star"></i>
              </div>
              <div className="line ms-3"></div>
            </div>

            {/* home words */}
            <div>
              <p>Graphic Artist - Web Designer - Illustrator</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
