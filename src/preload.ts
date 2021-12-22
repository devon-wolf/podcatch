import { addLocalFeed } from './utils/localStorageUtils';
import { addNewFeedItem, renderFeedFromStorage } from './utils/renderUtils';

window.addEventListener('DOMContentLoaded', () => {
  const feedList = document.getElementById('feed-list') as HTMLUListElement;
  const newFeedForm = document.getElementById(
    'new-feed-form'
  ) as HTMLFormElement;
  const newFeedInput = document.getElementById(
    'new-feed-input'
  ) as HTMLInputElement;

  renderFeedFromStorage(feedList);
  newFeedForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addLocalFeed(newFeedInput.value);
    addNewFeedItem(newFeedInput.value, feedList);
    newFeedInput.value = '';
  });
});
