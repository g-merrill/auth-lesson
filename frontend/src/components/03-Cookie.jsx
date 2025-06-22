import { useState, useEffect, useRef } from 'react'

export default function Cookie() {
  const [rawCookie, setRawCookie] = useState('')
  useEffect(() => {
    setRawCookie(document.cookie)
  }, [])
  return (
    <div className='container'>
      <h2>Cookie</h2>
      <h3>{rawCookie}</h3>
    </div>
  )
}
