import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import DefaultWrap from '../wrappers/DefaultWrap';
import FriendsTab from '../components/FriendsTab';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import useCommunityMembers from '../hooks/useCommunityMembers';
import {RefreshControl} from 'react-native-gesture-handler';
import LoadingComponent from '../common_components/LoadingComponent';
import {IMAGES} from '../../assets/constants/ImageConstant';
import {imgPath} from '../../assets/constants/NetworkImage';
import {useMyContext} from '../network_storage_store/context_store/MyProvider';
import CustomeImage from '../wrappers/CustomeImage';
import firestore from '@react-native-firebase/firestore';
import {DateString} from '../Helpers/CommonHelpers';
import {useCommunityProfile} from '../hooks/useGetHooks';
import useModal_1 from '../hooks/useModal_1';
import ChangeCommunityMemberSatusModal from '../common_components/modals/ChangeCommunityMemberSatusModal';

function RenderItem(props) {
  const {Visible: Visible1, onOpen, onClose: onClose1} = useModal_1();
  const {CurrentCommunityID, GlobalProfileData} = useMyContext();
  const myId = GlobalProfileData?.id;

  const [MemberState, SetMemberState] = useState();
  useEffect(() => {
    SetMemberState(props?.item?.member_status);
  }, [props?.item?.member_status]);
  const onOpen1 = () => {
    if (myId != props.item?.user_id && props.CurrentMemberState == 'admin') {
      onOpen();
    }
  };
  return (
    <>
      <Pressable
        onLongPress={onOpen1}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: responsiveHeight(1.5),
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            onLongPress={onOpen1}
            onPress={() => {
              props.CurrentOthersUserID.current = props.item?.user_id;
              props.navigation.push('OthersProfileTabsGroup', {
                screen: 'AboutOthersScreen',
              });
            }}>
            <CustomeImage
              defaultSource={IMAGES.USER2}
              style={styles.imagestyle}
              source={
                props.item?.user?.user_profile?.image
                  ? {
                      uri: imgPath + props.item?.user?.user_profile?.image,
                    }
                  : IMAGES.USER2
              }
              resizeMode="contain"
            />
          </TouchableOpacity>
          <View
            style={{
              marginLeft: responsiveHeight(1.4),
            }}>
            <Text
              onLongPress={onOpen1}
              onPress={() => {
                props.CurrentOthersUserID.current = props.item?.user_id;
                props.navigation.push('OthersProfileTabsGroup', {
                  screen: 'AboutOthersScreen',
                });
              }}
              style={[
                styles.text_1,
                {
                  color: 'black',
                },
              ]}>
              {props.item?.user?.name}
            </Text>
            {props.item?.UserStatus?.UserStatus ? (
              <Text style={styles.OnlineText}>Online</Text>
            ) : null}
            {props.item?.UserStatus?.LastSeenAt ? (
              <Text style={styles.OffLineText}>
                Last seen {DateString(props.item?.UserStatus?.LastSeenAt)}
              </Text>
            ) : null}
          </View>
        </View>
        {MemberState != 'member' ? (
          <View>
            <Text style={styles.text_2}>{MemberState}</Text>
          </View>
        ) : null}
      </Pressable>
      <ChangeCommunityMemberSatusModal
        visible={Visible1}
        onRequestClose={onClose1}
        CommunityID={CurrentCommunityID.current}
        UserID={props.item?.user_id}
        MemberState={MemberState}
        SetMemberState={SetMemberState}
      />
    </>
  );
}

const CommunityMembersScreen = ({navigation}) => {
  const {CurrentOthersUserID} = useMyContext();
  const {CommunityProfile, Loader} = useCommunityProfile();
  const {
    List,
    isLoading,
    isRefreshing,
    getData,
    onRefresh,
    setIsRefreshing,
    setIsLoading,
  } = useCommunityMembers();

  const [UsersWithStatus, setUsersWithStatus] = useState([]);
  useEffect(() => {
    if (List.length) {
      const fetchLatestStatus = async () => {
        if (UsersWithStatus.length) {
          setIsRefreshing(true);
        } else {
          setIsLoading(true);
        }
        const usersWithMessages = await Promise.all(
          List.map(async item => {
            const messagesSnapshot = await firestore()
              .collection('users')
              .doc(`${item?.user_id}`)
              .get();
            // console.warn(messagesSnapshot.exists);
            const UserStatus = messagesSnapshot.exists
              ? messagesSnapshot.data()
              : {};
            return {
              ...item,
              UserStatus,
            };
          }),
        );
        setUsersWithStatus(usersWithMessages);
        setIsLoading(false);
        setIsRefreshing(false);
      };

      const subscriber = firestore().collection('users');
      const unsubscribe = subscriber.onSnapshot(querysnapshot => {
        fetchLatestStatus();
      });

      return () => unsubscribe();
    }
  }, [List.length]);

  if (isLoading) {
    return (
      <DefaultWrap style={styles.MainStyleLoading}>
        <LoadingComponent Loader={isLoading} />
      </DefaultWrap>
    );
  }

  if (!isLoading && !isRefreshing && !List.length) {
    return (
      <>
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
            <Text style={styles.Text_5}>No Community Members!</Text>
          </DefaultWrap>
        </ScrollView>
      </>
    );
  }
  return (
    <DefaultWrap style={{paddingHorizontal: responsiveWidthPixel(15)}}>
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
        data={UsersWithStatus}
        renderItem={({item}) => (
          <RenderItem
            CurrentOthersUserID={CurrentOthersUserID}
            CurrentMemberState={CommunityProfile?.memberStatus?.member_status}
            item={item}
            navigation={navigation}></RenderItem>
        )}
      />
    </DefaultWrap>
  );
};

export default CommunityMembersScreen;

const styles = StyleSheet.create({
  imagestyle: {
    height: responsiveHeightPixel(45),
    width: responsiveHeightPixel(45),
    borderRadius: responsiveHeight(45 / 2),
    borderColor: 'grey',
    borderWidth: 0.5,
  },
  text_1: {
    fontSize: responsiveFontSize(1.9),
    fontWeight: '500',
  },
  text_2: {
    fontSize: responsiveFontSize(1.7),
    fontWeight: '400',
    color: '#3FB300',
  },
  MainStyleLoading: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    // height: responsiveHeight(20),
  },
  Text_5: {
    color: '#000000',
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
  },
  OnlineText: {
    fontSize: responsiveFontSize(1.7),
    fontWeight: '400',
    color: '#4DCF07',
  },
  OffLineText: {
    fontSize: responsiveFontSize(1.7),
    fontWeight: '400',
    color: 'black',
  },
});
