import React from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Dimensions,
} from 'react-native';
import {
  useGetFixedSizeUrl,
  useGetImageDetailObject,
} from '../Hooks/CustomHooks';
import {useNavigation} from '@react-navigation/native';
import {IMAGE_DETAILS} from '../Constants/ScreenConstants';
import FastImage from 'react-native-fast-image';

const ListImageContainer = props => {
  const getFixedSizeUrl = useGetFixedSizeUrl();
  const getImageDetailObject = useGetImageDetailObject();
  const navigation = useNavigation();
  let item = props.item;

  function onGalleryItemPress() {
    navigation.navigate(IMAGE_DETAILS, {
      imageUrl: getImageDetailObject(item),
    });
  }

  return (
    <TouchableWithoutFeedback onPress={onGalleryItemPress}>
      <View style={styles.item}>
        <FastImage
          style={styles.imageStyle}
          source={{uri: getFixedSizeUrl(item)}}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ListImageContainer;
const styles = StyleSheet.create({
  imageStyle: {
    height: 95,
    width: (Dimensions.get('window').width / 4) * 0.98,
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 1,
  },
});
