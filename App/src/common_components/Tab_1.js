import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {IMAGES} from '../../assets/constants/ImageConstant';
import Icons from '../../assets/Icons/Icons';
import Text_Input_2 from './text_inputs/Text_Input_2';
import TagDropdown from './dropdown_components/TagDropdown';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import ImagePickerModal_1 from './modals/ImagePickerModal_1';
import useModal_1 from '../hooks/useModal_1';
import {Spacer} from '../Helpers/spacer';
import {size} from '../Helpers/size';
import Text_Input_5 from './text_inputs/Text_Input_5';
import LoadingComponent from './LoadingComponent';
const Tab_1 = ({
  formData,
  formDataError,
  handleInputChange,
  handleSubmit,
  inputRefs,
  handleNextFocus,
  Categories,
  setMyList,
  TagsLoader,
  CommunityProfileIMG,
}) => {
  const {
    Visible: ImagePickerVisible,
    onOpen: ImagePickerOpen,
    onClose: ImagePickerClose,
  } = useModal_1(false);
  const [SelectedDropdown, setSelectedDropdown] = useState(0);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.mainView}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: responsiveHeight(2),
            paddingRight: responsiveHeightPixel(12),
          }}>
          <View style={styles.profileContainer}>
            <Image
              source={
                formData.ProfilePhoto ||
                CommunityProfileIMG ||
                IMAGES.GROUPUSERSDEFAULT
              }
              resizeMode="cover"
              style={styles.imgstyle}
            />
            <TouchableOpacity
              onPress={ImagePickerOpen}
              style={styles.addButton}>
              <Icons.FontAwesome
                name={'plus'}
                color={'black'}
                size={responsiveWidth(3)}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              borderBottomWidth: responsiveHeight(0.1),
              borderColor: '#B5B5B5',
              height: responsiveHeightPixel(45),
              width: responsiveWidthPixel(230),
              alignItems: 'flex-start',
            }}>
            <Text_Input_5
              FormObjName="CommunityName"
              handleInputChange={handleInputChange}
              Value={formData.CommunityName}
              Placeholder={'Enter community name here'}
              multiline
              Error={formDataError.CommunityName}
              inputRef={inputRefs[0]} // Assign the ref for the first input
              onSubmitEditing={() => handleNextFocus(0)} // Focus on the second input
            />
          </View>
        </View>

        <Text style={styles.Text_1}>About</Text>
        <Text_Input_2
          FormObjName="About"
          handleInputChange={handleInputChange}
          Value={formData.About}
          TextArea
          Placeholder={'Enter your text here'}
          IconCompo={
            <Icons.MaterialIcons
              name={'message'}
              size={responsiveHeightPixel(20)}
              color="#7A7A7A"
            />
          }
          style={{height: responsiveHeightPixel(134)}}
          Error={formDataError.About}
          inputRef={inputRefs[1]} // Assign the ref for the first input
          onSubmitEditing={() => handleNextFocus(1)} // Focus on the second input
          TextLimit={400}
        />
        <Spacer size={size.mid} />

        <Text style={styles.Text_1}>Add tags</Text>
        {formDataError.Tags && (
          <Text style={styles.ErrorMsg}>{formDataError.Tags}</Text>
        )}
      </View>
      {TagsLoader ? (
        <LoadingComponent Loader={TagsLoader} />
      ) : (
        <FlatList
          data={Categories}
          scrollEnabled={false}
          contentContainerStyle={{flex: 1}}
          renderItem={({item, index}) => (
            <>
              <TagDropdown
                // data={tagnames}
                category={item.name}
                Categories={Categories}
                item={item}
                index={index}
                setMyList={setMyList}
                // Error={formDataError.Categories}
                SelectedDropdown={SelectedDropdown}
                setSelectedDropdown={setSelectedDropdown}
              />
            </>
          )}
        />
      )}

      {ImagePickerVisible ? (
        <ImagePickerModal_1
          visible={true}
          onRequestClose={ImagePickerClose}
          NumberOfImages={1}
          FormObjName="ProfilePhoto"
          handleInputChange={handleInputChange}
        />
      ) : null}
    </ScrollView>
  );
};

export default Tab_1;

const styles = StyleSheet.create({
  ErrorMsg: {
    color: 'red',
    fontSize: responsiveFontSize(1.6),
    marginTop: responsiveHeight(1),
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
  textinput: {
    height: responsiveHeightPixel(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileContainer: {
    alignSelf: 'center',
    marginVertical: responsiveHeightPixel(12),
    marginRight: responsiveHeight(1),
  },
  imgstyle: {
    height: responsiveHeightPixel(70),
    width: responsiveHeightPixel(70),
    borderRadius: responsiveHeightPixel(70 / 2),
    borderWidth: 1,
    borderColor: '#707070',
  },
  Text_1: {
    fontSize: responsiveFontSize(2.2),
    color: 'black',
    fontWeight: '600',
  },
  margins: {
    marginHorizontal: responsiveHeight(2),
    marginVertical: responsiveHeight(0),
  },
  mainView: {
    // marginHorizontal: responsiveHeight(2),
    marginVertical: responsiveHeight(0.5),
    paddingHorizontal: responsiveHeight(1.5),
    paddingVertical: responsiveHeight(1),
    borderTopLeftRadius: responsiveHeight(2),
    borderTopRightRadius: responsiveHeight(2),
    width: responsiveWidthPixel(351),
    alignSelf: 'center',
    backgroundColor: 'white',
    marginTop: responsiveHeight(1.5),
    paddingHorizontal: responsiveWidthPixel(12),
  },
});
