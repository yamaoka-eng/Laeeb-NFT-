import { useContext, useEffect, useState } from 'react'
import { getImage } from '../../utils'
import { AppContext } from '../../context/AppContext'
import styles from './index.module.scss'

const Index = () => {

  const footballImages = [
    'football-01.png',
    'football-07.png',
    'football-03.png',
  ]

  const { WelcomeInfo } = useContext(AppContext)

  const [ imageUrl, setImageUrl ] = useState(footballImages[0])

  useEffect(()=>{

    let index = 0

    const timer = setInterval(() => {
      index++
      if (index > (footballImages.length - 1)) index = 0
      setImageUrl(footballImages[index])
    }, 1000)

    return () => clearInterval(timer)

  }, [])

  return (
    <div className={styles.welcome}>
      <div className='flex flex-col w-full md:w-auto md:min-h-full justify-between items-start'>
        <div>
          <h1 className='text-4xl md:text-5xl font-semibold'>Welcome to Laeeb</h1>
          <p className='max-w-[600px] md:mt-[5rem] font-semibold text-base mb-10 pb-8 border-b border-gray-700 border-opacity-50'>
            {WelcomeInfo.welcomeSection}
          </p>
        </div>
        <a className='btn bg-gray-700 mb-10 text-xl' href='https://exchange.pancakeswap.finance'>{WelcomeInfo.buyTokenBtn}</a>
        <ul className='flex items-center w-full justify-between pr-8'>
          <li>
            <div className='text-lg md:text-2xl font-bold break-words'>{WelcomeInfo.address}</div>
            <div className='text-gray-500 w-full break-all'>0x81447234006e2d1a8babe7e57ff5e9799c5155b8</div>
          </li>
        </ul>
      </div>
      <div className='flex flex-col items-center w-full md:w-auto'>
        <div className='w-full'>
          <img className='w-full h-full' src={getImage(imageUrl)} alt="" />
        </div>
        <div className='w-full py-7 flex flex-col justify-center bg-[#e0ff66] px-7 items-start'>
          <div className='w-full text-2xl font-bold mb-4'>{WelcomeInfo.exchange}</div>
          <a className='btn bg-white text-gray-600 text-xl' href='https://www.binance.com/zh-CN/nft/collection/kfootball-595626718548873216?orderBy=list_time&orderType=-1&isBack=1&id=595626718548873216&order=list_time%40-1'>{WelcomeInfo.buyNftBtn}</a>
        </div>
      </div>
    </div>
  )
}

export default Index;
