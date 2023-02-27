import React from 'react'
import KeepBuying from './KeepBuying'

const KeepBuyingMap = () => {
    const buying=[{
        produc:'Coller 1',
        price: 2000
    },
    {
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