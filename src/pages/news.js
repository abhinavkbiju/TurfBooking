import React from 'react'
import "./news.css"

function News() {
    return (
        <div className='bek'>
            <h1>NEWS</h1>
            <div id='cla' class="card">
                <img id='messi10' src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/40f166159787437.63a5974f09634.png' />
                <p className='messi10'>Lionel Messi is a football player from Argentina who plays for Inter Miami. He has won the Ballon D'Or, the annual award given to the best player in the world, 8 times, 2022 FIFA World Cup winner and an Olympic gold medal winner in 2008. He was born in 1987 in Rosario, Argentina's third-biggest city. He showed an enormous aptitude for football and was in the youth teams for Newell's Old Boys, his local team. Faced with mounting medical expenses to treat a growth hormone condition, Messi's family accepted an offer to move the 13-year-old prodigy to FC Barcelona, who would pay for his treatment. Messi has gone on to become one of the most decorated players in football history and has broken countless records for his club and his country.</p>
                <h6 style={{ color: "yellow" }}>~~~</h6>
            </div>
            <div class="ff">
                <div class="footer">
                    <div class="contain">
                        <div class="col">
                            <h1>Company</h1>
                            <ul>
                                <li>About</li>
                                <li>Mission</li>
                                <li>Services</li>
                                <li>Social</li>
                                <li>Get in touch</li>
                            </ul>
                        </div>
                        <div class="col">
                            <h1>Products</h1>
                            <ul>
                                <li>About</li>
                                <li>Mission</li>
                                <li>Services</li>
                                <li>Social</li>
                                <li>Get in touch</li>
                            </ul>
                        </div>
                        <div class="col">
                            <h1>Accounts</h1>
                            <ul>
                                <li>About</li>
                                <li>Mission</li>
                                <li>Services</li>
                                <li>Social</li>
                                <li>Get in touch</li>
                            </ul>
                        </div>
                        <div class="col">
                            <h1>Resources</h1>
                            <ul>
                                <li>Webmail</li>
                                <li>Redeem code</li>
                                <li>WHOIS lookup</li>
                                <li>Site map</li>
                                <li>Web templates</li>
                                <li>Email templates</li>
                            </ul>
                        </div>
                        <div class="col">
                            <h1>Support</h1>
                            <ul>
                                <li>Contact us</li>
                                <li>Web chat</li>
                                <li>Open ticket</li>
                            </ul>
                        </div>
                        <div class="col social">
                            <h1>Social</h1>
                            <ul>
                                <li><img src="https://svgshare.com/i/5fq.svg" width="32" style={{ width: "32px" }} /></li>
                                <li><img src="https://svgshare.com/i/5eA.svg" width="32" style={{ width: "32px" }} /></li>
                                <li><img src="https://svgshare.com/i/5f_.svg" width="32" style={{ width: "32px" }} /></li>
                            </ul>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default News