import { Outlet } from "react-router-dom"

const Main = () => {
  return (
    <main className="vh-100 main-container">
      <Outlet/>
    </main>
  )
}
export default Main;