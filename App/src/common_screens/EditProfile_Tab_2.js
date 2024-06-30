import {StyleSheet, Text, View, FlatList} from 'react-native';
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
import TagDropdown from '../common_components/dropdown_components/TagDropdown';
const EditProfile_Tab_2 = ({setMyList, Categories, index, formDataError}) => {
  const [SelectedDropdown, setSelectedDropdown] = useState(0);

  return (
    <View style={styles.MainView}>
      <Text style={styles.Text_2}>Select Your Interests*</Text>
      {formDataError.Interests ? (
        <Text style={styles.ErrorMsg}>{formDataError.Interests}</Text>
      ) : null}
      <>
        {Categories.map((item, index) => (
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
        ))}
        {/* <FlatList
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
        /> */}
      </>
    </View>
  );
};

export default EditProfile_Tab_2;

const styles = StyleSheet.create({
  ErrorMsg: {
    color: 'red',
    fontSize: responsiveFontSize(1.6),
    marginLeft: responsiveWidthPixel(12),
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
    fontSize: responsiveFontSize(2.1),
    fontWeight: 'bold',
    marginTop: responsiveHeightPixel(25),
    paddingHorizontal: responsiveWidthPixel(12),
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
    justifyContent: 'space-between', // You can adjust the justification based on your preference
    // Adjust the padding as needed
  },
  horizontalLine: {
    height: responsiveHeight(0.5),
    width: responsiveWidth(90),
    backgroundColor: '#F5F5F5',
    alignSelf: 'center',
    marginVertical: responsiveHeight(2.5),
  },
});
