import React from 'react'
import Button from '@mui/material/Button';
import Layout1 from './layout1';


const Home = () => {
  return (
   <Layout1>
     <div>
      <div className='banner1'>
      <Button className="bannre1-button" variant="contained" >Sign In</Button>
      </div>
    </div>
   </Layout1>
  )
}

export default Home