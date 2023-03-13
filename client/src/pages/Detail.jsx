import { useParams } from 'react-router-dom'

import DetailContainer from '../modules/detail/DetailContainer.jsx'
const Detail = () => {
  const {id}=useParams()
  
  return (
    <DetailContainer id={id}/>
  )
}

export default Detail