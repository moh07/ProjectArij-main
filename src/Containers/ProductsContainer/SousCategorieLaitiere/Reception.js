import React from 'react' ;
import products from "../../../Containers/ProductsContainer/products";
import "../../../Containers/ProductsContainer/ProductsContainer.css";
import {  ProductComponent } from "../../../Components/index";

const Reception = () => {
    const LaitiereProducts=products.filter(products=>products.categorie==="laitiére");
  return (
    <div >
         <div>
     <h2 className="souscat">reception et traitement de lait</h2>
     <div
      
     >
       
     {LaitiereProducts.filter(LaitiereProducts=>LaitiereProducts.souscatégorie==="reception et traitement de lait").map((product)=>(
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

export default Reception