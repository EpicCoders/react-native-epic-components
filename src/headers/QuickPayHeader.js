import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icons/Icon';
import colors from '../config/colors';
import { StyleSheet, View, Text, ScrollView, Image, } from 'react-native';

const QuickPayHeader = props => {
  const {
    headingIcon,
    headerTitle,
    headerSubtitle,
  } = props;

  return (
  	<View style={styles.header}>
	    <View style={styles.headingIcon}><Text style={styles.headingLetter} >{headingIcon}</Text></View>
	    <Text style={styles.headerTitle}>{headerTitle}</Text>
	    <Text style={styles.headerSubtitle}>{headerSubtitle}</Text>
	  </View>
  );
};

QuickPayHeader.defaultProps = {
  headingIcon: '',
  headerTitle: '',
  headerSubtitle: '',
};

QuickPayHeader.propTypes = {
  headingIcon: PropTypes.string,
  headerTitle: PropTypes.string,
  headerSubtitle: PropTypes.string,
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 10,
    borderColor: '#F2F5FB',
    padding: 18,
    backgroundColor: colors.white,
  },
  headingIcon: {
    borderRadius: 33,
    justifyContent:'center',
    alignItems: 'center',
    display: 'flex',
    width: 60,
    height: 60,
    marginTop: 20,
    backgroundColor: colors.lightBlue,
  },
  headingLetter: {
  	color: '#fff',
  	fontWeight: '600',
    fontSize: 20,
  },
  payment: {
    borderTopWidth: 10,
    borderColor: '#F2F5FB',
  },
  headerTitle: {
    fontSize: 17,
    marginTop: 15,
    color: '#24272B'
  },
  headerSubtitle: {
    fontSize: 13,
    color: '#4B5461',
    marginTop: 8,
    marginBottom: 18,
    opacity: 0.7
  },
});

export default QuickPayHeader;