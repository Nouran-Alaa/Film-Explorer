import React from "react";

const RestOfHome = () => {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-5 mt-4 mb-5 pb-5 bg-dark">
        <div className="col text-center">
          <img
            className="rounded-circle hover-card"
            src="src\assets\Img1.png"
            alt="User 1"
            style={{
              width: "180px",
              height: "180px",
              objectFit: "cover",
              borderRadius: "50%",
            }}
            appCustom
          />
          <h2>Heading</h2>
          <p>
            Short description about the content goes here for the first column.
          </p>
          <p>
            <a className="btn btn-info" href="#" role="button">
              View details »
            </a>
          </p>
        </div>
        <div className="col text-center">
          <img
            className="rounded-circle hover-card"
            src="src\assets\Img2.png"
            alt="User 2"
            style={{
              width: "180px",
              height: "180px",
              objectFit: "cover",
              borderRadius: "50%",
            }}
            appCustom
          />
          <h2>Heading</h2>
          <p>
            Short description about the content goes here for the second column.
          </p>
          <p>
            <a className="btn btn-info" href="#" role="button">
              View details »
            </a>
          </p>
        </div>
        <div className="col text-center">
          <img
            className="rounded-circle hover-card"
            src="src\assets\Img3.png"
            alt="User 3"
            style={{
              width: "180px",
              height: "180px",
              objectFit: "cover",
              borderRadius: "50%",
            }}
            appCustom
          />
          <h2>Heading</h2>
          <p>
            Short description about the content goes here for the third column.
          </p>
          <p>
            <a className="btn btn-info" href="#" role="button">
              View details »
            </a>
          </p>
        </div>
      </div>

      <div className="py-5">
        <div className="row featurette mt-5 p-lg-5 mx-lg-5 mb-5 mb-lg-0">
          <div className="col-md-7 justify-content-center item-center d-flex flex-column">
            <h2 className="featurette-heading">
              First featurette heading.
              <span className="red-txt">It'll blow your mind.</span>
            </h2>
            <p className="lead">
              Description of the first featurette goes here. Make it
              interesting!
            </p>
          </div>
          <div className="col-md-5">
            <img
              className="featurette-image img-fluid mx-auto"
              src="https://t4.ftcdn.net/jpg/00/53/83/27/360_F_53832739_EfHbwSDR07jqt1ODlyDq1DdILlqUhY9l.jpg"
              alt="featurette 1"
            />
          </div>
        </div>

        <div className="row featurette p-lg-5 mx-lg-5 mb-5 mb-lg-0">
          <div className="col-md-7 order-md-2 justify-content-center item-center d-flex flex-column">
            <h2 className="featurette-heading">
              Oh yeah, it's that good.
              <span className="red-txt">See for yourself.</span>
            </h2>
            <p className="lead">
              Description of the second featurette goes here. Keep it simple and
              clean.
            </p>
          </div>
          <div className="col-md-5 order-md-1">
            <img
              className="featurette-image img-fluid mx-auto"
              src="https://img.freepik.com/premium-photo/brunette-woman-with-3d-glasses-popcorn_1258-7463.jpg"
              alt="featurette 2"
            />
          </div>
        </div>

        <div className="row featurette p-lg-5 mx-lg-5 mb-5 mb-lg-0">
          <div className="col-md-7 justify-content-center item-center d-flex flex-column">
            <h2 className="featurette-heading">
              And lastly, this one. <span className="red-txt">Checkmate.</span>
            </h2>
            <p className="lead">
              Description of the third featurette goes here. Final strong
              impression.
            </p>
          </div>
          <div className="col-md-5">
            <img
              className="featurette-image img-fluid mx-auto"
              src="https://media.istockphoto.com/id/1522047019/photo/close-up-of-eating-popcorn-in-cinema.jpg?s=612x612&w=0&k=20&c=DazQtfbJ96sw6oQxLwXnk9GVKbr0VhbBgz--ojpIBgA="
              alt="featurette 3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestOfHome;
