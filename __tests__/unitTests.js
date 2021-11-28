import {renderHook, act} from '@testing-library/react-hooks';
import {useGetShareOptionsObject,useGetFixedSizeUrl,useGetImageDetailObject} from '../src/Hooks/CustomHooks';

describe('useGetFixedSizeUrl', () => {
  test('return resized url', () => {
    const {result} = renderHook(() => useGetFixedSizeUrl());
    let mockedItem = {
      download_url:"https://picsum.photos/id/1054/3079/1733"
    }
    expect(result.current(mockedItem)).toBe('https://picsum.photos/id/1054/150/150');
  });
});

describe('useGetImageDetailObject', () => {
  test('return image detail object should always return single array item', () => {
    const {result} = renderHook(() => useGetImageDetailObject());
    let mockedItem = {
      download_url:"https://picsum.photos/id/1054/3079/1733"
    }

    expect(result.current(mockedItem)).toHaveLength(1);
  });
});

describe('useGetShareOptionsObject', () => {
  test('return title of share object', () => {
    const {result} = renderHook(() => useGetShareOptionsObject('www.test.com'));

    expect(result.current.title).toBe('Share Image');
  });
});

describe('useGetShareOptionsObject', () => {
  test('return url of share object', () => {
    const {result} = renderHook(() => useGetShareOptionsObject('www.test.com'));

    expect(result.current.url).toBe('www.test.com');
  });
});
