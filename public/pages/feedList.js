const feedName = '???';
document.title = `podcatch | ${feedName}`;
const feedTitleEl = document.getElementById('feed-title');
feedTitleEl.innerText = feedName;
const feedList = document.getElementById('feed-contents');

populateFeed(['item 1', 'item 2'], feedList);

function populateFeed(feedItems, list) {
  for (const i of feedItems) {
    addNewFeedItem(i, list);
  }
}
function addNewFeedItem(feedItem, list) {
  const newFeedItem = document.createElement('li');
  newFeedItem.innerText = feedItem;
  newFeedItem.classList.add('flex-wide');
  list.append(newFeedItem);
}
