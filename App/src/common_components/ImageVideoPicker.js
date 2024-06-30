import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import DefaultWrap from '../wrappers/DefaultWrap';
import Icons from '../../assets/Icons/Icons';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import FastImage from 'react-native-fast-image';
import useImageVideoPicker from '../hooks/useImageVideoPicker';
import useModal_1 from '../hooks/useModal_1';
import ModalWithOptions from './modals/ModalWithOptions';
import ImageGalleryFilterOptions from './modals/ImageGalleryFilterOptions';

function ImageVideoPickerHeader({
  MultiSelection,
  SetMultiSelection,
  onCamera,
  onRequestClose,
  onVideoFolder,
  MultiImage,
  AllAlbums,
  SetSelectedAlbum,
  SelectedAlbum,
}) {
  const {
    Visible: FilterVisible,
    onOpen: FilterOpen,
    onClose: FilterClose,
  } = useModal_1(false);
  return (
    <>
      <View style={styles.HeaderContainer_3}>
        <View style={styles.HeaderContainer_1}>
          <TouchableOpacity style={{flex: 1}} onPress={onRequestClose}>
            <Icons.Entypo
              name={'cross'}
              color={'black'}
              size={responsiveWidth(8)}
            />
          </TouchableOpacity>
          <Text style={styles.Header}>New post</Text>
          <View
            style={[
              styles.HeaderContainer_1,
              {
                columnGap: responsiveWidth(2),
                flex: 1,
                justifyContent: 'flex-end',
              },
            ]}>
            {onVideoFolder ? (
              <TouchableOpacity onPress={onVideoFolder}>
                <Icons.Entypo
                  name={'folder-video'}
                  color={'black'}
                  size={responsiveWidth(8)}
                />
              </TouchableOpacity>
            ) : null}
            <TouchableOpacity onPress={onCamera}>
              <Icons.Entypo
                name={'camera'}
                color={'black'}
                size={responsiveWidth(8)}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.HeaderContainer_1}>
          <TouchableOpacity
            style={styles.OptionsContainer}
            onPress={FilterOpen}>
            <Text style={styles.Test_1}>{SelectedAlbum || 'Gallery'}</Text>
            <Icons.MaterialIcons
              name={'keyboard-arrow-down'}
              color={'black'}
              size={responsiveWidth(6)}
            />
          </TouchableOpacity>
          {MultiImage ? (
            <TouchableOpacity
              style={[styles.OptionsContainer, styles.GrayButton]}
              onPress={() => {
                SetMultiSelection(!MultiSelection);
              }}>
              <Icons.Ionicons
                name={!MultiSelection ? 'images' : 'image'}
                color={'black'}
                size={responsiveWidth(5)}
              />
              <Text style={styles.Test_2}>
                Select {!MultiSelection ? `multiple` : `single`}
              </Text>
            </TouchableOpacity>
          ) : (
            <View></View>
          )}
        </View>
      </View>
      <ImageGalleryFilterOptions
        List={AllAlbums}
        SelectedOption={SelectedAlbum}
        SetSelectedOption={SetSelectedAlbum}
        visible={FilterVisible}
        onRequestClose={FilterClose}
        MainView={styles.FilterView}
      />
    </>
  );
}

const ImageVideoPicker = ({
  onCamera,
  onGallerySubmit,
  onRequestClose,
  onVideoFolder,
  MultiImage,
  MimeTypes,
}) => {
  const AllProps = useImageVideoPicker(MimeTypes);
  const {
    Images,
    MultiSelection,
    SelectedImageVideos,
    handleImageVideoSelection,
    getSelectedImagesVideos,
  } = AllProps;

  const SelectedImageVideosOnly = getSelectedImagesVideos();
  return (
    <DefaultWrap style={styles.MainStyle}>
      <ImageVideoPickerHeader
        {...AllProps}
        onCamera={onCamera}
        onRequestClose={onRequestClose}
        onVideoFolder={onVideoFolder}
        MultiImage={MultiImage}
      />
      <View style={styles.ImagesContainer}>
        <FlatList
          numColumns={3}
          contentContainerStyle={{gap: 1}}
          data={Images}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.ImageStyle}
              onPress={() => {
                if (MultiSelection) {
                  if (!!SelectedImageVideos[item?.node?.id]) {
                    handleImageVideoSelection(item?.node?.id, false);
                  } else {
                    handleImageVideoSelection(item?.node?.id, item.node.image);
                  }
                } else {
                  onGallerySubmit([item.node.image]);
                }
              }}>
              <FastImage
                resizeMode="cover"
                source={item.node.image}
                style={[styles.ImageStyle, {width: '100%'}]}
              />
              {MultiSelection && SelectedImageVideos[item?.node?.id] ? (
                <View style={styles.TickMarkContainer}>
                  <Icons.Feather
                    name={'check'}
                    color={'white'}
                    size={responsiveWidth(4.5)}
                  />
                </View>
              ) : null}
            </TouchableOpacity>
          )}
        />
      </View>
      {MultiSelection && SelectedImageVideosOnly.length ? (
        <TouchableOpacity
          style={[styles.OptionsContainer, styles.AddButton]}
          onPress={() => {
            onGallerySubmit(SelectedImageVideosOnly);
          }}>
          <Text style={styles.Test_2}>OK</Text>
        </TouchableOpacity>
      ) : null}
    </DefaultWrap>
  );
};

export default ImageVideoPicker;

const styles = StyleSheet.create({
  MainStyle: {
    paddingTop: responsiveHeight(1),
  },
  Header: {
    color: 'black',
    fontSize: responsiveFontSize(2.2),
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  Test_1: {
    color: 'black',
    fontSize: responsiveFontSize(2.3),
  },
  Test_2: {
    color: 'black',
    fontSize: responsiveFontSize(1.8),
    fontWeight: '500',
  },
  HeaderContainer_1: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  HeaderContainer_3: {
    paddingHorizontal: responsiveWidth(4),
    flexDirection: 'column',
    justifyContent: 'space-between',
    rowGap: responsiveHeight(2),
  },
  OptionsContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    columnGap: responsiveWidth(1),
  },
  GrayButton: {
    backgroundColor: 'lightgray',
    borderRadius: 5,
    padding: responsiveWidth(2),
  },
  ImagesContainer: {
    marginVertical: responsiveHeight(1.5),
    flex: 1,
  },
  ImageStyle: {width: '33%', height: responsiveHeight(20)},
  TickMarkContainer: {
    backgroundColor: 'blue',
    borderRadius: responsiveHeight(2.7 / 2),
    height: responsiveHeight(2.7),
    width: responsiveHeight(2.7),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: responsiveWidth(1),
    top: responsiveWidth(1),
  },

  AddButton: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: responsiveWidth(3),
    position: 'absolute',
    bottom: responsiveWidth(6),
    right: responsiveWidth(6),
    elevation: 4,
  },
  FilterView: {
    left: responsiveWidth(3),
    top: responsiveHeight(12),
    position: 'absolute',
  },
});
