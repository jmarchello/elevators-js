const Elevator = require('./Elevator');
const ElevatorRequest = require('./ElevatorRequest');

class ElevatorSimulator {
  constructor(elevatorCount=1, floorCount=1) {
    this.elevatorCount = elevatorCount;
    this.floorCount = floorCount;
    this.elevators = [];

    for (let i = 1; i <= elevatorCount; i++) {
      elevators[i] = new Elevator(floorCount);
    }


    // display elevators and prompt users for a request;
    // User may opt not to provide one.
    // Move all elevators and prompt again.
    // Reject requests that are invalid (letters instead of numbers, floor under 1 or over floorCount, etc..)
  }


  processRequest(origin, destination) {
    const request = new ElevatorRequest(origin, destination);
    let elevatorToAnswer = this.elevators.find((elevator) => elevator.currentFloor === origin);

    if (!elevatorToAnswer) {
      // Get unoccupied elevators going the correct direct, find the closes one
    }

    if (!elevatorToAnswer) {
      // find the nearest unoccupied elevator
    }


    // assign the request to elevatorToAnswer

  }


}

module.exports = ElevatorSimulator;
