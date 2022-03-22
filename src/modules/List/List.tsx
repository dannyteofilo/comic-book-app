import React, { useEffect, useState } from "react";
import { ItemList } from "../../components/ItemList/ItemList";
import { getComicDetail } from "../../helpers/Fetch";
import { comicInterface } from "../../interfaces/Comic";
import { itemComicInterface } from "../../interfaces/ItemComic";
import { Detail } from "../Detail/Detail";

export const List = ({ results }: comicInterface) => {
  const [Comic, setComic] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>({});

  const onSelect = (e: string) => {
    setComic(e);
  };

  useEffect(() => {
    setIsLoading(true);
    getComicDetail(Comic).then((response) => {
      const { data } = response;
      setData(data.results);
      setIsLoading(false);
    });
  }, [Comic]);

  const handleBack = () => {
    setComic(null);
  };
  return (
    <div className="list">
      {Comic && (
        <div>
          <span onClick={handleBack} className="back">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z" />
            </svg>
            Back
          </span>
          {isLoading && <p>Loading ...</p>}
          {!isLoading && <Detail results={data} />}
        </div>
      )}
      {!Comic &&
        results.map((item: itemComicInterface) => (
          <div className="item" key={item.id}>
            <ItemList {...item} handleClick={onSelect} />
          </div>
        ))}
    </div>
  );
};
