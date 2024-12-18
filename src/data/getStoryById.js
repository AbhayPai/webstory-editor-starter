
import { DATA_VERSION } from '@googleforcreators/migration';

const storyTags = [
  {
    id: 1,
    link: 'http://localhost:8899/web_story_tag/gold/pizza',
    name: 'pizza',
    slug: 'pizza',
    taxonomy: 'web_story_tag',
  },
  {
    id: 2,
    link: 'http://localhost:8899/web_story_tag/burger',
    name: 'burger',
    slug: 'burger',
    taxonomy: 'web_story_tag',
  },
  {
    id: 3,
    link: 'http://localhost:8899/web_story_tag/frenchFry',
    name: 'frenchFry',
    slug: 'frenchFry',
    taxonomy: 'web_story_tag',
  },
];
const storyVerticals = [];
const storyColors = [];
const storyCategories = [
  {
    id: 11,
    link: 'http://localhost:8899/web_story_category/booger',
    name: 'Booger',
    slug: 'booger',
    taxonomy: 'web_story_category',
    parent: 0,
  },
  {
    id: 12,
    link: 'http://localhost:8899/web_story_category/multiple-words',
    name: 'Multiple words',
    slug: 'multiple-words',
    taxonomy: 'web_story_category',
    parent: 0,
  },
  {
    id: 13,
    link: 'http://localhost:8899/web_story_category/gold',
    name: 'gold',
    slug: 'gold',
    taxonomy: 'web_story_category',
    parent: 0,
  },
];

const getStoryById = () => {
  const storyData = [{
    title: { raw: '' },
    status: 'draft',
    slug: '',
    date: '2020-05-06T22:32:37',
    dateGmt: '2020-05-06T22:32:37',
    modified: '2020-05-06T22:32:37',
    excerpt: { raw: '' },
    link: 'http://stories.local/?post_type=web-story&p=1',
    previewLink: 'http://stories.local/?post_type=web-story&p=1',
    storyData: {
      version: DATA_VERSION,
      pages: [],
    },
    permalinkTemplate: 'http://stories3.local/stories/%pagename%/',
    stylePresets: { textStyles: [], colors: [] },
    password: '',
    author: { id: 1, name: 'John Doe' },
    capabilities: {
      publish: true,
      'assign-author': true,
      'assign-web_story_tag': true,
      'create-web_story_tag': true,
      'assign-web_story_category': true,
      'create-web_story_category': true,
    },
    featuredMedia: {
      id: 0,
      height: 0,
      width: 0,
      url: 'https://raw.githubusercontent.com/AbhayPai/profile/refs/heads/master/src/assets/images/ap-logo.jpg',
    },
    publisherLogo: {
      id: 0,
      height: 0,
      width: 0,
      url: 'http://stories.local/wp-content/plugins/web-stories/assets/images/logo.png',
    },
    taxonomies: [
      {
        taxonomy: 'web-story_tag',
        embeddable: true,
        href: 'http://localhost:8899/wp-json/web-stories/v1/web_story_tag?post=1014',
      },
      {
        taxonomy: 'web-story_category',
        embeddable: true,
        href: 'http://localhost:8899/wp-json/web-stories/v1/web_story_category?post=1014',
      },
    ],
    terms: [...storyTags, ...storyColors, ...storyCategories, ...storyVerticals],
  }];
  return Promise.resolve(storyData);
};

export default getStoryById;