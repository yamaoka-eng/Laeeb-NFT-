import { useContext, useState, useEffect } from 'react'
import { AppContext } from '../../context/AppContext'
import { getImage } from '../../utils'
import { Message } from '../../components'
import styles from './index.module.scss'

const Index = () => {

  const luckImages = [
    'gold.png',
    'treasure-chest.png',
    'blindBox1.png',
  ]

  const { LuckyDrawInfo } = useContext(AppContext)

  const [ imageUrl, setImageUrl ] = useState(luckImages[0])

  useEffect(()=>{

    let index = 0

    const timer = setInterval(() => {
      index++
      if (index > (luckImages.length - 1)) index = 0
      setImageUrl(luckImages[index])
    }, 1000)

    return () => clearInterval(timer)

  }, [])

  return (
    <div className={styles.luckDraw}>
      <div className='w-full flex flex-col justify-center items-center text-white px-4'>
        <p className='text-2xl font-semibold'>{LuckyDrawInfo.title}</p>
        <p className='text-center'>{LuckyDrawInfo.section}</p>
      </div>
      <div className='w-full h-[20rem] py-4 relative overflow-hidden flex'>
        <div className='h-[21rem] w-full md:w-auto absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-0'>
          <img className='h-full w-full md:w-auto' src={getImage('L02vdNRYq9.png')}/>
        </div>
        <img className='w-40 h-40 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10' src={getImage(imageUrl)} />
      </div>
      <div className='btn bg-gray-800 mt-4 px-10 py-3 rounded-2xl text-xl font-mono' onClick={()=>Message.onInfo('即将开放')}>{LuckyDrawInfo.btn}</div>
    </div>
  )
}

export default Index;
