import React from "react";

interface Props {
  name: string;
  credits: Array<any>;
}

export const ItemDetail = ({ name, credits }: Props) => {
  return (
    <div className="item-detail">
      <h2 className="title">{name}</h2>
      <div className="detail">
        {credits.map((credit: any) => (
          <label key={credit.id} className="name">{credit.name}</label>
        ))}
      </div>
    </div>
  );
};
