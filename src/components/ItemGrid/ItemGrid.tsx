import React from "react";
import moment from "moment";
import { itemComicInterface } from "../../interfaces/ItemComic";

export const ItemGrid = ({
  image,
  date_added,
  volume,
  api_detail_url,
  handleClick,
}: itemComicInterface) => {
  return (
    <div className="item-grid" onClick={() => handleClick(api_detail_url)}>
      <img src={image.thumb_url} alt={volume.name} className="image" />
      <p className="title">{volume.name}</p>
      <span className="date">{moment(date_added).format("LL")}</span>
    </div>
  );
};
