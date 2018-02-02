import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icons/Icon';
import colors from '../config/colors';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Pie } from 'react-native-pathjs-charts';

const BillingTab2Header = props => {
  const {
    heroTitle,
    heroSubtitle,
    data2,
    options,
  } = props;

  return (
  	<View>
    	<View style={styles.hero}>
        <View style={styles.heroText}>
          <Text style={styles.heroTitle}>{heroTitle}</Text>
          <Text style={styles.heroSubtitle}>{heroSubtitle}</Text>
        </View>
        <Pie
          data={data2}
          options={options}
          accessorKey="population" />
      </View>
    </View>
  );
};

BillingTab2Header.defaultProps = {
  heroTitle: '',
  heroSubtitle: '',
};

BillingTab2Header.propTypes = {
  heroTitle: PropTypes.string,
  heroSubtitle: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  titleStyle: {
    fontSize: 12,
    color: '#1566DF',
    borderRadius: 10,
    margin: 0,
    padding: 0,
    justifyContent: 'center',
    alignItems: 'center',

  },
  selectedTitleStyle: {
    backgroundColor: '#1566DF',
    height: 27,
    margin: 0,
    padding: 6,
    overflow: 'hidden',
    borderRadius: 3,
    justifyContent: 'center',
    color: 'white'
  },
  hero: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingLeft: 20,
    backgroundColor: '#F2F5FB',
  },
  heroText: {
    justifyContent:'center',
    alignItems:'center',
    position: 'absolute',
  },
  heroTitle: {
    fontSize: 20,
    color: '#24272B',
    fontWeight: '500',
  },
  heroSubtitle: {
    fontSize: 13,
    color: '#3E4A59',
    opacity: 0.7,
    marginTop: 5,
  },
  title: {
    textAlign: 'center',
    color: '#5e6977'
  }
});

export default BillingTab2Header;