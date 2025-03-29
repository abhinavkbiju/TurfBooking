import React, { useState } from "react";
import './card.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link, useNavigate } from "react-router-dom";
import Booknow from "./booknow";
function Home() {
    const navigate = useNavigate();

    const booknow = () => {
        navigate("/booking-cart")
    }
    const onhandle = () => {
        navigate("/booking-cart2")
    }
    const onhandle2 = () => {
        navigate("/booking-cart3")
    }
    const onhandle3 = () => {
        navigate("/booking-cart4")
    }
    const onhandle4 = () => {
        navigate("/stadium")
    }
    const onhandle5 = () => {
        navigate("/stadium2")
    }
    const onhandle6 = () => {
        navigate("/stadium3")
    }
    return (
        <div id="vs">
            <CardGroup>
                <h1 className='slots'>TURF SLOTS</h1>
                <Card>
                    <Card.Img variant="top" src="https://images.livemint.com/rf/Image-621x414/LiveMint/Period1/2015/09/12/Photos/turf-kHJF--621x414@LiveMint.jpg" />
                    <Card.Body>
                        <h2 className="title">THRISSUR</h2>
                        <Card.Text>
                            <li class="tex">Free cancellation</li>
                            <li class="tex">7's play ground</li>
                            <li class="rs">1500/-</li>
                        </Card.Text>
                        <button onClick={booknow} class="book" >Book Now</button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2018/11/29/Photos/Leisure/sport1-kfv--621x414@LiveMint.jpg" />
                    <Card.Body>
                        <Card.Title><h2 className="title">CALICUT</h2></Card.Title>
                        <Card.Text>
                            <li class="tex">Free cancellation</li>
                            <li class="tex">7's play ground</li>
                            <li class="rs">1500/-</li>
                        </Card.Text>
                        <button onClick={onhandle} class="book">Book Now</button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://images.livemint.com/r/LiveMint/Period2/2018/04/25/Photos/Processed/flipkart13-kUCF--621x414@LiveMint.jpg" />
                    <Card.Body>
                        <Card.Title><h2 className="title">KOCHI</h2></Card.Title>
                        <Card.Text>
                            <li class="tex">Free cancellation</li>
                            <li class="tex">7's play ground</li>
                            <li class="rs">1500/-</li>
                        </Card.Text>
                        <button onClick={onhandle2} class="book">Book Now</button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://images.livemint.com/rf/Image-621x414/LiveMint/Period1/2014/10/22/Photos/hockey--621x414.jpg" />
                    <Card.Body>
                        <Card.Title><h2 className="title">KOCHI</h2></Card.Title>
                        <Card.Text>
                            <li class="tex">Free cancellation</li>
                            <li class="tex">7's play ground</li>
                            <li class="rs">1500/-</li>
                        </Card.Text>
                        <button class="book" onClick={onhandle3}>Book Now</button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
            <div className="card" id="card-qts" style={{ display: "-ms-grid" }}>
                <div>
                    <p className="quotes">“Money is not a motivating factor…My motivation comes from playing the game I love. If I wasn’t paid to be a professional footballer, I would willingly play for nothing.”</p>
                    <p id="player-name">~Leo Messi~</p>
                    <img class="messi1" id="messi" src="https://pngfre.com/wp-content/uploads/lionel-messi-9.png" alt="" />
                </div>
            </div>
            <CardGroup>
                <Card id="card-group">
                    <Card.Body>
                        <Card.Text>
                            <h1 className="match-day">Match Day</h1>
                            <h3 className="teams">Kerala vs Chennai FC</h3>
                            <h5 className="date">April 9 7:50pm</h5>
                            <Card.Img id="location1" variant="top" src="https://cdn-icons-png.flaticon.com/128/1865/1865269.png" />
                            <h5 className="stadium">Jawaharlal Nehru International Stadium Kochi</h5>
                        </Card.Text>
                        <button onClick={onhandle4} id="book-now">Book Now</button>
                    </Card.Body>
                </Card>
                <Card id="card-group">
                    <Card.Body>
                        <Card.Text>
                            <h1 className="match-day">Match Day</h1>
                            <h3 className="teams">Mumbai vs Fc Goa</h3>
                            <h5 className="date">April 17 7:50pm</h5>
                            <Card.Img id="location1" variant="top" src="https://cdn-icons-png.flaticon.com/128/1865/1865269.png" />
                            <h5 className="stadium">Jawaharlal Nehru International Stadium Kochi</h5>
                        </Card.Text>
                        <button id="book-now" href="booknow" onClick={onhandle5}>Book Now</button>
                    </Card.Body>
                </Card>
                <Card id="card-group">
                    <Card.Body>
                        <Card.Text>
                            <h1 className="match-day">Match Day</h1>
                            <h3 className="teams">india vs Nepal</h3>
                            <h5 className="date">April 28 7:50pm</h5>
                            <Card.Img id="location1" variant="top" src="https://cdn-icons-png.flaticon.com/128/1865/1865269.png" />
                            <h5 className="stadium">Jawaharlal Nehru International Stadium Kochi</h5>
                        </Card.Text>
                        <button id="book-now" href="booknow" onClick={onhandle6}>Book Now</button>
                    </Card.Body>
                </Card>
            </CardGroup>

            <div class="owner">
                <img class="img-home" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/be1ee2125061677.61117a2e1514d.png" />

            </div>
            <div class="card card-91">
                <div class="container">
                    <img src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D" alt="Snow" className="img91" style={{ marginRight: "800px" }}>

                    </img>

                    <div class="centered">
                        <h2 className="h2-clas">welcome football</h2>
                        <h1 class="h1-class">united</h1>

                        <div class="p-class">
                            <h5 className="p--class">Football is a family of team sports that involve, to varying degrees, kicking a ball to score a goal. Unqualified, the word football normally means the form of football that is the most popular where the word is used. Sports commonly called football include association football (known as soccer in Australia, Canada, South Africa, the United States, and sometimes in Ireland and New Zealand); Australian rules football; Gaelic football; gridiron football (specifically American football, arena football, or Canadian football); International rules football; rugby league football; and rugby union football.[1] These various forms of football share, to varying degrees, common origins and are known as "football codes".</h5>
                        </div>

                    </div>
                </div>
            </div>
            <section class="light">
                <div class="container py-2">
                    <div class="h1 text-center" id="pageHeaderTitle"></div>

                    <article class="postcard light blue">
                        <a class="postcard__img_link" href="#">
                            <img class="postcard__img" src="https://1000logos.net/wp-content/uploads/2017/06/Color-Real-Madrid-Logo.jpg" alt="Image Title" />
                        </a>
                        <div class="postcard__text t-dark">
                            <h1 id="ucl" class="postcard__title blue"><a href="#">Real madrid</a></h1>
                            <div class="postcard__subtitle small">
                                <time datetime="2020-05-25 12:00:00">
                                    <i class="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
                                </time>
                            </div>
                            <div class="postcard__bar"></div>
                            <div class="postcard__preview-txt">Founded in 1902 as Madrid Football Club, the club have traditionally worn a white home kit. The honorific title real is Spanish for "royal" and was given by King Alfonso XIII in 1920, and the crown was added to the club crest. Real Madrid have played their home matches in the 85,000-capacity[8] Santiago Bernabéu Stadium in Madrid since 1947. Unlike most European football clubs, Real Madrid's members (socios) have owned and operated the club throughout its history. Its anthem is the "Hala Madrid y nada más".[9] The club is one of the most widely supported in the world, is the most followed football club on social media,[10][11] and was estimated to be worth $6.6 billion in 2024, making it the world's most valuable football club</div>
                            <ul class="postcard__tagbox">
                                <li class="tag__item"><i class="fas fa-clock mr-2"></i>55 mins.</li>
                            </ul>
                        </div>
                    </article>
                    <article class="postcard light red">
                        <a class="postcard__img_link" href="#">
                            <img class="postcard__img" src="https://media.npr.org/assets/img/2022/12/18/gettyimages-1450109553_custom-23fb409b0e0978d2a8171bfe30360ec640bcc131.jpg" alt="Image Title" />
                        </a>
                        <div class="postcard__text t-dark">
                            <h1 id="ucl" class="postcard__title red"><a href="#">WORLD CUP WINNERS (2022)</a></h1>
                            <div class="postcard__subtitle small">
                                <time datetime="2020-05-25 12:00:00">
                                    <i class="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
                                </time>
                            </div>
                            <div class="postcard__bar"></div>
                            <div class="postcard__preview-txt">The first ever match Argentina played was against Uruguay on 20 June 1902.[note 2] The match, which was the first international for both sides, was held in Montevideo, and Argentina won 6–0.[3][6] During the first years of its existence, Argentina only played friendly matches against other South American teams. The reasons for this varied, including long travel times between countries and the interruption due to World War I.[25]</div>
                            <ul class="postcard__tagbox">
                                <li class="tag__item"><i class="fas fa-clock mr-2"></i>55 mins.</li>
                            </ul>
                        </div>
                    </article>
                    <article class="postcard light green">
                        <a class="postcard__img_link" href="#">
                            <img class="postcard__img" src="https://ss-i.thgim.com/public/football/article34715693.ece/alternates/FREE_1200/CopaAmericajpg" alt="Image Title" />
                        </a>
                        <div class="postcard__text t-dark">
                            <h1 id="ucl" class="postcard__title green"><a href="#">COPA AMERICA</a></h1>
                            <div class="postcard__subtitle small">
                                <time datetime="2020-05-25 12:00:00">
                                    <i class="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
                                </time>
                            </div>
                            <div class="postcard__bar"></div>
                            <div class="postcard__preview-txt">The first ever match Argentina played was against Uruguay on 20 June 1902.[note 2] The match, which was the first international for both sides, was held in Montevideo, and Argentina won 6–0.[3][6] During the first years of its existence, Argentina only played friendly matches against other South American teams. The reasons for this varied, including long travel times between countries and the interruption due to World War I.[25]</div>
                            <ul class="postcard__tagbox">
                                <li class="tag__item"><i class="fas fa-clock mr-2"></i>55 mins.</li>
                            </ul>
                        </div>
                    </article>
                    <article class="postcard light yellow">
                        <a class="postcard__img_link" href="#">
                            <img class="postcard__img" src="https://prod-media.beinsports.com/image/1683818942830_bc852e3a-7512-404d-86db-14fb24c122cf.jpg" alt="Image Title" />
                        </a>
                        <div class="postcard__text t-dark">
                            <h1 id="ucl" class="postcard__title yellow"><a href="#">EUROPE CHAMPIONS</a></h1>
                            <div class="postcard__subtitle small">
                                <time datetime="2020-05-25 12:00:00">
                                    <i class="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
                                </time>
                            </div>
                            <div class="postcard__bar"></div>
                            <div class="postcard__preview-txt">The UEFA European Football Championship,[1] less formally the European Championship and informally the Euro or Euros,[2][3] is the primary association football tournament organised by the Union of European Football Associations (UEFA). The competition is contested by UEFA members' senior men's national teams, determining the continental champion of Europe.[4][5] It is the second-most watched football tournament in the world after the FIFA World Cup; the Euro 2016 final was watched by a global audience of around 600 million.[6] The competition has been held every four years since 1960,[7][8][9] except for 2020, when it was postponed until 2021 due to the COVID-19 pandemic in Europe, but kept the name Euro 2020. Scheduled to be in the even-numbered year between FIFA World Cup tournaments, it was originally called the European Nations' Cup before changing to its current name in 1968. Since 1996, the individual events have been branded as "UEFA Euro [year]".</div>
                            <ul class="postcard__tagbox">
                                <li class="tag__item"><i class="fas fa-clock mr-2"></i>55 mins.</li>
                            </ul>
                        </div>
                    </article>
                </div>
            </section>
            <div class="carousel12">
                <div id="carouselExampleIndicators" class="carousel slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://wallpapercg.com/download/cristiano-ronaldo-3840x2160-9832.jpg" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="https://www.chromethemer.com/download/hd-wallpapers/lionel-messi-football-3840x2160.jpg" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="https://wallpapers.com/images/featured/neymar-pictures-z1hruwjdi40pa8kw.jpg" class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>

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
export default Home;