type GridProps = {
  tiles: string[][]
}

function Grid({ tiles }: GridProps) {
  return (
    <div className="grid">
      {tiles.map((row, y) =>
        row.map((cell, x) => (
          <div
            key={`${x}-${y}`}
            className={`cell ${cell === '#' ? 'wall' : ''} ${cell === 'G' ? 'goal' : ''}`}
          >
            {cell === 'G' ? '⭐' : ''}
          </div>
        ))
      )}
    </div>
  )
}

export default Grid