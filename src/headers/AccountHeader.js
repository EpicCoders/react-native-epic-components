import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';

const AccountHeader = props => {
  const {
    mainTitle,
    subTitle,
    valueTitle,
  } = props;

  return (
    <View style={styles.hero}>
      <View style={styles.mainLine}>
        <Text style={styles.title}>{mainTitle}</Text>
      </View>
      <View style={styles.subLine}>
        <Text style={styles.title}>{subTitle}</Text>
        <Text style={styles.valueTitle}> {valueTitle}</Text>
      </View>
    </View>
  );
};

AccountHeader.defaultProps = {
  mainTitle: '',
  subTitle: '',
  valueTitle: '',
};

AccountHeader.propTypes = {
  mainTitle: PropTypes.string,
  subTitle: PropTypes.string,
  valueTitle: PropTypes.string,
};

const styles = StyleSheet.create({
  hero: {
    justifyContent: 'flex-end',
    padding: 15,
    height: 180,
    backgroundColor: '#373F4A',
  },
  mainLine: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexDirection: 'column',
  },
  subLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  title: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '300',
  },
  valueTitle: {
    color:'#fff',
    fontSize: 22,
    marginTop: 10,
    fontWeight: '500',
  },
});

export default AccountHeader;