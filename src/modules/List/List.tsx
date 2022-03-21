import React from "react";
import { ItemList } from "../../components/ItemList/ItemList";
import { comicInterface } from "../../interfaces/Comic";
import { itemComicInterface } from "../../interfaces/ItemComic";

export const List = ({ results }: comicInterface) => {
  return (
    <div className="list">
      {results.map((item: itemComicInterface) => (
        <div className="item" key={item.id}>
          <ItemList {...item} />
        </div>
      ))}
    </div>
  );
};
