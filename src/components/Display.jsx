// This is the first component
function Display({ input }) {
  return <div className="display">{input || "0"}</div>;
}

export default Display;
