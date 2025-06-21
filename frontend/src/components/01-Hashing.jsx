import { useState, useEffect, useRef } from 'react'
import md5 from 'md5'

export default function Hashing() {
  const [hash, setHash] = useState('')
  const inputRef = useRef(null)
  useEffect(() => {
    md5('something')
  }, [])
  const onHash = () => {
    setHash(md5(inputRef.current.value))
  }
  return (
    <div className="container">
      <h2>Hashing</h2>
      <input ref={inputRef} placeholder='type something' />
      <button onClick={onHash}>Hash It!</button>
      <div>The hash: {hash}</div>
    </div>
  )
}
