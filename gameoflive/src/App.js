import React, { useState } from "react";
import "./App.css";


class Grid extends React.Component {
  render() {
    const width = this.props.cols * 14;
    var rowsArr = [];
    var boxClass = "";
    for (var i = 0; i < this.props.rows; i++) {
      for (var j = 0; j < this.props.rows; j++) {
        let boxid = i + "_" + j;
        boxClass = this.props.gridFull[i][j] ? "box on" : "box off";
        rowsArr.push(
          <Box
            boxClass={boxClass}
            key={boxid}
            boxid={boxid}
            row={i}
            col={j}
            selectBox={this.props.selectBox} />
        )
      }
    }
    return (
      <div className="grid" style={{ width: width }} >{{ rowsArr }} </div>
    )
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.speed = 100,
      this.cols = 40,
      this.rows = 50,
      this.state = {
        generation: 0,
        gridFull: Array(this.rows).fill().map(() => Array(this.cols).fill(false))
      }
  }
  render() {
    return (
      <div className='App' >
        <h1>Game Of Life</h1>
        <Grid gridFull={this.state.gridFull} rows={this.rows} cols={this.cols} selectBox={selectBox} />
        <h2>generation: {this.state.generation} </h2>

      </div>
    );
  }
}

export default App;
