import React from 'react'
import './TicketTap.css'
import HeaderView from '../../HeaderView/HeaderView'
import ListTicket from '../ListTicket/ListTicket'
import Footer from '../../footer/Footer'
import Toptrend from '../../TopTrend/Toptrend'

export default function TicketTap() {
  return (
    <div>
        <HeaderView/>
        <div className='TicketTab-ListTicket'><ListTicket /></div>
        <div className='TicketTab-TopTrend'><Toptrend/></div>
       <div className='TicketTab-Footer'> <Footer/></div>

    </div>
  )
}
