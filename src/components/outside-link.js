import React from "react"

function OutsideLink({ to, className, ariaLabel, children }) {
  return (
    <>
      <a
        href={to}
        aria-label={ariaLabel}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    </>
  )
}

export default OutsideLink
