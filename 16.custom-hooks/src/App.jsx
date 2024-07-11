import useCopyToClipboard from '../hooks/useCopyToClipboard';
import useCounter from '../hooks/useCounter'
import useToggle from '../hooks/useToggle';
import './App.css'

function App() {
  const { count, increase, decrease } = useCounter();
  const { status, handleStatus } = useToggle();
  const [copied, copy] = useCopyToClipboard("Pes Etme Calis!");

  return (
    <>
      <div>{count}</div>
      <button onClick={decrease}>Azalt</button>
      <button onClick={increase}>Arttir</button>

      <hr />
      <hr />

      <div>
        {
          status ? 'Status True' : 'Status False'
        }
      </div>
      <button onClick={handleStatus}>Change Status</button>

      <hr />
      <hr />

      <div>
        {
          copied && 'Kopyalandi'
        }
      </div>
      <button onClick={copy}>Kopyala</button>
    </>
  )
}

export default App
