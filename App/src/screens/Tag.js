import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  BackHandler,
  TouchableOpacity,
} from 'react-native';

import React, {useState, useEffect} from 'react';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Rectangularbox from '../common_components/Rectangularbox';
import {Spacer} from '../Helpers/spacer';
import {size} from '../Helpers/size';
import CustomDoneButton from '../common_components/CustomDoneButton';
import {updateSelectionById} from '../Helpers/CommonHelpers';
import Text_Input_2 from '../common_components/text_inputs/Text_Input_2';
import LoadingComponent from '../common_components/LoadingComponent';
import FakeDropdown_1 from '../common_components/dropdown_components/FakeDropdown_1';
import {useNavigation} from '@react-navigation/native';
import DefaultWrap from '../wrappers/DefaultWrap';
import {useMyContext} from '../network_storage_store/context_store/MyProvider';
import TagDropdown from '../common_components/dropdown_components/TagDropdown';
const Tag = ({
  List: Tags,
  setList: setTags,
  TagsLoader,
  formData,
  formDataError,
  handleInputChange,
  tabs,
  setTabs,
  InterestsOpen,
  getTags,
  TotalTagLength,
  isRefreshing,
  Categories,
  setMyList,
}) => {
  const [SelectedDropdown, setSelectedDropdown] = useState(0);

  const navigation = useNavigation();

  const {OnBackRef} = useMyContext();

  const backAction = () => {
    if (tabs == 2) {
      setTabs(1);
    } else {
      navigation.goBack();
    }
    return true;
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, [tabs]);

  OnBackRef.current = backAction;
  return (
    <View>
      <Spacer size={size.mid} />
      <View>
        <View style={{marginLeft: responsiveWidth(4)}}>
          <Rectangularbox
            onPress={() => setTabs(1)}
            heading={'Interests'}
            isSelected={tabs == 1}
          />
          <Rectangularbox
            onPress={() => setTabs(2)}
            heading={'Create a tag options'}
            isSelected={tabs == 2}
          />
        </View>
        <Spacer size={size.mid} />
        <View style={styles.horizontalLine}></View>

        {tabs == 1 && (
          <DefaultWrap>
            <Spacer size={size.mid} />
            {/* <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              {Tags.map(item => {
                return (
                  <>
                    <Pressable
                      onPress={() => {
                        const NewList = updateSelectionById(
                          Tags,
                          item.id,
                          !item.isSelected,
                        );
                        setTags(NewList);
                      }}
                      style={[
                        styles.ViewStyle,
                        {backgroundColor: item.isSelected ? 'gray' : 'white'},
                      ]}>
                      <Text
                        style={[
                          styles.textStyle,
                          {color: item.isSelected ? 'white' : 'black'},
                        ]}>
                        {item.name}
                      </Text>
                    </Pressable>
                  </>
                );
              })}
            </View> */}
            <FlatList
              contentContainerStyle={{
                alignSelf: 'center',
              }}
              data={Categories}
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
            <LoadingComponent
              Loader={TagsLoader || isRefreshing}
              style={{
                height: responsiveHeight(20),
                width: responsiveWidth(100),
              }}
            />
            {/* <TouchableOpacity
              style={{marginVertical: responsiveHeightPixel(12)}}
              onPress={getTags}>
              {TotalTagLength != Tags?.length &&
              !TagsLoader &&
              !isRefreshing ? (
                <Text style={[styles.textStyle]}>View More...</Text>
              ) : null}
            </TouchableOpacity> */}
          </DefaultWrap>
        )}
        {tabs == 2 && (
          <View
            style={{
              marginHorizontal: responsiveWidth(6),
              // alignSelf: 'center',
            }}>
            <Spacer size={size.mid} />
            <FakeDropdown_1
              // Disabled={!CanEdit}
              Placeholder2={'Category Name'}
              MainViewStyle={styles.TextInputView}
              Error={formDataError.CategoryID}
              SelectedLable={formData.Category}
              OpenBottomSheetFun={InterestsOpen}
            />
            <Text_Input_2
              FormObjName="TagName"
              handleInputChange={handleInputChange}
              Value={formData.TagName}
              Placeholder={'Tag Name'}
              Error={formDataError.TagName}
              TextLimit={400}
              style={[styles.TextInputView, {width: responsiveWidthPixel(146)}]}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default Tag;

const styles = StyleSheet.create({
  ViewStyle: {
    paddingVertical: responsiveHeight(1.5),
    paddingHorizontal: responsiveHeight(1.5),
    borderColor: '#7A7A7A',
    borderWidth: responsiveHeight(0.1),
    borderRadius: responsiveHeight(0.5),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginLeft: responsiveHeight(3),
    marginTop: responsiveHeight(2),
    width: responsiveWidthPixel(150),
    alignSelf: 'center',
  },
  textStyle: {
    color: 'black',
    fontSize: responsiveFontSize(1.9),
    fontWeight: '500',
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
  },
  horizontalLine: {
    height: responsiveHeight(0.1),
    width: responsiveWidth(85),
    backgroundColor: '#00000066',
    alignSelf: 'center',
  },
  TextInputView: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    width: null,
    height: responsiveHeightPixel(44),
  },
});
