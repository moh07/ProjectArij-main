import React from 'react';
import products from "../../../Containers/ProductsContainer/products";
import "../../../Containers/ProductsContainer/ProductsContainer.css";
import  {ProductComponent}  from "../../../Components/index";

const Conditionnement = () => {
    const Emballageproducts=products.filter(products=>products.categorie==="Emballage et Conditionnement ");
  return (
    <div>
         <h2 className='souscat'>Conditionnement</h2>
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
       {Emballageproducts.filter(Emballageproducts=>Emballageproducts.souscatégorie==='Conditionnement ').map((product)=>( 
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
  )
}

export default Conditionnement