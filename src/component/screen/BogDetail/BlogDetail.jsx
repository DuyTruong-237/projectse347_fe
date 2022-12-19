import React from 'react'
import './BlogDetail.css'

import { useLocation } from 'react-router-dom'

export default function BlogDetail(props) {
    const {title} = useLocation().state;
    const {des} = useLocation().state;
    const {imgURLs} = useLocation().state;
    console.log(title);
    console.log(des);
    console.log(imgURLs);
  return (
    <div className='DetailPost'>
      
        <div className='DetailPost__body'>
            <div className='DetailPost__User'>
                <img className='DetailPost__User--icProfile' src={process.env.PUBLIC_URL + '/images/username-removebg-preview.png'} alt='Header_icProfile'/>
                <h3>Phạm Anh Tú</h3>
            </div>
            <div className='DetailPost__Image'>
                <img className='DetailPost__Image--imgMain' src={imgURLs} alt='Header_icProfile'/>
                <div className='DetailPost__Image--imgMini'>
                   
                </div>
            </div>
            <div className='DetailPost__content'>
                <h3 className='DetailPost__content--title'>{title}</h3>
                <p className='DetailPost__content--description'>{des}</p>
            </div>
        </div>
    </div>
  )
}
