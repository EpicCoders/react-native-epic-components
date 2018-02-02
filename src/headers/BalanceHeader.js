import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icons/Icon';
import colors from '../config/colors';
import { StyleSheet, View, Text } from 'react-native';

const BalanceHeader = props => {
  const {
    headingIcon,
    heading,
    valueExpenses,
    valueIncome,
  } = props;

  return (
  	<View>
    	<View style={styles.hero}>
        <View style={styles.headingIcon}><Text style={styles.headingLetter} >{headingIcon}</Text></View>
        <Text style={styles.heading}>{heading}</Text>
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
    </View>
  );
};

BalanceHeader.defaultProps = {
  headingIcon: '',
  heading: '',
  valueExpenses: '',
  valueIncome: '',
};

BalanceHeader.propTypes = {
  headingIcon: PropTypes.string,
  heading: PropTypes.string,
  valueExpenses: PropTypes.string,
  valueIncome: PropTypes.string,
};

const styles = StyleSheet.create({
  heading: {
    color: '#fff',
    marginTop: 18,
    fontWeight: '500',
    fontSize: 20,
  },
  headingLetter: {
  	color: '#fff',
  	fontWeight: '500',
    fontSize: 20,
  },
  headingIcon: {
    width: 60,
    height: 60,
    justifyContent:'center',
    alignItems: 'center',
    display: 'flex',
    borderRadius: 33,
    backgroundColor: '#4189ff',
  },
  hero: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: 30,
    backgroundColor: '#3083FF',
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
  balance: {
    flexDirection: 'row',
    height: 90,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderBottomWidth: 10,
    borderColor: '#E9EFF7',
    paddingTop: 10,
  },
  balanceTitle: {
    color: '#3E4A59',
    opacity: 0.7,
    fontSize: 12,
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
  },
  incomeAmount: {
    color: '#24272B',
    fontSize: 20,
  },
});

export default BalanceHeader;
