import React from 'react'
import { assets } from '../assets/assets'
import './Footer.css'
function Footer() {
  return (
    <div className="maindivoffooter">
        <div className="subdivoffooter">

        {/*----left section---*/ }

    <div className="">
         <img className='imgprescripto' src={assets.logo} alt=""/>
          <p className="parafrom">From the examples on the previous pages, you have seen that it is possible to specify a different<br/> border for each side.
              In CSS, there are also properties for specifying each of the borders
         </p>
   </div>

        {/*---centre section---*/ }
    <div className="">
         <p className="company">COMPANY</p>
         <ul className="ullist">
            <li className="">Home</li>
            <li className="">Contact us</li>
            <li className="">about us</li>
            <li className="">privacy policy</li>
         </ul>
    </div>

        {/*---right section---*/ }
    <div className="">
         <p className="company">Get In Touch</p> 
         <ul className='ullist'>
            <li className="">9999999999999</li>
            <li className="">alsalama@gmail.com</li>
         </ul>
    </div>
</div>
      <div className="">
              {/*---copyright text---*/ }
              <hr/>
              <p className="copyright">copyright@2024 description alright reserved</p>
      </div>
    </div>
  )
}

export default Footer