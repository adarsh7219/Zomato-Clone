import Link from 'next/link'
import React from 'react'
import LunchDiningIcon from '@mui/icons-material/LunchDining';



const Heder = () => {
  return (
    <>

    <div id='navbar'>
      <h1>Zomato</h1>
        {/* <LunchDiningIcon className='icon5' /> */}

        <div className='p1'>
           
        <Link href="/Main">Menu</Link>
        
        
        <Link href="/Last">Drinks</Link>
        <Link href="/About">Dining Out  </Link>
        <Link href="/Meddle">Pure Veg</Link>
        

        </div>
    </div>
   
    </>
  )
}

export default Heder
