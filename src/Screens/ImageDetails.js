import React, {useState} from 'react';
import {ActivityIndicator, Alert, SafeAreaView} from 'react-native';
import {fill} from '../Styles/commonStyles';
import ImageViewer from 'react-native-image-zoom-viewer';
import {saveImageToCameraRoll} from '../Network/SaveImageToCameraRoll';
import DownloadIcon from '../Components/DownloadAndShareIcon';

const ImageDetails = props => {
  let imageUrlArray = props.route?.params?.imageUrl;
  let imageUrl = props.route?.params?.imageUrl[0].url;
  const [loading, setLoading] = useState(false);

  const imageLoader = () => (
    <ActivityIndicator color={'white'} size={'small'} />
  );

  const saveImage = async () => {
    try {
      setLoading(true);
      await saveImageToCameraRoll(imageUrl);
      Alert.alert(
        'Image Saved Successfully',
        'Image was saved successfully to photos',
        [{text: 'OK'}],
        {cancelable: false},
      );
    } catch (error) {
      Alert.alert(
        'Failure',
        'Image Was Not Saved Successfully',
        [{text: 'OK'}],
        {cancelable: false},
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={fill}>
      <ImageViewer
        imageUrls={imageUrlArray}
        renderIndicator={() => {}}
        loadingRender={imageLoader}
        renderHeader={() => (
          <DownloadIcon
            onPress={() => {
              saveImage();
            }}
            loading={loading}
            imageUrl={imageUrl}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default ImageDetails;
