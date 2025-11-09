export default function Box({color,children}) {
    return (
      <div style={{
        border: "2px solid pink",
        borderRadius: "10px",
        padding: "10px",
        margin: "10px",
        backgroundColor: color
      }}>
        {children}
      </div>
    );
  }