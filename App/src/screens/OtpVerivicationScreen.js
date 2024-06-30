import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState, useCallback} from 'react';
import {IMAGES} from '../../assets/constants/ImageConstant';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import {titleStyle} from '../../assets/constants/styleContasts';
import {generateOTP} from '../Helpers/CommonHelpers';
import {showMessage} from 'react-native-flash-message';
import DefaultWrap from '../wrappers/DefaultWrap';
import {sanitizeInputEmail} from '../Helpers/SanitizationHelpers';
import WideButton from '../common_components/buttons/WideButton';
import OTPDisplay from '../common_components/OTP_components/OTPTimerHelper';
import OTPDesign from '../common_components/OTP_components/OTPDesign';
import {SendOtpPostApi} from '../network_storage_store/network_API/API';
import LoadingModal from '../common_components/modals/LoadingModal';
import KeyboardAvoidingWrapper from '../wrappers/KeyboardAvoidingWrapper';

const OtpVerivicationScreen = ({navigation, route}) => {
  const [Loader, SetLoader] = useState(false);
  const [formData, setFormData] = useState(route.params.data);
  const [formDataError, setFormDataError] = useState();

  // Event handler to update the form data
  const handleInputChange = useCallback((name, value) => {
    setFormData(prevFormData => ({...prevFormData, [name]: value}));
  }, []);

  const handleErrorChange = useCallback((name, value) => {
    setFormDataError(prevFormData => ({...prevFormData, [name]: value}));
  }, []);

  const clearGenteratedOTP = async () => {
    handleInputChange('otp', '');
  };

  const handleResend = async () => {
    try {
      SetLoader(true);
      const otp = generateOTP();
      const data = {
        email: sanitizeInputEmail(formData.email),
        otp: otp,
      };
      const res = await SendOtpPostApi(data);
      if (res.status === 200) {
        handleInputChange('otp', otp);
        showMessage({
          message: `Otp Resended Sucessfully`,
          type: 'success',
          titleStyle,
        });
      } else {
        showMessage({
          message: `Something Went Wrong! While Sending Code! ${res?.data?.data}`,
          type: 'danger',
          titleStyle,
        });
      }
    } catch (error) {
      console.warn('Something Went Wrong While Resending OTP');
    } finally {
      SetLoader(false);
    }
  };

  const AfterOTPfilled = async code => {
    handleInputChange('TypedOtp', code);
  };

  const handleSubmit = async () => {
    if (formData.otp == formData.TypedOtp) {
      navigation.replace('NewPasswordScreen', {
        email: sanitizeInputEmail(formData.email),
      });
    } else {
      showMessage({
        message: formData.TypedOtp
          ? `Please Enter Valid OTP`
          : `Please Enter OTP`,
        type: 'danger',
        titleStyle,
      });
    }
  };

  // console.log(formData)
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
          resizeMode="contain"
          source={IMAGES.FORGOTPASS2}
          style={styles.imgstyle}
        />

        <Text style={styles.lightStyle}>OTP Verification</Text>
        <Text style={styles.simpleStyle}>
          Enter the verification code we just sent on your email address.
        </Text>

        {formData?.otp ? (
          <OTPDesign
            AfterOTPfilled={AfterOTPfilled}
            onChange={AfterOTPfilled}
          />
        ) : null}

        {/* <OTP Timer Display /> */}

        {formData?.otp ? (
          <OTPDisplay
            handleSubmit={handleResend}
            clearGenteratedOTP={clearGenteratedOTP}
          />
        ) : null}

        {formData?.otp ? (
          <WideButton
            style={{marginTop: responsiveHeight(2)}}
            isClicked={true}
            title={'Verify'}
            onButtonPress={handleSubmit}
          />
        ) : null}

        {!formData?.otp ? (
          <TouchableOpacity
            onPress={handleResend}
            style={{alignSelf: 'center'}}>
            <Text
              style={{
                fontSize: responsiveFontSize(1.8),
                color: '#000000',
              }}>
              Didn't received code?{' '}
              <Text style={{fontWeight: '600'}}>Resend</Text>{' '}
            </Text>
          </TouchableOpacity>
        ) : null}
      </View>
      <LoadingModal isLoading={Loader}/>
      </KeyboardAvoidingWrapper>
    </DefaultWrap>
  );
};

export default OtpVerivicationScreen;
const styles = StyleSheet.create({
  imgstyle: {
    height: responsiveHeightPixel(171),
    width: responsiveWidthPixel(200),
    alignSelf: 'center',
    marginTop: responsiveHeightPixel(194 - 100),
    marginBottom: responsiveHeightPixel(96),
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
    fontSize: responsiveFontSize(1.9),
    fontWeight: '400',
    color: 'black',
    marginTop: responsiveHeightPixel(10),
    marginBottom: responsiveHeightPixel(30),
  },
  forgotpassText: {
    fontSize: responsiveFontSize(1.8),
    color: '#000000',
    fontWeight: '500',
  },
});
