import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Header, Synthetic, LuckyDraw, Referral, Footer, Welcome, Partners } from "./components"

const App = () => {

  gsap.registerPlugin(ScrollTrigger)

  const refs = useRef([])

  refs.current = []

  const addRef = ref => {if (ref) refs.current.push(ref)}

  useEffect(()=>{
    refs.current.forEach(ref => {
      gsap.fromTo(
        ref,
        {
          opacity: 0,
          y: '100%',
          duration: 0.7,
          ease: "power4.out"
        },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: ref,
            start: "-100% 60%",
          }
        })
    })
  }, [])

  return (
    <>
    <Header />
    <div className="max-w-1300px mx-auto px-5">
      <div id='welcome'><div ref={addRef}><Welcome/></div></div>
      <div id='luckyDraw'><div ref={addRef}><LuckyDraw /></div></div>
      <div id='synthetic'><div ref={addRef}><Synthetic /></div></div>
      <div id="Referral"><div ref={addRef}><Referral /></div></div>
      <div ref={addRef}><Partners /></div>
    </div>
    <Footer />
    </>

  )
}

export default App
