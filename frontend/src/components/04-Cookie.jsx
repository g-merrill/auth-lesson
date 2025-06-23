import { useEffect } from "react"

export default function Cookie() {
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/cookie`)
  }, [])
	const rawCookie = document.cookie
	console.log(`rawCookie: ${rawCookie}`)

	return (
		<div className="container">
			<h2>Cookie</h2>
			<p className="cookie-count">{rawCookie || "count=0"}</p>
		</div>
	)
}
