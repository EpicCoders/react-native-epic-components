import React from 'react';
import PropTypes from 'prop-types';
import colors from '../config/colors';
import Icon from '../icons/Icon';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

const ProfileMenuHeader = props => {
  const {
    headingIcon,
    heading,
    icon1Title,
    icon2Title,
    icon3Title,
    icon4Title,
    icon5Title,
    icon6Title,
  } = props;

  return (
  	<View>
	    <View style={styles.hero}>
	      <View style={styles.headingIcon}><Text style={styles.headingLetter} >{headingIcon}</Text></View>
	      <Text style={styles.heading}>{heading}</Text>
	    </View>

	    <View style={styles.menuSection}>
	      <View style={styles.heroScan}>
	        <Icon
	          color={colors.blue}
	          name='barcode'
	          size={25}
	        />
	        <Text style={styles.iconTitle}>{icon1Title}</Text>
	      </View>
	      <View style={styles.heroScan}>
	        <Icon
	          color={colors.blue}
	          name='credit-card-alt'
	          size={25}
	        />
	        <Text style={styles.iconTitle}>{icon2Title}</Text>
	      </View>
	      <View style={styles.heroScan}>
	        <Icon
	          color={colors.blue}
	          name='usd'
	          size={25}
	        />
	        <Text style={styles.iconTitle}>{icon3Title}</Text>
	      </View>
	    </View>

	    <View style={styles.menuSection2}>
	      <View style={styles.heroScan}>
	        <Icon
	          color={colors.blue}
	          name='arrows-alt'
	          size={25}
	        />
	        <Text style={styles.iconTitle}>{icon4Title}</Text>
	      </View>
	      <View style={styles.heroScan}>
	        <Icon
	          color={colors.blue}
	          name='line-chart'
	          size={25}
	        />
	        <Text style={styles.iconTitle}>{icon5Title}</Text>
	      </View>
	      <View style={styles.heroScan}>
	        <Icon
	          color={colors.blue}
	          name='star'
	          size={25}
	        />
	        <Text style={styles.iconTitle}>{icon6Title}</Text>
	      </View>
	    </View>
	  </View>
  );
};

ProfileMenuHeader.defaultProps = {
  headingIcon: '',
  heading: '',
  icon1Title: '',
  icon2Title: '',
  icon3Title: '',
  icon4Title: '',
  icon5Title: '',
  icon6Title: '',
};

ProfileMenuHeader.propTypes = {
  headingIcon: PropTypes.string,
  heading: PropTypes.string,
  icon1Title: PropTypes.string,
  icon2Title: PropTypes.string,
  icon3Title: PropTypes.string,
  icon4Title: PropTypes.string,
  icon5Title: PropTypes.string,
  icon6Title: PropTypes.string,
};

const styles = StyleSheet.create({
  heading: {
    color: '#24272B',
    marginTop: 18,
    fontWeight: '500',
    fontSize: 22,
    marginBottom: 100,
  },
  headingIcon: {
    borderRadius: 33,
    justifyContent:'center',
    alignItems: 'center',
    display: 'flex',
    width: 60,
    height: 60,
    marginTop: 20,
    backgroundColor: colors.yellow,
  },
  headingLetter: {
  	color: '#fff',
  	fontWeight: '600',
    fontSize: 20,
  },
  hero: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: 30,
    height: 350,
  },
  menuSection: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#D3DFEF',
    height: 100,
  },
  menuSection2: {
    flexDirection: 'row',
    height: 100,
  },
  heroScan: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#D3DFEF',
    borderRightWidth: 1,
  },
  iconTitle: {
    color: '#3E4A59',
    opacity: 0.7,
    marginTop: 10,
    fontSize: 11,
    fontWeight: '500',
  },
});

export default ProfileMenuHeader;