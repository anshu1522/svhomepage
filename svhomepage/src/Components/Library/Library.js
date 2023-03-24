import React from 'react'
import "./Library.css";
import library from "./library.jpeg";

const Library = () => {
  return (
    <div>
        <div className='library'>Our Library</div>
        <div className='library_about'> Free digital library with 24*7 laptop access</div>
        <div className='library_content'>
        <img src={library} className="image_library"/>
        <div className='job'>Guaranteed job Opportunity</div>
        <div className='training'>Training Opportunities</div>
        <div className='learn'>Learn Coding from Industry Expert</div>
        </div>
        <div className='contents_library'>
            <div className='left'>
                 <div className='laptop'> # We provide laptop for coding.</div>
                 <div className='laptop'> # Through learning through industry projects.</div>
                 <div className='laptop'> # Flexible learning hours.</div>
            </div>
            <div className='right'>
               <div className='laptop'> # Immediate Evaluation to Monitor your progress.</div>
               <div className='laptop'> # Hyper Personalised experience.</div>
               <div className='laptop'> # Resolving doubts with expert teaching assistants.</div>

            </div>
        </div>
    </div>
  )
}

export default Library