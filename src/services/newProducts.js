import findProductsByCategory from "./findProductsByCategory";

const newProducts = (categories, products) => {
  let newProduct = [];
  for (const category of categories) {
    newProduct.push(findProductsByCategory(products, category.id)[0]);
  }
  console.log(newProduct);
  return newProduct;
};
export default newProducts;
