import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import useNearChatsChats from '../hooks/useNearChatsChats';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import {Marker} from 'react-native-maps';
import CustomeImage from '../wrappers/CustomeImage';
import {IMAGES} from '../../assets/constants/ImageConstant';
import {imgPath} from '../../assets/constants/NetworkImage';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import firestore from '@react-native-firebase/firestore';

const MapMarkers = () => {
  const {List, isLoading, isRefreshing, getData, onRefresh, currentLoc} =
    useNearChatsChats(true);

  const [UsersWithStatus, setUsersWithStatus] = useState([]);
  useEffect(() => {
    try {
      if (List.length) {
        const fetchLatestStatus = async () => {
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
        };

        // const subscriber = firestore().collection('users');
        // subscriber.onSnapshot(querysnapshot => {
        //   fetchLatestStatus();
        // });

        const subscriber = firestore().collection('users');
        const unsubscribe = subscriber.onSnapshot(querySnapshot => {
          fetchLatestStatus();
        });

        return () => unsubscribe();
      }
    } catch (error) {
      console.warn('ERROR IN MY NEAR USERS FIREBASE');
    }
  }, [List.length]);

  return (
    <>
      {UsersWithStatus.map((val, i) => {
        return (
          <Marker
            coordinate={{
              latitude: parseFloat(val?.lat || 0),
              longitude: parseFloat(val?.long || 0),
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            tracksViewChanges={false}>
            <View style={styles.MarkerContainer}>
              <CustomeImage
                resizeMode="cover"
                defaultSource={IMAGES.USER2}
                source={val?.image ? {uri: imgPath + val?.image} : IMAGES.USER2}
                style={[
                  styles.imgstyle3,
                  val?.UserStatus?.UserStatus ? styles.isOnline : null,
                ]}
              />
              <Text style={[styles.Text_1, {backgroundColor: 'white'}]}>
                {val?.user?.name}{' '}
                <Text style={{fontWeight: '400'}}>
                  {val?.distance ? val?.distance?.toFixed(0) : 0}m
                </Text>
              </Text>
            </View>
          </Marker>
        );
      })}
    </>
  );
};

export default React.memo(MapMarkers);

const styles = StyleSheet.create({
  MarkerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: responsiveHeightPixel(2),
  },
  Text_1: {
    paddingHorizontal: responsiveWidthPixel(5),
    backgroundColor: '#FFF1BB',
    borderRadius: 5,
    color: 'black',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(1.4),
    elevation: 5,
    borderWidth: 0.5,
  },
  imgstyle3: {
    height: responsiveHeightPixel(40),
    width: responsiveHeightPixel(40),
    borderRadius: responsiveHeightPixel(40 / 2),
    backgroundColor: 'gray',
  },
  isOnline: {
    borderColor: '#4DCF07',
    borderWidth: 1.5,
  },
});
