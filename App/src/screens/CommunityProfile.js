import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from 'react-native';
import React, { useState } from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icons from '../../assets/Icons/Icons';
import FriendsTab from '../components/FriendsTab';
import MediaTab from '../components/MediaTab';
import { IMAGES } from '../../assets/constants/ImageConstant';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import DefaultWrap from '../wrappers/DefaultWrap';
import { ScrollView } from 'react-native-gesture-handler';
import Modal_3 from '../common_components/modals/Modal_3';
import Button_5 from '../common_components/Button_5';
import HomePost_2 from '../components/HomePost_2';
import Profile_About_Tab from '../components/Profile_About_Tab';
import Profile_compo_2 from '../components/Profile_compo_2';
import MultipleImageView from '../common_components/MultipleImageView';
import useModal_1 from '../hooks/useModal_1';
const CommunityProfile = ({navigation}) => {
  const [Tabs, setTabs] = useState(0);
  const [isClicked, setisClicked] = useState(false);
  const [tab1, setTab1] = useState(1);
  const {
    Visible: DaysExtireVisible,
    onOpen: DaysExtireOpen,
    onClose: DaysExtireClose,
  } = useModal_1(false);
  const about = [
    {
      id: 1,
      title: 'Page- Information Technology',
    },
    {
      id: 2,
      title: 'Patil Nagar India Maharashtra',
    },
    {
      id: 3,
      title: '09999999999',
    },
    {
      id: 4,
      title: 'poonam@gmail.com',
    },
    {
      id: 5,
      title: 'profcymaglobal.com',
    },
    {
      id: 6,
      title: 'Not yet rated',
    },
  ];
  const friends = [
    {
      id: 1,
      name: 'Aditya',
      status: 'Online',
      profile: 'Admin',
    },
    {
      id: 2,
      name: 'Aditya',
      status: 'Last seen 8 mins ago',
      profile: 'Moderator',
    },
    {
      id: 3,
      name: 'Aditya',
      status: 'Last seen 8 mins ago',
      profile: 'Moderator',
    },
    {
      id: 4,
      name: 'Aditya',
      status: 'Last seen 8 mins ago',
      profile: 'Moderator',
    },
  ];
  const Buttons = [
    {
      id: 1,
      ButtonName: 'About',
      onPress: () => {
        setTab1(1);
      },
    },
    {
      id: 2,
      ButtonName: 'Members',
      onPress: () => {
        setTab1(2);
      },
    },
    {
      id: 3,
      ButtonName: 'Posts',
      onPress: () => {
        setTab1(3);
      },
    },
    {
      id: 4,
      ButtonName: 'Media',
      onPress: () => {
        setTab1(4);
      },
    },
  ];

  const HomeData = {
    tags: 'Designer',
    image: IMAGES.GROUPIMG1,
  };
  const [clicked, setclicked] = useState(false);
  const DATA = [
    {
      id: '1',
      label: 'Invite',
      icon: <Icons.FontAwesome5 name={'user-plus'} size={15} color={'black'} />,
      onPress: () => {
        navigation.navigate('AfterPostClickStackGroup',{screen:'Bookmarks'});
      },
    },
    {
      id: '2',
      label: 'Share',
      icon: <Icons.Fontisto name={'share-a'} size={14} color={'black'} />,
      onPress: () => {
        navigation.navigate('PreviousChats');
      },
    },
    {
      id: '3',
      label: 'Leave Community',
      icon: <Icons.FontAwesome name={'users'} size={15} color={'black'} />,
      onPress: () => {
        navigation.navigate('AfterPostClickStackGroup',{screen:'FavouriteChats'})

      },
    },
    {
      id: '4',
      label: 'Mute Notifications',
      icon: <Icons.FontAwesome name={'bell-slash'} size={15} color={'black'} />,

      icon2: (
        <Icons.Fontisto
          name={clicked ? 'toggle-on' : 'toggle-off'}
          size={18}
          color={'black'}
        />
      ),
      onTogglePress: () => {
        setclicked(!clicked);
      },
    },
  ];
  const {
    Visible: ChatOptionsVisible,
    onOpen: ChatOptionsOpen,
    onClose: ChatOptionsClose,
  } = useModal_1(false);
  return (
    <DefaultWrap>
      <View style={styles.MainStyle}>
        <TouchableOpacity
          style={styles.greyCircle}
          onPress={() => {
            navigation.goBack();
          }}>
          <Icons.AntDesign name={'arrowleft'} size={20} color="white" />
        </TouchableOpacity>

        <View style={{flexDirection:'row'}}>
        <TouchableOpacity
         style={{marginRight:responsiveHeight(1)}}
          // onPress={() => {
          //   navigation.navigate('AddCommunityScreen');
          // }}
          >
            <Icons.FontAwesome5 name={'pencil-alt'} size={16} color="grey" />
        </TouchableOpacity>
        <TouchableOpacity
         
         onPress={ChatOptionsOpen}>
           <Icons.Entypo name={'dots-three-vertical'} size={16} color="grey" />
       </TouchableOpacity>
        </View>
      </View>
      {/* <View style={{ marginHorizontal: responsiveHeight(2), marginVertical: responsiveHeight(1.5), }}> */}
      <ScrollView contentContainerStyle={styles.postContainter}>
        <View style={{paddingVertical: responsiveHeight(1)}}>
          <Profile_compo_2
          show={false}
            Name={'George'}
            Text1={'14.1M members'}
            Points={'Music, Travelling, Bike Riding'}
            onEditPress={() =>
              navigation.navigate('EditProfile', {
                type: '',
              })
            }
          />
        </View>

        <View
          style={{flexDirection: 'row', marginVertical: responsiveHeight(1)}}>
          <MultipleImageView />
          <Text style={[styles.text_2, {width: responsiveWidth(75)}]}>
            {'Rahul Mahajan is mutual connection'}
          </Text>
        </View>
        <View style={{marginVertical: responsiveHeight(2)}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: responsiveWidthPixel(345),
              alignSelf: 'flex-start',
            }}>
            <FlatList
              data={Buttons}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({item, index}) => (
                <View>
                  <Button_5
                    title={item.ButtonName}
                    onPress={item.onPress}
                    IsClicked={tab1 === item.id}
                  />
                  <View style={styles.horizontalline}></View>
                </View>
              )}
            />
          </View>
        </View>
        {tab1 === 1 && <Profile_About_Tab isInterested={true} />}
        {tab1 === 2 && <FriendsTab data={friends} />}
        {tab1 === 3 && (
          <HomePost_2
            FirstContainerStyle={{paddingHorizontal: responsiveWidthPixel(18)}}
            img={HomeData.image}
            tags={HomeData.tags}
          />
        )}
        {tab1 === 4 && <MediaTab />}
      </ScrollView>

      {/* </View> */}
      <Modal_3
        dataname={DATA}
        visible={ChatOptionsVisible}
        onRequestClose={ChatOptionsClose}
        style={styles.ChatOptionsView}
      />
    </DefaultWrap>
  );
};

export default CommunityProfile;

const styles = StyleSheet.create({
  text_2: {
    color: 'black',
    fontSize: responsiveFontSize(1.8),
    fontWeight: '400',
    marginLeft: responsiveHeight(0.8),
  },
  subView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: responsiveHeight(1.5),
    alignItems: 'center',
  },
  postContainter: {
    // paddingHorizontal: responsiveWidthPixel(18),

    paddingBottom: responsiveHeight(5),
    paddingHorizontal: responsiveHeight(2),
  },
  horizontalline: {
    height: responsiveHeight(0.1),
    width: responsiveWidthPixel(93),
    backgroundColor: '#4DCF07',
  },
  MainStyle: {
    height: responsiveHeightPixel(94),
    width: responsiveWidth(100),
    backgroundColor: 'white',
    paddingTop: responsiveHeightPixel(35),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    paddingHorizontal: responsiveHeight(2),
  },
  greyCircle: {
    height: responsiveHeightPixel(25),
    width: responsiveHeightPixel(25),
    borderRadius: responsiveHeightPixel(25 / 2),
    backgroundColor: '#7A7A7A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ChatOptionsView: {
    right: responsiveWidth(1),
    top: responsiveHeight(7),
    width:responsiveWidth(53)
  },
});
