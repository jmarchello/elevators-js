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

  addRequest(request) {
    let nextStop = this.nextStop();
    this.stopQueue.push({floor: request.origin, isDestination: false});
    this.stopQueue.push({floor: request.destination, isDestination: true});
    if (this.nextStop !== undefined) {
      // sort lowest to highest
      this.stopQueue = this.stopQueue.sort((stopA, stopB) => {
        return stopA.floor - stopB.floor;
      })

      // if we're going down, reverse the order
      if (nextStop < this.currentFloor) {
        this.stopQueue.reverse();
      }
    }
  }

  move() {
    if (
      this.stopQueue.length > 0
      && this.stopQueue[0].floor <= this.floorCount
      && this.stopQueue[0].floor > 0
      && this.maintenanceMode === false
    ) {
      this.isDoorOpen = false;

      if (this.stopQueue[0].floor > this.currentFloor) {
        this.currentFloor++;
      } else {
        this.currentFloor--;
      }
      this.floorsPassed++;

      if (this.currentFloor === this.stopQueue[0].floor) {
        this.isDoorOpen = true;
        if (this.stopQueue[0].isDestination) {
          this.occupants--;
        } else {
          this.occupants++
        }

        this.stopQueue.shift();
        this.totalTrips++;
        if (this.totalTrips % 100 === 0) {
          this.maintenanceMode = true;
        }
      }
    }


    return { currentFloor: this.currentFloor, isDoorOpen: this.isDoorOpen };
  }
}

module.exports = Elevator;
