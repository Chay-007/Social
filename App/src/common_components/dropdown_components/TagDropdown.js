import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import Icons from '../../../assets/Icons/Icons';
import GreenButton from '../buttons/GreenButton';
import {responsiveWidthPixel} from '../../Helpers/ResponsivePixel';
import {useGetCommunityTags} from '../../hooks/useGetHooks';
import Collapsible from 'react-native-collapsible';

const TagDropdown = ({
  onPress,
  item,
  data,
  style,
  image,
  category,
  name,
  setMyList,
  Categories,
  Error,
  SelectedDropdown,
  setSelectedDropdown,
}) => {
  const MainCategoryId = item.id;
  const OPENCONDITION = SelectedDropdown == item?.id;

  return (
    <>
      <View style={[styles.mainView, style]}>
        <Pressable
          onPress={() => {
            if (OPENCONDITION) {
              setSelectedDropdown(0);
            } else {
              setSelectedDropdown(item.id);
            }
          }}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: 'white',
            paddingVertical: responsiveHeight(1),
          }}>
          <View style={{flexDirection: 'row'}}>
            {image}
            <Text style={styles.Text_1}>{category}</Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              if (OPENCONDITION) {
                setSelectedDropdown(0);
              } else {
                setSelectedDropdown(item.id);
              }
            }}>
            <Icons.AntDesign
              name={OPENCONDITION ? 'up' : 'down'}
              size={responsiveHeight(2.5)}
              color={'black'}
            />
          </TouchableOpacity>
        </Pressable>
        <Collapsible
          collapsed={!OPENCONDITION}
          style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {item?.tag.map((item, index) => (
            <GreenButton
              Title={item.name}
              onPress={async () => {
                const UpdatedList = await updateSubcategorySelection(
                  Categories,
                  MainCategoryId,
                  item.id,
                  !item?.isSelected,
                );
                setMyList(UpdatedList);
              }}
              MainView={{
                borderColor: item?.isSelected ? '#4DCF07' : '#EBEBEB',
                borderWidth: responsiveHeight(0.1),
                backgroundColor: item?.isSelected ? '#F6FFF0' : '#EFEFEF',
              }}
            />
          ))}
        </Collapsible>
      </View>
      {Error ? (
        <Text
          style={{
            fontSize: responsiveFontSize(1.6),
            color: 'red',
          }}>
          {Error}
        </Text>
      ) : null}
    </>
  );
};

export default TagDropdown;

const styles = StyleSheet.create({
  Text_1: {
    fontSize: responsiveFontSize(2),
    fontWeight: '500',
    color: 'black',
  },
  mainView: {
    marginVertical: responsiveHeight(0.5),
    paddingHorizontal: responsiveHeight(0.5),
    paddingVertical: responsiveHeight(1),
    borderBottomWidth: 3,
    borderColor: '#F1F1F1',
    paddingBottom: responsiveHeight(2),
    paddingHorizontal: responsiveWidthPixel(12),
    width: responsiveWidthPixel(351),
  },
  flatListContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between', // You can adjust the justification based on your preference
    // Adjust the padding as needed
  },
});

export function updateSubcategorySelection(
  categories,
  categoryId,
  subcategoryId,
  isSelected,
) {
  // Create a deep copy of the categories array to avoid modifying the original data
  const updatedCategories = JSON.parse(JSON.stringify(categories));

  // Find the category with the specified ID
  const categoryToUpdate = updatedCategories.find(
    category => category.id === categoryId,
  );

  // Update the isSelected property of the subcategory if found
  if (categoryToUpdate) {
    const subcategoryToUpdate = categoryToUpdate.tag.find(
      subcategory => subcategory.id === subcategoryId,
    );

    if (subcategoryToUpdate) {
      subcategoryToUpdate.isSelected = isSelected;
    }
  }

  return updatedCategories;
}
