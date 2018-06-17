import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: "" };
    this.getState = this.getState.bind(this);
  }

  componentDidMount() {
    this.getState();
  }

  getState() {
    let request = new Request("/api/top", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      credentials: "include"
    });

    fetch(request)
      .then(function(response) {
        console.log(response);
        return response.json();
      })
      .then(
        function(body) {
          console.log(body);
          this.setState({ name: body.name });
        }.bind(this)
      )
      .catch(function(error) {
        console.error(error);
      });
  }

  render() {
    console.log("render");

    return !this.state.name ? (
      <div className="application">
        <a href="/auth/twitter">Sign in as Twitter</a>
      </div>
    ) : (
      <div>
        <a href="/sign_out">Sign out</a>
        <h1>{this.state.name}</h1>
        <a href="/emotweets/new">Select one</a>
      </div>
    );
  }
}

export default App;
