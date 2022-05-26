import React from 'react' ;
import products from "../../../Containers/ProductsContainer/products";
import "../../../Containers/ProductsContainer/ProductsContainer.css";
import { Loader, ProductComponent } from "../../../Components/index";

const Vente = () => {
    const LaitiereProducts=products.filter(products=>products.categorie==='laitiére');
  return (
    <div>
         <div>
    <h2 className="souscat">Vente et exposition</h2>
    <div
      style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
    >
      
    {LaitiereProducts.filter(LaitiereProducts=>LaitiereProducts.souscatégorie==='Vente et exposition ').map((product)=>(
          // <Link to={`products/category/${post.categories}/${post.id}`}>
         
          <ProductComponent
            id={product.id}
          
            // img={post.image}
            img={product.image}
            name={product.produit}
         
          ></ProductComponent>
        ))}
     
      
    </div>
  </div>
    </div>
  )
}

export default Vente