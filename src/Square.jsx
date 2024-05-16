export default function Square({ value, row, col, onPlay }) {
  return (
    <button className="square" onClick={() => onPlay(row, col)}>
      {value}
    </button>
  );
}
