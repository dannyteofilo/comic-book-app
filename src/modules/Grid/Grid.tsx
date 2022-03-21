import React from "react";
import { ItemGrid } from "../../components/ItemGrid/ItemGrid";
import { comicInterface } from "../../interfaces/Comic";
import { itemComicInterface } from "../../interfaces/ItemComic";

export const Grid = ({ results }: comicInterface) => {
  return (
    <div className="grid">
      {results.map((item: itemComicInterface) => (
        <div className="item" key={item.id}>
          <ItemGrid {...item} />
        </div>
      ))}
    </div>
  );
};
