import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, View, Platform, Text as NativeText } from 'react-native';
import colors from '../config/colors';
import fonts from '../config/fonts';
import Text from '../text/Text';
import normalize from '../helpers/normalizeText';
import ViewPropTypes from '../config/ViewPropTypes';

const FormLabel = props => {
  const {
    containerStyle,
    labelStyle,
    error,
    children,
    fontFamily,
    ...attributes
  } = props; 
  if(error){
    labelStyle.color= '#FE4F68';
  } else {
    labelStyle.color= '#3E4A59';
  }
 
  return (
    <View
      style={[styles.container, containerStyle && containerStyle]}
      {...attributes}
    >
      <Text
        style={[
          styles.label,
          labelStyle && labelStyle,
          fontFamily && { fontFamily },
        ]}
      >
        {children}
      </Text>
    </View>
  );
};

FormLabel.defaultProps = {
  error: false,
};

FormLabel.propTypes = {
  containerStyle: ViewPropTypes.style,
  labelStyle: NativeText.propTypes.style,
  children: PropTypes.any,
  error: PropTypes.bool,
  fontFamily: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {},
  label: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15,
    marginBottom: 1,
    color: colors.grey3,
    fontSize: 13,
    opacity: 0.7,
    ...Platform.select({
      ios: {
        fontWeight: 'bold',
      },
      android: {
        ...fonts.android.bold,
      },
    }),
  },
});

export default FormLabel;