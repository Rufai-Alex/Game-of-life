import React from "react";
import Box from "./Box";

class Grid extends React.Component {
  render() {
    const width = this.props.cols * 16;
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
            selectBox={this.props.selectBox}
          />
        );
      }
    }
    return (
      <div className='grid' style={{ width: width }}>
        {rowsArr}{" "}
      </div>
    );
  }
}
export default Grid;
