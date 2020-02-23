import React from 'react';

import { contructCloudinaryUrl } from 'lib/cloudinary';

const CloudImage = ({cloudName, imageId, options = {}, text = [] }) => {

  const imageUrl = contructCloudinaryUrl({
    cloudName,
    imageId,
    options,
    text
  });

  return (
    <img src={imageUrl} alt="Artboard Design" />
  );

}

export default CloudImage;