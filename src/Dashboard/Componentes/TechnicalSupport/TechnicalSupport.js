import React from 'react'
import { Tabs } from 'antd';
import { Card } from 'antd';

const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
}


const TechnicalSupport = () => {
    return (
        <div className="main-panel">
            <div className="row" style={{ margin: "7% 1% 1%" }}>
                <div className="col-12">
                    <div className="card mb-4">
                        <div className=" row card-header pb-0">
                            <div className="col-4">
                                <h6>Technical Support</h6>
                            </div>
                        </div>
                        {/* ------------------------------- */}

                        <div className="" style={{ margin: "0.5rem 1.5rem" }}>
                            <Tabs defaultActiveKey="1" onChange={callback}>
                                <TabPane tab="Machine Setup" key="1">
                                    {/* --------------------------- */}
                                    <Card title="Machine Setup">
                                        <Card type="inner" title="Houssem Troudi" >
                                            <div style={{ fontWeight: '500' }}>
                                                Subject:
                                            </div>
                                            <div className="">
                                                Le lorem ipsum
                                            </div>
                                            <div style={{ borderBottom: "0.5px solid #f0f0f0", margin: "1rem 0rem" }}> </div>
                                            <div style={{ fontWeight: '500' }}>
                                                Date:
                                            </div>
                                            <div className="">
                                                09/06/2021
                                            </div>
                                            <div style={{ borderBottom: "0.5px solid #f0f0f0", margin: "1rem 0rem" }}> </div>
                                            <div style={{ fontWeight: '500' }}>
                                                Consulatation Place:
                                            </div>
                                            <div className="">
                                                Le lorem ipsum est, en imprimerie,
                                            </div>
                                            <div style={{ borderBottom: "0.5px solid #f0f0f0", margin: "1rem 0rem" }}> </div>
                                            <div style={{ fontWeight: '500' }}>
                                                More Details:
                                            </div>
                                            <div className="">
                                                Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la
                                            </div>
                                            <div style={{ borderBottom: "0.5px solid #f0f0f0", margin: "1rem 0rem" }}> </div>
                                            <div className="row">
                                                <div className="col" style={{ fontWeight: '500' }}>
                                                    Phone:
                                                </div>
                                                <div className="col">
                                                    23 349 082
                                                </div>
                                                <div className="col" style={{ fontWeight: '500' }}>
                                                    Email:
                                                </div>
                                                <div className="col">
                                                    troudi@gmail.com
                                                </div>
                                            </div>
                                        </Card>
                                        <Card
                                            style={{ marginTop: 16 }}
                                            type="inner"
                                            title="Montassar Silini"
                                           
                                        >
                                            <div style={{ fontWeight: '500' }}>
                                                Subject:
                                            </div>
                                            <div className="">
                                                Le lorem ipsum
                                            </div>
                                            <div style={{ borderBottom: "0.5px solid #f0f0f0", margin: "1rem 0rem" }}> </div>
                                            <div style={{ fontWeight: '500' }}>
                                                Date:
                                            </div>
                                            <div className="">
                                                09/06/2021
                                            </div>
                                            <div style={{ borderBottom: "0.5px solid #f0f0f0", margin: "1rem 0rem" }}> </div>
                                            <div style={{ fontWeight: '500' }}>
                                                Consulatation Place:
                                            </div>
                                            <div className="">
                                                Le lorem ipsum est, en imprimerie,
                                            </div>
                                            <div style={{ borderBottom: "0.5px solid #f0f0f0", margin: "1rem 0rem" }}> </div>
                                            <div style={{ fontWeight: '500' }}>
                                                More Details:
                                            </div>
                                            <div className="">
                                                Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la
                                            </div>
                                            <div style={{ borderBottom: "0.5px solid #f0f0f0", margin: "1rem 0rem" }}> </div>
                                            <div className="row">
                                                <div className="col" style={{ fontWeight: '500' }}>
                                                    Phone:
                                                </div>
                                                <div className="col">
                                                    23 349 082
                                                </div>
                                                <div className="col" style={{ fontWeight: '500' }}>
                                                    Email:
                                                </div>
                                                <div className="col">
                                                    silini@gmail.com
                                                </div>
                                            </div>
                                        </Card>
                                    </Card>,
                                    {/* --------------------------- */}

                                </TabPane>
                                <TabPane tab="Information Request" key="2">
                                    {/* --------------------------- */}
                                    <Card title="Machine Setup">
                                        <Card type="inner" title="Houssem Troudi">
                                            <div style={{ fontWeight: '500' }}>
                                                Subject:
                                            </div>
                                            <div className="">
                                                Le lorem ipsum
                                            </div>
                                            <div style={{ borderBottom: "0.5px solid #f0f0f0", margin: "1rem 0rem" }}> </div>
                                            <div style={{ fontWeight: '500' }}>
                                                Date:
                                            </div>
                                            <div className="">
                                                09/06/2021
                                            </div>
                                            <div style={{ borderBottom: "0.5px solid #f0f0f0", margin: "1rem 0rem" }}> </div>
                                            <div style={{ fontWeight: '500' }}>
                                                Consulatation Place:
                                            </div>
                                            <div className="">
                                                Le lorem ipsum est, en imprimerie,
                                            </div>
                                            <div style={{ borderBottom: "0.5px solid #f0f0f0", margin: "1rem 0rem" }}> </div>
                                            <div style={{ fontWeight: '500' }}>
                                                More Details:
                                            </div>
                                            <div className="">
                                                Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la
                                            </div>
                                            <div style={{ borderBottom: "0.5px solid #f0f0f0", margin: "1rem 0rem" }}> </div>
                                            <div className="row">
                                                <div className="col" style={{ fontWeight: '500' }}>
                                                    Phone:
                                                </div>
                                                <div className="col">
                                                    23 349 082
                                                </div>
                                                <div className="col" style={{ fontWeight: '500' }}>
                                                    Email:
                                                </div>
                                                <div className="col">
                                                    troudi@gmail.com
                                                </div>
                                            </div>
                                        </Card>
                                        <Card
                                            style={{ marginTop: 16 }}
                                            type="inner"
                                            title="Montassar Silini"
                                           
                                        >
                                            <div style={{ fontWeight: '500' }}>
                                                Subject:
                                            </div>
                                            <div className="">
                                                Le lorem ipsum
                                            </div>
                                            <div style={{ borderBottom: "0.5px solid #f0f0f0", margin: "1rem 0rem" }}> </div>
                                            <div style={{ fontWeight: '500' }}>
                                                Date:
                                            </div>
                                            <div className="">
                                                09/06/2021
                                            </div>
                                            <div style={{ borderBottom: "0.5px solid #f0f0f0", margin: "1rem 0rem" }}> </div>
                                            <div style={{ fontWeight: '500' }}>
                                                Consulatation Place:
                                            </div>
                                            <div className="">
                                                Le lorem ipsum est, en imprimerie,
                                            </div>
                                            <div style={{ borderBottom: "0.5px solid #f0f0f0", margin: "1rem 0rem" }}> </div>
                                            <div style={{ fontWeight: '500' }}>
                                                More Details:
                                            </div>
                                            <div className="">
                                                Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la
                                            </div>
                                            <div style={{ borderBottom: "0.5px solid #f0f0f0", margin: "1rem 0rem" }}> </div>
                                            <div className="row">
                                                <div className="col" style={{ fontWeight: '500' }}>
                                                    Phone:
                                                </div>
                                                <div className="col">
                                                    23 349 082
                                                </div>
                                                <div className="col" style={{ fontWeight: '500' }}>
                                                    Email:
                                                </div>
                                                <div className="col">
                                                    silini@gmail.com
                                                </div>
                                            </div>
                                        </Card>
                                    </Card>,
                                    {/* --------------------------- */}

                                </TabPane>
                                <TabPane tab="Machine Maintenance" key="3">
                                    {/* --------------------------- */}
                                    <Card title="Machine Setup">
                                        <Card type="inner" title="Houssem Troudi">
                                            <div style={{ fontWeight: '500' }}>
                                                Subject:
                                            </div>
                                            <div className="">
                                                Le lorem ipsum
                                            </div>
                                            <div style={{ borderBottom: "0.5px solid #f0f0f0", margin: "1rem 0rem" }}> </div>
                                            <div style={{ fontWeight: '500' }}>
                                                Date:
                                            </div>
                                            <div className="">
                                                09/06/2021
                                            </div>
                                            <div style={{ borderBottom: "0.5px solid #f0f0f0", margin: "1rem 0rem" }}> </div>
                                            <div style={{ fontWeight: '500' }}>
                                                Consulatation Place:
                                            </div>
                                            <div className="">
                                                Le lorem ipsum est, en imprimerie,
                                            </div>
                                            <div style={{ borderBottom: "0.5px solid #f0f0f0", margin: "1rem 0rem" }}> </div>
                                            <div style={{ fontWeight: '500' }}>
                                                More Details:
                                            </div>
                                            <div className="">
                                                Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la
                                            </div>
                                            <div style={{ borderBottom: "0.5px solid #f0f0f0", margin: "1rem 0rem" }}> </div>
                                            <div className="row">
                                                <div className="col" style={{ fontWeight: '500' }}>
                                                    Phone:
                                                </div>
                                                <div className="col">
                                                    23 349 082
                                                </div>
                                                <div className="col" style={{ fontWeight: '500' }}>
                                                    Email:
                                                </div>
                                                <div className="col">
                                                    troudi@gmail.com
                                                </div>
                                            </div>
                                        </Card>
                                        <Card
                                            style={{ marginTop: 16 }}
                                            type="inner"
                                            title="Montassar Silini"
                                           
                                        >
                                            <div style={{ fontWeight: '500' }}>
                                                Subject:
                                            </div>
                                            <div className="">
                                                Le lorem ipsum
                                            </div>
                                            <div style={{ borderBottom: "0.5px solid #f0f0f0", margin: "1rem 0rem" }}> </div>
                                            <div style={{ fontWeight: '500' }}>
                                                Date:
                                            </div>
                                            <div className="">
                                                09/06/2021
                                            </div>
                                            <div style={{ borderBottom: "0.5px solid #f0f0f0", margin: "1rem 0rem" }}> </div>
                                            <div style={{ fontWeight: '500' }}>
                                                Consulatation Place:
                                            </div>
                                            <div className="">
                                                Le lorem ipsum est, en imprimerie,
                                            </div>
                                            <div style={{ borderBottom: "0.5px solid #f0f0f0", margin: "1rem 0rem" }}> </div>
                                            <div style={{ fontWeight: '500' }}>
                                                More Details:
                                            </div>
                                            <div className="">
                                                Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la
                                            </div>
                                            <div style={{ borderBottom: "0.5px solid #f0f0f0", margin: "1rem 0rem" }}> </div>
                                            <div className="row">
                                                <div className="col" style={{ fontWeight: '500' }}>
                                                    Phone:
                                                </div>
                                                <div className="col">
                                                    23 349 082
                                                </div>
                                                <div className="col" style={{ fontWeight: '500' }}>
                                                    Email:
                                                </div>
                                                <div className="col">
                                                    silini@gmail.com
                                                </div>
                                            </div>
                                        </Card>
                                    </Card>,
                                    {/* --------------------------- */}

                                </TabPane>
                            </Tabs>
                        </div>


                        {/* ------------------------------- */}



                    </div>
                </div>
            </div>
        </div>


    )
}

export default TechnicalSupport
