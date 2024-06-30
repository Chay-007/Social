import {StyleSheet, View, Image, Text} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveHeight,
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import {IMAGES} from '../../assets/constants/ImageConstant';
import Icons from '../../assets/Icons/Icons';
import Icon_Text_comp_2 from '../common_components/Text_components.js/Icon_Text_comp_2';
import Text_Input_2 from '../common_components/text_inputs/Text_Input_2';
import Text_comp_1 from '../common_components/Text_components.js/Text_comp_1';
import GreenButton from '../common_components/buttons/GreenButton';
import Collapsible from 'react-native-collapsible';
import {useBloodGroupList} from '../hooks/useGetHooks';
const EditProfile_Tab_3 = ({
  handleInputChange,
  formData,
  formDataError,
  inputRefs,
  onSubmitEditing,
  handleNextFocus,
}) => {
  const {List: BloodGroupList} = useBloodGroupList();
  const [IsOpen, setIsOpen] = useState(false);

  return (
    <View style={styles.MainView}>
      <View
        style={{
          paddingHorizontal: responsiveHeightPixel(12),
          marginTop: responsiveHeightPixel(25),
        }}>
        <Icon_Text_comp_2
          onPress={() => {
            setIsOpen(prev => !prev);
          }}
          Icon2={
            <Icons.AntDesign
              name={IsOpen ? 'up' : 'down'}
              size={responsiveHeight(2.5)}
              color={'black'}
            />
          }
          Icon={
            <Image
              source={IMAGES.BLOODGROUP}
              resizeMode="contain"
              style={styles.imagestyle2}
            />
          }
          textStyle={{marginTop: 0}}
          Title={'Choose Your Blood Group*'}
        />
        {/* {IsOpen ? ( */}
        <Collapsible collapsed={!IsOpen}>
          <View
            style={styles.flatListContainer}
            // data={BloodGroupList}
            // renderItem={}
            // keyExtractor={(item, index) => index.toString()}
          >
            {BloodGroupList.map((item, index) => (
              <GreenButton
                Title={item}
                onPress={() => {
                  handleInputChange('BloodGroup', item);
                }}
                MainView={{
                  borderRadius: 7,
                  // width:responsiveWidth(10),
                  paddingHorizontal: responsiveWidthPixel(10),
                  borderColor:
                    formData.BloodGroup === item ? '#4DCF07' : '#EBEBEB',
                  borderWidth: responsiveHeight(0.1),
                  backgroundColor:
                    formData.BloodGroup === item ? '#F6FFF0' : '#EFEFEF',
                }}
              />
            ))}
          </View>
        </Collapsible>
        {formDataError.BloodGroup && (
          <Text style={styles.ErrorMsg}>{formDataError.BloodGroup}</Text>
        )}
        {/* ) : null} */}
      </View>
      <View style={styles.horizontalLine}></View>

      <View style={{paddingHorizontal: responsiveHeightPixel(12)}}>
        <Icon_Text_comp_2
          Icon={
            <Image
              source={IMAGES.EDUCATION}
              resizeMode="contain"
              style={styles.imagestyle2}
            />
          }
          textStyle={{marginTop: 0}}
          Title={'Education*'}
        />
        <Text_Input_2
          FormObjName="Education"
          handleInputChange={handleInputChange}
          Value={formData.Education}
          Placeholder={'Education*'}
          Error={formDataError.Education}
          inputRef={inputRefs[2]}
          onSubmitEditing={() => handleNextFocus(2)}
          // TextLimit={400}
        />
      </View>
      <View style={styles.horizontalLine}></View>
      <View style={{paddingHorizontal: responsiveHeightPixel(12)}}>
        <Icon_Text_comp_2
          Icon={
            <Image
              source={IMAGES.PROFESSION}
              resizeMode="contain"
              style={styles.imagestyle2}
            />
          }
          textStyle={{marginTop: 0}}
          Title={'Profession*'}
        />
        <Text_Input_2
          FormObjName="Profession"
          handleInputChange={handleInputChange}
          Value={formData.Profession}
          Placeholder={'Profession*'}
          Error={formDataError.Profession}
          inputRef={inputRefs[3]}
          onSubmitEditing={() => handleNextFocus(3)}
          // TextLimit={400}
        />
      </View>
      <Text_comp_1
        Title={'Or'}
        textStyle={{
          fontWeight: '400',
          alignSelf: 'center',
          marginTop: responsiveHeightPixel(12),
        }}
      />
      <View style={{paddingHorizontal: responsiveHeightPixel(12)}}>
        <Text_Input_2
          FormObjName="LinkedInLink"
          handleInputChange={handleInputChange}
          Value={formData.LinkedInLink}
          Placeholder={'Add LinkedIn Profile'}
          Error={formDataError.LinkedInLink}
          inputRef={inputRefs[4]}
          // onSubmitEditing={() => handleNextFocus(2)}
          // TextLimit={400}
          style={{marginBottom: responsiveHeight(6.5)}}
        />
      </View>
    </View>
  );
};

export default EditProfile_Tab_3;

const styles = StyleSheet.create({
  ErrorMsg: {
    color: 'red',
    fontSize: responsiveFontSize(1.6),
    marginLeft: responsiveWidthPixel(26),
    marginTop: responsiveHeightPixel(10),
  },
  Text_1: {
    color: 'black',
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
    marginTop: responsiveHeightPixel(20),
    alignSelf: 'center',
  },
  Text_2: {
    color: '#000000',
    fontSize: responsiveFontSize(2),
    fontWeight: '600',
    // marginTop:responsiveHeightPixel(59),
    alignSelf: 'center',
  },
  Text_3: {
    color: '#000000',
    fontSize: responsiveFontSize(1.8),
    fontWeight: '500',
  },
  MainView: {
    alignSelf: 'center',
    width: responsiveWidth(93.5),
    // paddingHorizontal:responsiveWidthPixel(15),
    minHeight: responsiveHeightPixel(544),
  },
  profileContainer: {
    alignSelf: 'center',
    marginVertical: responsiveHeightPixel(12),
    marginRight: responsiveHeight(1),
  },
  imgstyle: {
    height: responsiveHeightPixel(90),
    width: responsiveHeightPixel(90),
    borderRadius: responsiveHeightPixel(90 / 2),
    borderWidth: 1,
    borderColor: '#707070',
  },
  addButton: {
    height: responsiveHeightPixel(19),
    width: responsiveHeightPixel(19),
    borderRadius: responsiveHeightPixel(19 / 2),
    borderWidth: 1,
    borderColor: '#707070',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: responsiveWidth(1),
    right: responsiveWidth(1),
    backgroundColor: 'white',
  },
  SubView1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: responsiveHeight(2),
  },
  imagestyle2: {
    height: responsiveHeightPixel(18),
    width: responsiveWidthPixel(18),
    marginRight: responsiveHeight(1),
  },
  flatListContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  horizontalLine: {
    height: responsiveHeight(0.5),
    width: '100%',
    backgroundColor: '#F5F5F5',
    alignSelf: 'center',
    marginVertical: responsiveHeight(2.5),
  },
});

const BloodGroupConst = [
  {
    name: 'A+',
    id: 1,
  },
  {
    name: 'AB+',
    id: 2,
  },
  {
    name: 'B-',
    id: 3,
  },
  {
    name: 'O+',
    id: 4,
  },
  {
    name: 'A-',
    id: 5,
  },

  {
    name: 'AB-',
    id: 6,
  },
  {
    name: 'B+',
    id: 7,
  },
  {
    name: 'B-',
    id: 8,
  },
];
