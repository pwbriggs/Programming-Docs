# What is Injection? 

When programming, if you need something, you typically create it on the spot. This will often look something like:

```java
public class DriveSubsystem() {
    
    private Motor myMotor;
    
    public DriveSubsystem() {
        myMotor = new Motor(1);
    }
}
```

This is quick and easy, but it makes it hard to test the DriveSubsystem. If you run the code on your computer (which has no motors attached to it), it's probably not going to work well. If you want to give it a fake test-only motor, you need to modify the code inside DriveSubsystem, which is a huge pain. You might end up doing something like this:

```java
public class DriveSubsystem() {
    
    private Motor myMotor;
    
    public DriveSubsystem() {
        if (globalConfigurationThing.IsInTestMode) {
            myMotor = new TestMotor(1);
        } else {
            myMotor = new Motor(1);
        }
    }
}
```

But, this has all sorts of problems. What if your DriveSubsystem does something bad in that else statement?

```java
public class DriveSubsystem() {
    
    private Motor myMotor;
    
    public DriveSubsystem() {
        if (globalConfigurationThing.IsInTestMode) {
            myMotor = new TestMotor(1);
        } else {
            myMotor = new Motor(-1); // Oh no! There's no such thing as a motor on port negative one!
        }
    }
}
```

Your test might still pass, but something bad will happen when you actually try and run it on the robot. What we need is a way for the DriveSubsystem to not know whether or not it is in test mode at all; if it runs the same code in "test" mode or "real" mode, then our tests can find any problem!

One way to do this is put things a class needs into it from outside via its constructor:

```java
public class DriveSubsystem() {
    
    private Motor myMotor;
    
    public DriveSubsystem(Motor givenMotor) {
        myMotor = givenMotor;
    }
} 
```

Now, in your tests, when you create the DriveSubsystem you can just give it a fake motor when running tests on your computer, and give it a real motor when it's running on the actual robot! This is a huge improvement.

This is the basic idea behind injection (aka "putting things your class needs into it from outside") - if your class needs something, you ask somebody else to give it to you. This particular approach is often called Constructor Injection, since we put all the class dependencies in its constructor.

## Next Steps

In the next lesson, we'll dive deeper into how dependency injection actually works in our robot projects, using the Dagger framework.
