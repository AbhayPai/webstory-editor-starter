const getStoryDefault = () => {
  return {
    capabilities: {
      'publish': true,
      'assign-author': true,
      'assign-web_story_category': true,
      'create-web_story_category': true,
      'assign-web_story_tag': true,
      'create-web_story_tag': true,
    },
    publisherLogo: {
      id: 0,
      url: 'https://placehold.co/200x100?text=Temaplate+Sample',
      width: 200,
      height: 100,
    },
    featuredMedia: {
      width: 272,
      height: 92,
      isExternal: true,
      url: 'https://raw.githubusercontent.com/AbhayPai/profile/refs/heads/master/src/assets/images/ap-logo.jpg',
    },
    revisions: { count: 8, id: 189 },
    author: { id: 1, name: 'Abhay Pai' },
    date: null,
    status: 'draft',
  };
};

export default getStoryDefault;
