import React, { Component } from 'react';
import GoogleMapTextBox from "../inputbox/GoogleMapTextBox"
/**
 * @description DirectionForm is a from where user can enter locations.
 */
class DirectionForm extends Component {

  /**
   * call onSubmit callback function on submitting form
   */
  onFormSubmit = () => {
    const { onSubmit } = this.props;
    let formData = {};
    formData.from = this.refs.fromInput.getValue();
    formData.to = this.refs.toInput.getValue();
    onSubmit(formData);
  }
  /**
   * @description Set null or blank value in all fields of form
   */
  onFormCancel = () => {
    this.refs.fromInput.setValue("")
    this.refs.toInput.setValue("")
    this.props.onReset();
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
        {this.props.children}
        <div className="row">
          <div className="col-sm-6 col-lg-6">
            <input type="button" className="btn-primary" value={this.props.submitBtnText} onClick={() => {
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