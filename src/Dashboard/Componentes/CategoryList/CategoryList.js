import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import VisibilityIcon from "@material-ui/icons/Visibility";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SystemUpdateAltIcon from "@material-ui/icons/SystemUpdateAlt";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AddBoxIcon from '@material-ui/icons/AddBox';
import SearchIcon from '@material-ui/icons/Search';
import * as actions from "../../../store/action/index";
import { handle_Product_modification } from "../../../store/action/products"
import { EditOutlined, DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
const { confirm } = Modal;





const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const CategoryList = (id) => {






    const dispatch = useDispatch();

    const listCategories = useSelector(state => state.category.categorys);

    // -------------Delet with refresh --------------------
    useEffect(() => {
        console.log("cat07", listCategories);
    }, [listCategories]);


    // -------------Delet withot refresh --------------------
    // useEffect(() => {
    //     dispatch(actions.getCategory());;
    // });

    const classes = useStyles();
    const [value, setValue] = React.useState('category');
    const handleChange = (event) => {
        setValue(event.target.value);
    };




    const showDeleteConfirm = (id) => {
        confirm({
            title: 'Êtes-vous sûr de vouloir supprimer ce Category?',
            icon: <ExclamationCircleOutlined />,
            content: 'Attention, le Category ne peut pas être retourné ',
            confirmLoading: true,
            okText: 'Oui',
            okType: 'danger',
            cancelText: 'Non',
            onOk() {
                console.log('OK');
                dispatch(actions.deleteCategory(id))
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };



    return (
        <div>
            <div className="main-panel">
                <div className="row" style={{ margin: "7% 1% 1%" }}>
                    <div className="col-12">
                        <div className="card mb-4">
                            <div className=" row card-header pb-0">
                                <div className="col-2">
                                    <h6>All Categorys</h6>
                                </div>
                                {/* <div className="col-7 add-cat" >
                                    <TextField
                                        id="standard-multiline-flexible"
                                        multiline
                                        rowsMax={4}
                                        value={value}
                                        onChange={handleChange}
                                    />
                                    <AddBoxIcon style={{ fontSize: "22px", display: "flex" }} />
                                </div> */}
                                <div className="col-3">


                                    {/* <div
                                        className="sarchbar-add-btn"
                                        style={{ marginBottom: "0.5rem" }}
                                    >
                                        <form
                                            className="navbar-left navbar-form nav-search mr-md-3"
                                            action=""
                                        >
                                            <div className="input-group">
                                                <input
                                                    type="text"
                                                    placeholder="Search ..."
                                                    className="form-control"
                                                />
                                                <div className="input-group-append">
                                                    <span className="input-group-text">
                                                        <i className="la la-search search-icon"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </form>

                                        <SystemUpdateAltIcon
                                            style={{ fontSize: "20px", marginTop: "0.4rem" }}
                                        />
                                    </div> */}

                                    {/* <div className="col-7 add-cat" >
                                        <TextField
                                            id="standard-multiline-flexible"
                                            multiline
                                            rowsMax={4}

                                            onChange={handleChange}
                                        />
                                        <SearchIcon style={{ fontSize: "22px", display: "flex" }} />
                                    </div> */}


                                </div>
                            </div>
                            <div className="card-body px-0 pt-0 pb-2">
                                <div className="table-responsive p-0">
                                    <table className="table align-items-center mb-0">
                                        <thead>
                                            <tr>
                                                <th
                                                    className="text-uppercase  text-xxs font-weight-bolder opacity-7"
                                                    style={{ width: "8rem" }}
                                                >
                                                    ID
                                                </th>

                                                <th className="text-uppercase  text-xxs font-weight-bolder opacity-7">
                                                    NAME_ENG
                                                </th>
                                                <th className="text-uppercase  text-xxs font-weight-bolder opacity-7">
                                                    NAME_AR
                                                </th>


                                                <th className="text-uppercase  text-xxs font-weight-bolder opacity-7 ps-2">
                                                    Products Number
                                                </th>


                                                <th className=" opacity-7"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* ------------------------------------------------------- */}

                                            {listCategories ? (
                                                listCategories.map(v => (
                                                    <tr>
                                                        <td>
                                                            {/* <p className="text-xs font-weight-bold mb-0">Manager</p> */}
                                                            <p className="text-xs  mb-0">
                                                                #{v.id}
                                                            </p>
                                                        </td>


                                                        <td>
                                                            {/* <p className="text-xs font-weight-bold mb-0">Manager</p> */}
                                                            <p className="text-xs  mb-0">
                                                                {v.title}
                                                            </p>
                                                        </td>
                                                        <td>
                                                            {/* <p className="text-xs font-weight-bold mb-0">Manager</p> */}
                                                            <p className="text-xs  mb-0">
                                                                {v.titleAr}
                                                            </p>
                                                        </td>

                                                        <td className="align-middle ">
                                                            <span className=" text-xs font-weight-bold">
                                                                15
                                                            </span>
                                                        </td>

                                                        <td className="align-middle ">

                                                            <Link to={`/edit-category`}>
                                                                <EditIcon
                                                                    style={{
                                                                        fontSize: "20px",
                                                                        marginRight: "0.7rem",
                                                                    }}

                                                                />
                                                            </Link>
                                                            <DeleteIcon 
                                                            style={{ fontSize: "20px" , cursor: "pointer" }}

                                                                onClick={() => showDeleteConfirm(v.id)}
                                                            />
                                                        </td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <>loading ...</>
                                            )}

                                            {/* ------------------------------------------------------------ */}


                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CategoryList
