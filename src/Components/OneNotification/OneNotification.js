import React from 'react'
import { Link } from "react-router-dom";

const OneNotification = () => {
    return (
        <div>
            <Link to={'/'}>
            <div className="row border-top border-bottom iteminfo">
          <div className="row main align-items-center">
            <div className="col-2">
              <img
                className="img-fluid itemimg"
                src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
              />
            </div>
            <div className="col-1 itemname">
              <div className="row text-muted">category</div>
              <div className="row">name</div>
            </div>
            <div className="col-7" style={{}}>
              <p>lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip  lorem ipsum dolor sit amet, consectetur adip </p>
            </div>
          </div>
        </div>
        </Link>
        </div>
    )
}

export default OneNotification
