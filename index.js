// Code your solution in this file!

function distanceFromHqInBlocks(location) {
  if (location > 42) {
    const numberOfBlocks = location - 42;
    return numberOfBlocks;
  } else {
    const numberOfBlocks = 42 - location;
    return numberOfBlocks;
  }
}

function distanceFromHqInFeet(location) {
  const distanceInFeet = distanceFromHqInBlocks(location) * 264;
  return distanceInFeet;
}

function distanceTravelledInFeet(start, finish) {
  const distanceInFeet = Math.abs((finish - start) * 264);
  return distanceInFeet;
}

function calculatesFarePrice(start, finish) {
  const totalDistance = distanceTravelledInFeet(start, finish);

  if (totalDistance <= 400) {
    const price = 0;
    return price;
  } else if (totalDistance <= 2000) {
    const price = (totalDistance - 400) * 0.02;
    return price;
  } else if (totalDistance <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
