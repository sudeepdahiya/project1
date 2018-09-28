import React, { Component } from 'react';
import GoogleMapTextBox from "../button/GoogleMapTextBox"

class DirectionForm extends Component {

  onFormSubmit = () => {
    const { onSubmit } = this.props;
    let formData = {};
    formData.from = this.refs.fromInput.getValue();
    formData.to = this.refs.toInput.getValue();
    onSubmit(formData);
  }

  onFormCancel = () => {
    this.refs.fromInput.setValue("")
    this.refs.toInput.setValue("")
  }

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <GoogleMapTextBox
            title="Starting a location"
            ref="fromInput"
          />
        </div>
        <div className="row">
          <GoogleMapTextBox
            title="Drop-off point"
            ref="toInput"
          />
        </div>
        <div className="row">
          <div className="col-sm-6 col-lg-6">
            <input type="button" className="btn-primary" value="Submit" onClick={() => {
              this.onFormSubmit();
            }} />
          </div>
          <div className="col-sm-6 col-lg-6">
            <input type="button" className="btn-primary" value="Reset" onClick={() => this.onFormCancel()} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DirectionForm;