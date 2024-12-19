import axioscus from "./customizeAxios";

const dataProducts = () => {
  return axioscus.get(`/products`);
};

export { dataProducts };
