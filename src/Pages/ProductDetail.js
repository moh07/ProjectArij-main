import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  CardContainer,
  Footer,
  ProductDetailContainer,
  ProductDescriptionContainer,
} from "../Containers/index";
import findProductsByCategory from "../services/findProductsByCategory";
import * as actions from "../store/action/index";
import { Loader } from "../Components";
import instance from "../axios";
import products from "../Containers/ProductsContainer/products";

const ProductDetail = () => {
  const products = useSelector(state => state.rootReducer.products);
  const categories = useSelector(state => state.category.categorys);
  const [category, setCategory] = useState('');
  const dispatch = useDispatch(); 
 //const { id } = useParams();
  const [product, setProduct] = useState(null);
  var id=parseInt(window.location.pathname.split('/').pop());
  
  
  /*useEffect(() => {
    dispatch(actions.getProducts());
    instance
      .get(`product/${id}`)
      .then(res => { 
        setProduct(res.data);
        console.log("MAFI ", res);

      })
      .catch(error => console.log(error));
  }, []);*/

  /*useEffect(() => {
    console.log("categoryyy ", categories)
    if (categories.length > 0 && product)
      setCategory(categories.find(v => v.id === product.categoryId).title)
  }, [categories, product])*/
  return (
    <>
     <h1>{id}</h1>
        <div>
        {products.filter(products => products.id===id).map((product)=>( 
       
       
       
          <ProductDetailContainer 
             
          img={product.imagePrincipale}
          img1={product.image1}
          img2={product.image2}          
          name={product.produit}
          id={product.id}
          description={product.description}
         />
         
        ))}
      
      
        
          <Footer marginTop={75}></Footer>
         
       
        </div>
       
      
    </>
     
  );
 
  
};


export default ProductDetail;
