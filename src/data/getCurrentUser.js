
const getCurrentUser = () => {
  const userData = {
    id: 1234,
    meta: {
      web_stories_tracking_optin: true,
      web_stories_onboarding: 'foobar',
      web_stories_media_optimization: true,
    },
  };
  return Promise.resolve(userData);
};

export default getCurrentUser;