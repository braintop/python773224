export default function Card({title, children}) {
    return (
      <div style={{
        border: "2px solid gray",
        borderRadius: "10px",
        padding: "10px",
        margin: "10px"
      }}>
        <h2>{title}</h2>
        {children}
      </div>
    );
  }
