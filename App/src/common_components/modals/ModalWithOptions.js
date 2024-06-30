import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';
import React from 'react';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../../Helpers/ResponsivePixel';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {imgPath} from '../../../assets/constants/NetworkImage';

const ModalWithOptions = ({
  visible,
  onRequestClose,
  List,
  MainView,
  SubView,
  SelectedOption,
  SetSelectedOption,
  sFix,
}) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onRequestClose}>
      <TouchableWithoutFeedback onPress={onRequestClose}>
        <View style={styles.modalContainer}>
          <View style={[styles.MainView, MainView]}>
            {List.map((item, index) => (
              <OptionView
                onPress={async () => {
                  if (item.onPress) {
                    item.onPress();
                  } else {
                    await SetSelectedOption(item.id);
                    onRequestClose();
                  }
                }}
                Icon={item.Icon}
                Title={item.Title || item.name + (sFix || '')}
                image={item.image ? {uri: imgPath + item.image} : null}
                SubView={[
                  SubView,
                  {
                    backgroundColor:
                      item.id == SelectedOption ? 'lightgray' : null,
                  },
                ]}
              />
            ))}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ModalWithOptions;

const styles = StyleSheet.create({
  MainView: {
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000000',
    elevation: 5,
    borderWidth: 0.5,
    borderColor: '#00000029',
    paddingVertical: responsiveHeight(1),
  },
  SubView: {
    alignItems: 'center',
    flexDirection: 'row',
    height: responsiveHeightPixel(33),
  },
  IconImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: responsiveWidthPixel(40),
  },
  ImageStyle: {
    height: responsiveHeight(2.1),
    width: responsiveWidth(4),
  },
  textStyle: {
    color: 'black',
    fontSize: responsiveFontSize(1.9),
    fontWeight: '400',
  },
  modalContainer: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});

const OptionView = ({onPress, Icon, Title, image, SubView}) => {
  return (
    <TouchableOpacity style={[styles.SubView, SubView]} onPress={onPress}>
      {Icon || image ? (
        <View style={styles.IconImageContainer}>
          {Icon ? (
            <>{Icon}</>
          ) : (
            <Image
              resizeMode="contain"
              style={styles.ImageStyle}
              source={image}
            />
          )}
        </View>
      ) : null}
      <Text style={[styles.textStyle]}>{Title}</Text>
    </TouchableOpacity>
  );
};
