class Elevator {
  constructor(floorCount=1) {
    this.floorCount = floorCount;
    this.currentFloor = 1;
    this.isDoorOpen = false;
    this.totalTrips = 0;
    this.floorsPassed = 0;
    this.maintenanceMode = false;
    this.stopQueue = [];
    this.occupants = 0;
  }

  get isOccupied() {
    return this.occupants > 0;
  }

  get nextStop() {
    if (this.stopQueue.length > 0) {
      this.stopQueue[0].floor;
    }
  }

  move() {
    if (this.stopQueue.length > 0) {
      if (this.stopQueue[0] > this.currentFloor) {
        this.currentFloor++;
      } else {
        this.currentFloor--;
      }

      if (this.currentFloor === this.stopQueue[0].floor) {
        if (this.stopQueue[0].isDestination) {
          this.occupants--;
        } else {
          this.occupants++
        }

        this.stopQueue.shift();
      }

    }

    return { currentFloor: this.currentFloor, isDoorOpen: this.isDoorOpen };
  }
}

module.exports = Elevator;
