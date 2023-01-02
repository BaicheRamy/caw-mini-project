import Navbar from "./Components/Navbar"
import Blog from "./Routes/Blog"
import Home from "./Routes/Home"
import Contacts from "./Routes/Contacts"
import { Route, Routes } from "react-router-dom"



function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </>
  )
}

export default App