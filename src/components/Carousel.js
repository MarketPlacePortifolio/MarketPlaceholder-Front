import { animated, useSpring } from '@react-spring/web';
import React, { useState } from 'react';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import styled from 'styled-components';

export function Carousel({ products }) {
  const [ width, setWidth ] = useState(window.innerWidth); 
  const [ index, setIndex ] = useState(0); 
  const [ hoveredPrev, setHoveredPrev ] = useState(false);
  const [ hoveredNext, setHoveredNext ] = useState(false);
  const { scalePrev, scaleNext } = useSpring({ 
    scalePrev: hoveredPrev ? 2 : 1,
    scaleNext: hoveredNext ? 2 : 1,
  });
  const length = products.length;

  window.addEventListener('resize', () => setWidth(window.innerWidth));

  function handlePrevious() {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  function handleNext() {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  return (
    <CarouselContainer>
      <animated.button 
        className='prev'
        onClick={handlePrevious}
        onPointerOver = { () => setHoveredPrev(true) }
        onPointerOut = { () => setHoveredPrev(false) }
        style={{
          transform: scalePrev.to(s => `scale(${s})`),
        }}
      >
        <MdKeyboardArrowLeft size={ 50 } color='#6dc76d' />
      </animated.button>
      <animated.button 
        className='next'
        onClick={handleNext}
        onPointerOver = { () => setHoveredNext(true) }
        onPointerOut = { () => setHoveredNext(false) }
        style={{
          transform: scaleNext.to(s => `scale(${s})`),
        }}
      >
        <MdKeyboardArrowRight size={ 50 } color='#6dc76d' />
      </animated.button>
      <div>
        {width >= 900 ?
          <>
            <div>
              <img src={products[index].image} alt={index}/>
              <h1>{products[index].name}</h1>
              <h2>{(Number(products[index].promotion * 100) + '% off').replace('.', ',')}</h2>
              <p>{('R$ '+ Math.round(((Number(products[index].price) / 100) * ( 1 - Number(products[index].promotion)))).toFixed(2)).replace('.', ',')}</p>
              <div />
            </div>
            <div>
              {!products[index + 1] ?
                <>
                  <img src={products[0].image} alt={0}/>
                  <h1>{products[0].name}</h1>
                  <h2>{(Number(products[0].promotion * 100) + '% off').replace('.', ',')}</h2>
                  <p>{('R$ '+ Math.round(((Number(products[0].price) / 100) * ( 1 - Number(products[0].promotion)))).toFixed(2)).replace('.', ',')}</p>
                  <div />
                </>
                : <>
                  <img src={products[index + 1].image} alt={index + 1}/>
                  <h1>{products[index + 1].name}</h1>
                  <h2>{(Number(products[index + 1].promotion * 100) + '% off').replace('.', ',')}</h2>
                  <p>{('R$ '+ Math.round(((Number(products[index + 1].price) / 100) * ( 1 - Number(products[index + 1].promotion)))).toFixed(2)).replace('.', ',')}</p>
                  <div />
                </>
              }
            </div>
            <div>
              {!products[index + 2] ? 
                !products[index + 1] ? 
                  <>
                    <img src={products[1].image} alt={1}/>
                    <h1>{products[1].name}</h1>
                    <h2>{(Number(products[1].promotion * 100) + '% off').replace('.', ',')}</h2>
                    <p>{('R$ '+ Math.round(((Number(products[1].price) / 100) * ( 1 - Number(products[1].promotion)))).toFixed(2)).replace('.', ',')}</p>
                    <div />
                  </>
                  : <>
                    <img src={products[0].image} alt={0}/>
                    <h1>{products[0].name}</h1>
                    <h2>{(Number(products[0].promotion * 100) + '% off').replace('.', ',')}</h2>
                    <p>{('R$ '+ Math.round(((Number(products[0].price) / 100) * ( 1 - Number(products[0].promotion)))).toFixed(2)).replace('.', ',')}</p>
                    <div />
                  </> 
                : <>
                  <img src={products[index + 2].image} alt={index + 2}/>
                  <h1>{products[index + 2].name}</h1>
                  <h2>{(Number(products[index + 2].promotion * 100) + '% off').replace('.', ',')}</h2>
                  <p>{('R$ '+ Math.round(((Number(products[index + 2].price) / 100) * ( 1 - Number(products[index + 2].promotion)))).toFixed(2)).replace('.', ',')}</p>
                  <div />
                </> 
              }
            </div>
          </> : width >= 550 ? <>
            <div>
              <img src={products[index].image} alt={index}/>
              <h1>{products[index].name}</h1>
              <h2>{(Number(products[index].promotion * 100) + '% off').replace('.', ',')}</h2>
              <p>{('R$ '+ Math.round(((Number(products[index].price) / 100) * ( 1 - Number(products[index].promotion)))).toFixed(2)).replace('.', ',')}</p>
              <div />
            </div>
            <div>
              {!products[index + 1] ?
                <>
                  <img src={products[0].image} alt={0}/>
                  <h1>{products[0].name}</h1>
                  <h2>{(Number(products[0].promotion * 100) + '% off').replace('.', ',')}</h2>
                  <p>{('R$ '+ Math.round(((Number(products[0].price) / 100) * ( 1 - Number(products[0].promotion)))).toFixed(2)).replace('.', ',')}</p>
                  <div />
                </>
                : <>
                  <img src={products[index + 1].image} alt={index + 1}/>
                  <h1>{products[index + 1].name}</h1>
                  <h2>{(Number(products[index + 1].promotion * 100) + '% off').replace('.', ',')}</h2>
                  <p>{('R$ '+ Math.round(((Number(products[index + 1].price) / 100) * ( 1 - Number(products[index + 1].promotion)))).toFixed(2)).replace('.', ',')}</p>
                  <div />
                </>
              }
            </div>
          </> :
            <div>
              <img src={products[index].image} alt={index}/>
              <h1>{products[index].name}</h1>
              <h2>{(Number(products[index].promotion * 100) + '% off').replace('.', ',')}</h2>
              <p>{('R$ '+ Math.round(((Number(products[index].price) / 100) * ( 1 - Number(products[index].promotion)))).toFixed(2)).replace('.', ',')}</p>
              <div />
            </div>
        }
      </div>
    </CarouselContainer>
  );
};

const CarouselContainer = styled.div`
  margin-top: 82px;

  button {
    position: fixed;
    z-index: 1;
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 50%;
    background: none;
  }
  
  div {
    z-index: 0;
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction:row;
    margin: auto;

    div {
      width: 33.3%;
      background-color: yellow;
      position: relative;
      overflow: hidden;
      object-fit: cover;

      img {
        min-width: 100%;
        min-height: 100%;
      }
      
      h1 {
        font-family: 'Rubik Mono One', sans-serif;
        font-size: 18px;
        color: #294a2a;
        position: absolute;
        bottom: 40px;
        left: 20px;
        z-index: 2;
      }

      h2 {
        z-index: 2;
        position: absolute;
        bottom: 40px;
        right: 20px;
        font-size: 14px;
        font-family: 'Rubik Mono One', sans-serif;
        color: #6dc76d;
      }

      p {
        z-index: 2;
        position: absolute;
        bottom: 10px;
        right: 20px;
        font-size: 30px;
        font-family: 'Rubik Mono One', sans-serif;
        color: #c7100a;
      }

      div {
        position: absolute;
        bottom: -50%;
        left: -100%;
        z-index: 1;
        width: 200%;
        height: 90%;
        background: linear-gradient(200deg, rgba(255,255,255, 0) 20%, rgba(181,247,181,1) 45%);
        border-radius: 50%;
      }
    }
  }

  .prev {
    top: 207px;
  }

  .next {
    top: 207px;
    right: 0px;
  }

  @media (max-width: 900px) {
    div > div {
      width: 50%;

      .backStyle {
        width: 50%;
      }
    }
  }

  @media (max-width: 550px) {
    div > div {
      width: 100%;

      .backStyle {
        width: 100%;
      }
    }
  }
`;

