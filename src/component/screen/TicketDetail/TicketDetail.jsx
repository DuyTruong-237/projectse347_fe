import React from 'react'
import './TicketDetail.css'

export default function TicketDetail() {
  return (
    <div className='TicketDetail'>
      <div className='TicketDetail-Title'>Ticket Infomation</div>
      <div className='TicketDetail-Title-mainbody'>
      <div className='TicketDetail-Title-body'>

        <div className='TicketDetail-Title-bodyv2'>
          <div className='TicketDetail-Title-body-itemInfo-location'>Nha Trang</div>
          <div className='TicketDetail-Title-body-mainInfo'>
            <div className='TicketDetail-Title-body-itemInfo'>
              <div className='TicketDetail-Title-body-itemInfo-title'>Total time:</div>
              <div className='TicketDetail-Title-body-itemInfo-Info'>3 days 2 nights</div>
            </div>
            <div className='TicketDetail-Title-body-itemInfo'>
              <div className='TicketDetail-Title-body-itemInfo-title'>Schedule:</div>
              <div className='TicketDetail-Title-body-itemInfo-Info'>bcd Nha Trang - abc Nha Trang - GHi Nha Trang - hjk Nha Trang</div>
            </div>
            <div className='TicketDetail-Title-body-itemInfo-price'>$200/1</div>
          </div>
        </div>
        
      </div>

      <div className='TicketDetail-myName'>
        <div className='TicketDetail-myName-name'>Paradise</div>
        <div className='TicketDetail-myName-contact'>Hotline: 0123456789</div>
      </div>
      </div>
      <div className='TicketDetail-orderTicket'>
        <div className='TicketDetail-Title'>Order here</div>
        <center className='TicketDetail-orderTicket-orderBody'>
            <div className='TicketDetail-orderTicket-orderBody-infor'>
            <div className='TicketDetail-orderTicket-orderBody-item'>
                <div className='TicketDetail-orderTicket-orderBody-item-title'>Name: </div>
                <input className='TicketDetail-orderTicket-orderBody-item-input'/>
              </div>
              <div className='TicketDetail-orderTicket-orderBody-item'>
                <div className='TicketDetail-orderTicket-orderBody-item-title'>Email: </div>
                <input className='TicketDetail-orderTicket-orderBody-item-input'/>
              </div>
              <div className='TicketDetail-orderTicket-orderBody-item'>
                <div className='TicketDetail-orderTicket-orderBody-item-title'>Phone number: </div>
                <input className='TicketDetail-orderTicket-orderBody-item-input'/>
              </div>
              <div className='TicketDetail-orderTicket-orderBody-item'>
                <div className='TicketDetail-orderTicket-orderBody-item-title'>Address: </div>
                <input className='TicketDetail-orderTicket-orderBody-item-input'/>
              </div>
              <div className='TicketDetail-orderTicket-orderBody-item'>
                <div className='TicketDetail-orderTicket-orderBody-item-title'>Amount: </div>
                <input className='TicketDetail-orderTicket-orderBody-item-input2'/>
              </div>
              <button className='TicketDetail-orderTicket-orderBody-btnBuy'>Buy</button>
              </div>
            
        </center>

      </div>
    </div>


  )
}
