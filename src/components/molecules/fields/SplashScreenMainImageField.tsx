import React from 'react'

const SplashScreenMainImageField = () => {
  return (
    <div style={{ position: 'relative', textAlign: 'center', color: 'black' }}>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '25px',
        }}
      >
        면 접 보 까
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoRHch07Vw1M9dQ9b8PIysYGtCJwibMts7JA&usqp=CAU"
          alt="Cute Animal"
        />
      </div>
    </div>
  )
}

export default SplashScreenMainImageField
