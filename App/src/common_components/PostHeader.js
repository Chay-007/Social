import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import {IMAGES} from '../../assets/constants/ImageConstant';
import Icons from '../../assets/Icons/Icons';
import {formatTimeAgo, getTagsAsString} from '../Helpers/CommonHelpers';
import useModal_1 from '../hooks/useModal_1';
import PostOptionsModal_2 from './modals/PostOptionsModal_2';
import {useNavigation, useRoute} from '@react-navigation/native';
import ShareModal from './modals/ShareModal';
import {imgPath} from '../../assets/constants/NetworkImage';
import CustomeImage from '../wrappers/CustomeImage';
import {useMyContext} from '../network_storage_store/context_store/MyProvider';
const PostHeader = ({
  Location,
  Type,
  ShowThreeDotOPtions = true,
  user,
  TagsList = [],
  DateTime,
  PostID,
  isSaved,
  distance,
  isFriend,
  Anonymous,
  MainContainter,
  CommunityID,
  lat,
  long,
}) => {
  const {CurrentOthersUserID} = useMyContext();
  const navigation = useNavigation();
  const {
    Visible: PostOptionsVisible,
    Toggle: PostOptionsToggle,
    onClose: PostOptionsClose,
  } = useModal_1(false);
  const {
    Visible: ShareVisible,
    Toggle: ShareToggle,
    onClose: ShareClose,
  } = useModal_1(false);
  const route = useRoute();
  const UserName = Anonymous ? 'Anonymous' : user?.name;
  const tags = getTagsAsString(TagsList);
  return (
    <View style={[styles.MainContainter, MainContainter]}>
      <View style={{flexDirection: 'row', flex: 9}}>
        <View style={styles.FirstViewContainer}>
          {route.name == 'NearUScreen' ? (
            <Text style={styles.miniText2}>{distance}m. away</Text>
          ) : null}
          <TouchableOpacity
            disabled={Anonymous}
            onPress={() => {
              CurrentOthersUserID.current = user?.id;
              navigation.navigate('OthersProfileTabsGroup', {
                screen: 'AboutOthersScreen',
              });
            }}>
            <CustomeImage
              defaultSource={IMAGES.USER2}
              resizeMode="cover"
              source={
                Anonymous
                  ? IMAGES.USER2
                  : user?.user_profile?.image
                  ? {uri: imgPath + user?.user_profile?.image}
                  : IMAGES.USER2
              }
              style={styles.imgstyle3}
            />
          </TouchableOpacity>
          <Text style={styles.miniText2}>{formatTimeAgo(DateTime)}</Text>
        </View>

        <View style={styles.SubViewContainer_1}>
          <Text numberOfLines={1} style={styles.midText}>
            <Text
              disabled={Anonymous}
              style={{fontWeight: 'bold'}}
              onPress={() => {
                CurrentOthersUserID.current = user?.id;
                navigation.navigate('OthersProfileTabsGroup', {
                  screen: 'AboutOthersScreen',
                });
              }}>
              {UserName}{' '}
            </Text>
            {Type == 'Recommend' && (
              <Text style={{color: '#3FB300'}}>{'Recommend'} </Text>
            )}
            {Type == 'Beware' && (
              <Text style={{color: '#FF0000'}}>{'Beware'} </Text>
            )}
            {Location ? (
              <Text
                onPress={() =>
                  navigation.navigate('MapScreenWithPosts', {lat, long})
                }>
                at {Location}
              </Text>
            ) : null}
          </Text>

          {tags ? (
            <Text numberOfLines={1} style={styles.miniText}>
              Tags :{tags}
            </Text>
          ) : null}
        </View>
      </View>
      {ShowThreeDotOPtions ? (
        <TouchableOpacity
          style={styles.SecondViewContainer}
          onPress={PostOptionsToggle}>
          <Icons.Entypo
            name={'dots-three-vertical'}
            size={20}
            color={'black'}
            style={{marginTop: responsiveHeight(1)}}
          />
        </TouchableOpacity>
      ) : (
        <View></View>
      )}

      <PostOptionsModal_2
        isFriend={isFriend}
        UserID={user?.id}
        PostID={PostID}
        isSaved={isSaved}
        visible={PostOptionsVisible}
        onRequestClose={PostOptionsClose}
        onShare={() => {
          PostOptionsClose();
          ShareToggle();
        }}
      />
      {ShareVisible ? (
        <ShareModal
          visible={ShareVisible}
          onRequestClose={ShareClose}
          PostID={PostID}
          CommunityID={CommunityID}
        />
      ) : null}
    </View>
  );
};

export default PostHeader;

const styles = StyleSheet.create({
  MainContainter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: responsiveHeightPixel(60),
    paddingHorizontal: responsiveWidth(1),
  },
  FirstViewContainer: {
    width: responsiveWidthPixel(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  SecondViewContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    height: '100%',
  },
  SubViewContainer_1: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: responsiveHeightPixel(12),
    paddingLeft: responsiveWidth(1),
  },
  imgstyle3: {
    height: responsiveHeightPixel(44),
    width: responsiveHeightPixel(44),
    borderRadius: responsiveHeightPixel(44 / 2),
    backgroundColor: 'lightgray',
  },
  midText: {
    color: 'black',
    fontSize: responsiveFontSize(2),
    fontWeight: '400',
  },
  miniText: {
    color: 'black',
    fontSize: responsiveFontSize(1.4),
    fontWeight: '400',
  },
  miniText2: {
    color: 'black',
    fontSize: responsiveFontSize(1.1),
    fontWeight: '400',
  },
  boldText: {
    color: 'black',
    fontSize: responsiveFontSize(2),
    fontWeight: '500',
  },
  greenText: {
    color: '#009B00',
    fontSize: responsiveFontSize(2.1),
    fontWeight: '500',
  },
  OptionsView: {},
});
