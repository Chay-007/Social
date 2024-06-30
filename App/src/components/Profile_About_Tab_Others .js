import {StyleSheet, Text, View, FlatList, ScrollView} from 'react-native';
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
import {useOthersProfile} from '../hooks/useGetHooks';

const Profile_About_Tab_Others = ({isInterested = false}) => {
  const {CurrentOthersUserID} = useMyContext();
  const {OthersProfile, Loader} = useOthersProfile(CurrentOthersUserID.current);

  const formattedDate = moment(OthersProfile?.data?.user_profile?.dob).format(
    'DD MMMM YYYY',
  );
  const AboutData = [
    {
      id: 1,
      Text1: 'Gender',
      Text2: OthersProfile?.data?.user_profile?.gender,
    },
    {
      id: 2,
      Text1: 'Date of Birth',
      Text2: formattedDate,
    },
    {
      id: 3,
      Text1: 'Blood Group',
      Text2: OthersProfile?.data?.user_profile?.blood_group,
    },
    {
      id: 4,
      Text1: 'Education',
      Text2: OthersProfile?.data?.user_profile?.education,
    },
    {
      id: 5,
      Text1: 'Profession',
      Text2: OthersProfile?.data?.user_profile?.profession,
    },
  ];
  return (
    <View>
      <FlatList
        scrollEnabled={false}
        data={AboutData}
        renderItem={({item}) => (
          <Profile_About_SubCompo_1 Text1={item.Text1} Text2={item.Text2} />
        )}
      />

      {OthersProfile?.data?.interest?.length ? (
        <View
          style={{
            paddingVertical: responsiveHeight(1),
            paddingHorizontal: responsiveWidthPixel(15),
          }}>
          <Text style={styles.text_1}>My Interests : </Text>
          <FlatList
            scrollEnabled={false}
            data={OthersProfile?.data?.interest}
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
      ) : null}
    </View>
  );
};

export default Profile_About_Tab_Others;

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
});
