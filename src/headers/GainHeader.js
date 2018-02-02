import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icons/Icon';
import colors from '../config/colors';
import GainLine from '../charts/GainLine';
import { StockLine } from 'react-native-pathjs-charts';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

const GainHeader = props => {
  const {
    valueExpenses,
    valueIncome,
    percentExpenses,
    percentIncome,
    percentTransfer,
    percentOther,
    data,
    data2,
    data3,
    options,
    options2,
  } = props;

  return (
  	<View>
  	 	<View style={styles.hero}>
        <View style={styles.heading}>
          <Text style={styles.titleGrid}>8-09</Text>
          <Text style={[styles.titleGridColor]}>8-10</Text>
          <Text style={styles.titleGrid}>8-11</Text>
          <Text style={styles.titleGrid}>8-12</Text>
        </View>
        <View>
          <GainLine data={data} options={options} xKey='x' yKey='y' />
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
      <ScrollView>
        <View style={styles.gainChart}>
          <View style={styles.chartRow}>
            <View style={[styles.chartStyle, styles.colorPink]}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.chartText}>Expenses</Text>
                <Text style={styles.chartText2}>{percentExpenses}</Text>
              </View>
              <View>
                <StockLine data={data2} options={options2} xKey='x' yKey='y' />
              </View>
            </View>
            <View style={[styles.chartStyle, styles.colorBlue]}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.chartText}>Income</Text>
                <Text style={styles.chartText2}>{percentIncome}</Text>
              </View>
              <View>
                <StockLine data={data3} options={options2} xKey='x' yKey='y' />
              </View>
            </View>
          </View>
          <View style={styles.chartRow}>
            <View style={[styles.chartStyle, styles.colorYellow]}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.chartText}>Transfer</Text>
                <Text style={styles.chartText2}>{percentTransfer}</Text>
              </View>
              <View>
                <StockLine data={data2} options={options2} xKey='x' yKey='y' />
              </View>
            </View>
            <View style={[styles.chartStyle, styles.colorGray]}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.chartText}>Other</Text>
                <Text style={styles.chartText2}>{percentOther}</Text>
              </View>
              <View>
                <StockLine data={data2} options={options2} xKey='x' yKey='y' />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

GainHeader.defaultProps = {
  valueExpenses: '',
  valueIncome: '',
  percentExpenses: '',
  percentIncome: '',
  percentTranfer: '',
  percentOther: '',
};

GainHeader.propTypes = {
  valueExpenses: PropTypes.string,
  valueIncome: PropTypes.string,
  percentExpenses: PropTypes.string,
  percentIncome: PropTypes.string,
  percentTranfer: PropTypes.string,
  percentOther: PropTypes.string,
};

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
  },
  titleGrid: {
    fontSize: 12,
    color: '#3E4A59',
    opacity: 0.7,
  },
  titleGridColor: {
    color: colors.link,
    fontSize: 12,
  },
  hero: {
    flexDirection: 'column',
    paddingTop: 20,
    height: 270,
    backgroundColor: '#F2F5FB',
  },
  gainChart: {
    flexDirection: 'column',
    margin: 10,
  },
  chartRow: {
    flexDirection: 'row',
  },
  chartStyle: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    height: 110,
    flex: 1,
    margin: 8,
    backgroundColor: colors.blue,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'transparent',
    overflow:  'hidden',
  },
  chartText: {
    padding: 10,
    color: colors.white,
    marginTop: 5,
    fontWeight: '500',
  },
  chartText2: {
    color: colors.white,
    padding: 10,
    fontSize: 20,
    fontWeight: '500',
  },
  colorPink: {
    backgroundColor: colors.pink,
  },
  colorBlue: {
    backgroundColor: colors.blue,
  },
  colorYellow: {
    backgroundColor: colors.yellow,
  },
  colorGray: {
    backgroundColor: '#515F71',
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
    fontWeight: '500',
  },
  incomeAmount: {
    color: '#24272B',
    fontSize: 20,
    fontWeight: '500',
  },
});

export default GainHeader;