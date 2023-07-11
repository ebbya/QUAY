import React, { useState } from "react";

export default function Page() {
  const [kaj, setKaj] = useState("");
  const [kajplats, setKajplats] = useState("");
  const [fartyg, setFartyg] = useState("");
  const [ankomst, setAnkomst] = useState("");
  const [avgang, setAvgang] = useState("");
  const [deleteId, setDeleteId] = useState("");

  const handleCreate = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/db/createplacement", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ kaj, kajplats, fartyg, ankomst, avgang }),
      });

      const data = await response.json();
      console.log(data);

      // Handle the response data here
      // ...

      // Clear the input fields
      setKaj("");
      setKajplats("");
      setFartyg("");
      setAnkomst("");
      setAvgang("");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("/api/db/deleteplacement", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ kaj: kaj, deleteID: deleteId }), // Pass both kaj and deleteID
      });
  
      const data = await response.json();
  
      // Handle the response data here
      // ...
  
      // Clear the delete ID field
      setDeleteId("");
    } catch (error) {
      console.error("Error:", error);
    }
  };
  

  return (
    <div>
      <h2>Create Placement</h2>
      <form onSubmit={handleCreate}>
        <input
          type="text"
          placeholder="Kaj"
          value={kaj}
          onChange={(e) => setKaj(e.target.value)}
        />

        <input
          type="text"
          placeholder="Kajplats"
          value={kajplats}
          onChange={(e) => setKajplats(e.target.value)}
        />

        <input
          type="text"
          placeholder="Fartyg"
          value={fartyg}
          onChange={(e) => setFartyg(e.target.value)}
        />

        <input
          type="datetime-local"
          placeholder="Ankomst"
          value={ankomst}
          onChange={(e) => setAnkomst(e.target.value)}
        />

        <input
          type="datetime-local"
          placeholder="Avgång"
          value={avgang}
          onChange={(e) => setAvgang(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      <h2>Delete Placement</h2>
      <form onSubmit={handleDelete}>
      <input
          type="text"
          placeholder="Kaj"
          value={kaj}
          onChange={(e) => setKaj(e.target.value)}
        />
        <input
          type="text"
          placeholder="ID"
          value={deleteId}
          onChange={(e) => setDeleteId(e.target.value)}
        />
        

        <button type="submit">Delete</button>
      </form>
    </div>
  );
}
