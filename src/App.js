import React, { Component} from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import Result from './components/Result';
import Reset from './components/Reset';
import SizeSetting from './components/SizeSetting';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      color : "red",
      fontSize : 15
    }
    this.onSetColor = this.onSetColor.bind(this)
    this.onSettingDefaut = this.onSettingDefaut.bind(this)
  }

  onSetColor(param) {
    this.setState({color : param})
  }

  // 8 <= fontSize <= 36
  onChangeSize = (value) => {
    var size = this.state.fontSize;
    if (size+value >= 8 && size+value <=36) {
      this.setState({
      fontSize : size + value
      })
    }
    if (size+value < 8 || size+value > 36) {
      alert("8 <= fontSize <=36")
    }
  }


  onSettingDefaut(value) {
    if (value) {
      this.setState({
        color : "red",
        fontSize : 15
      })
    }
  }

  render() {
    return (
      
      <div className="container mt-50">
        <div className="row">
          <ColorPicker color={this.state.color} receiveColor={this.onSetColor}/>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <SizeSetting 
                fontSize={this.state.fontSize}
                onChangeSize={this.onChangeSize}
            />
            <Reset onSettingDefaut={this.onSettingDefaut}/>
          </div>
          <Result color={this.state.color} fontSize={this.state.fontSize}/>
        </div>
      </div>
    )
  }
}

export default App;
