import React, { Component } from "react";
import Loading from "react-fullscreen-loading";
class Loader extends Component {
  render() {
    return (
      <div>
        <Loading loading loaderColor="#A4C755" />
      </div>
    );
  }
}

export default Loader;
