
let bell= new Audio("https://upload.wikimedia.org/wikipedia/commons/a/af/Taco_Bell_Bong.ogg");
   
let chimes = new Audio("https://upload.wikimedia.org/wikipedia/commons/9/97/NBC_chimes.ogg");

let horn = new Audio("https://upload.wikimedia.org/wikipedia/commons/1/12/WWS_Signalhorn.ogg");

let siren = new Audio("https://upload.wikimedia.org/wikipedia/commons/4/4c/Memlow.wav")



let time = 0;
let TimeTillAlert;
let WarnTime;
let TIMER_ID;
let Sound;
let Dang;

chrome.storage.local.get(['pref', 'warn', 'sound', 'dang']).then((results) => {


    if(results.pref === undefined) {
        TimeTillAlert = 10*60;
    } else {
        TimeTillAlert = results.pref;
    }
    
    if(results.warn === undefined) {
        WarnTime = -1;
    } else if (results.warn === 0) {
        WarnTime = -1; // no warning.
    } else {
        WarnTime = results.warn;
    }


    if(results.sound === undefined) {
        Sound = 'chime'
    } else {
        Sound = results.sound;
    }


    Dang = results.dang;
    TIMER_ID = setInterval(tick, 1000); // then start ticking after we have queried 
  })
  

  document.addEventListener("visibilitychange", (event) => {
    if (document.visibilityState == "visible") {
      // restart timer
      TIMER_ID = setInterval(tick, 1000);
    } else {
      // pause timer
      clearInterval(TIMER_ID);
    }
  });
  


  function tick() {
    time += 1;
    if(time === (TimeTillAlert - WarnTime)) {
        if(Dang === true) {
            alert("Warning, You have "+WarnTime+" seconds left.");
        } else {
            alert("You have been on this page for " + time +" seconds");
        }
    }


    if(time >= TimeTillAlert) {



         //   let audio = new Audio('sound/bell.mp3');
         //   audio.play();
         if(Sound === 'bells') {
            bell.play();
         } else if(Sound === 'chime') {
            chimes.play();
         } else if(Sound === 'air horns') {
            horn.play();
         } else if(Sound === 'siren') {
            siren.play();
         }
        

        if(Dang === true) {
                // Kill everything
                const DOMBODY = window.document.querySelector('body');
                DOMBODY.innerHTML = ''; // your page is blank now.
               

                // let bomb = document.createElement('img');
                // bomb.src = '/images/time-aware-logo-no-background.png';
                // bomb.id = 'blown-up';
                // DOMBODY.appendChild(bomb);

            alert("Your time allotment on this page is up.");
   
        } else { // the much nicer
            
            alert("You have spent " + time + " seconds on this page, time to take a break.");
            TimeTillAlert  = Number(TimeTillAlert) + 5;
          //  alert("timeTill Al: " + TimeTillAlert);
        }
       

    }
    }


// alert("hiLOADEVENT");


// let resp = chrome.runtime.sendMessage({greeting: "hello"});


// alert(resp);


// async () => {
//     const response = await chrome.runtime.sendMessage({greeting: "hello"});
//     // do something with response here, not outside the function
//     alert(response);
// };


// let response = chrome.runtime.sendMessage({greeting: "hello"});
// alert("recieved response")
// alert(response);
// response.then((results) => {
//     alert("in then");
//     alert(results.farewell)
// });





//     const element = document.getElementById('body');
//     element.addEventListener('myCustomEvent', (event) => {
//         alert('Event received:', event.detail.message);
//     });
  

//     const myEvent = new CustomEvent('myCustomEvent', {
//         detail: {
//             message: 'Hello from the event!'
//         }
//     });