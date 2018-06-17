import React from "react";
import { Picker } from "emoji-mart";

class EmotweetNew extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Picker title="Pick your emoji…" emoji="point_up" />;
  }
}

export default EmotweetNew;
