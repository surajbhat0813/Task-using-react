import React from "react";
import Chart from "chart.js/auto";

const CarouselWithCharts = () => {
  const chart1Ref = React.useRef(null);
  const chart2Ref = React.useRef(null);

  React.useEffect(() => {
    const ctx1 = chart1Ref.current.getContext("2d");
    const chart1 = new Chart(ctx1, {
      type: "line",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
          },
        ],
      },
    });

    const ctx2 = chart2Ref.current.getContext("2d");
    const chart2 = new Chart(ctx2, {
      type: "doughnut",
      data: {
        labels: ["Red", "Blue", "Yellow"],
        datasets: [
          {
            label: "My First Dataset",
            data: [300, 50, 100],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
            ],
            hoverOffset: 4,
          },
        ],
      },
    });

    return () => {
      chart1.destroy();
      chart2.destroy();
    };
  }, []);

  return (
    <div className="row">
      <div className="col-md-6">
        <canvas
          ref={chart1Ref}
          className="d-block w-100"
          style={{ height: "400px" }}
        ></canvas>
      </div>
      <div className="col-md-6">
        <canvas
          ref={chart2Ref}
          className="d-block w-100"
          style={{ height: "400px" }}
        ></canvas>
      </div>
    </div>
    // <div id="carouselExampleIndicators" className="carousel slide custom-carousel" data-bs-ride="carousel">
    //   <ol className="carousel-indicators">
    //     <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
    //     <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
    //   </ol>
    //   <div className="carousel-inner">
    //     <div className="carousel-item active">
    //       <canvas ref={chart1Ref} className="d-block w-100" style={{ height: '400px' }}></canvas>
    //     </div>
    //     <div className="carousel-item">
    //       <canvas ref={chart2Ref} className="d-block w-100" style={{ height: '400px' }}></canvas>
    //     </div>
    //   </div>
    //   <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
    //     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    //     <span className="visually-hidden">Previous</span>
    //   </a>
    //   <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
    //     <span className="carousel-control-next-icon" aria-hidden="true"></span>
    //     <span className="visually-hidden">Next</span>
    //   </a>
    // </div>
  );
};

export default CarouselWithCharts;
