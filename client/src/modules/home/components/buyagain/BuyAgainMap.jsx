import React from 'react'
import BuyAgain from './BuyAgain'

const BuyAgainMap = () => {
    const buyagain=[{
      id: 1,
        produStock:'Yeti de Acero 30 oz',
        price:560
    }]
  return (
    buyagain.map( e =>{
        return <BuyAgain element={e} key={e.id} />
    })
  )
}

export default BuyAgainMap