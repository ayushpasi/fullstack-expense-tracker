import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Slider() {
  const [SliderContent, setSliderContent] = useState();

  useEffect(() => {
    setTimeout(() => {
      if (
        localStorage.getItem("token") !== undefined &&
        localStorage.getItem("role") === "admin"
      ) {
        setSliderContent(<></>);
      } else if (
        localStorage.getItem("token") !== undefined &&
        localStorage.getItem("role") === "user"
      ) {
        setSliderContent(<></>);
      } else {
        setSliderContent(
          <>
            <section id="hero" className="d-flex align-items-center">
              <div
                className="container"
                data-aos="zoom-out"
                data-aos-delay="100"
              >
                <h1>
                  Welcome to <span>SmartSpend</span>
                </h1>
                <h2>We Provide Solution On Your Projects Handelling</h2>
                <div className="d-flex">
                  <Link to="/about" className="btn-get-started scrollto">
                    Get Started
                  </Link>
                  <a
                    href="https://www.youtube.com/watch?v=jDDaplaOz7Q"
                    className="glightbox btn-watch-video"
                  >
                    <i className="bi bi-play-circle"></i>
                    {/* <span>Watch Video</span> */}
                  </a>
                </div>
              </div>
            </section>
          </>
        );
      }
    }, 10);
  });

  return <>{SliderContent}</>;
}

export default Slider;
