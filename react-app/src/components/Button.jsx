export default function Button({  background, color, border,children }) {
  return (
    <button style={{ padding: "10px 20px",
                    background: background,
                    color:color,
                    border:border
                    
    }}>
      {children}
    </button>
  );
}
