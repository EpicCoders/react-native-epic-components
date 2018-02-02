import React from 'react';
import FormInput from '../form/FormInput';
import PropTypes from 'prop-types';
import FormLabel from '../form/FormLabel';
import colors from '../config/colors';
import Icon from '../icons/Icon';
import ViewPropTypes from '../config/ViewPropTypes';
import { StyleSheet, View, Text as NativeText } from 'react-native';

const FormLogin = props => {
  const {
    success,
    label,
    icon,
    iconName,
    onSuccess,
  } = props;

  return (
    <View>
	    {
	      onSuccess ? (
	        <View>
	          <FormLabel
	            labelStyle={{}}>
	            {label}
	          </FormLabel>
	          <FormInput
	          	onSuccess={true}
	          	containerStyle={{}} />
	          <Icon
	            color={colors.green}
	            name='check-circle'
	            size={18}
	            style={styles.inputIcon}
	          />
	        </View>
	      ) : <View>
	            <FormLabel
	            	labelStyle={{}}>
	            	{label}
	            </FormLabel>
	            <FormInput />
	          </View>
	    }
	  </View>
  );
};

FormLogin.defaultProps = {
  success: false,
};

FormLogin.propTypes = {
  success: PropTypes.bool,
  label: PropTypes.string,
  icon : PropTypes.bool,
  iconName: PropTypes.string,
  onSuccess: PropTypes.bool,
};

const styles = StyleSheet.create({
  inputIcon: {
    position: 'absolute',
    right: 10,
    bottom: 0,
    padding: 10
  },
});

export default FormLogin;
