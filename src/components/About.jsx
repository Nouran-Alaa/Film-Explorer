import React from "react";

const About = () => {
  return (
    <>
      <section className="testimonial">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-lg-block">
              <div className="d-flex">
                <div className="col-lg-6">
                  <figure>
                    <img
                      src="https://4kwallpapers.com/images/wallpapers/spider-man-marvel-superheroes-red-background-marvel-comics-1280x1280-7494.jpg"
                      className="img-fluid mt-4 hover-card"
                      alt=""
                      style={{
                        height: "300px",
                        objectFit: "cover",
                        borderRadius: "50%",
                      }}
                    />
                  </figure>
                </div>
                <div className="col-lg-6 gap-5">
                  <figure>
                    <img
                      src="https://4kwallpapers.com/images/wallpapers/iron-man-minimal-art-polygonal-marvel-superheroes-dark-1280x1280-3482.jpg"
                      className="img-fluid mb-3 hover-card"
                      alt=""
                      style={{
                        height: "200px",
                        objectFit: "cover",
                        borderRadius: "50%",
                      }}
                    />
                  </figure>
                  <figure>
                    <img
                      src="https://static.toiimg.com/thumb/msid-66071613,width-400,resizemode-4/66071613.jpg"
                      className="img-fluid m-3 hover-card"
                      alt=""
                      style={{
                        width: "250px",
                        height: "250px",
                        objectFit: "cover",
                        borderRadius: "50%",
                      }}
                    />
                  </figure>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h1 className="display-4 text-center mb-4 pt-4 red-txt fw-medium">
                Your Ultimate Movie Experience
              </h1>
              <p className="lead text-center">
                Welcome to our movie platform, where you can explore a wide
                variety of movies from all genres, get the latest movie
                releases, watch trailers, and much more. Whether you're a fan of
                action, drama, comedy, or horror, we have something for
                everyone.
              </p>
              <p className="text-center">
                Join us in discovering new favorites, watching timeless
                classics, and experiencing cinematic masterpieces from all
                around the world.
              </p>
              <div className="text-center mt-4">
                <button className="btn btn-outline-info btn-lg">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
