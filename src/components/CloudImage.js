import React from 'react';
import PropTypes from 'prop-types';
import { contructCloudinaryUrl } from 'cloudinary-transformer';

import Pre from 'components/Pre';

const CloudImage = ({cloudName, imageId, options = {}, text = [] }) => {

  const imageUrl = contructCloudinaryUrl({
    cloudName,
    imageId,
    options,
    text
  });

  return (
    <span className="cloud-image">
      <figure>
        <img src={imageUrl} alt="Artboard Design" />
        <figcaption>
          <Pre>
{ imageUrl }
          </Pre>
        </figcaption>
      </figure>
    </span>
  );

}

CloudImage.propTypes = {
  cloudName: PropTypes.string,
  imageId: PropTypes.string,
  options: PropTypes.object,
  text: PropTypes.array
}

export default CloudImage;