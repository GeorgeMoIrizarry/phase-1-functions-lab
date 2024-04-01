// Code your solution in this file!
function distanceFromHqInBlocks(pickUp) {
    let distance = pickUp - 42;
    if (distance < 0) {
        distance *= -1
    } else {
        return distance
    }
    return distance;
}
function distanceFromHqInFeet(pickUp) {
    let distanceInFeet = distanceFromHqInBlocks(pickUp) * 264;
    return distanceInFeet
}
function distanceTravelledInFeet(start, destination) {
    let travel = start - destination;
    if (travel < 0) {
        travel *= -1
    } else {
        return travel * 264
    }
    return travel * 264
  }

  function calculatesFarePrice(start, destination) {
    let fare = distanceTravelledInFeet(start, destination);
    if (fare > 2500) {
        fare = 'cannot travel that far'
        return fare
    } else if ( fare <= 2500 && fare >= 2000) {
        fare = 25
        return fare
    } else if ( fare >= 400 && fare <= 2000 ) {
       fare -= 400
       fare *=.02
        return fare
    } else {
        fare = 0;
        return fare 
    }
  } 
calculatesFarePrice(34, 32 )

