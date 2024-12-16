export function getPublisherLogos() {
  return Promise.resolve([
    {
      width: 272,
      height: 92,
      isExternal: true,
      needsProxy: true,
      url: 'https://raw.githubusercontent.com/AbhayPai/profile/refs/heads/master/src/assets/images/ap-logo.jpg',
    },
  ]);
}

export function addPublisherLogo() {
  return Promise.resolve({});
}
