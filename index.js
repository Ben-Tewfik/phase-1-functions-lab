function distanceFromHqInBlocks(b) {
  if (b >= 42) {
    return b - 42;
  } else if (b < 42) {
    return 42 - b;
  }
}

function distanceFromHqInFeet(f) {
  return distanceFromHqInBlocks(f) * 264;
}

function distanceTravelledInFeet(start, end) {
  if (start < end) {
    return (end - start) * 264;
  } else if (end < start) {
    return (start - end) * 264;
  }
}

function calculatesFarePrice(start, end) {
  let distance = distanceTravelledInFeet(start, end);
  let farePriceDistance;
  if (distance < 400) {
    return (farePriceDistance = 0);
  } else if (distance > 400 && distance < 2000) {
    return (farePriceDistance = (distance - 400) * 0.02);
  } else if (distance > 2000 && distance < 2500) {
    return (farePriceDistance = 25);
  } else if (distance > 2500) {
    return "cannot travel that far";
  }
}
