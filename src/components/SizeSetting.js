import React, { Component} from 'react';

class SizeSetting extends Component {

  sizeChange(value) {
    this.props.onChangeSize(value)
  }

  render() {
    return (
        <div className="panel panel-warning">
              <div className="panel-heading">
                <h3 className="panel-title">FontSize : {this.props.fontSize}px</h3>
              </div>
              <div className="panel-body">
                
                <button type="button" className="btn btn-success" onClick={ () => {this.sizeChange(2)} }>Increase</button>
                <button type="button" className="btn btn-success" onClick={ () => {this.sizeChange(-2)} }>Decrease</button>
                
              </div>
        </div>
    )
  }
}

export default SizeSetting;
