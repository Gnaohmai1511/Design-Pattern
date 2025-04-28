class Car {
    drive() {
      console.log("Driving a car");
    }
  }
  class Truck {
    drive() {
      console.log("Driving a truck");
    }
  }
  class VehicleFactory {
    createVehicle(type) {
      if (type === "car") return new Car();
      if (type === "truck") return new Truck();
      throw new Error("Unknown vehicle type");
    }
  }
  const factory = new VehicleFactory();
  const car = factory.createVehicle("car"); //Khởi tạo đối tượng thông qua Factory Pattern thay vì dùng cost car = new Car()
  car.drive(); // Driving a car
  
  const truck = factory.createVehicle("truck");//Khởi tạo đối tượng thông qua Factory Pattern thay vì dùng cost truck = new Truck()
  
  truck.drive(); // Driving a truck
  