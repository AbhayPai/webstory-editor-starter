const getMedia = () => {
  const mediaObjectData = [{
    "baseColor": "#ffffff",
    "blurHash": "UmJ*SDxtIVWB~VayRkj[M|Rkj[ofM|WBWBay",
    "type": "image",
    "mimeType": "image/jpeg",
    "creationDate": "2022-02-08T11:13:06",
    "src": "http://webstories.local/wp-content/uploads/2022/02/laptop_man.jpg",
    "width": 367,
    "height": 267,
    "id": 251,
    "alt": "laptop_man",
    "sizes": {
        "medium": {
            "file": "laptop_man-300x218.jpg",
            "width": 300,
            "height": 218,
            "mimeType": "image/jpeg",
            "sourceUrl": "http://webstories.local/wp-content/uploads/2022/02/laptop_man-300x218.jpg"
        },
        "thumbnail": {
            "file": "laptop_man-150x150.jpg",
            "width": 150,
            "height": 150,
            "mimeType": "image/jpeg",
            "sourceUrl": "http://webstories.local/wp-content/uploads/2022/02/laptop_man-150x150.jpg"
        },
        "full": {
            "file": "laptop_man.jpg",
            "width": 367,
            "height": 267,
            "mimeType": "image/jpeg",
            "sourceUrl": "http://webstories.local/wp-content/uploads/2022/02/laptop_man.jpg"
        }
    },
    "isPlaceholder": false,
    "isOptimized": false,
    "isMuted": false,
    "isExternal": false,
    "needsProxy": false
  }];
  return Promise.resolve({ mediaObjectData });
};

export default getMedia;