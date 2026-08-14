# How does Dependency Injection work?

From the outside, dependency injection looks like magic: by adding a parameter to your constructor, the system somehow knows how to pass in the correct object. However, dependency injection is anything but magic - you just need to know where to look in the code to find where the dependency injection system is being configured.

In our projects, we use a dependency injection framework called [Dagger](https://dagger.dev/dev-guide/), and we configure it in our code. This lesson will walk through how Dagger was configured and how you can extend our configurations to add your own components to the configuration.

## Telling the Robot to use Dagger

In robot code using our team's libraries, there is always a `Robot.java` file. The class in this file is used to initialize everything the robot code does. For dependency injection in particular, the **Robot** class implements a function called `createDaggerComponent()`. This small function is what actually tells our robot that it has physical motors, simulated motors, or mock motors in the case of unit tests.

```java
public class Robot extends BaseRobot {
    // ... snip ...
    protected BaseRobotComponent createDaggerComponent() {
        if (BaseRobot.isReal()) {
            return DaggerRobotComponent.create();
        } else {
            return DaggerSimulationComponent.create();
        }
    }
    // ... snip ...
}
```

The next obvious question is "Where is DaggerRobotComponent defined? How does it work?" You won't find any class in the robot code that defines it. There is a special step as part of the compilation/build process that automatically generates this class using what Dagger calls **Components** and **Modules**.

## Components

In Dagger, a **Component** describes how objects are created.

In the robot code, you'll find a class called **RobotComponent**:

```java
@Singleton
@Component(modules = { RobotModule.class, RealDevicesModule.class, RealControlsModule.class, CompetitionModule.class })
public abstract class RobotComponent extends BaseRobotComponent {
    
}
```

There's a lot going on here, even though the class is empty! `@Component(...)` is an annotation that is used by Dagger to tell it that this class contains the instructions to build **DaggerRobotComponent**.

The class is still empty though - so how does this create any meaningful instructions? It's using **inheritance**! There's another class called **BaseRobotComponent** that defines several abstract methods, and that class inherits from another class called **BaseComponent** that defines even more abstract methods.

Each of the abstract methods on a **Component** define what you can ask Dagger for directly.

In the case of the XBotEdu robot, we can ask Dagger to give us a **SubsystemDefaultCommandMap** because it defines the method below:

```java
public abstract class BaseRobotComponent extends BaseComponent {
    public abstract SubsystemDefaultCommandMap subsystemDefaultCommandMap();
    // ... snip ...
}
```

That explains how we can tell Dagger what we can ask it for, but how does it know how to build a **SubsystemDefaultCommandMap**? Or if you needed an **XCanTalon**, how does it know how to produce an an object that works for real motor controllers or for unit tests? This is where **modules** come in.

## Modules

In Dagger, a **module** defines how a particular object should be built.

From our earlier example, it referenced several modules:

```java
@Singleton
@Component(modules = { RobotModule.class, RealDevicesModule.class, RealControlsModule.class, CompetitionModule.class })
public abstract class RobotComponent extends BaseRobotComponent {
    
}
```

The `@Component(...)` annotation is telling Dagger that it needs instructions from the **RobotModule**, **RealDevicesModule**, **RealControlsModule** and **CompetitionModule** classes.

Compare that to another component in the XBotEdu codebase:

```java
@Singleton
@Component(modules = { SimulationModule.class, MockDevicesModule.class, RealControlsModule.class, SimulatedRobotModule.class })
public abstract class SimulationComponent extends BaseRobotComponent {
    
}
```

The **SimulationComponent** uses different modules, but it inherits from the same **BaseRobotComponent**. This allows it to create different types of objects!

If you were to look at **MockDevicesModule** (defined as part of SeriouslyCommonLib), you would find something like this:

```java
@Module
public abstract class MockDevicesModule {
    // ... snip ...
    @Binds
    @Singleton
    public abstract XCANTalonFactory getCANTalonFactory(MockCANTalonFactory impl);
    // ... snip ...
}
```

This tells Dagger that if any Component or any object built by a component asks for an **XCANTalonFactory**, Dagger should build a new **MockCANTalonFactory** object. The `@Singleton` annotation here tells Dagger that it should only create the **MockCANTalonFactory** once, and always return the same object no matter how many things ask for it.

## Inject

The last piece of the puzzle is the `@Inject` annotation. You've seen this scattered throughout the code, and you were probably wondering what that did and why it was important.

Take a look at the constructor for **ArcadeDriveWithJoysticksCommand**:

```java
    @Inject
    public ArcadeDriveWithJoysticksCommand(DriveSubsystem driveSubsystem, OperatorInterface oi) {
        this.operatorInterface = oi;
        this.drive = driveSubsystem;
    }
```

Here, the `@Inject` annotation is telling Dagger that it can create this object, and it can use dependency injection to provide the **DriveSubsystem** and **OperatorInterface** objects.

You don't even need to reference **ArcadeDriveWithJoysticksCommand** in your components or modules! You only need to update a module when there's more than one possible implementation of an interface/abstract class, like with a mock or real device class. Components only need to be updated if you need to ask for an object directly from Dagger, as in a unit test.

Here's an example from **TankDriveTest** where we're asking for a TankDriveWithJoysticksCommand from Dagger:

```java
public class TankDriveTest extends BaseDriveTest {
    @Test
    public void test() {
        BaseCommand command = this.getInjectorComponent().tankDriveWithJoysticksCommand();
        // ... snip ...
    }
}
```

Can you find where Dagger is configured to allow you to ask it for a **TankDriveWithJoysticksCommand** object directly?
How would you add your own commands to Dagger's component list so that you can easily reference them in tests?

## Next Steps

You will see a lot more of dependency injection in the next challenge, [[Curriculum challenge ~ Upgrading Using the SeriouslyCommonLib]].