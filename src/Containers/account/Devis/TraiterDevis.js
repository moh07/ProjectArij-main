import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Table, Button, Form, Tabs, Input, InputNumber } from "antd";
import * as actions from "../../../store/action/index";
import { useForm } from "antd/lib/form/Form";
import Title from "antd/lib/typography/Title";
import Text from "antd/lib/typography/Text";
import FormInput from "../../../Components/FormInput";
import TextArea from "antd/lib/input/TextArea";
const { TabPane } = Tabs;

const TraiterDevis = (props) => {
  const listproduct = [];
  props.record.devisDetails.map((e) => {
    listproduct.push(e);
  });
  const columns = [
    {
      title: "productName",
      dataIndex: "productName",
      key: "productName",
      render: (value, record) => {
        return <div>{record.product.produit}</div>;
      },
    },

    {
      title: "qunatity",
      dataIndex: "quantity",
      key: "quantity",
      render: (value, record) => {
        return (
          <div>
            {value}
            {/*record.devisDetails?.quantity*/}
          </div>
        );
      },
    },
  ];
  const [form] = useForm();

  useEffect(() => {
    console.log(props.record)
    if (props.record) {
      form.setFieldsValue({ ...props.record});
      console.log("record", props.record);
    }
  }, [props.record]);

  return (
    <Form
      form={form}
      labelCol={{ span: 12 }}
      wrapperCol={{ span: 16 }}
      // onFinish={submit}
    >
      <Tabs
        defaultActiveKey="1"
        type="card"
      >
        <TabPane tab="Devis details" key="1">
          <Table columns={columns} dataSource={listproduct} />
        </TabPane>
      </Tabs>
    </Form>
  );
};

export default TraiterDevis;
