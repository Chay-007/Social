import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import {IMAGES} from '../../assets/constants/ImageConstant';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import Icons from '../../assets/Icons/Icons';
import DefaultWrap from '../wrappers/DefaultWrap';
import useCommets from '../hooks/useCommets';
import LoadingComponent from './LoadingComponent';
import {DateString, FormatKMB} from '../Helpers/CommonHelpers';
import {imgPath} from '../../assets/constants/NetworkImage';
import {
  useCommentsBookMarkPost,
  useCommentsStarPost,
} from '../hooks/usePosts_1';
import useModal_1 from '../hooks/useModal_1';
import Reply_Post_Modal_1 from './modals/Reply_Post_Modal_1';
import {useMyContext} from '../network_storage_store/context_store/MyProvider';
import ImageModal from 'react-native-image-modal';
import ScaledImage from '../components/ScaledImage';
export const CommentsHeader = ({style, HeaderName}) => {
  return (
    <View style={[styles.TitleContainer, style]}>
      <Text style={styles.Text_5}>{HeaderName || `Comments`}</Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={styles.Text_1}>Most relevant</Text>
        <Image
          resizeMode="contain"
          source={IMAGES.UPDOWN}
          style={{height: responsiveHeightPixel(10)}}
        />
      </View>
    </View>
  );
};
const CommentsList_2 = ({PostID}) => {
  const {CommentsGetRef} = useMyContext();

  const {List, isLoading, isRefreshing, getData, onRefresh} =
    useCommets(PostID);
  if (isLoading) {
    return (
      <DefaultWrap style={styles.MainStyleLoading}>
        <LoadingComponent Loader={isLoading} />
      </DefaultWrap>
    );
  }
  CommentsGetRef.current = onRefresh;
  if (!isLoading && !isRefreshing && !List.length) {
    return (
      <>
        <CommentsHeader />
        <ScrollView
          contentContainerStyle={{flex: 1}}
          refreshControl={
            <RefreshControl
              enabled={true}
              refreshing={isRefreshing}
              onRefresh={onRefresh}
            />
          }>
          <DefaultWrap style={styles.MainStyleLoading}>
            <Text style={styles.Text_5}>No Comments!</Text>
          </DefaultWrap>
        </ScrollView>
      </>
    );
  }

  return (
    <View style={{width: '100%'}}>
      <CommentsHeader />

      <FlatList
        refreshControl={
          <RefreshControl
            enabled={true}
            refreshing={isRefreshing}
            onRefresh={onRefresh}
          />
        }
        onEndReached={getData}
        onEndReachedThreshold={1}
        data={List}
        renderItem={({item}) => <RenderItem item={item} />}
      />
    </View>
  );
};

export default CommentsList_2;

export const RenderItem = ({item, MainStyle, ReplyShow = true}) => {
  const {Visible: Visible1, onOpen: onOpen1, onClose: onClose1} = useModal_1();

  const {Clicked: isBookmark, handleSubmit: BookmarkHandleSubmit} =
    useCommentsBookMarkPost(item?.id, item?.comment_book);
  const {
    Clicked: isStar,
    handleSubmit: StarHandleSubmit,
    setStarCount,
    StarCount,
  } = useCommentsStarPost(item?.id, item?.comment_star);

  useEffect(() => {
    setStarCount(item?.comment_star_count_count);
  }, [item?.comment_star_count_count]);

  return (
    <>
      <View style={[styles.CommentContainer, MainStyle]}>
        <Image
          resizeMode="cover"
          source={
            item?.user?.user_profile?.image
              ? {uri: imgPath + item?.user?.user_profile?.image}
              : IMAGES.NOIMAGE
          }
          style={styles.imgstyle3}
        />
        <View style={{marginLeft: responsiveWidthPixel(10), flex: 1}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.Text_2}>{item?.user?.name}</Text>
            <Text style={styles.Text_4}>{DateString(item?.created_at)}</Text>
          </View>
          {item?.comment ? (
            <Text style={styles.Text_1}>{item?.comment}</Text>
          ) : null}
          {item?.file ? (
            <ImageModal
              modalImageResizeMode={'contain'}
              resizeMode="cover"
              source={{uri: imgPath + item?.file}}
              style={{
                height: responsiveHeight(15),
                width: responsiveWidth(40),
                borderRadius: responsiveHeight(1),
                alignSelf: 'center',
                marginTop: responsiveHeight(1),
              }}
            />
          ) : null}
          <View style={styles.ActionButtonsContainerAbove}>
            <View style={styles.ActionButtonsContainer}>
              <Text style={styles.Text_4}>{FormatKMB(StarCount)}</Text>
              <TouchableOpacity onPress={StarHandleSubmit}>
                <Icons.FontAwesome
                  name={isStar ? 'star' : 'star-o'}
                  size={responsiveWidthPixel(17)}
                  color={isStar ? '#FF0000' : '#7A7A7A'}
                />
              </TouchableOpacity>
              {/* <Icons.Fontisto
                name={false ? 'share-a' : 'share-a'}
                size={responsiveWidthPixel(15)}
                color={false ? '#FF0000' : '#7A7A7A'}
              /> */}
              <TouchableOpacity onPress={BookmarkHandleSubmit}>
                <Icons.FontAwesome
                  name={isBookmark ? 'bookmark' : 'bookmark-o'}
                  size={responsiveWidthPixel(17)}
                  color={isBookmark ? '#FF0000' : '#7A7A7A'}
                />
              </TouchableOpacity>
            </View>
            {ReplyShow ? (
              <Text style={styles.Text_6} onPress={onOpen1}>
                Reply
              </Text>
            ) : null}
          </View>
        </View>
      </View>
      <FlatList
        data={item.comment_reply}
        renderItem={({item}) => <RenderReplyItem item={item} />}
      />
      {Visible1 ? (
        <Reply_Post_Modal_1
          visible={Visible1}
          onRequestClose={onClose1}
          CommentID={item?.id}
          PlaceHolder={`Reply @${item?.user?.name}`}
        />
      ) : null}
    </>
  );
};

