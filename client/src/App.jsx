import Footer from "./components/footer/Footer.jsx"
import Header from './components/header/Header.jsx'
import Main from "./components/main/Main.jsx"
// import { useMeQuery } from "./redux/service/session.service.jsx"
const App = () => {
  // const { data, isLoading} = useMeQuery();
  // console.log(data);
  return (
    <>
    <Header/>
    <Main/>
    <Footer/>
    </>
  )
}
export default App