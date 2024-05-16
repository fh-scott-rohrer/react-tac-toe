import Square from "./Square";

export default function BoardRow({ values, row, onPlay }) {
  return (
    <div className="board-row">
      <Square value={values[0]} row={row} col={0} onPlay={onPlay} />
      <Square value={values[1]} row={row} col={1} onPlay={onPlay} />
      <Square value={values[2]} row={row} col={2} onPlay={onPlay} />
    </div>
  );
}
