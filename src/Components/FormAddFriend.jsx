import { useState } from "react";
import Button from "./Btn";

function FormAddFriend({ addFriendHandler }) {
  const [image, setImage] = useState("https://i.pravatar.cc/300");
  const [name, setName] = useState("");
  // new way to create random new Id

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !image) return;
    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name: name,
      image: `${image}?=${id}`,
      balance: 0,
    };
    setImage("https://i.pravatar.cc/300");
    setName("");
    addFriendHandler(newFriend);
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>🙌Friend name</label>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>🪪Image url</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}

export default FormAddFriend;
