import { Outlet } from "react-router-dom"

const Main = () => {
  return (
    <main className="vh-100">
      <Outlet/>
    </main>
  )
}
export default Main;