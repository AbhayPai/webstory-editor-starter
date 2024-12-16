import { DATA_VERSION } from "@googleforcreators/migration";

const saveStoryById = ({
  pages,
  globalStoryStyles,
  currentStoryStyles,
  content,
  title,
  excerpt
}) => {
  const storySaveData = {
    title: {
      raw: title,
    },
    excerpt: {
      raw: excerpt,
    },
    storyData: {
      version: DATA_VERSION,
      pages,
      currentStoryStyles,
    },
    stylePresets: globalStoryStyles,
    permalinkTemplate: "https://example.org/web-stories/%pagename%/",
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
  };

  window.localStorage.setItem("STORY_CONTENT", JSON.stringify(storySaveData));
  window.localStorage.setItem("STORY_MARKUP", content);

  return Promise.resolve({});
};

export default saveStoryById;