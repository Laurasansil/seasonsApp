import "semantic-ui-css/semantic.min.css";
import React from "react";
import ReactDOM from "react-dom";
import Loading from "./Loading";
import Error from "./Error";
import SeasonDisplay from "./SeasonDisplay";

//Class are better to organize, we can use lifecycle methods
class App extends React.Component {
  // we can inicialize the state like this, don't need always a constructor
  state = { lat: null, errorMessage: "" };

  // componentDidMount it's used just one time along the code, a good place to data loading!
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      //this is a callback c:
      (position) =>
        //calling setState
        this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
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

  //always return JSX:
  render() {
    return <div className="main">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
