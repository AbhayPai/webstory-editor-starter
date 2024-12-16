const getCustomPageTemplates = () => {
  const templates = [{
    "templateId": 358,
    "version": 39,
    "elements": [],
    "backgroundColor": {
      "color": {
        "r": 255,
        "g": 255,
        "b": 255
      }
    },
    "type": "page",
    "id": "0d009686-a8d7-4cd9-a076-80e3e56efb68",
    "image": {
      "id": 0,
      "height": 0,
      "width": 0,
      "url": "https://placehold.co/200x100?text=Temaplate+Sample"
    }
  }];
  return Promise.resolve({ hasMore: true, templates });
};

export default getCustomPageTemplates;