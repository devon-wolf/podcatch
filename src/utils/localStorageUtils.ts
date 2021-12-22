const USER_FEEDS = 'USER_FEEDS';

export function setEmptyLocalFeed(): string[] {
  localStorage.setItem(USER_FEEDS, JSON.stringify([]));
  return getLocalFeeds();
}
export function getLocalFeeds(): string[] {
  const userFeeds = localStorage.getItem(USER_FEEDS);
  if (!userFeeds) return setEmptyLocalFeed();
  return JSON.parse(userFeeds);
}
export function addLocalFeed(newFeed: string): void {
  const userFeeds = getLocalFeeds();
  localStorage.setItem(USER_FEEDS, JSON.stringify([...userFeeds, newFeed]));
}
export function removeLocalFeed(targetFeed: string): void {
  const userFeeds = getLocalFeeds();
  const updatedFeeds = userFeeds.filter((feed: string) => feed !== targetFeed);
  localStorage.setItem(USER_FEEDS, JSON.stringify(updatedFeeds));
}
