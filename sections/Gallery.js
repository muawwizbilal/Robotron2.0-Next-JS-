import { Winners } from "@/assets/data/Winner";
import { Card } from "@/components/common/Card";
import { Title, TitleSm } from "@/components/common/Title";
import React from "react";

const Gallery = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <br />
              <Title title='Gallery' className='title-bg' />
          </div>
          <div className='grid-2 py'>
            {Winners.map((item) => (
              <Card data={item} key={item.id} caption={item.post} show={true} />
            ))}
          </div>
          <div className='button-container'>
            <a
              href='https://www.facebook.com/thelabschool.pk/photos'
              target='_blank'
              rel='noopener noreferrer'
              className='secondary-button'
            >
              View More
            </a>
            
          </div>
          <br />
          <br />
          <br />  
        </div>
      </section>

      <style jsx>{`
        .button-container {
          display: flex;
          justify-content: center;
      
        }

        

      
      `}</style>
    </>
  );
};

export default Gallery;
