import React from 'react'
import KeepBuying from './KeepBuying'

const KeepBuyingMap = () => {
    const buying=[{
      id: 1,
        produc:'Coller 1',
        price: 2000
    },
    {
      id: 2,
        produc:'Coller 2',
        price: 2000
    }]
  return (
    buying.map( e =>{
        return <KeepBuying element={e} key={e.id} />
    })
  )
}

export default KeepBuyingMap