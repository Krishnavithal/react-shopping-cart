import {
  FETCH_PRODUCTS,
  FILTER_PRODUCTS_BY_SIZE,
  ORDER_PRODUCTS_BY_PRICE,
} from "../types";

export const fetchProducts = () => async (dispatch) => {
  const res = await fetch("/api/products");
  const data = await res.json();
  console.log("API call......");
  console.log(data);
  dispatch({
    type: FETCH_PRODUCTS,
    payload: data,
  });
};

export const filterProducts = (products, size) => (dispatch) => {
  console.log("filtering....  ", size);
  dispatch({
    type: FILTER_PRODUCTS_BY_SIZE,
    payload: {
      size: size,
      items:
        size === ""
          ? products
          : products.filter((x) => x.availableSizes.indexOf(size) >= 0),
    },
  });
};

export const sortProducts = (filteredProducts, sort) => (dispatch) => {
  const sortedProducts = filteredProducts.slice();
  //console.log("sorting.....  ",so)
  if (sort === "") {
    sortedProducts.sort((a, b) => (a._id > b._id ? 1 : -1));
  } else {
    sortedProducts.sort((a, b) =>
      sort === "lowest"
        ? a.price > b.price
          ? 1
          : -1
        : a.price > b.price
        ? -1
        : 1
    );
  }
  dispatch({
    type: ORDER_PRODUCTS_BY_PRICE,
    payload: {
      sort: sort,
      items: sortedProducts,
    },
  });
};
