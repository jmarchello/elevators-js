const Elevator = require('./Elevator.js');

class ElevatorSimulator {
  constructor(elevatorCount=1, floorCount=1) {
    this.elevatorCount = elevatorCount;
    this.floorCount = floorCount;
    this.elevators = [];

    for (let i = 1; i <= elevatorCount; i++) {
      elevators[i] = new Elevator(floorCount);
    }
  }
}

module.exports = ElevatorSimulator;
