const xapi = require('xapi');

let occupancyZeroCount = 0;
let screenShareActive = false;
let occupancyCheckInterval; // Variable to hold the interval ID

function checkOccupancy() {
  xapi.status.get('RoomAnalytics PeopleCount').then((occupancy) => {
   // console.log('People in room - checkOccupancy', occupancy.Current); // Uncomment for Troubleshooting
    if (screenShareActive === true && occupancy.Current === '0') {
      occupancyZeroCount++;
    } else {
      occupancyZeroCount = 0;
    }

    if (occupancyZeroCount >= 2) {
      showCountdown();      
    }
  }).catch((error) => {
    console.error('Error fetching occupancy:', error);
  });
}

function showCountdown() {
  xapi.command('UserInterface Message Alert Display', {
    Title: 'Screen Share Warning',
    Text: 'Screen Share will be disabled in 1 minute due to lack of occupancy',
    Duration: 55
  });

  setTimeout(disableScreenShare, 60000); // 1 minute countdown
}

function disableScreenShare() {
  xapi.command('Presentation Stop');
  occupancyZeroCount = 0;
}

function monitorScreenShare() {
  if (screenShareActive === true) {
    checkOccupancy();
  } else {
    console.log('No LocalShare active - Doing Nothing'); 
  }
}

xapi.event.on('PresentationPreviewStarted', () => {
  screenShareActive = true;
  // console.log('LocalShare started'); // Uncomment for Troubleshooting
  occupancyCheckInterval = setInterval(monitorScreenShare, 120000); // Check every 2min
});

xapi.event.on('PresentationPreviewStopped', () => {
  screenShareActive = false;
  // console.log('LocalShare stopped'); // Uncomment for Troubleshooting
  clearInterval(occupancyCheckInterval); // Stop the interval
});
