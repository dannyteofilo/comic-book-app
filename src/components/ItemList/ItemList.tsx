import React from "react";
import moment from "moment";
import { itemComicInterface } from "../../interfaces/ItemComic";

export const ItemList = ({
  image,
  date_added,
  volume,
  api_detail_url,
  handleClick,
}: itemComicInterface) => {
  return (
    <div className="item-list" onClick={() => handleClick(api_detail_url)}>
      <img src={image.small_url} alt={volume.name} />
      <div className="detail">
        <p className="title">{volume.name}</p>
        <span className="date">{moment(date_added).format("LL")}</span>
      </div>
    </div>
  );
};
