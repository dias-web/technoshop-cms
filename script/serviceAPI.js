import { API_URI } from "./const.js";

export const getGoods = async (id) => {
  const response = await fetch(
    `${API_URI}api/goods/${id ? id : "?nopage=true"}`
  );
  if (response.ok) {
    return response.json();
  }

  throw new Error(response.status);
};

export const postGoods = (data) =>
  fetch(`${API_URI}api/goods`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());

export const getCategory = async () => {
  const response = await fetch(`${API_URI}api/category`);
  if (response.ok) {
    return response.json();
  }

  throw new Error(response.status);
};
