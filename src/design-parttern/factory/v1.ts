interface IVehicle {
  drive(): void
}

enum VehicleType {
  SUV = 'SUV',
  PICKUP = 'PICKUP',
  VAN = 'VAN',
}

class VehicleFactory {
  getVehicle(vehicleType: VehicleType): IVehicle {
    const vehicles = {
      [VehicleType.SUV]: () => new Suv(),
      [VehicleType.PICKUP]: () => new Pickup(),
      [VehicleType.VAN]: () => new Van(),
    }[vehicleType]

    if (!vehicles) {
      throw new Error('Invalid vehicle type')
    }

    return vehicles()
  }
}

class Suv implements IVehicle {
  drive() {
    console.log('Drive Suv')
    this.turnLeft()
  }

  private turnLeft() {
    console.log('Turn left')
  }
}

class Pickup implements IVehicle {
  drive() {
    console.log('Drive Pickup')
    this.turnRight()
  }

  private turnRight() {
    console.log('Turn right')
  }
}

class Van implements IVehicle {
  drive() {
    console.log('Drive Van')
  }
}

;(() => {
  const vehicleFactory = new VehicleFactory()
  const suv = vehicleFactory.getVehicle(VehicleType.PICKUP)
  suv.drive()
})()

export {}
