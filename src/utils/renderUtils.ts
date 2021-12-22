import { getLocalFeeds, removeLocalFeed } from './localStorageUtils';

export function renderFeedFromStorage(list: HTMLUListElement): void {
  const userFeeds = getLocalFeeds();
  if (userFeeds) {
    for (const feedUrl of userFeeds) {
      addNewFeedItem(feedUrl, list);
    }
  }
}

export function addNewFeedItem(feedUrl: string, list: HTMLUListElement) {
  const newFeedItem = document.createElement('li');
  newFeedItem.innerText = feedUrl;
  newFeedItem.classList.add('flex-wide');
  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'remove';
  deleteButton.addEventListener('click', () => {
    removeLocalFeed(feedUrl);
    newFeedItem.remove();
  });
  newFeedItem.append(deleteButton);
  list.append(newFeedItem);
}
