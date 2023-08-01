import sportAnalytic from "./images/sportsanalytics1.jpg";
import flightPhoto from "./images/flight.jpg";
import excelPhoto from "./images/excel.png";
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
            image: sportAnalytic,
            title: "Project title",
            description:
              "Mobile-optimised Tableau visualisation exploring malaria trends in Africa. Awarded “Viz of the Day” and has over 80,000 views to date.",
          }}
        />
        <Tile
          data={{
            image: sportAnalytic,
            title: "Project title",
            description:
              "Mobile-optimised Tableau visualisation exploring malaria trends in Africa. Awarded “Viz of the Day” and has over 80,000 views to date.",
          }}
        />
        <Tile
          data={{
            image: sportAnalytic,
            title: "Project title",
            description:
              "Mobile-optimised Tableau visualisation exploring malaria trends in Africa. Awarded “Viz of the Day” and has over 80,000 views to date.",
          }}
        />
        <Tile
          data={{
            image: sportAnalytic,
            title: "Project title",
            description:
              "Mobile-optimised Tableau visualisation exploring malaria trends in Africa. Awarded “Viz of the Day” and has over 80,000 views to date.",
          }}
        />
      </div>
    </div>
  );
};

export default Portfolio;
