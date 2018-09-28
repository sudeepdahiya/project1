import React from "react";
import "./../../assets/css/loader.css"
/**
 * 
 * @description Loader
 */
const Loader = (props) => {
    const {isLoading} = props;
    console.log('isLoading',isLoading)
    return (
        isLoading && (
            <div className="loader-container">
                <div className="loader" />
            </div>
        )
    );
}
export default Loader;