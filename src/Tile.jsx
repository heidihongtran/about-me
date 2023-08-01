import { LazyLoadImage } from "react-lazy-load-image-component";

const Tile = ({ data }) => {
  const { image, title, description, url } = data;

  const onClick = () => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div className="tile" onClick={onClick}>
      <div className="container">
        <LazyLoadImage src={image} width={576} height={300} alt="Image Alt" />
        <div className="overlay">
          <div className="overlay-content">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tile;
