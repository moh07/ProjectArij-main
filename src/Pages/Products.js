import {
  Navbar,
  ProductsContainer,
  CategoriesContainer,
  CategoryCarosel,
} from "../Containers/index";
import loop from "../Assets/Images/loop.svg";
import React, { useState, useEffect } from "react";
import { ProductComponent } from "../Components/index";
import "react-multi-carousel/lib/styles.css";
import { Footer } from "../Containers/index";
import { Link } from "react-router-dom";
import instance from "../axios";
import products from "../Containers/ProductsContainer/products";
import { useSelector } from "react-redux";


const Products = () => {
  const [products, setProducts] = useState([]);
  const getProduct = () => {
    instance.get("/products").then((resp) => {
        setProducts(resp.data);
    }).catch((e) => {
    });
};

  const Laitiere=products.filter(products=>products.categorie==='laitiére');
const showElementLaitiere=Laitiere.slice(0,6);
const Extraction =products.filter(products=>products.categorie==='Extraction des huiles essentielles et végétales');
const showElementExtraction =Extraction.slice(0,6);
const Séchage =products.filter(products=>products.categorie==='Séchage et broyage');
  const showElementSechage=Séchage.slice(0,6);
  const Emballage=products.filter(products=>products.categorie==='Emballage et Conditionnement ');
  const showElementEmballage=Emballage.slice(0,6);

 
  const [item, setItem] = useState("");
  const fav = useSelector((state) => state.rootReducer.fav);
  const [filteredResults, setFilteredResults] = useState([]);
  const searchItems = (searchValue) => {
    setItem(searchValue)
    if (item !== '') {
   const filteredData=products.filter((searchInput)=>{
    
      return Object.values(searchInput).join('').toLowerCase().includes(item.toLowerCase())
  })
  setFilteredResults(filteredData) 
  console.log(filteredData)
}
  else {
    setFilteredResults(products)
  }
  
}


  useEffect(() => {
    getProduct();
    console.log("item from all products");
  }, [item]);
  const m='More >>';


  return (
    <div className='bodyproducts'>
      
      <div className='rs'>
        {/* <div className="cattt">
          <Category />
          <h1>ijijioikop</h1>
        </div> */}
        <div className='resarch-bar '> 
          <form>
            <div className='input-group'>
              {" "}
              <input
                type='text'
                className='form-control resarch-input '
                placeholder='Search Here ...'
            /* value={item}
                onChange={e => setItem(e.target.value)}*/
                onChange={(e) => searchItems(e.target.value)}
              />
              <div className='input-group-append'>
                <button  type='submit' className='btn resarch-btn'>
                  <img src={loop} className='search-icon' />{" "}
                </button>
              </div>
            </div>
          </form>
        </div>
       

       

        
        <CategoryCarosel />

       
      </div>
      {item.length > 1 ? (
           <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        
     { filteredResults.map((product) => {
    return (
      <ProductComponent
      isfav={fav.find((v) => v.id === product.id)}
      product={product}
    ></ProductComponent>
    )
})} </div>) :(
  <div>
      <div>
        <h1>Laitiére  <Link to="/Laitiere">
        <button className="b"> {m}</button>
        </Link></h1>
        
       
        <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
       {showElementLaitiere.map((product)=>( 
            // <Link to={`products/category/${post.categories}/${post.id}`}>
           
            <ProductComponent            
              isfav={fav.find((v) => v.id === product.id)}
              product={product}
           
            ></ProductComponent>
          ))}
       
        
      </div>
      </div>

     
      <div>
        <h1>Extraction des huiles essentielles et végétales  <Link to="/Extraction des huiles essentielles et végétales">
        <button className="b"> {m}</button>
        </Link></h1>
        
       
        <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
       {showElementExtraction.map((product)=>( 
            // <Link to={`products/category/${post.categories}/${post.id}`}>
           
            <ProductComponent            
              isfav={fav.find((v) => v.id === product.id)}
              product={product}

           
            ></ProductComponent>
          ))}
       
        
      </div>
      </div>
      
      <div>
        <h1>Séchage et broyage <Link to="/Séchage et broyage">
        <button className="b"> {m}</button>
        </Link></h1>
  
        
        <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
       {showElementSechage.map((product)=>( 
            // <Link to={`products/category/${post.categories}/${post.id}`}>
           
            <ProductComponent
              isfav={fav.find((v) => v.id === product.id)}
              product={product}
            ></ProductComponent>
          ))}
       
        
      </div>
      </div>
      <div>
        <h1>Emballage et conditionnement<Link to="/Emballage et Conditionnement">
        <button className="b"> {m}</button>
        </Link></h1>
  
        
        <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
       {showElementEmballage.map((product)=>( 
            // <Link to={`products/category/${post.categories}/${post.id}`}>
           
            <ProductComponent
              product={product}
              isfav={fav.find((v) => v.id === product.id)}
           
            ></ProductComponent>
          ))}
       
        
      </div>
      </div> 
     
     
     

      <Footer />

    </div>
)}
    </div>

  );
}

export default Products;
