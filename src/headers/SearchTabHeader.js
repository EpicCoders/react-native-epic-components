import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icons/Icon';
import FormSearch from '../form/FormSearch'
import colors from '../config/colors';
import { StyleSheet, View, Text, ScrollView, Image, } from 'react-native';

const SearchTabHeader = props => {
  const {
    icon1Title,
    icon2Title,
    icon3Title,
  } = props;

  return (
  	<View>
	    <View style={styles.hero}>
        <FormSearch
          iconName='microphone'
          iconSearch='search'
        />

        <View style={styles.heroScan}>
          <Icon
            color={colors.white}
            name='barcode'
            size={25}
          />
          <Text style={styles.heading}>{icon1Title}</Text>
        </View>
        <View style={styles.heroScan}>
          <Icon
            color={colors.white}
            name='credit-card-alt'
            size={25}
          />
          <Text style={styles.heading}>{icon2Title}</Text>
        </View>
        <View style={styles.heroScan}>
          <Icon
            color={colors.white}
            name='usd'
            size={25}
          />
          <Text style={styles.heading}>{icon3Title}</Text>
        </View>
      </View>
	  </View>
  );
};

SearchTabHeader.defaultProps = {
  icon1Title: '',
  icon2Title: '',
  icon3Title: '',
};

SearchTabHeader.propTypes = {
  icon1Title: PropTypes.string,
  icon2Title: PropTypes.string,
  icon3Title: PropTypes.string,
};

const styles = StyleSheet.create({
  heading: {
    color: '#fff',
    marginTop: 10,
    fontSize: 12,
  },
  hero: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 210,
    backgroundColor: '#3083FF',
    flexDirection: 'row',
  },
  heroScan: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {},
  button: {
    marginTop: 15,
  },
  title: {
    textAlign: 'center',
    color: '#5e6977'
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  titleStyle: {
    color: colors.tabTextDefault,
    fontSize: 12,
    textAlign: 'center',
    marginLeft: 0,
  },
});

export default SearchTabHeader;