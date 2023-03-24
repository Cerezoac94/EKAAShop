import React from 'react'
import ovni from '../../assets/404.png'

const ErrorHandle = () => {
  return (
    <div class="conten">
    <div class="conten__img">
        <img src={ovni} alt=""/>
        <p class="conten__number">
            404
        </p>
    </div>
    <div class="conten__Description">
        <p class="conten__error">
            UPSSSS!!!! Algo salio mal, pagina no encontrada.
        </p>
    <a href="/" class="conten__exitBtn">SÁCAME DE AQUI!.</a>
    </div>
</div>
  )
}

export default ErrorHandle