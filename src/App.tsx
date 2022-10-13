import { useEffect, useState } from "react";
import "./App.css";
import ReminderList from "./components/ReminderList";
import NewReminder from "./components/NewReminder";
import Reminder from "./models/reminder";
import reminderServices from "./services/reminder.services";

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  useEffect(() => {
    loadReminders();
  }, []);

  const loadReminders = async () => {
    const result = await reminderServices.getReminders();
    setReminders(result);
  };

  const handleRemoveReminder = (id: number) => {
    setReminders(reminders.filter((item) => item.id !== id));
  };

  const handleAddReminder = async (title: string) => {
    const newReminder = await reminderServices.addReminder(title);
    setReminders([newReminder, ...reminders]);
  };

  return (
    <div className="App">
      <NewReminder onAddReminder={handleAddReminder} />
      <ReminderList items={reminders} onRemoveReminder={handleRemoveReminder} />
    </div>
  );
}

export default App;
