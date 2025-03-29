import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './homepage.css';

function Homepage() {
  return (
    <div>
      <div className="main-container">
        <div className="blur-circle1"></div>
        <div className="blur-circle2"></div>

        <div className="landing-page">
          <div className="content">
            <div className="container">
              <div className="info">
                <h1>Looking For Inspiration</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus odit nihil ullam nesciunt quidem iste, Repellendus odit nihil</p>
              </div>
              <div className="image">
                <img
                  className="main-image"
                  src="https://rosepng.com/wp-content/uploads/2024/04/s11728_ronaldo_with_bright_tone_and_with_different_pose_isola_9aa0e828-5d0e-41fb-a32f-2982016631f5_1-removebg-preview_11zon.png"
                  alt="Ronaldo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container py-2">
        <div class="h1 text-center" id="pageHeaderTitle">Winners</div>

        <article class="postcard light blue">
          <a class="postcard__img_link" href="#">
            <img class="postcard__img" src="https://e0.365dm.com/23/06/1600x900/skysports-man-city-champions_6183840.jpg?20230610224442" alt="Image Title" />
          </a>
          <div class="postcard__text t-dark">
            <h1 id="ucl" class="postcard__title blue"><a href="#">UEFA CHAMPIONS LEAGUE</a></h1>
            <div class="postcard__subtitle small">
              <time datetime="2020-05-25 12:00:00">
                <i class="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
              </time>
            </div>
            <div class="postcard__bar"></div>
            <div class="postcard__preview-txt">Manchester City Football Club is a professional football club based in Manchester, England. The club competes in the Premier League, the top tier of English football. Founded in 1880 as St. Mark's (West Gorton), they became Ardwick Association Football Club in 1887 and Manchester City in 1894. The club's home ground is the City of Manchester Stadium in east Manchester, to which they moved in 2003, having played at Maine Road since 1923. Manchester City adopted their sky blue home shirts in 1894, the first season with the current name.[4] The club has won 10 league titles, seven FA Cups, eight League Cups, seven FA Community Shields, one UEFA Champions League, one European Cup Winners' Cup, one UEFA Super Cup and one FIFA Club World Cup.</div>
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
            <div class="postcard__preview-txt">The FIFA World Cup, often called the World Cup, is an international association football competition among the senior men's national teams of the members of the Fédération Internationale de Football Association (FIFA), the sport's global governing body. The tournament has been held every four years since the inaugural tournament in 1930, with the exception of 1942 and 1946 due to the Second World War. The reigning champions are Argentina, who won their third title at the 2022 tournament.[1]</div>
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
            <div class="postcard__preview-txt">The FIFA World Cup, often called the World Cup, is an international association football competition among the senior men's national teams of the members of the Fédération Internationale de Football Association (FIFA), the sport's global governing body. The tournament has been held every four years since the inaugural tournament in 1930, with the exception of 1942 and 1946 due to the Second World War. The reigning champions are Argentina, who won their third title at the 2022 tournament.[1]</div>
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
            <div class="postcard__preview-txt">Introduced in 1971 as the UEFA Cup, it replaced the Inter-Cities Fairs Cup. The UEFA Cup was the third-tier European club competition from 1971 to 1999 before the UEFA Cup Winners' Cup was discontinued,[1][2] and it is still often referred to as the "C3" in reference to this.[3] Clubs qualify for the competition based on their performance in their national leagues and cup competitions.</div>
            <ul class="postcard__tagbox">
              <li class="tag__item"><i class="fas fa-clock mr-2"></i>55 mins.</li>
            </ul>
          </div>

        </article>
      </div>
      <div class="container py-2">
        <div class="h1 text-center" id="pageHeaderTitle">Winners</div>

        <article class="postcard light blue">
          <a class="postcard__img_link" href="#">
            <img class="postcard__img" src="https://e0.365dm.com/23/06/1600x900/skysports-man-city-champions_6183840.jpg?20230610224442" alt="Image Title" />
          </a>
          <div class="postcard__text t-dark">
            <h1 id="ucl" class="postcard__title blue"><a href="#">UEFA CHAMPIONS LEAGUE</a></h1>
            <div class="postcard__subtitle small">
              <time datetime="2020-05-25 12:00:00">
                <i class="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
              </time>
            </div>
            <div class="postcard__bar"></div>
            <div class="postcard__preview-txt">Manchester City Football Club is a professional football club based in Manchester, England. The club competes in the Premier League, the top tier of English football. Founded in 1880 as St. Mark's (West Gorton), they became Ardwick Association Football Club in 1887 and Manchester City in 1894. The club's home ground is the City of Manchester Stadium in east Manchester, to which they moved in 2003, having played at Maine Road since 1923. Manchester City adopted their sky blue home shirts in 1894, the first season with the current name.[4] The club has won 10 league titles, seven FA Cups, eight League Cups, seven FA Community Shields, one UEFA Champions League, one European Cup Winners' Cup, one UEFA Super Cup and one FIFA Club World Cup.</div>
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
            <div class="postcard__preview-txt">The FIFA World Cup, often called the World Cup, is an international association football competition among the senior men's national teams of the members of the Fédération Internationale de Football Association (FIFA), the sport's global governing body. The tournament has been held every four years since the inaugural tournament in 1930, with the exception of 1942 and 1946 due to the Second World War. The reigning champions are Argentina, who won their third title at the 2022 tournament.[1]</div>
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
            <div class="postcard__preview-txt">The FIFA World Cup, often called the World Cup, is an international association football competition among the senior men's national teams of the members of the Fédération Internationale de Football Association (FIFA), the sport's global governing body. The tournament has been held every four years since the inaugural tournament in 1930, with the exception of 1942 and 1946 due to the Second World War. The reigning champions are Argentina, who won their third title at the 2022 tournament.[1]</div>
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
            <div class="postcard__preview-txt">Introduced in 1971 as the UEFA Cup, it replaced the Inter-Cities Fairs Cup. The UEFA Cup was the third-tier European club competition from 1971 to 1999 before the UEFA Cup Winners' Cup was discontinued,[1][2] and it is still often referred to as the "C3" in reference to this.[3] Clubs qualify for the competition based on their performance in their national leagues and cup competitions.</div>
            <ul class="postcard__tagbox">
              <li class="tag__item"><i class="fas fa-clock mr-2"></i>55 mins.</li>
            </ul>
          </div>

        </article>
      </div>
    </div>
  );
}

export default Homepage;
