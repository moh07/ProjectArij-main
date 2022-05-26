import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import * as actions from "../../../store/action/category";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

const EditCategory = (props) => {




  
    const [titleValue, setTitleValue] = useState();
    const [id, setId] = useState();
    const [titleArValue, setTitleArValue] = useState();
    const dispatch = useDispatch();
    


    // const handleModifyCategory = (value) => {
    //     console.log('hello');
    //     // setModalVisibilityModify(true);
    //     setTitleValue(value.title);
    //     setTitleArValue(value.titleAr)
    //     setId(value.id)
    //     const dispatch = useDispatch();

    // };
    


    // const hundelform = () => {
    //     let handler = { titleValue, titleArValue, id }
    //     console.log("hand=>", handler);
    //     dispatch(actions.modifyCategory(handler))
    
    //   }





    return (
        <div>
            <div>
                <div>
                    <div className="main-panel">
                        <div className="row" style={{ margin: "7% 1% 1%" }}>
                            <div className="col-12">
                                <div className="card mb-4">
                                    <div className=" row card-header pb-0">
                                        <div className="col-4">
                                            <h6>Edit Category</h6>
                                        </div>

                                    </div>
                                    <div className="row addp" >
                                        <div className="col-10" >
                                            <div className="row addp"  >
                                                <div className="col-5" >
                                                    <label style={{ marginBottom: "1.5rem" }}>Add New Category:</label>
                                                    <TextField
                                                        id="outlined-textarea standard-required"
                                                        // label="Name"
                                                        placeholder="category ..."
                                                        // multiline
                                                        variant="outlined"
                                                        required={true}
                                                        required
                                                        style={{ width: "31.3rem", marginBottom: "2rem" }}
                                                        onChange={(event) => setTitleValue(event.target.value)}
                                                    />

                                                    <div variant="outlined" >
                                                        <Button variant="contained" color="primary" size="Large"
                                                            onClick={(event) => {
                                                                // handleModifyCategory(value);
                                                            }}
                                                        >
                                                            Add
                                                        </Button>
                                                    </div>
                                                </div>
                                                <div className="col-5" >

                                                    <label style={{ marginBottom: "1.5rem" }} className="newcat" >إضافة قسم جديد </label>
                                                    <TextField
                                                        id="outlined-textarea standard-required"
                                                        // label="Name"
                                                        placeholder="قسم  ..."
                                                        // multiline
                                                        variant="outlined"
                                                        required={true}
                                                        style={{ width: "31.3rem", marginBottom: "2rem" }}
                                                        onChange={(event) => setTitleArValue(event.target.value)}
                                                        required
                                                    />

                                                    {/* <div variant="outlined" className="btnarab">
                                                    <Button variant="contained" color="primary" size="Large"
                                                    
                                                    
                                                    
                                                    >
                                                        إضافة
                                                    </Button>
                                                </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>




                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditCategory
