class Vehicle {
  //   public drive(): void {
  //     console.log("chugga chugga");
  //   }

  protected honk(): void {
    console.log("beep");
  }
}

class Car extends Vehicle {
  drive(): void {
    console.log("vroom");
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();

const car = new Car();
// car.honk();
car.startDrivingProcess();
// car.drive();
