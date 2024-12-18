const getFonts = () => {
  const fonts = [
    {
    "id": "Alegreya",
    "name": "Alegreya",
    "value": "Alegreya",
    "family": "Alegreya",
    "fallbacks": [
        "serif"
    ],
    "weights": [
        400
    ],
    "styles": [
        "regular",
        "italic"
    ],
    "variants": [
        [0,400]
    ],
    "service": "fonts.google.com",
    "metrics": {
        "upm": 1000,
        "asc": 1016,
        "des": -345,
        "tAsc": 1016,
        "tDes": -345,
        "tLGap": 0,
        "wAsc": 1123,
        "wDes": 345,
        "xH": 452,
        "capH": 637,
        "yMin": -293,
        "yMax": 962,
        "hAsc": 1016,
        "hDes": -345,
        "lGap": 0
      }
    },
    {
      name: 'Abel',
      value: 'Abel',
      family: 'Abel',
      fallbacks: ['sans-serif'],
      weights: [400],
      styles: ['regular'],
      variants: [[0, 400]],
      service: 'fonts.google.com',
      metrics: {
        upm: 2048,
        asc: 2006,
        des: -604,
        tAsc: 2006,
        tDes: -604,
        tLGap: 0,
        wAsc: 2006,
        wDes: 604,
        xH: 1044,
        capH: 1434,
        yMin: -604,
        yMax: 2005,
        hAsc: 2006,
        hDes: -604,
        lGap: 0,
      },
    },
    {
      name: 'Abhaya Libre',
      value: 'Abhaya Libre',
      family: 'Abhaya Libre',
      fallbacks: ['serif'],
      weights: [400, 500, 600, 700, 800],
      styles: ['regular'],
      variants: [
        [0, 400],
        [0, 500],
        [0, 600],
        [0, 700],
        [0, 800],
      ],
      service: 'fonts.google.com',
      metrics: {
        upm: 1024,
        asc: 860,
        des: -348,
        tAsc: 860,
        tDes: -348,
        tLGap: 0,
        wAsc: 860,
        wDes: 348,
        yMin: -340,
        yMax: 856,
        hAsc: 860,
        hDes: -348,
        lGap: 0,
      },
    },
    {
      value: 'Overpass Regular',
      name: 'Overpass Regular',
      family: 'Overpass Regular',
      fallbacks: ['sans-serif'],
      weights: [400],
      styles: ['regular'],
      variants: [[0, 400]],
      url: 'https://overpass-30e2.kxcdn.com/overpass-regular.ttf',
      service: 'custom',
      metrics: {
        upm: 1000,
        asc: 982,
        des: -284,
        tAsc: 750,
        tDes: -250,
        tLGap: 266,
        wAsc: 1062,
        wDes: 378,
        xH: 511,
        capH: 700,
        yMin: -378,
        yMax: 1062,
        hAsc: 982,
        hDes: -284,
        lGap: 266,
      },
    },
  ];
  return fonts;
}

export default getFonts;