import { useEffect, useState } from 'react';
import './App.scss';

import next from './images/icon-next.svg';
import prev from './images/icon-prev.svg';
import tanya from './images/image-tanya.jpg';
import john from './images/image-john.jpg';


export function App() {
  const [person, setPerson] = useState(0);
  const p = [
    { 
      name: "Tanya Sinclair",
      profession: "UX Engineer",
      description: "I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future.",
      image: tanya
    },
    { 
      name: "John Tarkpor",
      profession: "Junior Front-end Developer",
      description: "If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
      image: john
    }
  ]

  const nextSlide = () => {
    if(person !== p.length - 1) {
      setPerson(person + 1)
    } else if (person === p.length - 1) {
      setPerson(0)
    }
  }

  const prevSlide = () => {
    if (person === p.length - 1) {
      setPerson(person - 1)
    } else if (person !== p.length - 1) {
      setPerson(p.length - 1)
    }
  }

  return (
    <> 
      <div className='img'>
        <img src={p[person].image} alt={p[person].name}/>
        <div className='img_buttons'>
          <button onClick={prevSlide}>
            <img src={prev} alt="prev" />
          </button>
          <button onClick={nextSlide}>
            <img src={next} alt="next"/>
          </button>
        </div>
      </div>
      <div className='description'>
        <p>{p[person].description}</p>
        <div className='description_profile'>
          <h1>{p[person].name}</h1>
          <span>{p[person].profession}</span>
        </div>
      </div>

    </>
  )
}
