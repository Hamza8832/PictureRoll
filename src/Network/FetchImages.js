export const getPicturesForGallery = async page => {
  try {
    const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=32`);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};
