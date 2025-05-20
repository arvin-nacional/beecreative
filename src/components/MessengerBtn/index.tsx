import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MessengerBtn = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Link href="https://www.facebook.com/profile.php?id=100090128066633" target="_blank">
        <Image
          src="/assets/icons/messenger.svg"
          alt="messengerButton"
          height={50}
          width={50}
          className="hover:scale-110 transition-transform duration-300"
        />
      </Link>
    </div>
  )
}

export default MessengerBtn
