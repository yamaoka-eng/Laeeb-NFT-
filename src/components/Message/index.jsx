import { useEffect, useState, useRef } from "react"
import ReactDOM from 'react-dom/client'
import PubSub from 'pubsub-js'
import { BsCheckCircleFill, BsFillXCircleFill, BsInfoCircleFill } from "react-icons/bs"

import styles from './Message.module.scss'

const iconType = {
  success: 'success',
  error: 'error',
  info: 'info'
}

var messageCount = -1

const Message = ({ onClaer, type, msg, callBack, count }) => {

  const progressRef = useRef()

  const [out, setOut] = useState(false)
  const [topCpunt, setTopCpunt] = useState(count)

  useEffect(() => progressRef.current.addEventListener("animationend", () => exit()), [])
  useEffect(()=>{
    var token = PubSub.subscribe('messageCount', (_, {index}) => {if (index < count) setTopCpunt(topCpunt - 1)} )
    return ()=> PubSub.unsubscribe(token)
  },[topCpunt])

  const playSpin = yes => progressRef.current.style.animationPlayState = ( yes ? "running" : 'paused' )
  const exit = () => {
    setOut(true)
    setTimeout(() => onClaer(count), 1000)
  }
  const chooseIcon = (type) => {
    switch (type) {
      case iconType.success: return <span className={styles[type]}><BsCheckCircleFill/></span>
      case iconType.error: return <span className={styles[type]}><BsFillXCircleFill/></span>
      case iconType.info: return <span className={styles[type]}><BsInfoCircleFill/></span>
    }
  }

  return (
    <div className={`${styles.message} ${out && styles.out}`} style={{top: `${topCpunt * 5 + 5}rem`}} onClick={callBack} onMouseMove={()=>playSpin(false)} onMouseLeave={()=>playSpin(true)}>
      <div onClick={exit} className={styles.exit}>X</div>
      <div className={styles.content}>
        { chooseIcon(type) }
        <span className={styles.msg}>{msg}</span>
      </div>
      <div ref={progressRef} className={`${styles[type + '-progress']}`}></div>
    </div>
  )
}

// type弹窗类型,可以根据不同类型,渲染不同类型弹窗的样式
const MessageAPI = (type,msg,callBack) => {

  messageCount += 1
  
  const toastify = document.getElementById('toastify')
	const msgBox = document.createElement('div')
  msgBox.className = 'toast'
	toastify.appendChild(msgBox)
  const msgBoxDom = ReactDOM.createRoot(msgBox)

	const onClaer = async (count) => {
		if(!!msgBox){
      messageCount -= 1
      await PubSub.publish('messageCount', {index: count})
			msgBoxDom.unmount(msgBox)
      msgBox.remove()
		}
	}

	msgBoxDom.render(
    <Message
		 msg={msg}
     count={messageCount}
     type={type}
     onClaer={onClaer}
     callBack={()=> !!callBack && callBack()}
		/>
  )}

Message.onSuccess = (msg, callBack) => MessageAPI(iconType.success, msg, callBack)
Message.onError = (msg, callBack) => MessageAPI(iconType.error, msg, callBack)
Message.onInfo = (msg, callBack) => MessageAPI(iconType.info, msg, callBack)

export default Message
