import React from 'react'

const CTA:React.FC = ({subsHnadler}) => {
  return (
    <div className="flex justify-center mt-[32px]">
      <button
      onClick={()=>subsHnadler()}
        className="w-[320px] h-[56px] rounded-3xl text-white text-base bgbrandColor">
        Applay Now
      </button>
    </div>
  )
}

export default CTA