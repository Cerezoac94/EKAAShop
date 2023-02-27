import React from 'react'
import InterestYou from './InterestYou'

const InterestYouMap = () => {
    const array = [{
        id:1,
        name: "Envio gratis1",
        desc:"A"
    },{
        id:2,
        name: "Envio gratis2",
        desc:"B"
    },
    {
        id:3,
        name: "Envio gratis3",
        desc:"C"
    }]
  return (
    array.map(e =>{
        return <InterestYou element={e} key={e.id }  />
    })
    
  )
}

export default InterestYouMap