import React from "react";

export default function Footer() {
  return (
    <>
      <section id="footer" className="pt-4">
        <div className="container py-5">
          <div className="row text-white">
            <div className="col-md-4">
              <div className="text-center">
                <p className="h3">LOCATION</p>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center">
                <p className="h3">AROUND THE WEB</p>
                {/* icons */}
                <div>
                  <ul className="list-unstyled d-flex justify-content-center">
                    <li className="socials ms-3"><i className="fa-brands fa-facebook"></i></li>
                    <li className="socials ms-3"><i className="fa-brands fa-twitter"></i></li>
                    <li className="socials ms-3"><i className="fa-brands fa-linkedin-in"></i></li>
                    <li className="socials ms-3"><i className="fa-solid fa-globe"></i></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center">
                <p className="h3">ABOUT FREELANCER</p>
                <p>Freelance is a free to use, licensed Bootstrap</p>
                <p>theme created by Route</p>
              </div>
            </div>
          </div>
        </div>

        {/* copy right div */}
        <div className="copyRight py-3 text-white text-center">
          <p>Copyright © Your Website 2021</p>
        </div>
      </section>
    </>
  );
}
