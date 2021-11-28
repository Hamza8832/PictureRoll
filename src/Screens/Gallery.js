import React, {useState, useEffect} from 'react';
import {SafeAreaView, FlatList, ActivityIndicator, View} from 'react-native';
import {getPicturesForGallery} from '../Network/FetchImages';
import ListImageContainer from '../Components/ListImageContainer';
import {fill, mediumMarginTop} from '../Styles/commonStyles';

const Gallery = () => {
  const [loading, setLoading] = useState(false);
  const [pictures, setPictures] = useState([]);
  const [paginationParam, setPaginationParam] = useState({page: 1});

  const imageLoader = () => (
    <View style={mediumMarginTop}>
      <ActivityIndicator color={'black'} size={'large'} />
    </View>
  );

  useEffect(() => {
    getApiImages();
  }, [paginationParam.page]);

  async function getApiImages() {
    setLoading(true);
    let newPictures = await getPicturesForGallery(paginationParam.page);
    setPictures([...pictures, ...newPictures]);
    setLoading(false);
  }

  function onEndReached() {
    setPaginationParam({page: paginationParam.page + 1});
  }

  return (
    <SafeAreaView style={fill}>
      <FlatList
        data={pictures}
        numColumns={4}
        showsVerticalScrollIndicator={false}
        onEndReached={!loading && onEndReached}
        onEndReachedThreshold={0.3}
        renderItem={({item}) => {
          return <ListImageContainer item={item} />;
        }}
        ListFooterComponent={loading && imageLoader}
        keyExtractor={(item, index) => String(index)}
      />
    </SafeAreaView>
  );
};

export default Gallery;
