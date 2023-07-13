import {useState} from 'react'
import {BgCard, Img, Description, Button} from './styledComponents'

const lockedImg = 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
const unlockedImg = 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'

const Unlock = () => {
  const [isLocked, setLock] = useState(true)

  const onClickToggleLock = () => {
    setLock(prevState => !prevState)
  }

  return (
    <BgCard>
      <Img
        src={isLocked ? lockedImg : unlockedImg}
        alt={isLocked ? 'lock' : 'unlock'}
      />
      <Description>
        Your Device is {isLocked ? 'Locked' : 'UnLocked'}
      </Description>
      <Button type="button" onClick={onClickToggleLock}>
        {isLocked ? 'Unlock' : 'Lock'}
      </Button>
    </BgCard>
  )
}
export default Unlock
