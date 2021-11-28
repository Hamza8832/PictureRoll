import React, {useCallback} from 'react';

export const useGetFixedSizeUrl = () => {
  return useCallback(item => {
    let splitUrl = item.download_url.split('/');
    splitUrl[splitUrl.length - 1] = 150;
    splitUrl[splitUrl.length - 2] = 150;
    return splitUrl.join('/');
  }, []);
};

export const useGetImageDetailObject = () => {
  return useCallback(item => {
    return [{url: item.download_url}];
  }, []);
};

export const useGetShareOptionsObject = url => {
  return {
    title: 'Share Image',
    url: url,
  };
};

// "https://picsum.photos/id/1054/3079/1733"
// https://picsum.photos/id/1054/150/150
