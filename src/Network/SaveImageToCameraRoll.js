import {PermissionsAndroid, Platform} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import CameraRoll from '@react-native-community/cameraroll';

const getPermissionAndroid = async () => {
  const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    {
      title: 'PictureRoll would want access to device storage',
      message: 'This permission is required to save pictures',
      buttonNegative: 'Cancel',
      buttonPositive: 'OK',
    },
  );
  if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    return true;
  }
  return false;
};

export const saveImageToCameraRoll = async url => {
  return new Promise(async (resolve, reject) => {
    if (Platform.OS === 'android') {
      const granted = await getPermissionAndroid();
      if (!granted) {
        reject();
      }
    }
    RNFetchBlob.config({
      fileCache: true,
      appendExt: 'png',
    })
      .fetch('GET', url)
      .then(res => {
        CameraRoll.save(res.data, 'photo')
          .then(() => {
            resolve();
          })
          .catch(error => {
            reject(error);
          });
      })
      .catch(error => {
        reject(error);
      });
  });
};
