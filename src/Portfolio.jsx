import sportAnalytic from "./images/sportsanalytics1.jpg";
import "./Portfolio.scss";
import Tile from "./Tile";

const Portfolio = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  const onTileClick = () => {
    openInNewTab("https://plainenglish.io/blog/react-open-link-in-new-tab");
  };
  return (
    <div className="my-portfolio">
      <h1 className="title">Portfolio</h1>
      <div className="my-portfolio-container">
        <Tile
          data={{
            image: sportAnalytic,
            title: "Project title",
            description:
              "Mobile-optimised Tableau visualisation exploring malaria trends in Africa. Awarded “Viz of the Day” and has over 80,000 views to date.",
          }}
          onClick={onTileClick}
        />
        <Tile
          data={{
            image: sportAnalytic,
            title: "Project title",
            description:
              "Mobile-optimised Tableau visualisation exploring malaria trends in Africa. Awarded “Viz of the Day” and has over 80,000 views to date.",
          }}
          onClick={onTileClick}
        />
        <Tile
          data={{
            image: sportAnalytic,
            title: "Project title",
            description:
              "Mobile-optimised Tableau visualisation exploring malaria trends in Africa. Awarded “Viz of the Day” and has over 80,000 views to date.",
          }}
          onClick={onTileClick}
        />
        <Tile
          data={{
            image: sportAnalytic,
            title: "Project title",
            description:
              "Mobile-optimised Tableau visualisation exploring malaria trends in Africa. Awarded “Viz of the Day” and has over 80,000 views to date.",
          }}
          onClick={onTileClick}
        />
        <Tile
          data={{
            image: sportAnalytic,
            title: "Project title",
            description:
              "Mobile-optimised Tableau visualisation exploring malaria trends in Africa. Awarded “Viz of the Day” and has over 80,000 views to date.",
          }}
          onClick={onTileClick}
        />
        <Tile
          data={{
            image: sportAnalytic,
            title: "Project title",
            description:
              "Mobile-optimised Tableau visualisation exploring malaria trends in Africa. Awarded “Viz of the Day” and has over 80,000 views to date.",
          }}
          onClick={onTileClick}
        />
      </div>
    </div>
  );
};

export default Portfolio;
