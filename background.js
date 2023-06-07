// background.js
chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
      "id": "addMemo",
      "title": "メモを追加",
      "contexts": ["selection"]
    });
  });
  
  chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "addMemo") {
      let text = info.selectionText;
      let timestamp = new Date().getTime();
      let saveObj = {};
      saveObj[timestamp] = text;
      chrome.storage.sync.set(saveObj, function() {
        console.log('メモを追加しました: ', text);
        chrome.tabs.create({ url: 'memo.html' });  // メモを追加した後、新しいタブを開く
      });
    }
  });

  chrome.action.onClicked.addListener(function(tab) {
    chrome.tabs.create({ url: 'memo.html' });
  });
  