export default function Contador({count,incrementar,decrementar}) {
  return (
    <>      
      <div className="card">
        <button>
          count is {count}
        </button>
      </div>
      <button onClick={incrementar}>+</button>
      <button onClick={decrementar}>-</button>
    </>
  )
}
