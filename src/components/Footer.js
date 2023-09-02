import React from 'react'
import '../styles/footer.css'
const Footer = () => {
  const date = new Date().getFullYear()
  return (
    <div>
          <div className="footer"><span>&copy; {date}</span>  Designed by Johnson</div>
    </div>
  )
}

export default Footer
