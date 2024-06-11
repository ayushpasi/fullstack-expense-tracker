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
              Welcome To <span className="text-primary">PMS</span>
            </h1>
            <h4 className="text-primary mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia id
              fugit a voluptatem debitis accusantium aliquid dicta sit ut
              deserunt?
            </h4>
            <p className="mb-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Mollitia, modi labore sed vitae sint tenetur corporis
              reprehenderit enim animi fuga voluptate nemo quis aperiam atque a
              sit ducimus, neque temporibus molestiae veniam autem voluptatum
              saepe velit quasi? Placeat soluta animi optio tenetur earum porro,
              facilis impedit odit qui vero aut, provident accusantium autem
              voluptate eum doloribus quis cupiditate itaque ipsa? Perferendis
              reprehenderit asperiores voluptatibus ratione, deserunt hic, quod
              saepe, dicta aliquid eos suscipit adipisci ut iure a repudiandae
              laudantium dolores. Odio excepturi dolores cupiditate, eaque quis
              repudiandae inventore, expedita mollitia itaque, consequatur
              provident. Nesciunt optio, ad quidem eveniet dicta consequuntur.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
