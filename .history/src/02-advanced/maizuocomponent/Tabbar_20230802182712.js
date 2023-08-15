import React, { Component } from "react";

export default class Tabbar extends Component {
  state = {
    list: [
      {
        id: 1,
        test: "电影",
      },
      {
        id: 2,
        test: "影院",
      },
      {
        id: 3,
        test: "我的",
      },
    ],
    current: this.props.defaultValue,
  };
  render() {
    return (
      <div>
        <ul>
          {this.state.list.map((item, index) => (
            <li
              key={item.id}
              className={this.state.current === index ? "active" : ""}
              onClick={() => {
                this.handleClick(index);
              }}
            >
              {item.test}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  handleClick(index) {
    this.setState({
      current: index,
    });
    this.props.myevent(index)
  }
}
