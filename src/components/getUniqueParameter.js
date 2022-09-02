const getUniqueParameter = (items, param) => {
  return [...new Set(items.map((item) => item[param]))];
};

export default getUniqueParameter;
