export const getListComics = async () => {
  const url: any = `${process.env.REACT_APP_API_URL}/list`;
  const resp: any = await fetch(url);
  return await resp.json();
};

export const getComicDetail = async (api_detail: StringConstructor) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ api: api_detail }),
  };
  const url: any = `${process.env.REACT_APP_API_URL}/detail`;
  const resp: any = await fetch(url, requestOptions);
  return await resp.json();
};
