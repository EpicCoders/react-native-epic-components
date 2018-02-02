import React from 'react';
import PropTypes from 'prop-types';
import Button from '../buttons/Button';
import { StyleSheet, View, Text, Image } from 'react-native';

const LandingHeader = props => {
  const {
    mainTitle,
    image,
    imageSize,
  } = props;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={[LandingHeader.defaultProps.imageSize, imageSize && imageSize]}
          source={image}
        />
        <Text style={styles.mainTitle}>{mainTitle}</Text>
      </View>

    </View>
  );
};

LandingHeader.defaultProps = {
  mainTitle: '',
  image: require('../images/logo.png'),
  imageSize: {width: 66, height: 73, marginTop: 120}
};

LandingHeader.propTypes = {
  mainTitle: PropTypes.string,
  valueTitle: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    display: 'flex',
  },
  header: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainTitle: {
    fontSize: 28,
    marginTop: 15,
    color: '#fff'
  },

});

export default LandingHeader;
