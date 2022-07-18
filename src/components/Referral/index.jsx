import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import { Message } from '../../components'
import styles from './index.module.scss'

const Index = () => {

  const { ReferralInfo } = useContext(AppContext)

  return (
    <div className={styles.invite}>
      <div className='text-5xl md:text-6xl font-black mb-5'>{ReferralInfo.title}</div>
      <div className='text-lg mb-6'>{ReferralInfo.titleSection}</div>
      <div className={styles.inviteCard}>
        <h2 className='text-4xl font-semibold mb-3'>{ReferralInfo.cardTitle} <span>{ReferralInfo.identity}</span> </h2>
        <p className='mb-5 text-gray-800 text-lg'>{ReferralInfo.cardSection}</p>
        <input placeholder={ReferralInfo.inputDef} type="text" className='outline-none px-4 py-2 border-b border-gray-500 bg-transparent w-full max-w-[700px]'/>
        <div className='btn bg-[#183b56] mt-9 text-xl' onClick={()=>Message.onInfo('即将开放')}>{ReferralInfo.btn}</div>
      </div>
    </div>
  );
}

export default Index;
