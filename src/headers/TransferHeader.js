import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icons/Icon';
import colors from '../config/colors';
import { StyleSheet, View, Text, ScrollView, Image, } from 'react-native';

const TransferHeader = props => {
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

TransferHeader.defaultProps = {
  headingIcon: '',
  headerTitle: '',
  headerSubtitle: '',
};

TransferHeader.propTypes = {
  headingIcon: PropTypes.string,
  headerTitle: PropTypes.string,
  headerSubtitle: PropTypes.string,
};

const styles = StyleSheet.create({
 	header: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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

export default TransferHeader;
