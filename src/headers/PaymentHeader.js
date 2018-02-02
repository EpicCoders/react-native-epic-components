import React from 'react';
import FormInput from '../form/FormInput';
import FormLabel from '../form/FormLabel';
import FormRow from '../form/FormRow';
import List from '../list/List';
import PropTypes from 'prop-types';
import ListItem from '../list/ListItem'
import colors from '../config/colors';
import Button from '../buttons/Button';
import Icon from '../icons/Icon';
import {StyleSheet, View, Text, ScrollView, Image,} from 'react-native';

const PaymentHeader = props => {
  const {
    label1,
    content1,
    label1Value,
    label2,
    content2,
    label3,
    content3,
  } = props;

  return (
  	<View>
	    <ScrollView style={{backgroundColor: 'white'}}>
        <View style={styles.header}>
          <View style={styles.headingIcon}>
            <Icon
              color={colors.white}
              height= {24}
              width= {24}
              name='coffee'
            />
          </View> 
        </View>
        <List>
          <ListItem
            title={label1}
            subtitle={content1}
            titleStyle={{color: '#4B5461', fontSize: 13, opacity: 0.5}}
            subtitleStyle={{color: '#24272B', opacity: 1, fontSize: 16, fontWeight: '500'}}
            marginRight={20}
            rightTitle={label1Value}
            rightTitleStyle={{color: colors.green, fontSize: 24, fontWeight: '500'}}
          >
          </ListItem>
          <ListItem
            title={label2}
            subtitle={content2}
            titleStyle={{color: '#4B5461', fontSize: 13, opacity: 0.5}}
            subtitleStyle={{color: '#24272B', opacity: 1, fontSize: 16, fontWeight: '500'}}
            marginRight={20}
            rightTitle={<Icon
              color='#B3BFD0'
              height= {10}
              width= {10}
              name='chevron-right'
              size={16}
            />}
          >
          </ListItem>
          
          <ListItem
            title={label3}
            subtitle={content3}
            titleStyle={{color: '#4B5461', fontSize: 13, opacity: 0.5}}
            subtitleStyle={{color: '#24272B', opacity: 1, fontSize: 16, fontWeight: '500'}}
            marginRight={20}
            rightTitle={<Icon
              color='#B3BFD0'
              height= {10}
              width= {10}
              name='chevron-right'
              size={16}
            />}
          >
          </ListItem>
        </List>
        <View style={styles.buttons}>
          <Button 
            buttonStyle={styles.buttonCreditStyle}
            title={<View style={styles.buttonCredit}><Icon
              color='#8795A8'
              name='credit-card'
              size={20}
            /><Text style={styles.textCredit}>Credit Card</Text></View>}
            />
          <Button 
            buttonStyle={styles.buttonPayPalStyle}
            title={<View style={styles.buttonPayPal}><Icon
              color='#2F80F6'
              name='paypal'
              size={20}
            /><Text style={styles.textPayPal}>PayPal</Text></View>}
            />
        </View>

        <View style={styles.information}>
          <View style={styles.informationText}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.footerTitle}>Email Address </Text>
              <Text style={{color: 'red'}}>*</Text>
            </View>
            <Text style={styles.footerSubtitle}>We will send the purchase receipt to the address.</Text>
          </View>
          <FormInput
            inputStyle={{borderWidth: 1, borderColor: '#8795A8', width: 335,padding: 15, borderRadius: 5 }} />

          <View style={styles.informationText}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.footerTitle}>First Name </Text>
              <Text style={{color: 'red'}}>*</Text>
            </View>
            <Text style={styles.footerSubtitle}>We will use this to personalize your account experience.</Text>
          </View>
          <FormInput
            inputStyle={{borderWidth: 1, borderColor: '#8795A8', width: 335,padding: 15, borderRadius: 5 }} />
            
          <View style={styles.informationText}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.footerTitle}>Last Name </Text>
              <Text style={{color: 'red'}}>*</Text>
            </View>
            <Text style={styles.footerSubtitle}>We will use this to personalize your account experience.</Text>
          </View>
          <FormInput
            inputStyle={{borderWidth: 1, borderColor: '#8795A8', width: 335,padding: 15, borderRadius: 5 }} />    
          
          <Button 
            buttonStyle={{marginTop: 30}}
            title='Place your order' 
             />
        </View>
      </ScrollView>
	  </View>
  );
};

PaymentHeader.defaultProps = {
  label1: '',
  content1: '',
  label1Value: '',
  label2: '',
  content2: '',
  label3: '',
  content3: '',
};

PaymentHeader.propTypes = {
  label1: PropTypes.string,
  content1: PropTypes.string,
  label1Value: PropTypes.string,
  label2: PropTypes.string,
  content2: PropTypes.string,
  label3: PropTypes.string,
  content3: PropTypes.string,
};

const styles = StyleSheet.create({

  header: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
    marginLeft: 30,
    padding: 40,
    borderBottomWidth: 2,
    borderColor: '#F2F5FB',
  },
  headingIcon: {
    backgroundColor: colors.white,
    borderRadius: 33,
    overflow: 'hidden',
    padding: 20,
    backgroundColor: colors.lightBlue,
  },
  information: {
    height: 550,
    backgroundColor: '#F2F5FB',
    marginTop: 30,
  },
  informationText: {
    padding: 20,
  },
  footerTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#3E4A59',
    opacity: 0.8,
  },
  footerSubtitle: {
    fontSize: 11,
    color: '#4B5461',
    opacity: 0.7,
    marginTop: 5,
  },
  buttonCredit: {
    flexDirection: 'row',
    height: 20,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonPayPal: {
    flexDirection: 'row',
    height: 20,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonPayPalStyle: {
    marginTop: 30, 
    flex: 1, 
    width: 150,
    paddingTop: 20,
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: 'transparent', 
    borderWidth: 1, 
    borderColor: '#2F80F6',
  },
  buttonCreditStyle: {
    marginTop: 30, 
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1, 
    paddingTop: 20,
    borderRadius: 10,
    width: 150, 
    backgroundColor: 'transparent', 
    borderWidth: 1, 
    borderColor: '#8795A8',
  },
  textCredit: {
    color: '#3E4A59',
    fontSize: 15,
    opacity: 0.7,
    marginLeft: 5,
    fontWeight: '500',
  },
  textPayPal: {
    color: '#2F80F6',
    fontSize: 15,
    marginLeft: 5,
    fontWeight: 'bold',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
});

export default PaymentHeader;
