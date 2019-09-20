import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader";

class App extends React.Component {
  state = { lat: null, error: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ error: err.message })
    );
  }

  renderContent() {
    if (this.state.lat && !this.state.error) {
      return <SeasonDisplay lat={this.state.lat}></SeasonDisplay>;
    }

    if (this.state.error && !this.state.lat) {
      return <div>Erro: {this.state.error}</div>;
    }

    return <Loader message="Favor clicar em aceita" />;
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
