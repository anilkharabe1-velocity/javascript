import { IMG_PATH } from "../constants/constants";

const RestaurantCard = (props) => {
  const { name, avgRating, sla, cuisines, areaName, cloudinaryImageId } =
    props?.resData?.info;

  return (
    <div className="res-card" style={{ backgroundColor: "#DEDEDE" }}>
      <img
        className="res-logo"
        src={ IMG_PATH + cloudinaryImageId }
      ></img>
      <h3>{name}</h3>
      <h4>{avgRating}</h4>
      <h4>{sla?.slaString}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{areaName}</h4>
    </div>
  );
};

export default RestaurantCard;