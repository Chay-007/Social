import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Modal,
  Pressable,
  Image,
  TouchableOpacity
} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import { SafeAreaView } from 'react-native-safe-area-context';

const Modal_1 = ({
  dataname,
  item,
  selectedId,
  onSelect,
  visible,
  onRequestClose,
  style,
}) => {
  return (
    <Modal transparent visible={visible} onRequestClose={onRequestClose}>
      <Pressable style={{ flex: 1 }} onPress={onRequestClose}>
        <View style={[styles.View1, style]}>
          <FlatList
            data={dataname}
            renderItem={({ item, index }) => (
              <Pressable onPress={() => {
                item.id,
                  item.onPress
              }}>
                <View
                  style={{
                    flexDirection: 'row',
                    marginVertical: responsiveHeight(0.5),
                    alignItems: 'center',
                  }}>
                  {item.image ? (
                    <Image
                      resizeMode="contain"
                      style={{
                        height: responsiveHeight(2.1),
                        width: responsiveWidth(4),
                      }}
                      source={item.image}
                    />
                  ) : (
                    <>{item.icon}</>
                  )}
                  <Text
                    style={[
                      styles.textStyle,
                      { marginHorizontal: responsiveHeight(1) },
                    ]}>
                    {item.name}
                  </Text>
                </View>
                {index != dataname.length - 1 && (
                  <View style={styles.horizontalLine}></View>
                )}
              </Pressable>
            )}
          />
        </View>
      </Pressable>
    </Modal>
  );
};

export default Modal_1;

const styles = StyleSheet.create({
  boldText: {
    fontSize: responsiveFontSize(2),
    fontWeight: '500',
    color: 'black',
    fontFamily: 'Poppins-Bold',
  },
  View1: {
    backgroundColor: '#F5F3F3',
    elevation: 5,
    borderRadius: responsiveHeight(0.6),
    paddingHorizontal: responsiveHeight(1.5),
    paddingVertical: responsiveHeight(1),
    position: 'absolute',
    top: responsiveHeightPixel(55),
    width: responsiveWidthPixel(154),
    right: responsiveHeight(3),
    borderColor: '#707070',
    borderWidth: responsiveHeight(0.1),
  },
  horizontalLine: {
    height: 0.8,
    width: responsiveWidth(80),
    backgroundColor: '#707070',
    alignSelf: 'center',
  },
  textStyle: {
    color: 'black',
    fontSize: responsiveFontSize(1.9),
    fontWeight: '400',
  },
});
