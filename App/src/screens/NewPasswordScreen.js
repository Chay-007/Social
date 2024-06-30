import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useRef, useState, useCallback} from 'react';
import {IMAGES} from '../../assets/constants/ImageConstant';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icons from '../../assets/Icons/Icons';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import {showMessage} from 'react-native-flash-message';
import {ValidateAnyInput} from '../Helpers/FormValidationHelpers';
import {titleStyle} from '../../assets/constants/styleContasts';
import KeyboardAvoidingWrapper from '../wrappers/KeyboardAvoidingWrapper';
import DefaultWrap from '../wrappers/DefaultWrap';
import Text_Input_1 from '../common_components/text_inputs/Text_Input_1';
import WideButton from '../common_components/buttons/WideButton';
import {ChangePasswordPostApi} from '../network_storage_store/network_API/API';
import LoadingModal from '../common_components/modals/LoadingModal';

const NewPasswordScreen = ({navigation, route}) => {
  const {email} = route.params;
  const inputRefs = [useRef(), useRef()];
  const [Loader, SetLoader] = useState(false);

  const handleNextFocus = index => {
    // console.log('handleNextFocus-->>', index);
    if (index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };

  const FormFileds = {
    Password: '',
    CPassword: '',
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
    // ???? Validateing Input and seting Error messages
    try {
      SetLoader(true);
      let Password = ValidateAnyInput(
        formData.Password,
        'Please Enter Password',
      );
      let CPassword = ValidateAnyInput(
        formData.CPassword,
        'Please Enter Confirm Password',
      );
      if (CPassword || Password) {
        handleErrorChange('CPassword', CPassword);
        handleErrorChange('Password', Password);
      } else {
        setFormDataError(FormFileds);
        if (formData.Password == formData.CPassword) {
          // setFormDataError(FormFileds);
          // navigation.navigate('LoginScreen')
          // return
          const data = {
            email: email,
            password: formData.Password,
            c_password: formData.CPassword,
          };
          const res = await ChangePasswordPostApi(data);
          if (res.status === 200) {
            navigation.navigate('LoginScreen');
            showMessage({
              message: `Password Reseted Sucessfully`,
              type: 'success',
              titleStyle,
            });
          } else {
            showMessage({
              message: res?.data?.data
                ? res?.data?.data
                : `Something Went Wrong! While Reseting Password!`,
              type: 'danger',
              titleStyle,
            });
          }
        } else {
          showMessage({
            message: `Password And Confirm Password Must Match!`,
            type: 'warning',
            titleStyle,
          });
        }
      }
    } catch (error) {
      console.warn('Something Went Wrong While Reseting PassWord');
    } finally {
      SetLoader(false);
    }
  };
  //   console.log(formData);
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
            source={IMAGES.FORGOTPASS3}
            style={styles.imgstyle}
          />

          <Text style={styles.lightStyle}>Create new password</Text>
          <Text style={styles.simpleStyle}>
            {`Your new password must be unique from those \npreviously used.`}
          </Text>
          <View>
            <Text style={styles.Title}>New Password</Text>
            <Text_Input_1
              style={{marginTop: 0}}
              FormObjName="Password"
              handleInputChange={handleInputChange}
              Value={formData.Password}
              Placeholder={'Enter Confirm Password*'}
              IconCompo={
                <Icons.Fontisto
                  name={'locked'}
                  size={responsiveHeightPixel(20)}
                  color="#7A7A7A"
                />
              }
              Error={formDataError.Password}
              inputRef={inputRefs[0]} // Assign the ref for the first input
              onSubmitEditing={() => handleNextFocus(0)} // Focus on the second input
              TextLimit={20}
              secureTextEntry={true}
            />

            <Text style={styles.Title}>Confirm Password</Text>

            <Text_Input_1
              style={{marginTop: 0}}
              FormObjName="CPassword"
              handleInputChange={handleInputChange}
              Value={formData.CPassword}
              Placeholder={'Enter Confirm Password*'}
              IconCompo={
                <Icons.Fontisto
                  name={'locked'}
                  size={responsiveHeightPixel(20)}
                  color="#7A7A7A"
                />
              }
              Error={formDataError.CPassword}
              inputRef={inputRefs[1]} // Assign the ref for the first input
              onSubmitEditing={() => handleNextFocus(1)} // Focus on the second input
              TextLimit={20}
              secureTextEntry={true}
            />

            <WideButton
              style={{marginTop: responsiveHeightPixel(50)}}
              isClicked={true}
              title={'Reset Password'}
              onButtonPress={handleSubmit}
            />
          </View>
        </View>
      </KeyboardAvoidingWrapper>
      <LoadingModal isLoading={Loader} />
    </DefaultWrap>
  );
};

export default NewPasswordScreen;

const styles = StyleSheet.create({
  imgstyle: {
    marginTop: responsiveHeightPixel(139),
    marginBottom: responsiveHeightPixel(70),
    height: responsiveHeightPixel(143),
    width: responsiveWidthPixel(194),
    alignSelf: 'center',
  },
  mainView: {
    flex: 1,
    marginHorizontal: responsiveWidthPixel(18),
    paddingTop: responsiveHeightPixel(30),
  },
  lightStyle: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: '700',
    color: 'black',
  },
  simpleStyle: {
    fontSize: responsiveFontSize(1.7),
    fontWeight: '400',
    color: 'black',
    marginBottom: responsiveHeightPixel(20),
  },
  forgotpassText: {
    fontSize: responsiveFontSize(1.8),
    color: '#000000',
    fontWeight: '500',
  },
  Title: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(1.8),
    marginLeft: responsiveWidth(3),
    marginVertical: responsiveHeight(0.8),
  },
});
