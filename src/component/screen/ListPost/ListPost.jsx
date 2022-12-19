import React from 'react'
import './ListPost.css'
import Post from './Post'

export default function () {
  return (
    <div className='ListPost'>
         <div className='ListTiket-findTicketBody-search'>
                    <div className='ListTiket-findTicketBody-search-body'>
                        <div className='ListTiket-findTicketBody-Title'>Find keywords</div>
                        <input className='ListTiket-findTicketBody-inputSearch' />
                        <img className='ListTiket-findTicketBody-btnSearch' src={process.env.PUBLIC_URL + '/image/iconsearchheart.png'} alt="" />
                    </div>
                </div>
        <div className='PostList'>
           
                <Post/>
           
           
           
           

        </div>
    </div>
  )
}
