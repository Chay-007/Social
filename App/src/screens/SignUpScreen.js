import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useRef, useState, useCallback} from 'react';
import {IMAGES} from '../../assets/constants/ImageConstant';
import {
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Icons from '../../assets/Icons/Icons';
import {showMessage} from 'react-native-flash-message';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import DefaultWrap from '../wrappers/DefaultWrap';
import KeyboardAvoidingWrapper from '../wrappers/KeyboardAvoidingWrapper';
import {
  ValidateAnyInput,
  ValidateEmail,
  ValidateName,
  ValidatePhoneNumber,
} from '../Helpers/FormValidationHelpers';
import {
  sanitizeInputChar,
  sanitizeInputEmail,
  sanitizeInputNumber,
} from '../Helpers/SanitizationHelpers';
import Text_Input_1 from '../common_components/text_inputs/Text_Input_1';
import WideButton from '../common_components/buttons/WideButton';
import {
  SignUpPostApi,
  UpdateLocationPostApi,
} from '../network_storage_store/network_API/API';
import {saveToken} from '../../LocalDB/LocalDb';
import SuccessLottie from '../common_components/SuccessLottie';
import LoadingModal from '../common_components/modals/LoadingModal';
import {useMyContext} from '../network_storage_store/context_store/MyProvider';
import useNotificationDeviceKey from '../hooks/useNotificationDeviceKey';
const SignUpScreen = ({navigation}) => {
  const {NotificationDeviceKey} = useNotificationDeviceKey();
  const [Loader, SetLoader] = useState(false);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];
  const {updateProfileData} = useMyContext();

  const handleNextFocus = index => {
    // console.log('handleNextFocus-->>', index);
    if (index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };

  const FormFileds = {
    Username: '',
    Email: '',
    PhoneNumber: '',
    Password: '',
  };

  const [formData, setFormData] = useState(FormFileds);
  const [visible, setVisible] = useState(false);
  const ShowLoginSuccessModal = () => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
      goToEditProfile();
    }, 2000);
  };
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
      // ???? Validateing Input and seting Error messages
      let Username = ValidateAnyInput(
        formData.Username,
        'Please Enter Username!',
        'Please Enter Valid Username!',
      );
      let Email = ValidateEmail(sanitizeInputEmail(formData.Email));
      // let PhoneNumber = ValidatePhoneNumber(
      //   sanitizeInputNumber(formData.PhoneNumber),
      // );
      let Password = ValidateAnyInput(
        formData.Password,
        'Please Enter Password',
      );

      if (
        Username ||
        //  || PhoneNumber
        Email ||
        Password
      ) {
        handleErrorChange('Username', Username);
        handleErrorChange('Email', Email);
        // handleErrorChange('PhoneNumber', PhoneNumber);
        handleErrorChange('Password', Password);
      } else {
        setFormDataError(FormFileds);
        const data = {
          mobile_number: sanitizeInputNumber(formData.PhoneNumber),
          name: formData.Username,
          email: sanitizeInputEmail(formData.Email),
          password: formData.Password,
          device_key: NotificationDeviceKey,
        };

        const res = await SignUpPostApi(data);
        if (res.status === 200) {
          await saveToken(res?.data?.data?.token);
          updateProfileData();
          ShowLoginSuccessModal();
          UpdateLocationPostApi();
        } else {
          showMessage({
            message: `Something Went Wrong! While Createing Account! ${res?.data?.message}`,
            type: 'danger',
          });
          handleErrorChange('Email', res?.data?.data?.email);
          handleErrorChange('PhoneNumber', res?.data?.data?.mobile_number);
        }
      }
    } catch (error) {
      console.warn('ERROR IN SIGNUP');
    } finally {
      SetLoader(false);
    }
  };

  const goToEditProfile = () => {
    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'EditProfile',
          params: {type: 'one'},
        },
      ],
    });
  };

  return (
    <DefaultWrap style={styles.mainView}>
      <KeyboardAvoidingWrapper>
        <View>
          <Image
            resizeMode="contain"
            source={IMAGES.LOGO2}
            style={styles.imgstyle}
          />

          <Text style={styles.lightStyle}>Hello User!</Text>
          <Text style={styles.boldStyle}>Signup For Better Experience</Text>
          <View>
            <Text_Input_1
              FormObjName="Username"
              handleInputChange={handleInputChange}
              Value={formData.Username}
              Placeholder={'Username*'}
              IconCompo={
                <Icons.Entypo
                  name={'user'}
                  size={responsiveHeightPixel(20)}
                  color="#7A7A7A"
                />
              }
              Error={formDataError.Username}
              inputRef={inputRefs[0]} // Assign the ref for the first input
              onSubmitEditing={() => handleNextFocus(0)} // Focus on the second input
              TextLimit={20}
            />

            <Text_Input_1
              // style={{marginTop: responsiveHeightPixel(36)}}
              FormObjName="Email"
              handleInputChange={handleInputChange}
              Value={sanitizeInputEmail(formData.Email)}
              Placeholder={'Email*'}
              IconCompo={
                <Icons.MaterialCommunityIcons
                  name={'email'}
                  size={responsiveHeightPixel(20)}
                  color="#7A7A7A"
                />
              }
              Error={formDataError.Email}
              keyboardType={'email-address'}
              inputRef={inputRefs[1]} // Assign the ref for the first input
              onSubmitEditing={() => handleNextFocus(1)} // Focus on the second input
              TextLimit={50}
            />

            <Text_Input_1
              FormObjName="Password"
              handleInputChange={handleInputChange}
              Value={formData.Password}
              Placeholder={'Password*'}
              IconCompo={
                <Icons.Fontisto
                  name={'locked'}
                  size={responsiveHeightPixel(20)}
                  color="#7A7A7A"
                />
              }
              Error={formDataError.Password}
              inputRef={inputRefs[2]} // Assign the ref for the first input
              onSubmitEditing={() => handleNextFocus(2)} // Focus on the second input
              TextLimit={20}
              secureTextEntry={true}
            />

            <Text_Input_1
              FormObjName="PhoneNumber"
              handleInputChange={handleInputChange}
              Value={sanitizeInputNumber(formData.PhoneNumber)}
              Placeholder={'Phone*'}
              IconCompo={
                <Icons.Ionicons
                  name={'call'}
                  size={responsiveHeightPixel(20)}
                  color="#7A7A7A"
                />
              }
              Error={formDataError.PhoneNumber}
              keyboardType={'numeric'}
              inputRef={inputRefs[3]} // Assign the ref for the first input
              onSubmitEditing={() => handleNextFocus(3)} // Focus on the second input
              TextLimit={10}
            />

            <WideButton
              style={{marginTop: responsiveHeightPixel(30)}}
              isClicked={true}
              title={'SIGNUP'}
              onButtonPress={handleSubmit}
            />
            <Text style={styles.boldStyle}>
              Already have an account? {''}
              <Text
                onPress={() => {
                  navigation.navigate('LoginScreen');
                }}
                style={[
                  styles.boldStyle,
                  {color: '#009B00', textDecorationLine: 'underline'},
                ]}>
                Sign In
              </Text>
            </Text>
          </View>
        </View>
        {visible ? (
          <SuccessLottie
            visible={visible}
            text={'Your Account Created Successfully'}
          />
        ) : null}
        <LoadingModal isLoading={Loader} />
      </KeyboardAvoidingWrapper>
    </DefaultWrap>
  );
};

