"use client";
import { handleDelete } from "../utils/db-operations";

export function DeleteButton({ id }) {
  return (
    <button
      onClick={() => {
        handleDelete(id);
      }}
    >
      X
    </button>
  );
}
