import React, { useState } from "react";
import "./App.css";
import Grid from "./Grid";



class Box extends React.Component {
  selectBox = () => {
    this.props.selectBox(this.props.rows, this.props.col);
  }
  render() {
    return (
      <div
        className={this.props.boxClass}
        id={this.props.id}
        onClick={this.selectBox}
      />
    );
  }
}


class App extends React.Component {
  constructor() {
    super();
    this.speed = 100;
    this.cols = 50;
    this.rows = 50;
    this.state = {
      generation: 0,
      gridFull: Array(this.rows).fill().map(() => Array(this.cols).fill(false))
    }
  }
  render() {
    return (
      <div className='App' >
        <h1>Game Of Life</h1>
        <Grid gridFull={this.state.gridFull} rows={this.rows} cols={this.cols} selectBox={this.selectBox} />
        <h2>generation: {this.state.generation} </h2>

      </div>
    );
  }
}

export default App;
