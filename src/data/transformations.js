export const TRANSFORM_WIDTH = {
  label: 'Width',
  param: 'w',
  type: 'number'
}

export const TRANSFORM_HEIGHT = {
  label: 'Height',
  param: 'h',
  type: 'number'
}

export const TRANSFORM_POSITION_X = {
  label: 'X Offset',
  param: 'x',
  type: 'number'
}

export const TRANSFORM_POSITION_Y = {
  label: 'Y Offset',
  param: 'y',
  type: 'number'
}

export const TRANSFORM_TEXT_FONT = {
  label: 'Font',
  param: 'font',
  type: 'text'
}

export const TRANSFORM_TEXT_SIZE = {
  label: 'Font Size',
  param: 'size',
  type: 'number'
}

export const TRANSFORM_TEXT_LINESPACING = {
  label: 'Line Spacing',
  param: 'lineSpacing',
  type: 'number'
}

export const TRANSFORM_TEXT_WEIGHT = {
  label: 'Font Weight',
  param: 'weight',
  type: 'text'
}

export const TRANSFORM_CROP = {
  label: 'Crop',
  param: 'c',
  options: [
    {
      value: 'scale'
    },
    {
      value: 'fit'
    },
    {
      value: 'limit'
    },
    {
      value: 'mfit'
    },
    {
      value: 'fill'
    },
    {
      value: 'lfill'
    },
    {
      value: 'pad'
    },
    {
      value: 'lpad'
    },
    {
      value: 'mpad'
    },
    {
      value: 'fill_pad'
    },
    {
      value: 'crop'
    },
    {
      value: 'thumb'
    },
    {
      value: 'imagga_crop'
    },
    {
      value: 'imagga_scale'
    }
  ]
};

export const TRANSFORM_QUALITY = {
  label: 'Quality',
  param: 'q',
  options: [
    {
      value: 'auto',
    },
    {
      value: 'auto:best',
    },
    {
      value: 'auto:good',
    },
    {
      value: 'auto:eco',
    },
    {
      value: 'auto:low',
    },
    {
      value: 'jpegmini'
    }
  ]
};

export const TRANSFORM_FORMAT = {
  label: 'Format',
  param: 'f',
  options: [
    {
      value: 'auto'
    },
    {
      value: 'png'
    },
    {
      value: 'jpg'
    }
  ]
};

export const TRANSFORM_COLOR = {
  label: 'Color',
  param: 'co',
  type: 'text'
};

export const TRANSFORM_GRAVITY = {
  label: 'Gravity',
  param: 'g',
  options: [
    {
      value: 'north_west'
    },
    {
      value: 'north'
    },
    {
      value: 'north_east'
    },
    {
      value: 'west'
    },
    {
      value: 'center'
    },
    {
      value: 'east'
    },
    {
      value: 'south_west'
    },
    {
      value: 'south'
    },
    {
      value: 'south_east'
    },
    {
      value: 'xy_center'
    },
    {
      value: 'face'
    },
    {
      value: 'face:center'
    },
    {
      value: 'face:auto'
    },
    {
      value: 'faces'
    },
    {
      value: 'faces:center'
    },
    {
      value: 'faces:auto'
    },
    {
      value: 'body'
    },
    {
      value: 'body:face'
    },
    {
      value: 'liquid'
    },
    {
      value: 'ocr_text'
    },
    {
      value: 'adv_face'
    },
    {
      value: 'adv_faces'
    },
    {
      value: 'adv_eyes'
    },
    {
      value: 'custom'
    },
    {
      value: 'custom:face'
    },
    {
      value: 'custom:faces'
    },
    {
      value: 'custom:adv_face'
    },
    {
      value: 'custom:adv_faces'
    }
  ]
};