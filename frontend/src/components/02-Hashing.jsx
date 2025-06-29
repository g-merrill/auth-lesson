import { useState, useEffect, useRef } from 'react'
import md5 from 'md5'

export default function Hashing() {
  const [hashes, setHashes] = useState([])
  const inputRef = useRef(null)

  useEffect(() => {
    console.log('hashing is happening')
  }, [hashes])

  const onHash = evt => {
    evt.preventDefault()
    const original = inputRef.current.value
    const hash = md5(original)
    setHashes(hashes.concat([[original, hash]]))
  }
  return (
    <div className="container">
      <h2>Hashing</h2>
      <form>
        <div>
          <input ref={inputRef} placeholder='Enter text' />
          <button onClick={onHash}>Hash it!</button>
        </div>
      </form>
      {hashes.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Original</th>
              <th>MD5 Hash</th>
            </tr>
          </thead>
          <tbody>
            {hashes.map((hash, i) => (
              <tr key={i}>
                <td>{hash[0]}</td>
                <td>{hash[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
