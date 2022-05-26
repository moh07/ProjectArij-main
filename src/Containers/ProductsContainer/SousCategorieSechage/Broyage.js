import React from 'react' ;
import products from "../../../Containers/ProductsContainer/products";
import "../../../Containers/ProductsContainer/ProductsContainer.css";
import  {ProductComponent}  from "../../../Components/index";

const Broyage = () => {
    const Sechageproducts=products.filter(products=>products.categorie==="Séchage et broyage");

  return (
    <div>
          <h2 className='souscat'>Broyage</h2>
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
       {Sechageproducts.filter(Sechageproducts=>Sechageproducts.souscatégorie==="Broyage").map((product)=>( 
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

export default Broyage