import { useState, useEffect } from 'react'

export default function Cookie() {
  const [rawCookie, setRawCookie] = useState('')
  useEffect(() => {
    setRawCookie(document.cookie)
  }, [])
  return (
    <div className='container'>
      <h2>Cookie</h2>
      <p className="cookie-count">{rawCookie || 'count=0'}</p>
    </div>
  )
}
