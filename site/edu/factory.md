# What's a factory?

In software development, we often need to create complicated objects that depend on other objects, parameters, or state. When you need to create lots of objects, repetitive setting of parameters and mapping dependencies is inefficient and you'll probably make a mistake.

A Factory is a class whose only job is to create instances of objects. These factories can be as simple or as complicated as needed, but they are a powerful way to make it easier to create complex objects.

Take this Car object as example - to create a Car we need to know about its Wheels, Doors, Windshield, etc. Imagine if every time you needed a Car, you needed to first create all of those parts from scratch.

```java
public class Car {
  public Car(Wheel frontLeft, Wheel frontRight, Wheel rearLeft, Wheel rearRight, ...) {
    // ...
  }
}
```

What if we could hide all of this logic to create a Car in a reusable Factory? It would be much easier for any code that needed a Car to just be able to ask a factory for a new one.

```java
public class CarFactory {
  public static Car create() {
    Wheel frontLeftWheel = new Wheel();
    Wheel frontRightWheel = new Wheel();
    Wheel rearLeftWheel = new Wheel();
    Wheel rearRightWheel = new Wheel();
    // .. create all other car parts ..
    return new Car(frontLeftWheel, frontRightWheel, rearLeftWheel, rearRightWheel, ...);
  }

  // We can even have factory methods that create different kinds of cars
  public static Car createSillyCar() {
    Wheel frontLeftWheel = new SquareWheel();
    Wheel frontRightWheel = new SquareWheel();
    Wheel rearLeftWheel = new SquareWheel();
    Wheel rearRightWheel = new SquareWheel();
    // .. create all other car parts ..
    return new Car(frontLeftWheel, frontRightWheel, rearLeftWheel, rearRightWheel, ...);
  }
}
```

Now I can create a car anywhere I need it just by asking the Factory for one!

```java
Car myCar = CarFactory.create();
Car mySillyCar = CarFactory.createSillyCar();
```

## How does this apply to my robot code?

When writing code for a robot, we often need to talk to motor controllers, sensors, relays, solenoids, or other devices. For example, we might use the XCANSparkMax class to talk to [Spark Max](https://www.revrobotics.com/rev-11-2158/) motor controllers. We need to build one XCANSparkMax object for each physical motor controller, and they all need to be configured to make sure each object is talking to the right controller. Instead of creating all of these objects manually, we can just ask the XCanSparkMaxFactory to give us the objects we need, with all of the repetitive logic hidden away inside the factory!

[SeriouslyCommonLib](https://github.com/Team488/SeriouslyCommonLib) provides factories that you can use to create lots of useful objects:

* PIDManagerFactory
* XGyroFactory
* HeadingModuleFactory
* XCANSparkMaxFactory
* ... and dozens of others

All of these built-in factories take advantage of *dependency injection*, which you can read about in the next section.