export default SignUpScreen;
const styles = StyleSheet.create({
  imgstyle: {
    height: responsiveHeightPixel(133),
    width: responsiveHeightPixel(133),
    alignSelf: 'center',
    marginTop: responsiveHeightPixel(90),
    marginBottom: responsiveHeightPixel(18),
  },
  mainView: {
    flex: 1,
    paddingHorizontal: responsiveWidthPixel(18),
  },
  lightStyle: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: '500',
    color: '#009B00',
    alignSelf: 'center',
  },
  simpleStyle: {
    fontSize: responsiveFontSize(2),
    fontWeight: '400',
    color: '#656565',
    alignSelf: 'center',
    marginBottom: responsiveHeightPixel(50),
  },
  boldStyle: {
    fontSize: responsiveFontSize(1.9),
    fontWeight: '500',
    color: '#656565',
    alignSelf: 'center',
    marginBottom: responsiveHeightPixel(50),
  },
  forgotpassText: {
    fontSize: responsiveFontSize(1.8),
    color: '#000000',
    fontWeight: '500',
  },
  button: {
    width: responsiveHeight(2.5),
    height: responsiveHeight(2.5),
    borderRadius: responsiveHeight(0.3),
    borderColor: '#707070',
    borderWidth: responsiveHeight(0.2),
    alignSelf: 'center',
    marginRight: responsiveHeight(1),
  },
});
