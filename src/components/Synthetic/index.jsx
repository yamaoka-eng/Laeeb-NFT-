import { useContext, useState, useEffect } from 'react'
import { AiOutlinePlus } from "react-icons/ai"
import { AppContext } from '../../context/AppContext'
import { getImage } from '../../utils'
import { Message } from '../../components'
import styles from './index.module.scss'

const Index = () => {

  const footImageUrls = [
    'football-01.png',
    'football-07.png',
    'football-03.png',
  ]

  const camelImageUrls = [
    'camel-01.png',
    'camel-02.png',
    'camel-03.png',
  ]

  const { SyntheticInfo } = useContext(AppContext)

  const [ footImageUrl, setFootImageUrl ] = useState(footImageUrls[0])
  const [ camelImageUrl, setCameImageUrl ] = useState(camelImageUrls[0])

  useEffect(()=>{

    let index1 = 0
    let index2 = 0

    const timer1 = setInterval(() => {
      index1++
      if (index1 > (footImageUrls.length - 1)) index1 = 0
      setFootImageUrl(footImageUrls[index1])
    }, 1000)

    const timer2 = setInterval(() => {
      index2++
      if (index2 > (camelImageUrls.length - 1)) index2 = 0
      setCameImageUrl(camelImageUrls[index2])
    }, 1000)

    return () => {
      clearInterval(timer1)
      clearInterval(timer2)
    }

  }, [])

  return (
    <div className={styles.synthetic}>
      <div className='w-full flex flex-col justify-center items-center text-orange-500 mb-8'>
        <p className='text-4xl mb-6 md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#ff394f] to-[#ffcb27]'>{SyntheticInfo.title}</p>
        <p className='text-center text-xl font-semibold'>{SyntheticInfo.section}</p>
      </div>
      <div className='flex flex-row w-full px-4'>
        <div className='basis-2/5 rounded-xl overflow-hidden'><img className='w-full' src={getImage(footImageUrl)} alt="" /></div>
        <div className='basis-1/5 flex items-center justify-center text-gray-100'><AiOutlinePlus className='w-10 h-10'/></div>
        <div className='basis-2/5 rounded-xl overflow-hidden'><img className='w-full' src={getImage(camelImageUrl)} alt="" /></div>
      </div>
      <div className='w-3/5 cursor-pointer'  onClick={()=>Message.onInfo('即将开放')}>
        <img className='w-full' src={getImage('mystical.png')} alt="" />
      </div>
    </div>
  )
}

export default Index
