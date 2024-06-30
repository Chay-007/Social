import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Header_4 from '../common_components/Header_4';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {Image} from 'react-native-animatable';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import {IMAGES} from '../../assets/constants/ImageConstant';
import Icons from '../../assets/Icons/Icons';
import Component_1 from '../common_components/Component_1';
import Component_2 from '../common_components/Component_2';

const Bookmarks = ({navigation}) => {
  const [isClicked, setisClicked] = useState(false);

  const notifydata = [
    {
      id: 1,
      name: 'Henry',
      image: IMAGES.MAN,
      postedtime: '1d ago',
      text2: '30 meters away',
    },
    {
      id: 2,
      name: 'Shyam',
      image: IMAGES.MAN,
      postedtime: '1d ago',
      text2: '30 meters away',
    },
    {
      id: 1,
      name: 'Henry',
      image: IMAGES.MAN,
      postedtime: '1d ago',
      text2: '30 meters away',
    },
    {
      id: 2,
      name: 'Shyam',
      image: IMAGES.MAN,
      postedtime: '1d ago',
      text2: '30 meters away',
    },

    {
      id: 2,
      name: 'Shyam',
      image: IMAGES.MAN,
      postedtime: '1d ago',
      text2: '30 meters away',
    },
    {
      id: 1,
      name: 'Henry',
      image: IMAGES.MAN,
      postedtime: '1d ago',
      text2: '30 meters away',
    },
    {
      id: 2,
      name: 'Shyam',
      image: IMAGES.MAN,
      postedtime: '1d ago',
      text2: '30 meters away',
    },
  ];
  return (
    <View style={{flex: 1}}>
      <Header_4 header={'Saved Messages'} ShowMenu={true} />
      <View
        style={{
          marginHorizontal: responsiveHeight(1.5),
          marginVertical: responsiveHeight(2),
          alignSelf: 'center',
        }}>
        <FlatList
          data={notifydata}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <Component_2
              onProfilePress={() =>
                navigation.navigate('MyProfileTabsGroup', {
                  screem: 'AboutMeScreen',
                })
              }
              name={item.name}
              postedtime={item.postedtime}
              image={item.image}
              text2={item.text2}
              showlike={true}
              OnlineStatus={true}
            />
          )}
        />
      </View>
    </View>
  );
};

export default Bookmarks;

const styles = StyleSheet.create({
  imagestyle: {
    height: responsiveHeightPixel(34),
    width: responsiveWidthPixel(34),
    justifyContent: 'center',
  },
  Text_2: {
    color: 'black',
    fontSize: responsiveFontSize(1.9),
    fontWeight: '500',
  },
  smalltext: {
    fontSize: responsiveFontSize(1.5),
    color: '#707070',
  },
});
