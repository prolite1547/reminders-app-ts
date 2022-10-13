import React, { useState } from "react";

interface NewReminderProps {
  onAddReminder: (title: string) => void;
}

function NewReminder({ onAddReminder }: NewReminderProps): JSX.Element {
  const [title, setTitle] = useState("");

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;
    onAddReminder(title);
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="form-control"
        />
        <button type="submit" className="btn btn-primary my-3 rounded-pill">
          Add Reminder
        </button>
      </form>
    </div>
  );
}

export default NewReminder;
