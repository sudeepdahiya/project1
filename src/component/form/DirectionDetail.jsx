import React from 'react';

import './../../assets/css/direction.css'
/**
 * @description form show the information related to direction.
 */
const DirectionDetail = props => {

        if (props.direction == null) {
            return null;
        }
        return <div className='direction-detail-form'>
        <div className="row">
            <div className="col-lg-12 title">
            Total distance : {props.direction.total_distance}
            </div>
            <div className="col-lg-12 title" >
            Total time : {props.direction.total_time}
            </div>
        </div>
        <div className="row" >
            <div className="col-lg-12">
            <input type="button" className="btn-primary" onClick={()=>{props.onSubmit()}} value="Re-submit" />
            </div>
            <div className="col-lg-12">
            <input type="button" value="Reset" className="btn-primary" onClick={()=>{props.onReset()}}/>
            </div>
        </div>
        </div>

}
export default DirectionDetail;