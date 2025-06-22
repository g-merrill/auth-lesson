import { useState, useRef } from 'react'
import bcrypt from 'bcryptjs'

export default function Bcrypt() {
  const inputRef = useRef(null)
  const [hash, setHash] = useState('')
  const [loading, setLoading] = useState(false)

  const handleHash = async evt => {
    evt.preventDefault()
    setLoading(true)
    const saltRounds = 15
    const result = await bcrypt.hash(inputRef.current.value, saltRounds)
    setHash(result)
    setLoading(false)
  }

  return (
    <div className="container">
      <h2>Bcrypt</h2>
      <form onSubmit={handleHash}>
        <input placeholder="Enter text" ref={inputRef} />
        <button disabled={loading}>
          {loading ? 'Working...' : 'Bcrypt it!'}
        </button>
      </form>
      <h3>{hash && <pre>{hash}</pre>}</h3>
    </div>
  )
}
