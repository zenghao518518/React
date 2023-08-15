import React, { Component } from 'react'

export default class Tabbar extends Component {
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
    )
  }
}
