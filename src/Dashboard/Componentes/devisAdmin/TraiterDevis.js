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
  const dispatch = useDispatch();
  const listproduct = [];
  props.record.devisDetails.map((e) => {
    listproduct.push({ ...e, price: 0 });
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
    {
      title: "price",
      dataIndex: "price",
      key: "price",
      render: (value, record) => {
        return (
          <FormInput>
            <InputNumber
              onChange={(e) => {
                console.log("list", listproduct);
                const found = (listproduct.find(
                  (element) => element.id === record.id
                ).price = e * Number(record.quantity));
                console.log("found", found);
                //
              }}
            />
          </FormInput>
        );
      },
    },
  ];
  const [form] = useForm();

  useEffect(() => {
    if (props.record) {
      form.setFieldsValue({ ...props.record, price: 0 });
      console.log("record", props.record);
    }
  }, [props.record]);
  let [email, setEmail] = useState({ mail: "" });

  return (
    <Form
      form={form}
      labelCol={{ span: 12 }}
      wrapperCol={{ span: 16 }}
      onFinish={() =>{ dispatch(actions.SendEMAIL(email.mail,props.record.user.email,props.record.id)); }}
    >
      <Tabs
        defaultActiveKey="1"
        type="card"
        tabBarExtraContent={<Button htmlType="submit">Send Devis</Button>}
      >
        <TabPane tab="Devis details" key="1">
          <Text style={{ fontWeight: "bolder", fontSize: "20px" }}>
            Demandeur de devis : {props.record.user.firstname} -{" "}
            {props.record.user.lastname}
          </Text>
          <Table columns={columns} dataSource={listproduct} />
          <Button
            onClick={() => {
              let mail = "Devis sous la demande de Mr/Ms "+props.record.user.lastname+" "+props.record.user.lastname+"\n";
              let total = 0
              let tva = 0
              listproduct.map((e) => {
                console.log(e, e.price);
                mail = mail + " " + e.product.produit + " : " + e.price +"\n";
                total=total+e.price
                console.log(mail);
              });
              tva = total / 100 * 13
              mail = mail + "TVA : 13% => " + tva +"\n";
              total=total+tva
              mail = mail + "Total : " + total +"\n";
              setEmail({ ...email, mail: mail });

            }}
          >
            generate Email
          </Button>
          <TextArea rows={4} value={email.mail} />
        </TabPane>
      </Tabs>
    </Form>
  );
};

export default TraiterDevis;
