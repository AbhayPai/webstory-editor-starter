const getTaxonomyTerm = () => {
  const categories = [
    {
      id: 11,
      link: 'http://localhost:8899/web_story_category/entertainment',
      name: 'Entertainment',
      slug: 'entertainment',
      taxonomy: 'web_story_category',
      parent: 0,
    },
    {
      id: 12,
      link: 'http://localhost:8899/web_story_category/knowledge',
      name: 'Knowledge',
      slug: 'knowledge',
      taxonomy: 'web_story_category',
      parent: 0,
    },
    {
      id: 13,
      link: 'http://localhost:8899/web_story_category/trading',
      name: 'Trading',
      slug: 'trading',
      taxonomy: 'web_story_category',
      parent: 0,
    },
  ];
  const tags = [
    {
      id: 1,
      link: 'http://localhost:8899/web_story_tag/pizza',
      name: 'pizza',
      slug: 'pizza',
      taxonomy: 'web_story_tag',
      parent: 0,
    },
    {
      id: 2,
      link: 'http://localhost:8899/web_story_tag/burger',
      name: 'burger',
      slug: 'burger',
      taxonomy: 'web_story_tag',
      parent: 0,
    },
    {
      id: 3,
      link: 'http://localhost:8899/web_story_tag/frenchFry',
      name: 'frenchFry',
      slug: 'frenchFry',
      taxonomy: 'web_story_tag',
      parent: 0,
    },
  ];
  const taxonomies = categories.concat(tags);
  return Promise.resolve(taxonomies);
};

export default getTaxonomyTerm;