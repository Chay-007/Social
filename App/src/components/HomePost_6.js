import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import {useNavigation} from '@react-navigation/native';
import HomePost_2 from './HomePost_2';
import HomePost_3 from './HomePost_3';
import HomePost_4 from './HomePost_4';
const HomePost_6 = ({
  FirstContainerStyle,
  item,
  OpenComment,
  ShowStats,
  showViewAll,
  ShowButtons,
  isFocusedPost,
  ShowResults,
}) => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.ReposttedByContainer}>
        <Text style={styles.Text_5}>
          <Text style={[styles.Text_5, {fontWeight: 'bold'}]}>
            {item?.user?.name}
          </Text>{' '}
          reposted this
        </Text>
      </View>
      {/* <View style={[styles.mainView, FirstContainerStyle]}> */}
      {item?.repost?.posts?.seek ? (
        <HomePost_2
          item={item.repost.posts}
          MainStyle={{marginTop: 0}}
          FirstContainerStyle={{
            paddingHorizontal: responsiveWidthPixel(18),
          }}
          ShowStats={ShowStats}
          showViewAll={showViewAll}
          ShowButtons={ShowButtons}
          isFocusedPost={isFocusedPost}
        />
      ) : null}
      {item?.repost?.posts?.poll ? (
        <HomePost_3
          item={item.repost.posts}
          MainStyle={{marginTop: 0}}
          FirstContainerStyle={{
            paddingHorizontal: responsiveWidthPixel(18),
          }}
          RepostID={item.id}
          OpenComment={OpenComment}
          ShowStats={ShowStats}
          showViewAll={showViewAll}
          ShowButtons={ShowButtons}
          isFocusedPost={isFocusedPost}
          ShowResults={ShowResults}
        />
      ) : null}
      {item?.repost?.posts?.survey ? (
        <HomePost_4
          item={item.repost.posts}
          MainStyle={{marginTop: 0}}
          FirstContainerStyle={{
            paddingHorizontal: responsiveWidthPixel(18),
          }}
          RepostID={item.id}
          OpenComment={OpenComment}
          ShowStats={ShowStats}
          showViewAll={showViewAll}
          ShowButtons={ShowButtons}
          isFocusedPost={isFocusedPost}
          ShowResults={ShowResults}
        />
      ) : null}
      {/* </View> */}
    </>
  );
};

export default HomePost_6;

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
    elevation: 5,
    backgroundColor: 'white',
    // paddingHorizontal: responsiveWidthPixel(5),
    paddingTop: responsiveHeightPixel(10),
    borderRadius: 5,
    marginBottom: 2,
    paddingBottom: responsiveHeight(1),
  },
  subContainer: {
    // paddingHorizontal: responsiveWidthPixel(10),
    width: '100%',
    marginTop: responsiveHeightPixel(9),
  },
  ClickOptionsView: {
    height: responsiveHeightPixel(50),
    width: '100%',
    borderTopWidth: 1,
    borderColor: '#7A7A7A',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  imgstyle: {
    height: responsiveHeightPixel(20),
    width: responsiveHeightPixel(25),
    // borderRadius: responsiveHeightPixel(25 / 2),
    alignItems: 'center',
  },
  Hyperlink: {
    fontSize: responsiveFontSize(1.8),
    fontWeight: '400',
    color: '#3FB300',
    marginVertical: responsiveHeightPixel(10),
  },
  imageview: {
    height: responsiveHeightPixel(125),
    width: responsiveWidthPixel(324),
    borderRadius: responsiveHeight(1),
    alignSelf: 'center',
    marginTop: responsiveHeightPixel(11),
  },
  Text_2: {
    color: 'black',
    fontSize: responsiveFontSize(2),
    fontWeight: '400',
  },
  Text_4: {
    fontSize: responsiveFontSize(1.3),
    color: '#00000080',
  },
  StatsContainer: {
    flexDirection: 'row',
    marginBottom: responsiveHeight(1),
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '100%',
    marginTop: responsiveHeight(1),
  },
  Text_5: {
    color: 'black',
    fontSize: responsiveFontSize(1.7),
    width: responsiveWidthPixel(320),
  },
  Text_6: {
    color: 'gray',
    fontSize: responsiveFontSize(1.5),
  },
  ReposttedByContainer: {
    paddingHorizontal: responsiveWidthPixel(18),
    paddingVertical: responsiveWidthPixel(10),
    backgroundColor: 'white',
    marginTop: responsiveHeightPixel(1),
    width: '100%',
  },
});
