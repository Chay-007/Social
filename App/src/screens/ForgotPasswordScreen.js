import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState, useCallback} from 'react';
import {IMAGES} from '../../assets/constants/ImageConstant';
import {
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Icons from '../../assets/Icons/Icons';
import DefaultWrap from '../wrappers/DefaultWrap';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import {titleStyle} from '../../assets/constants/styleContasts';
import {generateOTP} from '../Helpers/CommonHelpers';
import {ValidateEmail} from '../Helpers/FormValidationHelpers';
import {showMessage} from 'react-native-flash-message';
import {sanitizeInputEmail} from '../Helpers/SanitizationHelpers';
import Text_Input_1 from '../common_components/text_inputs/Text_Input_1';
import WideButton from '../common_components/buttons/WideButton';
import KeyboardAvoidingWrapper from '../wrappers/KeyboardAvoidingWrapper';
import {SendOtpPostApi} from '../network_storage_store/network_API/API';
import LoadingModal from '../common_components/modals/LoadingModal';

const ForgotPasswordScreen = ({navigation}) => {
  const [Loader, SetLoader] = useState(false);

  const FormFileds = {
    Email: '',
  };

  const [formData, setFormData] = useState(FormFileds);

  const [formDataError, setFormDataError] = useState(FormFileds);

  // Event handler to update the form data
  const handleInputChange = useCallback((name, value) => {
    setFormData(prevFormData => ({...prevFormData, [name]: value}));
  }, []);

  const handleErrorChange = useCallback((name, value) => {
    setFormDataError(prevFormData => ({...prevFormData, [name]: value}));
  }, []);
  const handleSubmit = async () => {
    try {
      SetLoader(true);
      let Email = ValidateEmail(sanitizeInputEmail(formData.Email));
      if (Email) {
        handleErrorChange('Email', Email);
      } else {
        setFormDataError(FormFileds);
        const otp = generateOTP();
        const data = {
          email: sanitizeInputEmail(formData.Email),
          otp: otp,
        };
        const res = await SendOtpPostApi(data);
        if (res.status === 200) {
          navigation.navigate('OtpVerivicationScreen', {data});
        } else {
          showMessage({
            message: `Something Went Wrong!\n While Sending OTP!\n ${res?.data?.data}`,
            type: 'danger',
            titleStyle,
          });
        }
      }
    } catch (error) {
      console.warn('Something Went Wrong While Sending OTP');
    } finally {
      SetLoader(false);
    }
  };

  return (
    <DefaultWrap>
      <KeyboardAvoidingWrapper>
        <View style={styles.mainView}>
          <Text
            style={styles.simpleStyle}
            onPress={() => {
              navigation.goBack();
            }}>
            {'<<Back'}
          </Text>
          <Image
            resizeMode="cover"
            source={IMAGES.FORGOTPASS1}
            style={styles.imgstyle}
          />

          <Text style={styles.lightStyle}>Forgot Password</Text>
          <Text style={styles.simpleStyle}>
            {`Don't worry! It occurs. Please enter the email \naddress linked with your account`}
          </Text>
          <View>
            <Text style={styles.text_1}>Email Id</Text>
            <Text_Input_1
              FormObjName="Email"
              handleInputChange={handleInputChange}
              Value={sanitizeInputEmail(formData.Email)}
              Placeholder={'Enter your email'}
              IconCompo={
                <Icons.MaterialCommunityIcons
                  name={'email'}
                  size={responsiveHeightPixel(20)}
                  color="#7A7A7A"
                />
              }
              Error={formDataError.Email}
              keyboardType={'email-address'}
              TextLimit={50}
            />

            <WideButton
              style={{marginVertical: responsiveHeightPixel(25)}}
              isClicked={true}
              title={'Send Code'}
              onButtonPress={handleSubmit}
            />

            <View style={{flexDirection: 'row'}}>
              <View style={styles.horizontalLine}></View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('LoginScreen')}>
                <Text style={styles.forgotpassText}>Back to Login</Text>
              </TouchableOpacity>
              <View style={styles.horizontalLine}></View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingWrapper>
      <LoadingModal isLoading={Loader} />
    </DefaultWrap>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  imgstyle: {
    height: responsiveHeightPixel(149),
    width: responsiveHeightPixel(141),
    alignSelf: 'center',
    marginTop: responsiveHeightPixel(194 - 60),
    marginBottom: responsiveHeightPixel(103),
  },

  mainView: {
    flex: 1,
    marginHorizontal: responsiveWidthPixel(18),
    paddingTop: responsiveHeightPixel(25),
  },
  lightStyle: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: '700',
    color: 'black',
  },
  simpleStyle: {
    fontSize: responsiveFontSize(1.8),
    fontWeight: '400',
    color: 'black',
    marginTop: responsiveHeightPixel(10),
    marginBottom: responsiveHeightPixel(30),
  },
  text_1: {
    fontSize: responsiveFontSize(1.8),
    fontWeight: 'bold',
    color: 'black',
    // marginTop:responsiveHeightPixel(10),
    // marginBottom:responsiveHeightPixel(30),
  },
  forgotpassText: {
    fontSize: responsiveFontSize(1.7),
    color: '#000000',
    fontWeight: '400',
  },
  button: {
    borderRadius: responsiveHeight(0.2),
    borderColor: '#707070',
    height: responsiveHeightPixel(27),
    width: responsiveWidthPixel(101),
    borderWidth: responsiveHeight(0.2),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  horizontalLine: {
    height: responsiveHeight(0.2),
    // width: responsiveHeight(13),
    flex: 1,
    marginHorizontal: responsiveHeight(1),
    backgroundColor: '#707070',
    alignSelf: 'center',
    opacity: 0.5,
  },
});
