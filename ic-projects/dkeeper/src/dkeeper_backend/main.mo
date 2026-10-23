import List "mo:base/List";
import Debug "mo:base/Debug";

persistent actor DKeeper {
  public type Note = {
    title : Text;
    content : Text;
  };

  // ***** stable variable means it is saved to the disk and loaded when the canister is restarted
  // stable var notes : List.List<Note> = List.nil<Note>();
  // ***** We don't need to use stable var here because it is redundant.
  var notes : List.List<Note> = List.nil<Note>();

  public func createNote(titleText : Text, contentText : Text) : async () {

    let newNote : Note = {
      title = titleText;
      content = contentText;
    };

    notes := List.push(newNote, notes);
    Debug.print(debug_show(notes));
  };

  public query func readNotes() : async [Note] {
    // Returning an array of Note objects
    return List.toArray(notes);
  };

  // incomplete function
  public func removeNote(id: Nat) : async () {
    // Challenge: Remove the note at the given index.
    // use take and drop to remove the note at the given index.
    Debug.print(debug_show(notes));
    let listFront = List.take(notes, id);
    Debug.print("listFront is now " # debug_show(listFront));
    let listBack = List.drop(notes, id + 1);
    Debug.print("listBack is now " # debug_show(listBack));
    notes := List.append(listFront, listBack);
    Debug.print(debug_show(notes));
  };

}
