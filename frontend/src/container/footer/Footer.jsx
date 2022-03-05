import React from 'react'
import './Footer.scss'
import { FiPhoneCall, FiMail } from 'react-icons/fi'
import { HiOutlineLocationMarker } from 'react-icons/hi'

const Footer = () => {
  return (
    <div className='footer'>
        <h1>CONTACT ME</h1>
        <div className="line"></div>
        <div className="contact">
            <FiPhoneCall/>
            <div className="info">
              <span>Call me</span>
              <span>0967246521</span>
            </div>
        </div>
        <div className="contact">
            <FiMail/>
            <div className="info">
              <span>Email</span>
              <span>hoangnhung25122001@gmail.com</span>
            </div>
        </div>
        <div className="contact">
            <HiOutlineLocationMarker/>
            <div className="info">
              <span>Address</span>
              <span>116 Hoàng Mai, Hoàng Văn Thụ, Hoàng Mai, Hà Nội</span>    
            </div>
        </div>
    </div>
  )
}

export default Footer