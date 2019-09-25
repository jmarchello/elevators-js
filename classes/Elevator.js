class Elevator {
  constructor(floorCount=1) {
    this.floorCount = floorCount;
    this.currentFloor = 1;
    this.isDoorOpen = false;
    this.isOccupied = false;
    this.totalTrips = 0;
    this.floorsPassed = 0;
    this.maintenanceMode = false;
  }
}
