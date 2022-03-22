import React, { useEffect, useState } from "react";
import { comicInterface } from "../interfaces/Comic";

import { getListComics } from "../helpers/Fetch";
import { Grid } from "./Grid/Grid";
import { List } from "./List/List";
import { Header } from "../shared/Header/Header";

export const Main = () => {
  const [Comics, setComics] = useState<comicInterface>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [view, setView] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    getListComics().then((response) => {
      const { data } = response;
      setComics(data);
      setIsLoading(false);
    });
  }, []);

  const handleChangeView = (e: boolean) => {
    setView(e);
  };

  return (
    <div className="container">
      <Header handleClick={handleChangeView} view={view} />
      {isLoading && <p>Loading ...</p>}
      {view && Comics?.results && <Grid {...Comics} />}
      {!view && Comics?.results && <List {...Comics} />}
    </div>
  );
};
