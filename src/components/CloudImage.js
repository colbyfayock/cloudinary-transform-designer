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
    <span className="cloud-image">
      <figure>
        <img src={imageUrl} alt="Artboard Design" />
        <figcaption>
<pre>
<code>
{ imageUrl }
</code>
</pre>
        </figcaption>
      </figure>
    </span>
  );

}

export default CloudImage;