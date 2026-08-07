import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float";

persistent actor DBank {
  var currentValue : Float = 1000.0; //This is for mutable variables.
  // currentValue := 1000.0;

  var startTime = Time.now();
  // startTime := Time.now();
  Debug.print(debug_show(startTime));

  let id = 512365; //This is for immutable variables.

  // Debug.print(debug_show(currentValue) # " " # debug_show(id));

  public func topUp(amount: Float) { //You have to define the type of the parameter.
    currentValue := currentValue + amount;
    Debug.print(debug_show(currentValue));
  };

  // topUp();

  // Allow users to withdraw an amount from currentValue
  // Decrease the currentValue by the amount
  public func withdraw(amount:Float) {
    let tempValue: Float = currentValue - amount;
    if (tempValue >=0.0) {
      currentValue := currentValue - amount;
      Debug.print(debug_show(currentValue));
    } else {
      Debug.print("Insufficient balance");
    }
  };

  public query func checkBalance() :async Float{
    Debug.print(debug_show(currentValue));
    return currentValue; // return currentValue as a float
  };

  public func compound() {
    let currentTime = Time.now();
    let timePassedNanoSecs = currentTime - startTime;
    let timePassedSecs = timePassedNanoSecs / 1_000_000_000;
    let timePassedMins = timePassedSecs / 60;
    currentValue := currentValue * (1.001 ** Float.fromInt(timePassedMins)); // compound interest per minute
    startTime := currentTime;
  };
}