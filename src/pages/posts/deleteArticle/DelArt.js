import React from 'react'
import { DelArtContent } from './DelArtContent';
import './delArt.css'

export default function DelArt (closeModal) {


  return (
   <section className='DeleteArticle'>
       
        <div className='wrapper'>
            <button className='close'>X</button>
            <h3>{DelArtContent.delArt}</h3>
            <p>{DelArtContent.confirmDel}</p>
            <div className='callToAction'>
                <button>{DelArtContent.buttonCancel}</button>
                <button className='delete'>{DelArtContent.buttonDelete}</button>
            </div>
        </div>
   </section>
  )
}
