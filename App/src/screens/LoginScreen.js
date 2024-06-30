import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useRef, useState, useCallback} from 'react';
import {IMAGES} from '../../assets/constants/ImageConstant';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icons from '../../assets/Icons/Icons';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import {showMessage} from 'react-native-flash-message';
import {
  ValidateAnyInput,
  ValidateEmail,
} from '../Helpers/FormValidationHelpers';
import {titleStyle} from '../../assets/constants/styleContasts';
import DefaultWrap from '../wrappers/DefaultWrap';
import {sanitizeInputEmail} from '../Helpers/SanitizationHelpers';
import Text_Input_1 from '../common_components/text_inputs/Text_Input_1';
import WideButton from '../common_components/buttons/WideButton';
import {
  LoginPostApi,
  UpdateLocationPostApi,
} from '../network_storage_store/network_API/API';
import {saveLoginValue, saveToken} from '../../LocalDB/LocalDb';
import SuccessLottie from '../common_components/SuccessLottie';
import {useMyContext} from '../network_storage_store/context_store/MyProvider';
import LoadingModal from '../common_components/modals/LoadingModal';
import useGoogleAuth from '../hooks/useGoogleAuth';
import useFacebookAuth from '../hooks/useFacebookAuth';
import useNotificationDeviceKey from '../hooks/useNotificationDeviceKey';
const LoginScreen = ({navigation}) => {
  const {NotificationDeviceKey} = useNotificationDeviceKey();
  console.warn({NotificationDeviceKey});
  const [Loader, SetLoader] = useState(false);
  const {updateProfileData} = useMyContext();
  const inputRefs = [useRef(), useRef()];
  const [visible, setVisible] = useState(false);
  const ShowLoginSuccessModal = isDiscription => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
      if (isDiscription) {
        goToHome();
      } else {
        goToEditProfile();
      }
    }, 2000);
  };
  const handleNextFocus = index => {
    // console.log('handleNextFocus-->>', index);
    if (index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };

  const FormFileds = {
    Email: '',
    Password: '',
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
      // ???? Validateing Input and seting Error messages
      let Email = ValidateEmail(formData.Email);
      let Password = ValidateAnyInput(
        formData.Password,
        'Please Enter Password',
      );

      if (Email || Password) {
        handleErrorChange('Email', Email);
        handleErrorChange('Password', Password);
      } else {
        setFormDataError(FormFileds);
        const data = {
          email: formData.Email,
          password: formData.Password,
          device_key: NotificationDeviceKey,
        };
        const res = await LoginPostApi(data);

        if (res.status === 200) {
          saveLoginValue(true);
          await saveToken(res?.data?.data?.token);
          const isDiscription = await updateProfileData();
          ShowLoginSuccessModal(isDiscription);
          UpdateLocationPostApi();
        } else {
          showMessage({
            message: `Something Went Wrong! While Login! ${res?.data?.data}`,
            type: 'danger',
            titleStyle,
          });
        }
      }
    } catch (error) {
      console.log('error in Login', error);
    } finally {
      SetLoader(false);
    }
  };

  const goToHome = () => {
    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'DrawerGroup',
          state: {
            routes: [
              {
                name: 'TabGroup',
                state: {
                  routes: [
                    {
                      name: 'HomeGroup',
                      state: {
                        routes: [
                          {
                            name: 'HomeScreen',
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    });
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

  const {signIn: GoogleLogin} = useGoogleAuth(ShowLoginSuccessModal);
  const {FacebookLogin} = useFacebookAuth(ShowLoginSuccessModal);

  return (
    <DefaultWrap style={styles.mainView}>
      <Image
        resizeMode="contain"
        source={IMAGES.LOGO2}
        style={styles.imgstyle}
      />
      <View>
        <Text_Input_1
          FormObjName="Email"
          handleInputChange={handleInputChange}
          Value={sanitizeInputEmail(formData.Email)}
          Placeholder={'Email ID*'}
          IconCompo={
            <Icons.MaterialCommunityIcons
              name={'email'}
              size={responsiveHeightPixel(20)}
              color="#7A7A7A"
            />
          }
          Error={formDataError.Email}
          keyboardType={'email-address'}
          inputRef={inputRefs[0]} // Assign the ref for the first input
          onSubmitEditing={() => handleNextFocus(0)} // Focus on the second input
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
          inputRef={inputRefs[1]} // Assign the ref for the first input
          onSubmitEditing={() => handleNextFocus(1)} // Focus on the second input
          TextLimit={20}
          secureTextEntry={true}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('ForgotPasswordScreen')}
          style={{
            alignSelf: 'flex-end',
            marginVertical: responsiveHeightPixel(18),
          }}>
          <Text style={styles.forgotpassText}>Forgot Password?</Text>
        </TouchableOpacity>

        <WideButton
          isClicked={true}
          title={'Login'}
          onButtonPress={handleSubmit}
        />
        <Text style={styles.text_1}>New to Social?</Text>
        <WideButton
          onButtonPress={() => {
            navigation.navigate('SignUpScreen');
          }}
          title={'Create a New Account'}
        />
        {/* <Text style={styles.errorText}>
          Username and password do not match. If you are new please signup first
        </Text> */}
        <View style={styles.containter2}>
          <View style={styles.grayLine}></View>
          <Text style={styles.text_2}>Or login with</Text>
          <View style={styles.grayLine}></View>
        </View>
        <View style={styles.containter3}>
          <TouchableOpacity onPress={FacebookLogin}>
            <Image
              resizeMode="contain"
              source={IMAGES.FACEBOOK}
              style={styles.imgstyl2}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={GoogleLogin}>
            <Image
              resizeMode="contain"
              source={IMAGES.GOOGLE}
              style={styles.imgstyl2}
            />
          </TouchableOpacity>
        </View>
      </View>
      {visible ? (
        <SuccessLottie
          visible={visible}
          text={'You have logged in Successfully'}
        />
      ) : null}
      <LoadingModal isLoading={Loader} />
    </DefaultWrap>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  imgstyle: {
    height: responsiveHeightPixel(133),
    width: responsiveHeightPixel(133),
    alignSelf: 'center',
    marginVertical: responsiveHeightPixel(90),
  },
  imgstyl2: {
    height: responsiveHeightPixel(38),
    width: responsiveHeightPixel(40),
  },
  mainView: {
    flex: 1,
    paddingHorizontal: responsiveWidthPixel(18),
  },
  forgotpassText: {
    fontSize: responsiveFontSize(1.8),
    color: '#0000FF',
    fontWeight: '500',
  },
  text_1: {
    fontWeight: '600',
    color: '#000000',
    alignSelf: 'center',
    fontSize: responsiveFontSize(1.9),
    marginTop: responsiveHeightPixel(15),
  },

  errorText: {
    fontWeight: '600',
    color: '#C16266',
    alignSelf: 'center',
    fontSize: responsiveFontSize(1.5),
    paddingHorizontal: responsiveWidthPixel(40),
    textAlign: 'center',
  },
  containter2: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: responsiveHeightPixel(15),
  },
  grayLine: {flex: 1, height: 1, backgroundColor: '#707070', opacity: 0.5},
  text_2: {
    fontWeight: '500',
    color: '#000000',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: responsiveFontSize(1.7),
    marginBottom: responsiveWidth(2),
    marginTop: responsiveWidth(3),
    marginHorizontal: responsiveWidth(2),
  },
  containter3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: responsiveWidthPixel(120),
  },
});
