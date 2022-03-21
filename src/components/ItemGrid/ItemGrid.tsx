import React from "react";
import moment from "moment";
import { itemComicInterface } from "../../interfaces/ItemComic";

export const ItemGrid = ({ image, date_added, volume }: itemComicInterface) => {
  return (
    <div className="item-grid">
      <img src={image.thumb_url} alt={volume.name} className="image" />
      <p className="title">{volume.name}</p>
      <span className="date">{moment(date_added).format("LL")}</span>
    </div>
  );
};
