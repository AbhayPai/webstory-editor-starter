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
      'assign-web_story_tag': true,
      'create-web_story_tag': true,
      'assign-web_story_category': true,
      'create-web_story_category': true,
    },
  };

  window.localStorage.setItem("STORY_CONTENT", JSON.stringify(storySaveData));
  window.localStorage.setItem("STORY_MARKUP", content);

  return Promise.resolve({});
};

export default saveStoryById;