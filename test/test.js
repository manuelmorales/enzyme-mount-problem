import React, { View, Text, StyleSheet } from 'react-native';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

var jsdom = require('jsdom').jsdom;
global.document = jsdom('');
global.window = document.defaultView;

const Inside = React.createClass({
  render() {
    return (
      <View>
        <Text>Some text</Text>
      </View>
    )
  }
});

const Outside = React.createClass({
  render() {
    return (
      <View>
        <Inside />
      </View>
    )
  }
});

describe('mount()', () => {
  it('it should render Inner', () => {
    const wrapper = mount(<Outside />);
    expect(wrapper.find(Text).length).to.eq(1);
  });
});
