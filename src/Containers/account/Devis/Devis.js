import "antd/dist/antd.css";
import {SaveOutlined,PlusOutlined} from '@ant-design/icons'

import "./Devis.css";
import {
    Button,
    Table,
    Modal,
    Input,
    InputNumber,
    Select,
    notification
} from "antd";
import instance from "../../../axios";

import {useEffect, useState} from "react";
import {EditOutlined, DeleteOutlined} from "@ant-design/icons";

function Devis() {
    const getProduct = () => {
        instance.get("/products").then((resp) => {
            setProducts(resp.data);
        }).catch((e) => {
            openNotificationWithIcon("error", e);
        });
    };
    const openNotificationWithIcon = (type) => {
        notification[type]({message: "devis creqcted with success", description: "This is the content of the notification. This is the content of the notification. This is the content of the notification."});
    };
    const onSave = (e) => {
        e.preventDefault();

        instance.post("/devis/add", {devisDetails: dataSource}).then((resp) => {
            console.log(resp);
            openNotificationWithIcon("success")
        }).catch((e) => {
            console.log(e);
        });
    };

    const [products, setProducts] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const [dataSource, setDataSource] = useState([]);

    const setProduct = (index, property, value) => {
        const newDatasource = [...dataSource];
        newDatasource[index][property] = value;
        setDataSource(newDatasource);
    };
    useEffect(() => {
        if (products.length === 0) {
            getProduct();
        } else {
            console.log(products);
        }
    }, [products]);
    const columns = [
        {
            key: "1",
            title: "Name",
            dataIndex: "productId",
            render: (record, _, index) => {
                return (
                    <Select style={
                            {width: "100%"}
                        }
                        onChange={
                            (value) => setProduct(index, "productId", value)
                    }>
                        {
                        products.map((product) => (
                            <Select.Option key={
                                    product.id
                                }
                                value={
                                    product.id
                            }>
                                {
                                product.produit
                            } </Select.Option>
                        ))
                    } </Select>
                );
            }
        }, {
            key: "2",
            title: "quantity",
            dataIndex: "quantity",
            render: (quantity, _, index) => {
                return (
                    <InputNumber onChange={
                            (value) => setProduct(index, "quantity", value)
                        }
                        defaultValue={quantity}/>
                );
            }
        }, {
            key: "3",
            title: "",
            render: (record, index) => {
                return (
                    <>
                        <EditOutlined onClick={
                            () => {
                                onEditProduct(record);
                            }
                        }/>
                        <DeleteOutlined onClick={
                                () => {
                                    onDeleteProduct(index);
                                }
                            }
                            style={
                                {
                                    color: "red",
                                    marginLeft: 12
                                }
                            }/>
                    </>
                );
            }
        },
    ];

    const onAddProduct = () => {
        const newProduct = {
            productId: null,
            quantity: 1
        };
        setDataSource((pre) => {
            return [
                ...pre,
                newProduct
            ];
        });
    };
    const onDeleteProduct = (record) => {
        Modal.confirm({
            title: "Are you sure, you want to delete this product record?",
            okText: "Yes",
            okType: "danger",
            onOk: () => {
                setDataSource((pre) => {
                    return pre.filter((product) => product.productId !== record.productId);
                });
            }
        });
    };
    const onEditProduct = (record) => {
        setIsEditing(true);
        setEditingProduct({
            ...record
        });
    };
    const resetEditing = () => {
        setIsEditing(false);
        setEditingProduct(null);
    };
    return (
        <div>
            <div className="demande-devis">
                {/* <div style={{display : "flex" , justifyContent : "center" }}> */}
                <div style={
                    {
                        display: "flex",
                        justifyContent: "end",
                        marginBottom: "20px"
                    }
                }>
                    <Button style={{ fontSize: '15px', color: '#1CB830' ,borderLeftColor:'#1CB830',borderLeftWidth:"5px",marginRight:"5px"}}
                        icon={<PlusOutlined style={{ fontSize: '17px', color: '#1CB830' }}/>} onClick={onAddProduct}>
                        PRODUCT
                    </Button>
                    <Button style={{ fontSize: '15px', color: '#1CB830' ,borderLeftColor:'#1CB830',borderLeftWidth:"5px",marginRight:"5px"}}
                        icon={<SaveOutlined style={{ fontSize: '17px', color: '#1CB830' }} />} onClick={onSave}>
                        SAVE
                    </Button>
                </div>
                <Table columns={columns}
                    dataSource={dataSource}></Table>
                <Modal title="Edit product"
                    visible={isEditing}
                    okText="Save"
                    onCancel={
                        () => {
                            resetEditing();
                        }
                    }
                    onOk={
                        () => {
                            setDataSource((pre) => {
                                return pre.map((product) => {
                                    if (product.id === editingProduct.id) {
                                        return editingProduct;
                                    } else {
                                        return product;
                                    }
                                });
                            });
                            resetEditing();
                        }
                }>
                    <Input value={
                            editingProduct ?. name
                        }
                        onChange={
                            (e) => {
                                setEditingProduct((pre) => {
                                    return {
                                        ...pre,
                                        name: e.target.value
                                    };
                                });
                            }
                        }/>
                    <Input value={
                            editingProduct ?. quantity
                        }
                        onChange={
                            (e) => {
                                setEditingProduct((pre) => {
                                    return {
                                        ...pre,
                                        quantity: e.target.value
                                    };
                                });
                            }
                        }/>
                </Modal>
        </div>
    </div>
    );
}

export default Devis;
