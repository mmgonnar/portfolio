"use client"

export default function Copyright() {
  return (
    <div className="flex">
        <div>
        <p className="text-center text-amber-50 font-mono">
        {'Copyright'}{' \u00A9'} {new Date().getFullYear()} | {'Mariela González'}
      </p>
        </div>
        <div></div>
      
    </div>
  )
}
