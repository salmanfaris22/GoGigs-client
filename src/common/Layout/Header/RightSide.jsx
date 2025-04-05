import React from 'react'
import { PiChatCircleTextThin, PiNotificationLight, PiUserCircleDashedThin } from 'react-icons/pi'

const RightSide = () => {
  return (
    <div className="flex items-center text-3xl md:text-4xl gap-3">
    <PiNotificationLight />
    <PiChatCircleTextThin />
    <PiUserCircleDashedThin />
</div>
  )
}

export default RightSide
