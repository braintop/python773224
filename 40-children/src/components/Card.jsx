export default function Card({children}) {
    return (
      <div style={{
        border: "2px solid gray",
        borderRadius: "10px",
        padding: "10px",
        margin: "10px"
      }}>
        {children}
      </div>
    );
  }
