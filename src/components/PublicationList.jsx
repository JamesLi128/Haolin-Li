import React from 'react'
import Publication from './Publication'
import { publications } from '../assets/publications' 

const PublicationList = () => {
  return (
    <section className=" mx-auto my-8">
      <ul>
        {publications.map((paper) => (
          <Publication key={`${paper.title}`} paper={paper} />
        ))}
      </ul>
    </section>
  );
}

export default PublicationList