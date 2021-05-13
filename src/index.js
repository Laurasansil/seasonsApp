import "semantic-ui-css/semantic.min.css";
import React from "react";
import ReactDOM from "react-dom";
import Loading from "./Loading";
import Error from "./Error";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  // componentDidMount it's used just one time along the code, a good place to data loading!
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) =>
        //calling setState
        this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return (
        <Error message="Oops! something went wrong, try again.">
          {this.state.errorMessage}
        </Error>
      );
    }
    /* passing the state lat as a props to my component of SeasonDisplay*/
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Loading message="Please accept location request." />;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
