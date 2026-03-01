// app/dashboard/ClientComponent.js

"use client";

import { useState } from "react";

export default function ClientComponent({ username }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Welcome {username}</h2>

      <p>Counter: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}
