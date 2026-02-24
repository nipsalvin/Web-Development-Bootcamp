import Debug "mo:base/Debug";

persistent actor DBank {
  var currentValue = 300; //This is for mutable variables.
  currentValue := 100;

  let _id = 512365; //This is for immutable variables.

  // Debug.print(debug_show(currentValue) # " " # debug_show(id));

  public func topUp(amount: Nat) { //You have to define the type of the parameter.
    currentValue += amount;
    Debug.print(debug_show(currentValue));
  };

  // topUp();

  // Allow users to withdraw an amount from currentValue
  // Decrease the currentValue by the amount
  public func withdraw(amount:Nat) {
    currentValue -= amount;
    Debug.print(debug_show(currentValue));
  };

  public func getBalance() {
    Debug.print(debug_show(currentValue));
  };
}