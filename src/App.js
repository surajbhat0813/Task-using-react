import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import IntroComp from "./IntroComp";
import "./App.css";
import CarouselWithCharts from "./CarouselWithCharts";
const App = () => {
  return (
    <>
      <div>
        <div
          className="row"
          style={{ position: "sticky", top: "0", zIndex: "99" }}
        >
          <Navbar />
        </div>
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <IntroComp />
            <CarouselWithCharts />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
