import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { Button } from "@material-ui/core";
import { UploadImage } from "../UploadImage/UploadImage";
import { useSelector, useDispatch } from "react-redux";
import { UpdateProduct } from "../../../store/action/products";
import { message, Input, Select } from "antd";

const { Option } = Select;

function onChange(value) {
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

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));



const EditProduct = () => {
  // const ProdHandler = useSelector(state => state.rootReducer.ProductHandler);
  let ProdHandler = JSON.parse(localStorage.getItem('prodModification'))
  const listCategories = useSelector(state => state.category.categorys);

  const [name, setName] = useState("");
  const [dsscription, setDescription] = useState("");
  const [dsscription2, setDescription2] = useState("");
  const [price, setPrice] = useState(100);
  const [qte, setQte] = useState(1);
  // const [DetailImage, setDetailImage] = useState("");
  // const [DescriptionImage, setDescriptionImage] = useState("");
  const [Image, setImage] = useState("");
  const [CategoryId, setCategoryId] = useState(2);
  const dispatch = useDispatch()
  const classes = useStyles();
  const { TextArea } = Input;

  console.log("ProdHandler=>", ProdHandler);

  // const onSubmit=()=>{
  //   let handler={name, dsscription, price, qte, DetailImage, DescriptionImage, Image, CategoryId}
  //   dispatch(UpdateProduct(handler, ProdHandler.id)
  // }
  return (
    <div>
      <div className="main-panel">
        <div className="row" style={{ margin: "7% 1% 1%" }}>
          <div className="col-12">
            <div className="card mb-4">
              <div className=" row card-header pb-0">
                <div className="col-4">
                  <h6>Edit Product</h6>
                </div>
              </div>



              <div className="row addp" >

                <div className="col-10" >
                  <div className="row addp" >
                    <div className="col-5" >
                      {/* <TextField
                        id="outlined-textarea"
                        label="Name"
                        placeholder="Name"
                        value={ProdHandler.title}
                        variant="outlined"

                        style={{ width: "31.3rem", marginBottom: "2rem" }}
                        onChange={(e) => setName(e.target.value)}
                      /> */}

                      <Input
                        style={{ marginBottom: "2rem" }}
                        size="large"
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                        value={ProdHandler.title}
                      />


                      {/* <TextField
                        id="outlined-select-currency"
                        select
                        label="Category"
                        // value=
                        // onChange={handleChange}
                        helperText="Please Select Your Category"
                        variant="outlined"
                        defaultValue={ProdHandler.categoryId}
                      // onChange={(e) => setsetCategoryId(e.target.value)}
                      >
                        {listCategories.map((option) => (
                          <MenuItem key={option.id} value={option.id}>
                            {option.title}
                          </MenuItem>
                        ))}
                      </TextField> */}

                      <Select
                        showSearch
                        style={{ width: 312 }}
                        placeholder="{ProdHandler.categoryId}"
                        optionFilterProp="children"
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                          // defaultValue={ProdHandler.categoryId}

                        }

                      >
                        {listCategories.map((option) => (
                          <Option key={option.id} value={option.id}>
                            {option.title}
                          </Option>
                        ))}
                      </Select>



                      {/* <TextField
                        id="outlined-textarea"
                        label="Description"
                        value={ProdHandler.description}
                        onChange={(e) => setDescription(e.target.value)}
                        // multiline
                        variant="outlined"
                        style={{ width: "31.3rem", marginTop: "2rem" }}
                      />

                      <TextField
                        id="outlined-textarea"
                        label="Description2"
                        value={ProdHandler.description}
                        onChange={(e) => setDescription2(e.target.value)}
                        // multiline
                        variant="outlined"
                        style={{ width: "31.3rem", marginBottom: "2rem" }}
                      /> */}

                      <TextArea rows={3}
                        style={{ margin: "2rem 0rem" }}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Description"
                        value={ProdHandler.description}
                      />
                      <TextArea rows={3}

                        onChange={(e) => setDescription2(e.target.value)}
                        placeholder="Description2"
                        value={ProdHandler.specification}
                      />


                    </div>
                    <div className="col-5" >


                      {/* <TextField
                        id="outlined-number"
                        label="Price"
                        type="number"
                        style={{ width: "31.3rem", marginBottom: "2rem" }}
                        variant="outlined"
                        value={ProdHandler.price}
                        onChange={(e) => setPrice(e.target.value)}
                      />

                      <TextField
                        id="outlined-number"
                        label="Quantity "
                        type="number"
                        style={{ width: "31.3rem", marginBottom: "2rem" }}
                        variant="outlined"
                        value={ProdHandler.quantity}
                        onChange={(e) => setQte(e.target.value)}
                      /> */}

                      <Input
                        style={{ marginBottom: "2rem" }}
                        size="large"
                        placeholder="Price"
                        onChange={(e) => setPrice(e.target.value)}
                        value={ProdHandler.price}
                      />
                      <Input
                        style={{ marginBottom: "2rem" }}
                        size="large"
                        placeholder="Quantity"
                        onChange={(e) => setQte(e.target.value)}
                        value={ProdHandler.quantity}

                      />


                      <UploadImage />
                    </div>

                  </div>
                  {/* <Button variant="contained" color="primary" size="Large"
                    // onClick={() => onSubmit()}
                    style={{ margin: "0% 7.5% " }} >
                    Edit
                  </Button> */}

                  <Button type="primary" 
                    style={{ marginLeft: "8%", backgroundColor: "#A4C755" }}
                    size="large"
                  >
                    Edit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default EditProduct
