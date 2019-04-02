import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Animated, 
  Button, Dimensions, View, Text, TouchableOpacity } from 'react-native';

const {width, height} = Dimensions.get('window')

class Carousel extends Component {
  
  static propTypes = {
    data: PropTypes.array.isRequired,
    renderItem: PropTypes.func.isRequired
  }

  state = {
    current: 0,
    next: true
  }



  handlePrev = () => {
    let index = this.state.current;
    let length = this.props.data.length;
    if(index< 1) {
      index = length;
    }
    index = index - 1;
    this.setState({
      current: index,
      next: false
    })
  }

  handleNext = () => {
    let index = this.state.current;
    let length = this.props.data.length - 1; // ?
    if(index === length) {
      index = -1;
    }
    index = index + 1;
    this.setState({
      current: index,
      next: true
    })
  }


  _renderItem = (data) => {
    return data.map((item, index) => {
      return (
        <View key={item.id || index}>
        <TouchableOpacity
          onPressOut={this.handlePrev}
        >
          <Text>Prev</Text>
        </TouchableOpacity>

          {this.props.renderItem(item)}
          <TouchableOpacity
          onPressOut={this.handleNext}
        >
          <Text>next</Text>
        </TouchableOpacity>
        </View>
      )
    })
  }

  _onScrollViewLayout = (event) => {
    let {width} = event.nativeEvent.layout;
    this.setState({width});
  }

  render() {
    return (
      <ScrollView
      horizontal
      pagingEnabled
      automaticallyAdjustContentInsets={true}
      showsHorizontalScrollIndicator={true}
      bounces
      style={{flexDirection: 'row'}}
      decelerationRate={0.9}
      onLayout={this._onScrollViewLayout}
      horizontal
      scrollEventThrottle={16}
      >
        {this._renderItem(this.props.data)}
      </ScrollView>
    );
  }
}

export default Carousel;