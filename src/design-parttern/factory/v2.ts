interface IVehicle {
  drive(): void
}

enum VehicleType {
  SUV = 'SUV',
  PICKUP = 'PICKUP',
}

interface IVehicleFactory {
  getVehicle(): IVehicle
}

class Suv implements IVehicle {
  drive() {
    console.log('Drive Suv')
    this.turnLeft()
  }

  turnLeft() {
    console.log('Turn left')
  }
}

class SuvFactory implements IVehicleFactory {
  getVehicle(): IVehicle {
    return new Suv()
  }
}

class Pickup implements IVehicle {
  drive() {
    console.log('Drive Pickup')
    this.turnRight()
  }

  turnRight() {
    console.log('Turn right')
  }
}

class PickupFactory implements IVehicleFactory {
  getVehicle(): IVehicle {
    return new Pickup()
  }
}

;(() => {
  const factoryList: Record<
    keyof typeof VehicleType,
    new () => IVehicleFactory
  > = {
    [VehicleType.SUV]: SuvFactory,
    [VehicleType.PICKUP]: PickupFactory,
  }

  function getVehicle(vehicleType: keyof typeof VehicleType) {
    const vehicle = new factoryList[vehicleType]()
    return vehicle.getVehicle()
  }

  const suv = getVehicle(VehicleType.SUV)
  suv.drive()

  // const factories = (vehicleType: VehicleType) =>
  //   ({
  //     [VehicleType.SUV]: () => new SuvFactory(),
  //     [VehicleType.PICKUP]: () => new PickupFactory(),
  //   }[vehicleType])

  // if (!factories) {
  //   throw new Error('Invalid factory type')
  // }

  // const factory = factories(VehicleType.SUV)()
  // factory.getVehicle().drive()
})()

export {}
