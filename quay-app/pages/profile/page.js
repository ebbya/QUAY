import React, { useState } from "react";

export default function Page() {
  const [kaj, setkaj] = useState("");
  const [kajplats, setkajplats] = useState("");
  const [fartyg, setfartyg] = useState("");
  const [ankomst, setankomst] = useState("");
  const [avgang, setavgang] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const placering = await fetch("/api/db/createplacement", {
      method: "POST", // Make sure to include the method
      headers: {
        "Content-Type": "application/json", // Correct the header spelling
      },
      body: JSON.stringify({kaj,kajplats, fartyg, ankomst, avgang }),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text" // Add quotes around "text"
        placeholder="Kaj"
        value={kaj}
        onChange={(e) => setkaj(e.target.value)} // Correct the state updater function
      />

      <input
        type="text" // Add quotes around "text"
        placeholder="Kajplats"
        value={kajplats}
        onChange={(e) => setkajplats(e.target.value)} // Correct the state updater function
      />

      <input
        type="text" // Add quotes around "text"
        placeholder="Fartyg"
        value={fartyg}
        onChange={(e) => setfartyg(e.target.value)} // Correct the state updater function
      />

      <input
        type="datetime-local"
        placeholder="Ankomst"
        value={ankomst}
        onChange={(e) => setankomst(e.target.value)} // Correct the state updater function
      />

      <input
        type="datetime-local"
        placeholder="Avgång"
        value={avgang}
        onChange={(e) => setavgang(e.target.value)} // Correct the state updater function
      />

      <button type="submit">Submit</button>
    </form>
  );
}
