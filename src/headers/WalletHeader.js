import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/Card';
import Icon from '../icons/Icon';
import colors from '../config/colors';
import { StyleSheet, View, Text, Image } from 'react-native';

const WalletHeader = props => {
  const {
    headingIcon,
    heading,
    image,
    imageSize,
    valueBalance,
    valueExpenses,
    valueIncome,
    cardTitle,
  } = props;

	return (
		<View>
    <View style={styles.hero}>
      <View style={styles.topLine}>
        <View style={styles.topText}>
          <View style={styles.headingIcon}><Text style={styles.headingLetter} >{headingIcon}</Text></View>
          <Text style={styles.heading}>{heading}</Text>
        </View>
        <Icon
          color='#B3BFD0'
          name='chevron-right'
          size={15}
          marginRight={10}
        />
      </View>
      <View style={styles.balanceField}>
        <Image
          style={[WalletHeader.defaultProps.imageSize, imageSize && imageSize]}
          source={image}
        />
        <View style={styles.balanceTotal}>
          <Text style={styles.balanceTitle2}>Balance</Text>
          <Text style={styles.total}>{valueBalance}</Text>
        </View>
      </View>
    </View>
    <View style={styles.balance}>
      <View style={styles.expenses}>
        <Text style={styles.balanceTitle}>Expenses</Text>
        <View style={styles.balanceLine}>
          <Icon
            color='#FF4D46'
            name='arrow-up'
            size={13}
            marginRight={10}
          />
          <Text style={styles.expensesAmount}>{valueExpenses}</Text>
        </View>
      </View>
      <View style={styles.income}>
        <Text style={styles.balanceTitle}>Income</Text>
        <View style={styles.balanceLine}>
          <Icon
            color={colors.link}
            name='arrow-down'
            size={13}
            marginRight={10}
            marginLeft={10}
          />
          <Text style={styles.incomeAmount}>{valueIncome}</Text>
        </View>
      </View>
    </View>

    <View style={styles.myCard}>
      <Text style={styles.cardTitle}>{cardTitle}</Text>
      <Icon
        color='#B3BFD0'
        name='chevron-right'
        size={15}
        marginRight={10}
      />
    </View>
    </View>
  );
};

WalletHeader.defaultProps = {
  headingIcon: '',
  heading: '',
  valueExpenses: '',
  valueIncome: '',
  valueBalance: '',
  cardTitle: '',
  image: require('../images/balance.png'),
  imageSize: {width: 55, height: 55, justifyContent: 'center'}
};

WalletHeader.propTypes = {
  headingIcon: PropTypes.string,
  heading: PropTypes.string,
  valueExpenses: PropTypes.string,
  valueIncome: PropTypes.string,
  valueBalance: PropTypes.string,
  cardTitle: PropTypes.string,
};

const styles = StyleSheet.create({
  heading: {
    color: '#24272B',
    fontWeight: '500',
    fontSize: 22,
    marginLeft: 10,
    justifyContent: 'center',
  },
  headingLetter: {
  	color: '#fff',
  	fontWeight: '500',
    fontSize: 14,
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
  hero: {
    flexDirection: 'column',
  },
  topLine: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: colors.white,
  },
  topText: {
    flexDirection:'row',
    alignItems: 'center',
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
  balanceField: {
    height: 120,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#E9EFF7',
    borderTopWidth: 1,
    padding: 15,
    backgroundColor: colors.white,
  },
  total: {
    color: '#136EF1',
    fontSize: 28,
    fontWeight: '500',
    marginTop: 10,
  },
  myCard: {
    flexDirection: 'row',
    backgroundColor: '#F2F5FB',
    height: 55,
    justifyContent:'space-between',
    alignItems: 'center',
    padding: 15,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#3E4A59',
    opacity: 0.7,
  },
  balance: {
    flexDirection: 'row',
    height: 80,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#E9EFF7',
    paddingTop: 10,
    borderTopWidth: 1,
  },
  balanceTitle: {
    color: '#3E4A59',
    opacity: 0.7,
    fontSize: 12,
  },
  balanceTitle2: {
    color: '#3E4A59',
    opacity: 0.7,
    fontSize: 12,
    textAlign: 'right',
  },
  expenses: {
    borderRightWidth: 1,
    borderColor: '#E9EFF7',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 90,
  },
  balanceLine: {
    flexDirection: 'row',
  },
  income: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    height: 80,
  },
  expensesAmount: {
    color: '#24272B',
    fontSize: 20,
    fontWeight: '500',
  },
  incomeAmount: {
    color: '#24272B',
    fontSize: 20,
    fontWeight: '500',
  },
});

export default WalletHeader;