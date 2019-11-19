import React from "react";
import "../landingStyles.css";

class Node {
  constructor(options) {
    this.size = 10;
    this.x = options.x;
    this.y = options.y;
    this.target = {
      x: Math.random(options.width) * 500,
      y: Math.random(options.height) * 500
    };
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI, false);

    ctx.strokeStyle = "black";
    ctx.stroke();
  }

  update(canvas) {
    if (this.target.x > this.x) {
      this.x += 5;
    } else {
      this.y -= 5;
    }
    if (this.target.y > this.x) {
      this.y += 5;
    } else {
      this.y -= 5;
    }
  }
}

export class GraphCanvas extends React.Component {
  constructor(props) {
    super(props);

    this.canvasRef = React.createRef();
    this.animate = this.animate.bind(this);
    this.nodes = null;
  }

  getNodes = (width, height) => {
    let nodes = new Array(20);
    for (let i = 0; i < 20; i++) {
      let x = Math.random(width) * 500;
      let y = Math.random(height) * 500;
      nodes[i] = new Node({ x: x, y: y, width: width, height: height });
    }

    return nodes;
  };

  componentDidMount() {
    const canvas = this.canvasRef.current;
    const context = canvas.getContext("2d");

    var dpr = window.devicePixelRatio || 1;

    var rect = canvas.getBoundingClientRect();

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    context.scale(dpr, dpr);

    this.nodes = this.getNodes(canvas.width, canvas.height);

    this.animate(canvas, context);
  }

  animate = (canvas, ctx) => {
    requestAnimationFrame(this.animate);
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    for (let i = 0; i < this.nodes.length; i++) {
      this.nodes[i].draw(ctx);
      this.nodes[i].update(canvas);
    }
  };

  render() {
    return <canvas id="graph-canvas" ref={this.canvasRef} />;
  }
}
