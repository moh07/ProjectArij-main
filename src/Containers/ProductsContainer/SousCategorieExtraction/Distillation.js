import React from 'react';
import products from "../../../Containers/ProductsContainer/products";
import "../../../Containers/ProductsContainer/ProductsContainer.css";
import  {ProductComponent}  from "../../../Components/index";

const Distillation = () => {
    const ExtractionProducts=products.filter(products=>products.categorie==='Extraction des huiles essentielles et végétales');
  return (
    <div>
         <h2 className="souscat">Distillation</h2>
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        
      {ExtractionProducts.filter(ExtractionProducts=>ExtractionProducts.souscatégorie==="Distillation ").map((product)=>(
            // <Link to={`products/category/${post.categories}/${post.id}`}>
           
            <ProductComponent key={product}
              id={product.id}
            
              // img={post.image}
              img={product.image}
              name={product.produit}
              
           
            > console.log(name)</ProductComponent>
            
          ))}
          
       
        
      </div>
    </div>
  )
}

export default Distillation