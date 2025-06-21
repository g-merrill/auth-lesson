import { useState, useEffect, useRef } from 'react'
import md5 from 'md5'

export default function Hashing() {
  const [hashes, setHashes] = useState([])
  const inputRef = useRef(null)
  useEffect(() => {
    md5('something')
  }, [])
  const onHash = () => {
    setHashes(hashes.concat(md5(inputRef.current.value)))
  }
  return (
    <div className="container">
      <h2>Hashing</h2>
      <input ref={inputRef} placeholder='type something' />
      <button onClick={onHash}>Hash It!</button>
      {hashes.map((hash, i) => <p className='hash' key={i}>{hash}</p>)}
    </div>
  )
}
