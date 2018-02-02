'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  View,
} from 'react-native';
import colors from '../config/colors';

import ViewPropTypes from '../config/ViewPropTypes';
import Layout from './Layout';

export default class Tab extends React.Component {
  static propTypes = {
    testID : PropTypes.string,
    title: PropTypes.string,
    titleStyle: Text.propTypes.style,
    badge: PropTypes.element,
    onPress: PropTypes.func,
    hidesTabTouch: PropTypes.bool,
    allowFontScaling: PropTypes.bool,
    style: ViewPropTypes.style,
    tabPosition: PropTypes.string,
    billingTab: PropTypes.bool,
    search2: PropTypes.bool,
    signIn: PropTypes.bool,
  };

  constructor(props, context) {
    super(props, context);

    this._handlePress = this._handlePress.bind(this);
  }

  render() {
    let { title, search2, signIn, bottomSelectedLine, badge } = this.props;
    let icon = null;
    if (React.Children.count(this.props.children) > 0) {
      icon = React.Children.only(this.props.children);
    }
    let mainStyles = [styles.title, this.props.titleStyle];

    if (this.props.tabPosition === 'top') {
      mainStyles.push(styles.titleTopPosition);
      (this.props.selected) ? mainStyles.push(styles.titleTopPositionSelected) : null;
    }

    if (this.props.billingTab) {
      mainStyles.push(styles.billingTitle);
      (this.props.selected) ? mainStyles.push(styles.billingTitleTopPositionSelected) : null;
      mainStyles.push(styles.noMargin);
    }

    if (this.props.search2) {
      mainStyles.push(styles.search2Title);
      (this.props.selected) ? mainStyles.push(styles.search2Selected) : null;
    }

    if (this.props.signIn) {
      mainStyles.push(styles.signInContainer);
      mainStyles.push(styles.hhh);
    }

    if (title) {
      title =
        <Text
          numberOfLines={1}
          allowFontScaling={!!this.props.allowFontScaling}
          style={mainStyles}>
          {title}
        </Text>;
    }

    if (badge) {
      badge = React.cloneElement(badge, {
        style: [styles.badge, badge.props.style],
      });
    }

    let tabStyle = [
      styles.container,
      title ? null : styles.untitledContainer,
      this.props.style,
    ];
    if (
      !this.props.hidesTabTouch &&
      Platform.OS === 'android' &&
      Platform.Version >= 21
    ) {
      return (
        <TouchableNativeFeedback
          testID={this.props.testID}
          background={TouchableNativeFeedback.Ripple(undefined, true)}
          onPress={this._handlePress}>
          <View style={tabStyle}>
            <View>
              {icon}
              {badge}
            </View>
            {title}
            {this.props.tabPosition === 'top' && this.props.selected ? <View style={[styles.bottomSelectedLine, this.props.billingTab && styles.billingBorder, this.props.search2 && styles.search2Border, this.props.signIn && styles.signInContainer]} /> : null}
          </View>
        </TouchableNativeFeedback>
      );
    }
    return (
      <TouchableOpacity
        testID={this.props.testID}
        activeOpacity={this.props.hidesTabTouch ? 1.0 : 0.8}
        onPress={this._handlePress}
        style={tabStyle}>
        <View>
          {icon}
          {badge}
        </View>
        {title}
        {this.props.tabPosition === 'top' && this.props.selected ? <View style={[styles.bottomSelectedLine, this.props.billingTab && styles.billingBorder, this.props.search2 && styles.search2Border, this.props.signIn && styles.signInContainer]} /> : null}
      </TouchableOpacity>
    );
  }

  _handlePress(event) {
    if (this.props.onPress) {
      this.props.onPress(event);
    }
  }
}

let styles = StyleSheet.create({
  badge: {
    position: 'absolute',
    top: -6,
    right: -10,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  untitledContainer: {
    paddingBottom: 13,
  },
  title: {
    color: colors.tabTextDefault,
    fontSize: 12,
    textAlign: 'center',
    alignSelf: 'stretch',
    marginTop: 4,
    marginBottom: 1 + Layout.pixel,
  },
  titleTopPosition: {
    color: 'rgba(255,255,255,0.4)',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: '500',
    alignSelf: 'stretch',
    marginTop: 0,
    marginBottom: 10 + Layout.pixel,
    padding: 5,
  },
  titleTopPositionSelected: {
    color: colors.white,
  },
  bottomSelectedLine: {
    width: 36,
    height: 3,
    backgroundColor: 'white'
  },
  billingTitle: {
    color: '#2F80F6',
  },
  search2Title: {
    color: '#B3BFD0',
  },
  search2Selected: {
    color: '#136EF1'
  },
  signInContainer: {
    // flex: 0,
    // justifyContent: 'flex-start',
    // alignItems: 'flex-end',
    // backgroundColor: 'red'
  },
  billingTitleTopPositionSelected: {
    color: '#fff',
    backgroundColor: '#2F80F6',
  },
  billingBorder: {
    width: 0,
    height: 0
  },
  search2Border: {
    backgroundColor: '#136EF1'
  },
  noMargin: {
    marginBottom: 0,
    fontSize: 12,
    height: 26,
  },
  hhh: {
    alignSelf: 'flex-start',
    width: 100
  }
});