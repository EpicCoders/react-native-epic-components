import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icons/Icon';
import colors from '../config/colors';
import { StyleSheet, View, Text } from 'react-native';

const TransactionTabHeader = props => {
  const {
    headingIcon,
    heading,

  } = props;

  return (
  	<View>
    	<View style={styles.hero}>
          <View style={styles.topLine}>
            <View style={styles.topText}>
              <View style={styles.headingIcon}><Text style={styles.headingLetter} >{headingIcon}</Text></View>
              <Text style={styles.heading2}>{heading}</Text>
            </View>
            <Icon
              color='#B3BFD0'
              name='chevron-right'
              size={18}
            />
          </View>
          <View style={styles.iconsLine}>
            <View style={styles.heroScan}>
              <Icon
                color={colors.link}
                name='barcode'
                size={25}
              />
              <Text style={styles.heading}>Scan</Text>
            </View>
            <View style={styles.heroScan}>
              <Icon
                color={colors.green}
                name='credit-card-alt'
                size={25}
              />
              <Text style={styles.heading}>Card</Text>
            </View>
            <View style={styles.heroScan}>
              <Icon
                color={colors.yellow}
                name='usd'
                size={25}
              />
              <Text style={styles.heading}>Balance</Text>
            </View>
          </View>
        </View>

        <View style={styles.myTransaction}>
          <Text style={styles.transactionTitle}>Transaction</Text>
          <View style={styles.rightContent}>
            <Text style={styles.rightText}>All</Text>
            <Icon
              color='#B3BFD0'
              name='chevron-right'
              size={15}
              marginRight={15}
            />
          </View>
        </View>
    </View>
  );
};

TransactionTabHeader.defaultProps = {
  headingIcon: '',
  heading: '',
};

TransactionTabHeader.propTypes = {
  headingIcon: PropTypes.string,
  heading: PropTypes.string,
};

const styles = StyleSheet.create({
  heading: {
    color: '#3E4A59',
    marginTop: 10,
    fontSize: 12,
    opacity: 0.7,
  },
  headingLetter: {
  	color: '#fff',
  	fontWeight: '600',
    fontSize: 14,
  },
  hero: {
    height: 220,
    backgroundColor: '#fff',
    flexDirection: 'column',
    borderBottomWidth: 10,
    borderColor: '#F2F5FB',
  },
  iconsLine: {
    flexDirection: 'row',
    paddingTop: 30,
  },
  heroScan: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topLine: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 25,
    backgroundColor: colors.white,
  },
  topText: {
    flexDirection:'row',
    alignItems: 'center',
  },
  heading2: {
    color: '#24272B',
    fontWeight: '500',
    fontSize: 28,
    marginLeft: 15,
    justifyContent: 'center',
  },

  headingIcon: {
    width: 40,
    height: 40,
    justifyContent:'center',
    alignItems: 'center',
    display: 'flex',
    borderRadius: 33,
    backgroundColor: colors.yellow,
  },
  myTransaction: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    height: 50,
    marginLeft: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#F2F5FB'
  },
  rightContent: {
    flexDirection: 'row',
  },
  rightText: {
    fontSize: 13,
    color: '#4B5461',
    opacity: 0.5,
    padding: 5,
    justifyContent: 'center'
  },
  transactionTitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#3E4A59',
    opacity: 0.7,
    justifyContent: 'center'
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

export default TransactionTabHeader;
