import React, { Component } from 'react';

import './../../assets/css/direction.css'

class DirectionDetail extends Component {

    render() {
        if (this.props.direction == null) {
            return null;
        }
        return <div className='direction-detail-form'>
        <div className="row">
            <div className="col-lg-12 title">
            Total distance : {this.props.direction.total_distance}
            </div>
            <div className="col-lg-12 title" >
            Total time : {this.props.direction.total_time}
            </div>
        </div>
        <div className="row" >
            <div className="col-lg-12">
            <input type="button" className="btn-primary" onClick={()=>{this.props.onSubmit()}} value="Re-submit" />
            </div>
            <div className="col-lg-12">
            <input type="button" value="Reset" className="btn-primary" onClick={()=>{this.props.onReset()}}/>
            </div>
        </div>
        </div>
    }

}
export default DirectionDetail;