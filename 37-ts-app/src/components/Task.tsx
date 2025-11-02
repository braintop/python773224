export default interface TaskProps {
   id: number;
  title: string;
  isDone: boolean;
  toggleDone?: (id: number) => void;
}

export function Task({ title, isDone, id, toggleDone }: TaskProps) {
    function handleDone() {
        if (toggleDone) {
            toggleDone(id);
        }
    }
  return (
    <p
      style={{
        fontSize: "30px",
        borderRadius: "10px",
        padding: "10px",
        border: "5px solid brown",
        color: isDone ? "green" : "red",
      }}
    >
      {id} {title} – {isDone ? "👍" : "❌"} 
      <button onClick={handleDone}>Done</button>
    </p>
  );
}
