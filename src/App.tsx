import React from 'react';
import Image from './components/image';
import './css/App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import {
  booksBg,
  chatIcon,
  chesBg, chessIcon, fireplaceBg, friendIcon, ghIcon,
  helpIcon,
  hockeyIcon, keyboardBg, nightBg,
  pandemyIcon, planeIcon,
  programmingIcon,
  swimIcon,
  teachIcon,
  techIcon
} from './assets';


function App() {
  return (
    <div className="App">
      <Carousel
          width={'110vw'}
          showStatus={false}
      infiniteLoop={false}
      animationHandler={'fade'}
      showIndicators={false}
      showThumbs={false}
          autoFocus={true}
          useKeyboardArrows={true}

      >
        <div>
          <Image
              file={nightBg}
              pImg1={{height: '20%', top: '13%', right: '70%', speed: 20, icon: swimIcon}}
              pImg2={{height: '13%', top: '3%', right: '14%', speed: 34, icon: hockeyIcon}}
              pImg3={{height: '20%', top: '60%', right: '37%', speed: 8, icon: planeIcon}}
          />
          <div className="text">
            <p>
              Denis Ziulev is a 29-year-old friend of mine. He is a freelance developer working for a company called “Territorial Influence”. He was born in Russia in 1992, and moved out to Germany at 25. His favorite sport is Ice Hockey, although he also enjoys skateboarding and swimming.
          </p>
          </div>
        </div>
        <div>
          <Image
              file={keyboardBg}
              pImg1={{height: '16%', top: '7%', right: '80%', speed: 3, icon: pandemyIcon}}
              pImg2={{height: '23%', top: '4%', right: '26%', speed: 12, icon: teachIcon}}
              pImg3={{height: '20%', top: '60%', right: '68%', speed: 5, icon: chatIcon}}
          />
          <div className="text">
            <p>
              I have met him in 2020, in the middle of the quarantine. As I was developing my passion for coding, I found a small open source project I felt confident enough to contribute to. After making my personal modification in a few commits, I pushed it to review. Denis, as the owner of the project, reviewed my code and commented errors on the first message of a chat to begin.
            </p>
          </div>
        </div>
        <div>
          <Image
              file={fireplaceBg}
              pImg1={{height: '12%', top: '72%', right: '80%', speed: 5, icon: helpIcon}}
              pImg2={{height: '18%', top: '1%', right: '9%', speed: 7, icon: techIcon}}
              pImg3={{height: '22%', top: '48%', right: '29%', speed: 18, icon: ghIcon}}
          />
          <div className="text">
            <p>
              After the completion of the version 1.5 of the project, I had already been speaking with him for almost 5 months. During this time and, until the current day, he has been a teacher and mentor to me. He started by casually helping and sharing his knowledge with me. Now he corrects my code daily, teaches me new technologies weekly, and invites me into new projects monthly.
            </p>
          </div>
        </div>
        <div>
          <Image
              file={chesBg}
              pImg1={{height: '23%', top: '18%', right: '75%', speed: 21, icon: friendIcon}}
              pImg2={{height: '19%', top: '5%', right: '23%', speed: 2, icon: programmingIcon}}
              pImg3={{height: '12%', top: '48%', right: '50%', speed: 9, icon: chessIcon}}
          />
          <div className="text">
            <p>
              Beyond this, he is also a friend to me. We carry out many applications and websites together, from which, at first, I learn more, and now I can contribute more. We also chat via electronic messengers, as we are over 12.000km away, from where I could see his human side. These conversations sometime help me disconnect from current problems and speak about something I am passionate about. I also remember never ending chess matches, with rematch after rematch, and no bond to time.
            </p>
          </div>
        </div>
        <div>
          <Image
              file={booksBg}
              pImg1={{height: '12%', top: '72%', right: '-18%', speed: 5, icon: null}}
              pImg2={{height: '16%', top: '1%', right: '5%', speed: 20, icon: null}}
              pImg3={{height: '12%', top: '48%', right: '29%', speed: 15, icon: null}}
          />
          <div className="text">
            <p>
              Till the current day, we still chat, play and code. I am still grateful for all the help, generosity, and friendliness he has given me, plus all the empathy and time he spent with me. And owe him much in my programming knowledge. I wish this relationship to continue and expect great project in the future. Thank you, Denis Ziulev.
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default App;