export const RenderItem2 = ({item, MainStyle}) => {
  return (
    <>
      <View style={[styles.CommentContainer, MainStyle]}>
        <Image
          resizeMode="cover"
          source={
            item?.user?.user_profile?.image
              ? {uri: imgPath + item?.user?.user_profile?.image}
              : IMAGES.NOIMAGE
          }
          style={styles.imgstyle3}
        />
        <View style={{marginLeft: responsiveWidthPixel(10), flex: 1}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.Text_2}>{item?.user?.name}</Text>
            <Text style={styles.Text_4}>{DateString(item?.created_at)}</Text>
          </View>
          {item?.below_option ? (
            <Text style={styles.Text_1}>{item?.below_option}</Text>
          ) : null}
        </View>
      </View>
    </>
  );
};

const RenderReplyItem = ({item}) => {
  // const {Visible: Visible1, onOpen: onOpen1, onClose: onClose1} = useModal_1();

  // const {Clicked: isBookmark, handleSubmit: BookmarkHandleSubmit} =
  //   useCommentsBookMarkPost(item?.id, item?.comment_book);
  // const {Clicked: isStar, handleSubmit: StarHandleSubmit} = useCommentsStarPost(
  //   item?.id,
  //   item?.comment_star,
  // );

  return (
    <>
      <View
        style={[
          styles.CommentContainer,
          {
            width: '85%',
            alignSelf: 'flex-end',
            // marginTop: responsiveHeightPixel(5),
          },
        ]}>
        <Image
          resizeMode="cover"
          source={
            item?.user?.user_profile?.image
              ? {uri: imgPath + item?.user?.user_profile?.image}
              : IMAGES.NOIMAGE
          }
          style={styles.imgstyle3}
        />
        <View style={{marginLeft: responsiveWidthPixel(10), flex: 1}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.Text_2}>{item?.user?.name || 'unknown'}</Text>
            <Text style={styles.Text_4}>{DateString(item?.created_at)}</Text>
          </View>
          <Text style={styles.Text_1}>{item?.reply}</Text>
          {/* <View style={styles.ActionButtonsContainerAbove}>
            <View style={styles.ActionButtonsContainer}>
              <TouchableOpacity onPress={StarHandleSubmit}>
                <Icons.FontAwesome
                  name={isStar ? 'star' : 'star-o'}
                  size={responsiveWidthPixel(17)}
                  color={isStar ? '#FF0000' : '#7A7A7A'}
                />
              </TouchableOpacity>
              <Icons.Fontisto
                name={false ? 'share-a' : 'share-a'}
                size={responsiveWidthPixel(15)}
                color={false ? '#FF0000' : '#7A7A7A'}
              />
              <TouchableOpacity onPress={BookmarkHandleSubmit}>
                <Icons.FontAwesome
                  name={isBookmark ? 'bookmark' : 'bookmark-o'}
                  size={responsiveWidthPixel(17)}
                  color={isBookmark ? '#FF0000' : '#7A7A7A'}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.Text_6} onPress={onOpen1}>
              Reply
            </Text>
          </View> */}
        </View>
      </View>
      {/* {Visible1 ? (
        <Reply_Post_Modal_1
          visible={Visible1}
          onRequestClose={onClose1}
          CommentID={item?.id}
        />
      ) : null} */}
    </>
  );
};

const styles = StyleSheet.create({
  imgstyle3: {
    height: responsiveHeightPixel(40),
    width: responsiveHeightPixel(40),
    borderRadius: responsiveHeightPixel(40 / 2),
    alignSelf: 'flex-start',
  },
  Text_1: {
    color: '#656565',
    fontSize: responsiveFontSize(1.5),
  },
  Text_2: {
    color: '#000000',
    fontSize: responsiveFontSize(1.5),
    fontWeight: 'bold',
  },
  Text_3: {
    color: '#046CBB',
    fontSize: responsiveFontSize(1.5),
    fontWeight: 'bold',
  },
  Text_4: {
    color: '#7A7A7A',
    fontSize: responsiveFontSize(1.3),
  },
  Text_5: {
    color: '#000000',
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
  },
  Text_6: {
    color: '#656565',
    fontSize: responsiveFontSize(1.5),
    fontWeight: 'bold',
  },
  CommentContainer: {
    minHeight: responsiveHeightPixel(60),
    width: '100%',
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderRadius: 3,
    alignItems: 'center',
    paddingHorizontal: responsiveWidthPixel(12),
    flexDirection: 'row',
    paddingVertical: responsiveHeightPixel(13),
    marginTop: responsiveHeightPixel(15),
  },
  TitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: responsiveHeightPixel(9),
  },
  ActionButtonsContainer: {
    flexDirection: 'row',
    width: responsiveWidth(20),
    // justifyContent: 'space-around',
    right: responsiveWidth(1),
    alignItems: 'center',
    columnGap: responsiveWidth(2),
  },
  ActionButtonsContainerAbove: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: responsiveHeight(1),
  },
  MainStyleLoading: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: responsiveHeight(20),
  },
});
