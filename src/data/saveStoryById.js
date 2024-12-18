import { DATA_VERSION } from "@googleforcreators/migration";

const saveStoryById = ({
  pages,
  fonts,
  featuredMedia,
  globalStoryStyles,
  publisherLogo,
  autoAdvance,
  defaultPageDuration,
  currentStoryStyles,
  backgroundAudio,
  content,
  author,
  products,
  ...rest
}) => {
  const storySaveData = {
    title: {
      raw: rest.title,
    },
    excerpt: {
      raw: rest.excerpt,
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
      id: publisherLogo.id,
      url: publisherLogo.url,
      width: publisherLogo.width,
      height: publisherLogo.height,
    },
    featuredMedia: {
      width: featuredMedia.width,
      height: featuredMedia.height,
      isExternal: featuredMedia.isExternal,
      url: featuredMedia.url,
    },
    revisions: {
      count: 8,
      id: 189
    },
    author: {
      id: author.id,
      name: author.name,
    },
  };

  window.localStorage.setItem("STORY_CONTENT", JSON.stringify(storySaveData));
  window.localStorage.setItem("STORY_MARKUP", content);

  console.log("pages", pages);
  console.log("fonts", fonts);
  console.log("featuredMedia", featuredMedia);
  console.log("globalStoryStyles", globalStoryStyles);
  console.log("publisherLogo", publisherLogo);
  console.log("autoAdvance", autoAdvance);
  console.log("defaultPageDuration", defaultPageDuration);
  console.log("backgroundAudio", backgroundAudio);
  console.log("content", content);
  console.log("author", author);
  console.log("products", products);

  return Promise.resolve({});
};

export default saveStoryById;
