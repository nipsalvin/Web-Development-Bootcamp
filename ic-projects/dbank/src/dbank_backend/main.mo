import Debug "mo:base/Debug";

persistent actor DBank {
  var currentValue = 300; //This is for mutable variables.
  currentValue := 100;

  let id = 512365; //This is for immutable variables.

  // Debug.print(debug_show(currentValue) # " " # debug_show(id));

  public func topUp() {
    currentValue += 1;
    Debug.print(debug_show(currentValue))
  };

  // topUp();

}