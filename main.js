
//let audio = new Audio('sound/bell.mp3');
 // audio.play();


  let saveButton = document.querySelector('#save-button')
  saveButton.addEventListener("click", (event) => {

      // Read it using the storage API
    chrome.storage.local.get(['pref', 'warn', 'sound', 'dang']).then((results) => { // was for testing
        // alert("current amount is "+results.pref)
        // alert("current warning is "+results.warn)
        // alert("current sound is "+results.sound)
        // alert("current danger is "+results.dang)
      }).then( () => {

        let aLotField = document.querySelector("#time-allotment");
        let ALF = aLotField.value;
        if(ALF === '') { ALF = 10*60; } // default to ten minutes

        let warnField = document.querySelector("#warning");
        let WF = warnField.value;
        if(WF === '') { WF = 30; } //give 30 second warning

        let soundField = document.querySelector("#select-sound");
        let SF = soundField.value;
        if(SF === undefined) { SF = "none"; } //give 60 second warning

        let dangerField = document.querySelector('#one');
        let DF = dangerField.checked;
       

        chrome.storage.local.set({'pref':ALF, 'warn':WF, 'sound':SF, 'dang':DF}).then(() => {
            alert("changes saved");
       });
      });

  });







  

//   const audio = document.createElement('audio')
//   audio.src = 'sound/bell.mp3'

//   const element = document.getElementById('body');
//   element.addEventListener('myCustomEvent', (event) => {
//       alert('Event received:', event.detail.message);
//   });

//   chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
//         let saveButton = document.querySelector('#save-button')
//         saveButton.innerHTML = '';

//       console.log(sender.tab ?
//                   "from a content script:" + sender.tab.url :
//                   "from the extension");
//       if (request.greeting === "hello")
//         sendResponse({farewell: audio});
//     }
//   );