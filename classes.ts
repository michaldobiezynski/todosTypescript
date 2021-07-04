class Vehicle {
  constructor(public color: string) {}

  //   public drive(): void {
  //     console.log("chugga chugga");
  //   }

  protected honk(): void {
    console.log("beep");
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  drive(): void {
    console.log("vroom");
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle("orange");
console.log(vehicle.color);
// vehicle.drive();
// vehicle.honk();

const car = new Car(4, "black");
// car.honk();
car.startDrivingProcess();
car.drive();
