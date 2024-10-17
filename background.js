import { scripty } from './java.js';



chrome.runtime.onInstalled.addListener((details) => {
    if(details.reason !== "install" && details.reason !== "update") return;
console.log("loading extension");
    
  });

  chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete' && tab.active) {
  
     console.log("reload");
     scripty();
    }
  })