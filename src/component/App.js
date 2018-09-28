import React, { Component } from 'react';

import DirectionForm from "./form/Direction";
import Loader from "./loader/Loader";
import { submitDirection, getDirection } from "./../service/api"
import DirectionDetail from "./form/DirectionDetail"
import DirectionMap from "./map/DirectionMap";
import { SUCCESS, IN_PROGRESS, ERROR } from "./../config/apiConstant"

import './../assets/css/app.css'
/*
Main Container that control the state of application
*/
class App extends Component {
  constructor() {
    super();
    this.state = { isLoader: false, direction: null, token: null };
  }
  /** 
  @description Submit the user inputs to the server
  @param JSON object
  */
  formSubmit = async (formData) => {
    this.setState({ isLoader: true })
    var result = await submitDirection(formData).catch(err => alert('Internal Server Error'));
    if (result && result.data && result.data.token) {
      this.setState({ token: result.data.token }, this.getDirection);
    } else {
      this.setState({ isLoader: false })
    }
  }
  /**
   * @description get direction detail from the server using token
   */
  getDirection = async () => {
    this.setState({ isLoader: true })
    var direction = await getDirection(this.state.token).catch(err => alert('Internal Server Error'));
    if (direction && direction.data.status === SUCCESS) {
      this.setState({ direction: direction.data })
    } else if (direction && direction.data.status === IN_PROGRESS) {
      alert(direction.data.error)
    } else if (direction && direction.data.status === ERROR) {
      alert(direction.data.status)
    }
    this.setState({ isLoader: false })
  }
  /**
   * @description reset the direction detail and token
   */
  resetApp = () => {
    this.setState({ direction: null, token: null })
  }

  render() {
    return (
      <React.Fragment>
        <div className="container app-container">
          <div className="col-md-4 col-sm-12">
            <DirectionForm
              onSubmit={this.formSubmit}
              onReset={this.resetApp}
              submitBtnText={this.state.direction && this.state.token ? "Re-submit":"Submit"}
            >
              <DirectionDetail
                direction={this.state.direction}
              />
            </DirectionForm>
          </div>
          <div className="col-md-8 col-sm-12">
            <DirectionMap
              directions={this.state.direction}
            />
          </div>
        </div>
        <Loader
          isLoading={this.state.isLoader}
        />
      </React.Fragment>
    );
  }
}

export default App;