import React, { useState , useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../../store/action/products";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { Button } from "@material-ui/core";
import { UploadImage } from "../UploadImage/UploadImage";
import ProductList from "../ProductList/ProductList";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { message, Input, Select } from "antd";

const { Option } = Select;

/*function onChange(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log('blur');
}

function onFocus() {
  console.log('focus');
}

function onSearch(val) {
  console.log('search:', val);
}


const { TextArea } = Input;


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
*/

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));




const NewProduct = () => {
  const dispatch = useDispatch();
  const Product = useSelector((state) => state.rootReducer.ProductList);

  useEffect(() => {
  }, []);
 
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const listCategories = useSelector(state => state.category.categorys);
  const [produit, setProduit] = useState("");
  const [description, setDescription] = useState("");
 
  const [price, setPrice] = useState(100);
  const [categorie, setCategorie] = useState("");
  const [DetailImage, setDetailImage] = useState();
  const [DescriptionImage, setDescriptionImage] = useState();
  const [Image, setImage] = useState();
  const [souscatégorie, setSousCatégorie] = useState("");
  const [CategoryArId, setCategoryArId] = useState(2);
  const [ImageList, SetImageList] = useState();
  
 
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const hundelform = () => {
    let handler = { name:produit, description:description, price:price,categorie:categorie,souscatégorie:souscatégorie,imagePrincipale:"",image1:"",image2:""}
    console.log("hand=>", handler);
    dispatch(actions.AddProduct(handler,ImageList))
  }


  const setfileList = (data) => {
    SetImageList(data)
  }

  return (

    <div>
      <div className="main-panel">
        <div className="row" style={{ margin: "7% 1% 1%" }}>
          <div className="col-12">
            <div className="card mb-4">
              <div className=" row card-header pb-0">
                <div className="col-4">
                  <h6>Add New Product</h6>
                </div>
              </div>
              <div className="row addp" >
                <div className="col-10" >
                  <div className="row addp"  >
                    <div className="col-5" >
                      <Input
                        style={{ marginBottom: "2rem" }}
                        size="large"
                        placeholder="Name"
                        onChange={(e) => setProduit(e.target.value)}
                      />
                       
                      <Input
                        style={{ marginBottom: "2rem" }}
                        size="large"
                        placeholder="categorie"
                        onChange={(e) => setCategorie(e.target.value)}
                      />
                       
                      <Input
                        style={{ marginBottom: "2rem" }}
                        size="large"
                        placeholder="souscatégorie"
                        onChange={(e) => setSousCatégorie(e.target.value)}
                      />
                      
                    { /* <Select
                        showSearch
                        style={{ width: 312 }}
                        placeholder="Select a person"
                        optionFilterProp="children"

                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }

                      >
                        {listCategories.map((option) => (
                          <Option key={option.id} value={option.id}>
                            {option.title}
                          </Option>
                        ))}
                        </Select>*/}
                      <textarea rows={3}
                        style={{ margin: "2rem 0rem" }}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Description"
                      />
                    
                    </div>
                    <div className="col-5" >
                      <Input
                        style={{ marginBottom: "2rem" }}
                        size="large"
                        placeholder="Price"
                        onChange={(e) => setPrice(e.target.value)}
                      />
                     { /*<Input
                        style={{ marginBottom: "2rem" }}
                        size="large"
                        placeholder="Quantity"
                        onChange={(e) => setQte(e.target.value)}

                      /> */}
                      <UploadImage setfileList={setfileList} />
                    </div>

                  </div>

                  <Button type="primary" onClick={() => hundelform()}
                    style={{ marginLeft: "8%", backgroundColor: "#A4C755" }}
                    size="large"
                  >
                    Confirm
                  </Button>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default NewProduct;
