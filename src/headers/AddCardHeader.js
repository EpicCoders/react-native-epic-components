import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, Image } from 'react-native';

const AddCardHeader = props => {
  const {
    mainTitle,
    subTitle,
    image,
    imageSize,
  } = props;

  return (
    <View style={styles.header}>
      <Image
        style={[AddCardHeader.defaultProps.imageSize, imageSize && imageSize]}
        source={image}
      />
      <Text style={styles.mainTitle}>{mainTitle}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
    </View>
  );
};

AddCardHeader.defaultProps = {
  mainTitle: '',
  subTitle: '',
  image: require('../images/card.png'),
  imageSize: {width: 179, height: 123, marginTop: 20}
};

AddCardHeader.propTypes = {
  mainTitle: PropTypes.string,
  subTitle: PropTypes.string,
  valueTitle: PropTypes.string,
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainTitle: {
    fontSize: 17,
    marginTop: 15,
    color: '#24272B'
  },
  subTitle: {
    fontSize: 13,
    color: '#4B5461',
    marginTop: 8,
    marginBottom: 18,
    opacity: 0.7
  },
});

export default AddCardHeader;
