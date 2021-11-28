import React from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from 'react-native';

import FastImage from 'react-native-fast-image';
import {DOWNLOAD, SHARE} from '../Images';
import Share from 'react-native-share';
import {useGetShareOptionsObject} from '../Hooks/CustomHooks';

const DownloadAndShareIcon = props => {
  const {loading, imageUrl} = props;
  const shareObject = useGetShareOptionsObject(imageUrl);

  const onSharePress = async () => {
    try {
      await Share.open(shareObject);
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <>
      {loading ? (
        <View style={styles.indicatorView}>
          <ActivityIndicator color={'white'} size={'small'} />
        </View>
      ) : (
        <>
          <TouchableWithoutFeedback onPress={props.onPress}>
            <FastImage
              style={styles.downloadIcon}
              resizeMode={'contain'}
              source={DOWNLOAD}
            />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={onSharePress}>
            <FastImage
              style={styles.shareIcon}
              resizeMode={'contain'}
              source={SHARE}
            />
          </TouchableWithoutFeedback>
        </>
      )}
    </>
  );
};

export default DownloadAndShareIcon;
const styles = StyleSheet.create({
  downloadIcon: {
    height: 30,
    width: 30,
    top: 30,
    right: 10,
    zIndex: 10,
    position: 'absolute',
  },
  shareIcon: {
    height: 20,
    width: 20,
    top: 35,
    right: 50,
    zIndex: 10,
    position: 'absolute',
  },
  indicatorView: {
    flex: 1,
    alignItems: 'flex-end',
    top: 50,
    right: 10,
  },
});
