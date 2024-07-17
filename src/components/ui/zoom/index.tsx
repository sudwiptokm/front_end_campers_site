import React, { Component } from "react";
import "./index.css";
interface ZoomProps {
  src: string;
}

interface ZoomState {
  backgroundImage: string;
  backgroundPosition: string;
}

class Zoom extends Component<ZoomProps, ZoomState> {
  state: ZoomState = {
    backgroundImage: "",
    backgroundPosition: "0% 0%",
  };

  componentDidMount() {
    this.setState({ backgroundImage: `url(${this.props.src})` });
  }

  handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { left, top, width, height } = (
      e.target as HTMLElement
    ).getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    this.setState({ backgroundPosition: `${x}% ${y}%` });
  };

  render() {
    return (
      <figure onMouseMove={this.handleMouseMove} style={this.state}>
        <img src={this.props.src} alt="" className="img_zoom" />
      </figure>
    );
  }
}

export default Zoom;
