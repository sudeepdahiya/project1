import React from 'react';
import maps from "./../../service/googleMap"

import './../../assets/css/inputbox.css'

export default class GoogleMapTextBox extends React.Component {
    constructor() {
        super();
        this.state = { value: "" }
    }

    componentDidMount() {
        this.autoComplete();
    }

    setValue = (value) => {
        this.setState({ value })
    }

    getValue = () => {
        this.setState({ value: this.refs.formInput.value })
        return this.refs.formInput.value;
    }

    autoComplete = async () => {
        const maps = await this.props.maps();
        new maps.places.Autocomplete(
            this.refs.formInput
        );
    };

    render() {
        const { title } = this.props;
        let crossBtn = null;
        if (this.state.value) {
            crossBtn = <div onClick={() => {
                this.setState({ value: "" })
            }}>X</div>
        }
        return (
            <div className="input-container">
                <div className="row" >
                    <div className="col-lg-12 title" >
                        {title}
                    </div>

                </div>
                <div className="row">
                    <div className="col-lg-11">
                        <input type="text" ref="formInput" value={this.state.value} onChange={(e) => {
                            this.setState({ value: e.target.value })
                        }} />
                    </div>
                    <div className="col-lg-1 cross-btn" >
                        {crossBtn}
                    </div>
                </div>

            </div>
        )
    }
}

GoogleMapTextBox.defaultProps = {
    maps
}