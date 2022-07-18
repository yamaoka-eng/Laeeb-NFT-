import { useState, createContext } from "react"

export const AppContext = createContext()

export const AppProvider = ({ children }) => {

  const [ language , setLanguage] = useState('English')

  const chooseLanguage = (info) => {
    if (language === 'English') return info.English
    return info.Chinese
  }

  const HeaderInfo = {
    English: {
      ulItem: [
        { name: 'Home', href: '#welcome' },
        { name: 'Lucky draw', href: '#luckyDraw' },
        { name: 'Synthetic', href: '#synthetic' },
        { name: 'Referral', href: '#Referral' }
      ],
      btn: 'connect wallet'
    },
    Chinese: {
      ulItem: [
        { name: '首頁', href: '#welcome' },
        { name: '抽獎', href: '#luckyDraw' },
        { name: '合成', href: '#synthetic' },
        { name: '邀請', href: '#Referral' }
      ],
      btn: '連接錢包'
    }
  }

  const WelcomeInfo = {
    English: {
      welcomeSection: 'Focused on the World Cup, Laeeb is a new generation of decentralized NFT art marketplaces, iterating continuously for digital artists, creators and collectors around the world.',
      buyTokenBtn: 'Buy Token',
      exchange: 'Binance is on sale',
      buyNftBtn: 'To Buy NFT',
      address: 'Address:',
    },
    Chinese: {
      welcomeSection: 'Laeeb專注於世界杯，是新一代去中心化NFT藝術市場，為世界各地的數字藝術家、創作者和收藏家持續迭代.',
      buyTokenBtn: '購買代幣',
      exchange: '已上綫幣安',
      buyNftBtn: '購買NFT',
      address: '合約地址:',
    }
  }

  const FooterInfo = {
    English: {
      section: 'Laeeb is the forerunner of artistic NFT assets, Has a strong senior creative team, technical team and marketing team. Laeeb believes that the value of NFT is maximized in the world of Web3.0, in the world of the metaverse!',
      contact: 'Contact'
    },
    Chinese: {
      section: 'Laeeb是藝術型NFT資產的先行者，擁有強大資深的創作團隊、技術團隊和營銷團隊。Laeeb相信NFT的價值最大化是在Web3.0的世界，是在元宇宙的世界！',
      contact: '聯系'
    }
  }

  const LuckyDrawInfo = {
    English: {
      title: 'Lucky Draw',
      section: 'You can participate in the lottery with 10,000 LabBE tokens, and get a random Laeeb token reward or a mysterious NFT blind box',
      btn: 'Draft Lottery'
    },
    Chinese: {
      title: '幸運抽獎',
      section: '10,000Labbe代幣即可參與抽獎,可獲得隨機Laeeb代幣獎勵或者神秘NFT盲盒',
      btn: '抽獎'
    }
  }

  const SyntheticInfo = {
    English: {
      title: 'NFT Synthetic',
      section: 'Synthetic football stars can participate in the platform USDT dividends'
    },
    Chinese: {
      title: 'NFT合成',
      section: '合成足球明星可參與平臺USDT分紅'
    }
  }

  const ReferralInfo = {
    English: {
      title: 'Referral',
      titleSection: 'Invite friends to get more rewards.',
      cardTitle: 'Identity：',
      identity: 'primary Node',
      cardSection: 'Set the inviter',
      inputDef: 'Enter of Address',
      btn: 'SetInviter'
    },
    Chinese: {
      title: '邀請',
      titleSection: '邀請好友獲得更多獎勵.',
      cardTitle: '身份：',
      identity: '初級節點',
      cardSection: '設置邀請人',
      inputDef: '輸入地址',
      btn: '設置邀請人'
    }
  }

  const PartnersInfo = {
    English: {
      title: 'Our partners',
    },
    Chinese: {
      title: '我們的合作夥伴',
    }
  }

  return (
    <AppContext.Provider
      value={{
        setLanguage,
        HeaderInfo: chooseLanguage(HeaderInfo),
        WelcomeInfo: chooseLanguage(WelcomeInfo),
        FooterInfo: chooseLanguage(FooterInfo),
        LuckyDrawInfo: chooseLanguage(LuckyDrawInfo),
        SyntheticInfo: chooseLanguage(SyntheticInfo),
        ReferralInfo: chooseLanguage(ReferralInfo),
        PartnersInfo: chooseLanguage(PartnersInfo),
      }}
    >
      { children }
    </AppContext.Provider>
  )
}