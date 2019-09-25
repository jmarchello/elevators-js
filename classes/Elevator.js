class Elevator {
  constructor(floorCount=1) {
    this.floorCount = floorCount;
    this.currentFloor = 1;
    this.isDoorOpen = false;
    this.totalTrips = 0;
    this.floorsPassed = 0;
    this.maintenanceMode = false;
    this.floorQueue = [];
    this.requestCount = 0;
  }

  get isOccupied() {
    return this.requestCount > 0;
  }

  move() {
    if (this.floorQueue.length > 0) {
      if (this.floorQueue[0] > this.currentFloor) {
        this.currentFloor++;
      } else {
        this.currentFloor--;
      }

    }
  }
}

module.exports = Elevator;
