import { useState, useEffect } from 'react'

export default function Cookie() {
  const [rawCookie, setRawCookie] = useState('')
  useEffect(() => {
    setRawCookie(document.cookie)
  }, [])
  return (
    <div className='container'>
      <h2>Cookie</h2>
      <h3>{rawCookie || 'count=0'}</h3>
    </div>
  )
}
