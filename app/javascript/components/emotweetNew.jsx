import React from "react";
import { Picker, Emoji } from "emoji-mart";

class EmotweetNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = { emoji_id: "grin", message: "test" };
  }

  pickedEmoji(e) {
    console.log(e.id);
    console.log("YOU PICKED!");
    this.setState({ emoji_id: e.id });
  }

  render() {
    return (
      <div>
        <form>
          <div>
            <Emoji
              emoji={{ id: this.state.emoji_id }}
              size={120}
              set="messenger"
            />
          </div>
          <div>
            <Picker
              title="Pick ONE"
              emoji="grin"
              set="messenger"
              onClick={this.pickedEmoji.bind(this)}
            />
            <div>
              <label>comment</label>
              <input placeholder={this.state.message} />
            </div>
          </div>
          <div>
            <input type="submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default EmotweetNew;
