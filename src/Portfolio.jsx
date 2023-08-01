import sportAnalytic from "./images/sportsanalytics1.jpg";
import flightPhoto from "./images/flight.jpg";
import excelPhoto from "./images/excel.png";
import salesPhoto from "./images/sales.png";
import logicticPhoto from "./images/logistic.png";
import adidasPhoto from "./images/adidas.png";
import amtrakPhoto from "./images/amtrak.png";
import "./Portfolio.scss";
import Tile from "./Tile";

const Portfolio = () => {
  return (
    <div className="my-portfolio">
      <h1 className="title">Portfolio</h1>
      <div className="my-portfolio-container">
        <Tile
          data={{
            image: flightPhoto,
            title: "Flight Delay Prediction",
            url: "https://github.com/heidihongtran/FlightDelayPrediction",
          }}
        />
        <Tile
          data={{
            image: excelPhoto,
            title: "Highlighting with VBA",
            url: "https://medium.com/@thuhong126/having-heard-about-vbas-efficiency-in-automating-tasks-for-a-while-i-decided-to-explore-its-c0c6a6332163",
          }}
        />
        <Tile
          data={{
            image: salesPhoto,
            title: "Walmart sales - Time series analysis",
            url: "https://github.com/heidihongtran/WalmartSales_TimeSeriesAnalysis",
          }}
        />
        <Tile
          data={{
            image: logicticPhoto,
            title: "Optimizing e-commerce logistics",
            url: "https://github.com/heidihongtran/OptimizingE-commerceLogistics",
          }}
        />
        <Tile
          data={{
            image: adidasPhoto,
            title: "Adidas - Statistical Analysis and Visualization",
            url: "https://github.com/heidihongtran/AdidasFashionRetailProducts",
          }}
        />
        <Tile
          data={{
            image: amtrakPhoto,
            title: "Amtrak Train Ridership Forecast",
            url: "https://github.com/heidihongtran/Ridership_Amtrak-Trains",
          }}
        />
      </div>
    </div>
  );
};

export default Portfolio;
