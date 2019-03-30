// Code your solution in this file!

const blockSize = 264

function distanceFromHqInBlocks(start) {
return Math.abs(42 - start)
}

function distanceFromHqInFeet(start) {
return distanceFromHqInBlocks(start) * blockSize
}

function distanceTravelledInFeet(start, destination) {
return Math.abs(destination - start) * blockSize
}

function calculatesFarePrice(start, destination) {
let rideDistance = distanceTravelledInFeet(start, destination)
if (rideDistance < 400) {
  return 0
} else if (rideDistance >= 400 && rideDistance <= 2000) {
  return .02 * (rideDistance - 400)
} else if (rideDistance >= 2000 && rideDistance <= 2500) {
  return 25
} else {
  return "cannot travel that far"
}
}

// gives customers a free sample ‣
// AssertionError: expected NaN to equal 0
//     at Context.<anonymous> (test/indexTest.js:48:46)
// charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!) ‣
// AssertionError: expected NaN to equal 2.56
//     at Context.<anonymous> (test/indexTest.js:53:46)
// charges 25 dollars for a distance over 2000 feet ‣
// AssertionError: expected NaN to equal 25
//     at Context.<anonymous> (test/indexTest.js:57:46)
// does not allow rides over 2500 feet
