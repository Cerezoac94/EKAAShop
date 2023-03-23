import Footer from "./components/footer/Footer.jsx"
import Header from './components/header/Header.jsx'
import Main from "./components/main/Main.jsx"
import { ScrollRestoration } from "react-router-dom"
const App = () => {
  // const { data, isLoading} = useMeQuery();
  // console.log(data);
  return (
    <>
    <ScrollRestoration/>
    <Header/>
    <Main/>
    <Footer/>
    </>
  )
}
export default App