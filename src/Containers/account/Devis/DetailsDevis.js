import React , {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { Table,Button} from 'antd';
import * as actions from '../../../store/action/index';

const DetailsDevis = () => {

    const {id} = useParams();

    const columns = [
      
        {
            title: 'productName',
            dataIndex: 'productName',
            key: 'productName',
            render: (value, record) => {
              return (
                <div>
                  {record.product.produit}
                </div>
              );
            }
            },
        
        {
          title: 'qunatity',
          dataIndex: 'quantity',
          key: 'quantity',
          render: (value, record) => {
            return (
              <div>
                  {value}
                {/*record.devisDetails?.quantity*/}
              </div>
            );
          },
        }
    ]
    const dispatch = useDispatch();
    const DetailDevis= useSelector(state => state.rootReducer.DetailDevis);


    useEffect(() => {
        dispatch(actions.DetailDevis(id));
      },[]);

      console.log({DetailDevis})
  return (
    <div>
       
        {DetailDevis != null && <Table columns={columns} dataSource={DetailDevis.devisDetails} />}
    </div>
  )
}

export default DetailsDevis
