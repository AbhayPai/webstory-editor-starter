const getTaxonomies = () => {
  const categories = [
    {
      slug: 'web_story_category',
      restBase: 'web_story_category',
      restPath: 'web_story_category',
      hierarchical: true,
      labels: {
        filterByItem: 'Filter by categories',
        allItems: 'All categories',
        searchItems: 'Search Categories',
        notFound: 'No categories found',
      },
    },
  ];
  const tags = [
    {
      slug: 'web_story_tag',
      restBase: 'web_story_tag',
      restPath: 'web_story_tag',
      hierarchical: true,
      labels: {
        filterByItem: 'Filter by tags',
        allItems: 'All Tags',
        searchItems: 'Search Tags',
        notFound: 'No tags found',
      },
    },
  ];
  const taxonomies = categories.concat(tags);
  return Promise.resolve(taxonomies);
};

export default getTaxonomies;