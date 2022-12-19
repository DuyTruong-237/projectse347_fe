import React, { useState, useEffect } from 'react'
import "./ListTicket.css"
import { Link } from 'react-router-dom'


export default function ListTicket() {
    return (
        <div className='ListTicker-tab'>
            <div className='ListTiket-titleTab'>Travel Tickets: choose your trip</div>
            <div className='ListTiket-findTicketBody'>
                <div className='ListTiket-findTicketBody-search'>
                    <div className='ListTiket-findTicketBody-search-body'>
                        <div className='ListTiket-findTicketBody-Title'>Find tickets</div>
                        <input className='ListTiket-findTicketBody-inputSearch' />
                        <img className='ListTiket-findTicketBody-btnSearch' src={process.env.PUBLIC_URL + '/image/iconsearchheart.png'} alt="" />
                    </div>
                </div>
                <div>
                <div className='ListTicker-tab-allTicker'>
                <div className='ListTicker-tab-allTicker-body' >
                        <div className='TikerItem'>
                            <div><div className='TikerItem-locationName'>NhaTrang</div></div>
                            <div className='TikerItem-inforBasic'>
                                <div className='TikerItem-inforBasic-days'>3 days 2 nights</div>
                                <div className='TikerItem-inforBasic-itemInfo' >
                                    <div className='TikerItem-inforBasic-itemInfo-title'>Check in: </div>
                                    <div className='TikerItem-inforBasic-itemInfo-info'>01/01/2023</div>
                                </div>
                                <div className='TikerItem-inforBasic-itemInfo' >
                                    <div className='TikerItem-inforBasic-itemInfo-title'>Check out: </div>
                                    <div className='TikerItem-inforBasic-itemInfo-info'>03/01/2023</div>
                                </div>
                                <div className='TikerItem-inforBasic-fare'>$200</div>
                               <Link to={'/ticketdetail'}><button className='TikerItem-inforBasic-btnBuy'>Read more and buy</button></Link> 

                            </div>

                        </div>
                        
                 
                    
                        <div className='TikerItem'>
                            <div><div className='TikerItem-locationName'>NhaTrang</div></div>
                            <div className='TikerItem-inforBasic'>
                                <div className='TikerItem-inforBasic-days'>3 days 2 nights</div>
                                <div className='TikerItem-inforBasic-itemInfo' >
                                    <div className='TikerItem-inforBasic-itemInfo-title'>Check in: </div>
                                    <div className='TikerItem-inforBasic-itemInfo-info'>01/01/2023</div>
                                </div>
                                <div className='TikerItem-inforBasic-itemInfo' >
                                    <div className='TikerItem-inforBasic-itemInfo-title'>Check out: </div>
                                    <div className='TikerItem-inforBasic-itemInfo-info'>03/01/2023</div>
                                </div>
                                <div className='TikerItem-inforBasic-fare'>$200</div>
                                <button className='TikerItem-inforBasic-btnBuy'>Read more and buy</button>

                            </div>

                        </div>
                        <div className='TikerItem'>
                            <div><div className='TikerItem-locationName'>NhaTrang</div></div>
                            <div className='TikerItem-inforBasic'>
                                <div className='TikerItem-inforBasic-days'>3 days 2 nights</div>
                                <div className='TikerItem-inforBasic-itemInfo' >
                                    <div className='TikerItem-inforBasic-itemInfo-title'>Check in: </div>
                                    <div className='TikerItem-inforBasic-itemInfo-info'>01/01/2023</div>
                                </div>
                                <div className='TikerItem-inforBasic-itemInfo' >
                                    <div className='TikerItem-inforBasic-itemInfo-title'>Check out: </div>
                                    <div className='TikerItem-inforBasic-itemInfo-info'>03/01/2023</div>
                                </div>
                                <div className='TikerItem-inforBasic-fare'>$200</div>
                                <button className='TikerItem-inforBasic-btnBuy'>Read more and buy</button>

                            </div>

                        </div>
                        <div className='TikerItem'>
                            <div><div className='TikerItem-locationName'>NhaTrang</div></div>
                            <div className='TikerItem-inforBasic'>
                                <div className='TikerItem-inforBasic-days'>3 days 2 nights</div>
                                <div className='TikerItem-inforBasic-itemInfo' >
                                    <div className='TikerItem-inforBasic-itemInfo-title'>Check in: </div>
                                    <div className='TikerItem-inforBasic-itemInfo-info'>01/01/2023</div>
                                </div>
                                <div className='TikerItem-inforBasic-itemInfo' >
                                    <div className='TikerItem-inforBasic-itemInfo-title'>Check out: </div>
                                    <div className='TikerItem-inforBasic-itemInfo-info'>03/01/2023</div>
                                </div>
                                <div className='TikerItem-inforBasic-fare'>$200</div>
                                <button className='TikerItem-inforBasic-btnBuy'>Read more and buy</button>

                            </div>

                        </div>
                        <div className='TikerItem'>
                            <div><div className='TikerItem-locationName'>NhaTrang</div></div>
                            <div className='TikerItem-inforBasic'>
                                <div className='TikerItem-inforBasic-days'>3 days 2 nights</div>
                                <div className='TikerItem-inforBasic-itemInfo' >
                                    <div className='TikerItem-inforBasic-itemInfo-title'>Check in: </div>
                                    <div className='TikerItem-inforBasic-itemInfo-info'>01/01/2023</div>
                                </div>
                                <div className='TikerItem-inforBasic-itemInfo' >
                                    <div className='TikerItem-inforBasic-itemInfo-title'>Check out: </div>
                                    <div className='TikerItem-inforBasic-itemInfo-info'>03/01/2023</div>
                                </div>
                                <div className='TikerItem-inforBasic-fare'>$200</div>
                                <button className='TikerItem-inforBasic-btnBuy'>Read more and buy</button>

                            </div>

                        </div>
                        <div className='TikerItem'>
                            <div><div className='TikerItem-locationName'>NhaTrang</div></div>
                            <div className='TikerItem-inforBasic'>
                                <div className='TikerItem-inforBasic-days'>3 days 2 nights</div>
                                <div className='TikerItem-inforBasic-itemInfo' >
                                    <div className='TikerItem-inforBasic-itemInfo-title'>Check in: </div>
                                    <div className='TikerItem-inforBasic-itemInfo-info'>01/01/2023</div>
                                </div>
                                <div className='TikerItem-inforBasic-itemInfo' >
                                    <div className='TikerItem-inforBasic-itemInfo-title'>Check out: </div>
                                    <div className='TikerItem-inforBasic-itemInfo-info'>03/01/2023</div>
                                </div>
                                <div className='TikerItem-inforBasic-fare'>$200</div>
                                <button className='TikerItem-inforBasic-btnBuy'>Read more and buy</button>

                            </div>

                        </div>
                        <div className='TikerItem'>
                            <div><div className='TikerItem-locationName'>NhaTrang</div></div>
                            <div className='TikerItem-inforBasic'>
                                <div className='TikerItem-inforBasic-days'>3 days 2 nights</div>
                                <div className='TikerItem-inforBasic-itemInfo' >
                                    <div className='TikerItem-inforBasic-itemInfo-title'>Check in: </div>
                                    <div className='TikerItem-inforBasic-itemInfo-info'>01/01/2023</div>
                                </div>
                                <div className='TikerItem-inforBasic-itemInfo' >
                                    <div className='TikerItem-inforBasic-itemInfo-title'>Check out: </div>
                                    <div className='TikerItem-inforBasic-itemInfo-info'>03/01/2023</div>
                                </div>
                                <div className='TikerItem-inforBasic-fare'>$200</div>
                                <button className='TikerItem-inforBasic-btnBuy'>Read more and buy</button>

                            </div>

                        </div>
                        <div className='TikerItem'>
                            <div><div className='TikerItem-locationName'>NhaTrang</div></div>
                            <div className='TikerItem-inforBasic'>
                                <div className='TikerItem-inforBasic-days'>3 days 2 nights</div>
                                <div className='TikerItem-inforBasic-itemInfo' >
                                    <div className='TikerItem-inforBasic-itemInfo-title'>Check in: </div>
                                    <div className='TikerItem-inforBasic-itemInfo-info'>01/01/2023</div>
                                </div>
                                <div className='TikerItem-inforBasic-itemInfo' >
                                    <div className='TikerItem-inforBasic-itemInfo-title'>Check out: </div>
                                    <div className='TikerItem-inforBasic-itemInfo-info'>03/01/2023</div>
                                </div>
                                <div className='TikerItem-inforBasic-fare'>$200</div>
                                <button className='TikerItem-inforBasic-btnBuy'>Read more and buy</button>

                            </div>

                        </div>
                        
                        
                    </div>
                    
                    
                    
                    
                </div>
                </div>


            </div>
        </div>
    )
}

