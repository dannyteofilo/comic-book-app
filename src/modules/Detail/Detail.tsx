import React from "react";
import { ItemDetail } from "../../components/ItemDetail/ItemDetail";

interface Props{
    results:any
}
export const Detail = ({results}:Props) => {
  return (
    <div className="detail-comic">
      <div className="info">         
      <ItemDetail credits={results.character_credits} name="Characters"/>
      <ItemDetail credits={results.character_died_in} name="Credits"/>
      <ItemDetail credits={results.concept_credits} name="Concepts"/>
      <ItemDetail credits={results.location_credits} name="Locations"/>
      </div>
      <div className="image">
        <img
          src={results.image.small_url}
          alt=""
        />
      </div>
    </div>
  );
};
