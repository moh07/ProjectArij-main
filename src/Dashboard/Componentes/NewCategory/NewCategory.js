import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../../store/action/category";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";




const NewCategory = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [titleAr, setTitleAr] = useState("");

    const hundelcategory = () => {
        try {
            let handler = { title, titleAr }
            dispatch(actions.AddCategory(handler))
            // History.push("/")
        } catch (error) {
            // History.push("/")
        }


    }

    return (
        <div>
            <div>
                <div className="main-panel">
                    <div className="row" style={{ margin: "7% 1% 1%" }}>
                        <div className="col-12">
                            <div className="card mb-4">
                                <div className=" row card-header pb-0">
                                    <div className="col-4">
                                        <h6>New Category</h6>
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
                                                    style={{ width: "31.3rem", marginBottom: "2rem" }}
                                                onChange={(e) => setTitle(e.target.value)}
                                                />
                                                <div variant="outlined" >
                                                    <Button variant="contained" color="primary" size="Large"
                                                    onClick={() => hundelcategory()} >
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
                                                onChange={(e) => setTitleAr(e.target.value)}
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
    )
}

export default NewCategory
