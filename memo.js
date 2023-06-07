// memo.js
window.onload = function() {
    const memoList = document.getElementById('memo-list');
    chrome.storage.sync.get(null, function(items) {
      for (let key in items) {
        if (items.hasOwnProperty(key)) {
          let memoDiv = document.createElement('div');
          memoDiv.className = 'memo';
          memoDiv.textContent = items[key];
          memoList.appendChild(memoDiv);
        }
      }
    });
  }
  