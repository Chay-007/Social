import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import Profile_About_SubCompo_1 from './Profile_About_SubCompo_1';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import GrayButton from '../common_components/buttons/GrayButton';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import moment from 'moment';
import {useMyContext} from '../network_storage_store/context_store/MyProvider';
import {useCommunityProfile} from '../hooks/useGetHooks';
import {getTagsAsString2} from '../Helpers/CommonHelpers';
import {ShimmerPlaceHolder} from '../Helpers/ShimmerHelper';

const Profile_About_Tab = ({isInterested = false}) => {
  const {CommunityProfile, Loader, getData} = useCommunityProfile(isInterested);
  const {GlobalProfileData} = useMyContext();
  const formattedDate = moment(GlobalProfileData?.user_profile?.dob).format(
    'DD MMMM YYYY',
  );
  const AboutData = [
    {
      id: 1,
      Text1: 'Gender',
      Text2: GlobalProfileData?.user_profile?.gender,
    },
    {
      id: 2,
      Text1: 'Date of Birth',
      Text2: formattedDate,
    },
    {
      id: 3,
      Text1: 'Blood Group',
      Text2: GlobalProfileData?.user_profile?.blood_group,
    },
    {
      id: 4,
      Text1: 'Education',
      Text2: GlobalProfileData?.user_profile?.education,
    },
    {
      id: 5,
      Text1: 'Profession',
      Text2: GlobalProfileData?.user_profile?.profession,
    },
  ];
  return (
    <View
    // style={{paddingHorizontal: responsiveWidthPixel(15)}}
    >
      {isInterested ? (
        <View style={{}}>
          <ShimmerPlaceHolder
            style={Loader ? styles.ShimmerStyle : null}
            visible={!Loader}>
            <Text
              style={{
                color: 'black',
                fontSize: responsiveFontSize(1.9),
                fontWeight: '400',
                lineHeight: 19,
              }}>
              {CommunityProfile?.description}
            </Text>
          </ShimmerPlaceHolder>
        </View>
      ) : (
        <FlatList
          data={AboutData}
          renderItem={({item}) => (
            <Profile_About_SubCompo_1 Text1={item.Text1} Text2={item.Text2} />
          )}
        />
      )}

      {isInterested ? (
        <View style={{marginVertical: responsiveHeight(0)}}>
          <Text style={styles.Text_1}>Interest</Text>
          <ShimmerPlaceHolder
            style={Loader ? styles.ShimmerStyle2 : null}
            visible={!Loader}>
            <Text style={styles.Text_2}>
              {getTagsAsString2(CommunityProfile?.community_tags || [])}
            </Text>
          </ShimmerPlaceHolder>
          <ShimmerPlaceHolder
            style={Loader ? styles.ShimmerStyle2 : null}
            visible={!Loader}>
            <Text style={styles.Text_1}>Visibility</Text>
            <Text style={styles.Text_2}>
              {CommunityProfile?.community_visibility}
            </Text>
          </ShimmerPlaceHolder>
        </View>
      ) : (
        <View
          style={{
            paddingVertical: responsiveHeight(1),
            paddingHorizontal: responsiveWidthPixel(15),
          }}>
          <Text style={styles.text_1}>My Interests : </Text>
          <FlatList
            data={GlobalProfileData?.interest}
            contentContainerStyle={styles.flatListContainer}
            renderItem={({item}) => (
              <GrayButton
                MainView={{
                  borderColor: 'grey',
                  borderWidth: responsiveHeight(0.05),
                }}
                Title={item?.interest?.name}
              />
            )}
          />
        </View>
      )}
    </View>
  );
};

export default Profile_About_Tab;

const styles = StyleSheet.create({
  text_1: {
    color: 'black',
    fontSize: responsiveFontSize(2),
    fontWeight: '500',
  },
  flatListContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // justifyContent: 'space-between', // You can adjust the justification based on your preference
    // Adjust the padding as needed
  },
  Text_1: {
    color: 'black',
    fontSize: responsiveFontSize(2.3),
    fontWeight: 'bold',
    marginTop: responsiveHeightPixel(20),
  },
  Text_2: {
    color: '#000000',
    fontSize: responsiveFontSize(1.9),
    fontWeight: '400',
    width: responsiveWidth(90),
    // marginTop:responsiveHeightPixel(59),
  },
  ShimmerStyle: {
    height: responsiveHeight(10),
    width: '100%',
    borderRadius: 7,
  },
  ShimmerStyle2: {
    height: responsiveHeight(5),
    width: '100%',
    borderRadius: 7,
  },
});
