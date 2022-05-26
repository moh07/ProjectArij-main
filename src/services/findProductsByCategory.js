const findProductsByCategory = (allProducts, categoryID) => {
  return allProducts.filter((v) => v.categoryId === categoryID);
}

export default findProductsByCategory;
