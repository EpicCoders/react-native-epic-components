import PropTypes from 'prop-types';
import React from 'react';
import {
  TouchableNativeFeedback,
  TouchableHighlight,
  StyleSheet,
  View,
  Platform,
  Text as NativeText,
} from 'react-native';
import colors from '../config/colors';
import Text from '../text/Text';
import normalize from '../helpers/normalizeText';
import ViewPropTypes from '../config/ViewPropTypes';

const log = () =>
{
  console.log('please attach method to this component'); //eslint-disable-line no-console
};

const Button = props =>
{
  const {
    disabled,
    title,
    buttonStyle,
    borderRadius,
    onPress,
    secondary,
    secondary2,
    secondary3,
    primary1,
    primary2,
    backgroundColor,
    color,
    fontSize,
    underlayColor,
    raised,
    textStyle,
    large,
    disabledStyle,
    containerViewStyle,
    rounded,
    outline,
    transparent,
    textNumberOfLines,
    textEllipsizeMode,
    ...attributes
  } = props;
  let {Component} = props;

  if (!Component && Platform.OS === 'ios')
  {
    Component = TouchableHighlight;
  }
  if (!Component && Platform.OS === 'android')
  {
    Component = TouchableNativeFeedback;
  }
  if (!Component)
  {
    Component = TouchableHighlight;
  }

  if (Platform.OS === 'android' && (borderRadius && !attributes.background))
  {
    attributes.background = TouchableNativeFeedback.Ripple(
      'ThemeAttrAndroid',
      true
    );
  }

  return (
    <View
      style={[styles.container, raised && styles.raised, containerViewStyle]}
    >
      <Component
        underlayColor={underlayColor || 'transparent'}
        onPress={onPress || log}
        disabled={disabled || false}
        {...attributes}
      >
        <View
          style={[
            styles.button,
            secondary && {backgroundColor: colors.secondary},
            secondary2 && {backgroundColor: colors.secondary2},
            secondary3 && {backgroundColor: colors.secondary3, borderColor: colors.blue, borderWidth: 2},
            buttonStyle && buttonStyle,
          ]}
        >
          <Text
            style={[
              styles.text,
              color && {color},
              fontSize && {fontSize},
              textStyle && textStyle,
              secondary && {color: colors.grey0},
              secondary3 && {color: colors.blue},
            ]}
          >
            {title}
          </Text>
        </View>
      </Component>
    </View>
  );
};

Button.propTypes = {
  buttonStyle: ViewPropTypes.style,
  title: PropTypes.any,
  onPress: PropTypes.any,
  icon: PropTypes.object,
  iconComponent: PropTypes.any,
  secondary: PropTypes.bool,
  secondary2: PropTypes.bool,
  secondary3: PropTypes.bool,
  primary1: PropTypes.bool,
  primary2: PropTypes.bool,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.any,
  underlayColor: PropTypes.string,
  raised: PropTypes.bool,
  textStyle: NativeText.propTypes.style,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  activityIndicatorStyle: ViewPropTypes.style,
  loadingRight: PropTypes.bool,
  Component: PropTypes.any,
  borderRadius: PropTypes.number,
  large: PropTypes.bool,
  iconRight: PropTypes.bool,
  fontWeight: PropTypes.string,
  disabledStyle: ViewPropTypes.style,
  fontFamily: PropTypes.string,
  containerViewStyle: ViewPropTypes.style,
  rounded: PropTypes.bool,
  outline: PropTypes.bool,
  transparent: PropTypes.bool,
  allowFontScaling: PropTypes.bool,
  textNumberOfLines: PropTypes.number,
  textEllipsizeMode: PropTypes.string,
};

const stylesObject = {
  container: {
    backgroundColor: 'transparent',
    marginLeft: 15,
    marginRight: 15,
  },
  button: {
    padding: 15,
    borderRadius: 4,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    color: 'white',
    fontSize: normalize(18),
  },
};

const styles = StyleSheet.create(stylesObject);

export default Button;
