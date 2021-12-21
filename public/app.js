const USER_FEEDS = 'USER_FEEDS';
const newFeedForm = document.getElementById('new-feed-form');
const newFeedInput = document.getElementById('new-feed-input');
const feedList = document.getElementById('feed-list');

/* app */
renderFeedFromStorage();

/* event listeners */
newFeedForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addLocalFeed(newFeedInput.value);
  addNewFeedItem(newFeedInput.value);
  newFeedInput.value = '';
});

/* render utils */
function renderFeedFromStorage() {
  const userFeeds = getLocalFeeds();
  if (userFeeds) {
    for (const feedUrl of userFeeds) {
      addNewFeedItem(feedUrl);
    }
  }
}
function addNewFeedItem(feedUrl) {
  const newFeedItem = document.createElement('li');
  newFeedItem.innerText = feedUrl;
  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'remove';
  deleteButton.addEventListener('click', () => {
    removeLocalFeed(feedUrl);
    newFeedItem.remove();
  });
  newFeedItem.append(deleteButton);
  feedList.append(newFeedItem);
}

/* local storage utils */
function setEmptyLocalFeed() {
  localStorage.setItem(USER_FEEDS, JSON.stringify([]));
  return getLocalFeeds();
}
function getLocalFeeds() {
  const userFeeds = localStorage.getItem(USER_FEEDS);
  if (!userFeeds) return setEmptyLocalFeed();
  return JSON.parse(userFeeds);
}
function addLocalFeed(newFeed) {
  const userFeeds = getLocalFeeds();
  localStorage.setItem(USER_FEEDS, JSON.stringify([...userFeeds, newFeed]));
}
function removeLocalFeed(targetFeed) {
  const userFeeds = getLocalFeeds();
  const updatedFeeds = userFeeds.filter((feed) => feed !== targetFeed);
  localStorage.setItem(USER_FEEDS, JSON.stringify(updatedFeeds));
}
