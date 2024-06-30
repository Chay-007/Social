import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  TextInput,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import CommonSwitch from '../Helpers/CommonSwitch';
import {Spacer} from '../Helpers/spacer';
import {size} from '../Helpers/size';
import Text_Input_2 from '../common_components/text_inputs/Text_Input_2';
import Text_Input_3 from '../common_components/text_inputs/Text_Input_3';
import Icons from '../../assets/Icons/Icons';
import {IMAGES} from '../../assets/constants/ImageConstant';
import CustomButton_1 from '../common_components/CustomButton_1';
import RadioComponent from '../Helpers/RadioComponent';
const Poll = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [SelectedOption, setSelectedOption] = useState();

  const handleClickFun = itemId => {
    setIsClicked(itemId === isClicked ? null : itemId);
  };
  surveyData = [
    {
      id: 1,
      name: 'Survey',
    },
    {
      id: 2,
      name: 'Poll',
    },
    {
      id: 3,
      name: 'Review',
    },
    {
      id: 4,
      name: 'Seek',
    },
  ];
  const DATA = [
    {id: '1', label: 'Select this option to add in a survey'},
    // { id: '2', label: 'My Circle' },
    // { id: '3', label: 'Community' },
    // { id: '4', label: 'Social', },
    // { id: '5', label: 'Only Me', },
  ];
  return (
    <View style={{marginHorizontal: responsiveHeight(0)}}>
      <Spacer size={size.mid} />

      <View>
        <CommonSwitch heading={'Create a Anonymous Poll'} />
        <Spacer size={size.mid} />

        <Text style={styles.midText}>Write a Description</Text>
        <Spacer size={size.sh} />
        <View style={styles.DescriptionStyle}>
          <TextInput
            placeholder="Enter your description here"
            style={styles.textinput2}
          />
        </View>
        <Spacer size={size.mid} />

        <Text style={styles.midText}>Write a question.*</Text>
        <Text_Input_2
          FormObjName="Education"
          Placeholder={'Enter your question here'}
          TextLimit={400}
        />
        <Text_Input_3
          icon={
            <Icons.Entypo
              name={'images'}
              size={18}
              style={{alignItems: 'center'}}
            />
          }
          Editable={false}
          FormObjName="Education"
          Placeholder={'Option 1'}
          TextLimit={400}
          crossicon={
            <Image
              source={IMAGES.CROSSICON}
              resizeMode="contain"
              style={styles.imgstyle4}
            />
          }
        />
        <Text_Input_3
          icon={
            <Icons.Entypo
              name={'images'}
              size={18}
              style={{alignItems: 'center'}}
            />
          }
          Editable={false}
          FormObjName="Education"
          Placeholder={'Option 2'}
          TextLimit={400}
          crossicon={
            <Image
              source={IMAGES.CROSSICON}
              resizeMode="contain"
              style={styles.imgstyle4}
            />
          }
        />
        <View style={{flexDirection: 'row'}}>
          <CustomButton_1
            label={'Add More Options  '}
            icon={
              <Icons.Entypo
                name={'plus'}
                size={20}
                style={{
                  alignItems: 'center',
                  marginHorizontal: responsiveHeight(0.5),
                }}
              />
            }
          />
          <CustomButton_1 label={'None'} style={styles.custombuttonstyle} />
        </View>
        <Spacer size={size.mid} />
        <CommonSwitch heading={'Allow Multiple Select'} />
        <Spacer size={size.mid} />

        <FlatList
          data={DATA}
          renderItem={({item}) => (
            <RadioComponent
              isWidth={true}
              item={item}
              selectedId={SelectedOption}
              onSelect={id => {
                setSelectedOption(SelectedOption == item.id ? null : item.id);
              }}
            />
          )}
        />

        {SelectedOption && (
          <Text_Input_3
            FormObjName="Education"
            Placeholder={'Type your answer here'}
            TextLimit={400}
            TextArea={true}
            style={{}}
          />
        )}
        <Spacer size={size.sh} />
        <View style={{flexDirection: 'row'}}>
          <CustomButton_1
            label={'Add More Options'}
            isBlack={true}
            icon={
              <Icons.Feather
                name={'tag'}
                size={20}
                style={{
                  alignItems: 'center',
                  marginHorizontal: responsiveHeight(0.5),
                }}
              />
            }
          />
          <CustomButton_1
            label={'Add a Person'}
            isBlack={true}
            icon={
              <Icons.Feather
                name={'user'}
                size={20}
                style={{
                  alignItems: 'center',
                  marginHorizontal: responsiveHeight(0.5),
                }}
              />
            }
            style={styles.custombuttonstyle}
          />
        </View>
      </View>

      {/* <View style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: responsiveHeight(0.1),
                    width: responsiveWidthPixel(320),
                }}>
                    <Text style={styles.midText}>What product or service are you reviewing?</Text>
                    <TextInput
                        placeholder={'Type...'}
                        style={{ width: responsiveWidth(80), }}

                    />
                </View> */}
    </View>
  );
};

export default Poll;

const styles = StyleSheet.create({
  horizontalLine: {
    height: responsiveHeight(0.1),
    width: responsiveWidth(80),
    backgroundColor: '#707070',
    alignSelf: 'center',
  },
  Button1: {
    // paddingHorizontal: responsiveHeight(1),
    paddingVertical: responsiveHeight(1.5),
    width: responsiveWidth(23),
    justifyContent: 'center',
    alignItems: 'center',
  },
  Button1Text: {
    fontSize: responsiveFontSize(2.1),
    marginHorizontal: responsiveHeight(1),
    fontWeight: '600',
  },
  VerticalLine: {
    height: responsiveHeight(3),
    width: responsiveWidth(0.2),
    backgroundColor: '#707070',
    alignSelf: 'center',
  },
  midText: {
    fontSize: responsiveFontSize(2.1),
    fontWeight: '400',
    color: 'black',
  },
  textinputStyle: {
    textDecorationLine: 'underline',
    width: responsiveWidthPixel(340),
  },
  textinput2: {
    paddingHorizontal: responsiveHeight(1),
    paddingVertical: responsiveHeight(1),
  },
  DescriptionStyle: {
    backgroundColor: '#F5F3F3',
    borderRadius: responsiveHeight(1),
    borderColor: '#7A7A7A',
    borderWidth: responsiveHeight(0.1),
    height: responsiveHeight(15),
  },
  imgstyle3: {
    height: responsiveHeightPixel(34),
    width: responsiveHeightPixel(34),
    borderRadius: responsiveHeightPixel(34 / 2),
    marginRight: responsiveHeightPixel(0),
  },
  imgstyle4: {
    height: responsiveHeightPixel(20),
    width: responsiveHeightPixel(20),
    borderRadius: responsiveHeightPixel(34 / 2),
    marginRight: responsiveHeightPixel(0),
  },
  custombuttonstyle: {
    width: responsiveWidthPixel(164),
    marginHorizontal: responsiveHeight(1.5),
    justifyContent: 'flex-start',
  },
});
