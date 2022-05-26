
  import { ProductsContainer , CategoryCarosel, Navbar} from "..";

  import React, { useState, useEffect } from "react";

  import "react-multi-carousel/lib/styles.css";
 import { Footer } from "..";
  import { Link } from "react-router-dom";
 import products from "../ProductsContainer/products";
 



function categoryLaiterie() {
 
  return (
<div>
<div>
        <CategoryCarosel />

        {/* ----------------------- */}
      </div>
      <br/>
      <div>
        <h1>Literie</h1>
      </div>
      <ProductsContainer products={products} />
      
      <Footer />

    </div>
    
  );
};
export default categoryLaiterie;