import React, { useEffect, useRef } from "react";

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    if (aboutRef.current) {
      aboutRef.current.focus();
    }
  }, []);

  return (
    <section
      id="about"
      className="about section-bg"
      ref={aboutRef}
      tabIndex="-1" // Ensures the section can be focused
    >
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-12 py-6 px-5">
            <h1 className="display-5 mb-4">
              Welcome To <span className="text-primary">SmartSpend</span>
            </h1>
            <h4 className="text-primary mb-4">
              Welcome to SmartSpend, your premier online platform for effortless
              expense management. Designed to streamline your financial tracking
              experience, SmartSpend offers powerful features such as expense
              management, leaderboard reports, and detailed financial analytics.
            </h4>

            <div className="mb-4">
              <h5 className="text-primary">Key Features:</h5>
              <ul>
                <li>
                  <strong>Expense Management:</strong> Seamlessly record and
                  categorize your expenses from any device with internet access.
                  Track expenditures in real-time and maintain an organized
                  financial record.
                </li>
                <li>
                  <strong>Leaderboard Reports:</strong> Engage in friendly
                  competition or collaboration with others through leaderboard
                  reports. Compare spending habits and foster accountability
                  within your community.
                </li>
                <li>
                  <strong>Detailed Financial Analytics:</strong> Gain valuable
                  insights into your spending patterns with comprehensive
                  analytics and visual representations. Make informed decisions
                  to optimize your financial well-being.
                </li>
              </ul>
            </div>
            <p className="mb-4">
              <strong>Why Choose SmartSpend?</strong> SmartSpend sets itself
              apart with a user-centric interface and robust functionalities
              tailored for effective financial management. Whether you're an
              individual striving for financial clarity or managing expenses
              within a team, our web app provides the tools necessary for
              success.
            </p>
            <p className="mb-4">
              <strong>Our Mission:</strong> At SmartSpend, we are dedicated to
              empowering users by simplifying financial management. Our goal is
              to enhance your financial awareness and facilitate smarter
              spending decisions through intuitive and accessible tools.
            </p>
            <p className="mb-4">
              <strong>Get Started Today:</strong> Access SmartSpend from any web
              browser and start taking control of your finances. Join a
              community of users who trust SmartSpend for its reliability and
              efficiency in managing expenses online.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
