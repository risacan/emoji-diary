import React from "react";

class Test extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const { tasks } = this.props;

    // 渡された tasks を map で回し、TaskRow コンポーネントとしてまとめてレンダリング
    return <strong>{this.test}</strong>;
  }
}

export default Test;
