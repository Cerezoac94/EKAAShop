import React from 'react'
import Card from 'react-bootstrap/Card';
const Warranty = () => {
  return (
    <section className='warranty'> 
      <Card>
      <Card.Body>This is some text within a card body.
        <div className='warranty__options'>
        <h3>1 año de garantia</h3>
        <h3>Envios gratis</h3>
        <ion-icon name="cube-outline"></ion-icon>
        <h3>Best quality</h3>
        </div>
     
     




      </Card.Body>
    </Card>
  

    </section>
   
  )
}

export default Warranty