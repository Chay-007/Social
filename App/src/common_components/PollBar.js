import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {
  calculatePercentage,
  calculatePercentageValue,
} from '../Helpers/CommonHelpers';
import ImageModal from 'react-native-image-modal';
import {imgPath} from '../../assets/constants/NetworkImage';
import {useVoteOnPoll} from '../hooks/usePosts_1';

const PollBar = ({
  item,
  PostID,
  MyVote,
  TotalVotes,
  MainItem,
  setMainItem,
  disabled,
}) => {
  const {handleSubmit} = useVoteOnPoll(PostID, item.id, setMainItem);
  const [Persentage, setPersentage] = useState(0);
  const [Votes, setVotes] = useState(0);
  const VoteImage = item.image ? {uri: imgPath + item.image} : null;
  const Title = item.options;
  useEffect(() => {
    if (MyVote) {
      setVotes(item?.vote_count || item?.ansers_count || 0);
      setPersentage(
        calculatePercentage(
          TotalVotes,
          item?.vote_count || item?.ansers_count || 0,
        ),
      );
    } else {
      setVotes(0);
      setPersentage(0);
    }
  }, [MainItem]);
  const getBarWidth = () => {
    if (Title == 'None') {
      if (item?.user_vote || MyVote) {
        return 140;
      } else {
        return 100;
      }
    } else {
      if (VoteImage) {
        return 271;
      } else {
        return 321;
      }
    }
  };

  const BarWidth = getBarWidth() || 0;
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={() => {
        handleSubmit({MainItem, selectedID: MyVote?.option_id});
      }}
      style={[
        styles.MainView,
        item?.user_vote ? styles.isSelected : null,
        Title == 'None' ? {width: responsiveWidthPixel(BarWidth)} : null,
      ]}>
      {/* <Image source={VoteImage} resizeMode="cover" style={styles.imageview} /> */}
      {VoteImage ? (
        <ImageModal
          // renderToHardwareTextureAndroid={false}
          resizeMode="cover"
          modalImageResizeMode={'contain'}
          style={styles.imageview}
          source={VoteImage}
        />
      ) : null}
      <View
        style={[
          styles.TextContainer,
          {width: responsiveWidthPixel(BarWidth)},
          Title == 'None'
            ? {
                justifyContent: BarWidth == 100 ? 'center' : 'space-between',
              }
            : null,
        ]}>
        <Text style={styles.Text_3} numberOfLines={1}>
          {Title}
        </Text>
        {Persentage && Votes ? (
          <Text style={styles.Text_2}>
            <Text>{Persentage.toFixed(0)}%</Text> ({Votes} vote)
          </Text>
        ) : null}
        <View
          style={[
            styles.GreenBarContainer,
            {
              width: calculatePercentageValue(
                Persentage,
                responsiveWidthPixel(BarWidth),
              ),
            },
          ]}></View>
      </View>
    </TouchableOpacity>
  );
};

export default PollBar;

const styles = StyleSheet.create({
  MainView: {
    height: responsiveHeightPixel(40),
    width: responsiveWidthPixel(322),
    borderWidth: 0.5,
    borderColor: '#00000066',
    backgroundColor: '#F5F3F3',
    borderRadius: 5,
    flexDirection: 'row',
    marginVertical: responsiveHeightPixel(7),
    overflow: 'hidden',
  },
  TextContainer: {
    height: '100%',
    // width: responsiveWidthPixel(271),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: responsiveWidth(3),
  },
  GreenBarContainer: {
    height: '100%',
    // width: responsiveWidthPixel(271),
    backgroundColor: '#4DCF0752',
    position: 'absolute',
    left: 0,
  },
  imageview: {
    height: '100%',
    width: responsiveWidthPixel(322 - 271),
  },
  imageview2: {
    height: responsiveHeight(100),
    width: responsiveWidth(100),
  },
  Text_1: {
    fontSize: responsiveFontSize(1.8),
    color: '#00000080',
    flex: 1,
    marginRight: responsiveWidth(1),
  },
  Text_2: {
    fontSize: responsiveFontSize(1.6),
    color: '#00000080',
    // position: 'absolute',
    // right: responsiveWidthPixel(10),
  },
  Text_3: {
    color: 'black',
    fontSize: responsiveFontSize(1.8),
    fontWeight: '500',
    fontFamily: 'Poppins-SemiBold',
  },
  isSelected: {
    borderColor: 'blue',
    borderWidth: 1,
  },
});
