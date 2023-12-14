import React from 'react'
import "./Navbar.css"
function Navbar() {
  return <>
 <section className='navbar-container'>
<div className='left'>
    <div className='heading'><span>D</span>ate & <span>T</span>ime</div>
</div>
<div className='rights'>
    <a href='#table' className='tables'>Show Table</a>
</div>
 </section>
  </>
}

export default Navbar