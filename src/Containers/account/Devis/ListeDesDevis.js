import React, {useEffect, useState} from 'react'
// import jwtDecode from 'jwt-decode' ;
import axios from 'axios';
import {Table, Divider, Button} from 'antd';
import * as actions from '../../../store/action/index';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from "react-router-dom";
import {EyeOutlined} from '@ant-design/icons';
import {Progress} from 'antd';
import DevisModal from './DevisModal';
import {useModalState} from '../../../hooks/useModalState';


const ListeDesDevis = () => {
    const {visible, close, open} = useModalState(false);
    const [record, setRecord] = useState({});

    const columns = [
        {
            title: 'devisId',
            dataIndex: 'id',
            key: 'id',
            render: (value, record) => {
                return (
                    <div> {value} </div>
                );
            }
        }, {
            title: 'status',
            dataIndex: 'etat',
            key: 'etat',
            render: (value, record) => {
                return(!value ? (
                    <div>
                        <Progress type="circle"
                            percent={100}
                            width={40}
                            status="exception"
                            format={
                                () => 'NOT YET'
                            }/>
                    </div>
                ) : <div>
                        <Progress type="circle"
                            percent={100}
                            width={40}
                            format={
                                () => 'Done'
                            }/>
                    </div>);
            }
        }, {
            title: 'Action',
            key: 'action',
            render: (text, record) => (

                <Button icon={<EyeOutlined/>}
                    onClick={
                        () => {
                            setRecord(record);
                            open();
                        }
                    }/>

            // <span>

            // <Button type="primary"  ><Link to="/detailsDevis">afficher les details du devis</Link>  </Button>

            // </span>
            )
        },
    ];


    const dispatch = useDispatch();


    // ------------- Get data from store in redux (redux call api and do update if data is updating) --------------------

    const devisUser = useSelector(state => state.rootReducer.devisUser);

    // ------------- refresh when we have update in list --------------------

    useEffect(() => {
        dispatch(actions.getDevisUser());
    }, []);


    useEffect(() => {
        console.log("mpm", devisUser);

    }, [])

    return (
        <div>
            <Table columns={columns}
                dataSource={devisUser}/>
            <DevisModal visible={visible}
                onCancel={close}
                record={record}/>

        </div>

    )
}

export default ListeDesDevis
