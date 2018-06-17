import React from "react";
import { Picker, Emoji } from "emoji-mart";

class EmotweetNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emoji_id: "dog",
      message: "test",
      user_id: 0,
      native_emoji: ""
    };
  }

  pickedEmoji(e) {
    console.log(e);
    console.log(e.id);
    console.log("YOU PICKED!");
    this.setState({ emoji_id: e.id, native_emoji: e.native });
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
          this.setState({ user_id: body.id });
        }.bind(this)
      )
      .catch(function(error) {
        console.error(error);
      });
  }

  sendEmotweet(event) {
    console.log(event);
    event.preventDefault();
    event.stopPropagation();
    console.log("おくるぞい");
    console.log(this.state);
    fetch("/api/emotweet", {
      method: "POST",
      headers: { "Content-Type": "application/json", hoge: "mogeß" },
      body: JSON.stringify(this.state)
    })
      .then(body => {
        console.log(body);
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <div>
        <form>
          <div>
            <Emoji emoji={{ id: this.state.emoji_id }} size={120} />
          </div>
          <div>
            <Picker
              title="Pick ONE"
              emoji="grin"
              onClick={this.pickedEmoji.bind(this)}
            />
            <div>
              <label>comment</label>
              <input placeholder={this.state.message} />
            </div>
          </div>
          <div>
            <input type="submit" onClick={this.sendEmotweet.bind(this)} />
          </div>
        </form>
      </div>
    );
  }
}

export default EmotweetNew;
