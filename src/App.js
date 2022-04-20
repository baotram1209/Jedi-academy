import Burger from './components/BurgerMenu'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import CardsHome from './components/CardsHome.js'
import './stylesheets/main.scss'
import Posts from './pages/PostsPage.js'
import Post from './pages/PostPage.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Burger />
        <Routes>
          <Route path="/" exact element={<CardsHome />} />
          <Route path="/infos-utiles" exact element={<Posts />} />
          <Route path="/infos-utiles/:slug" exact element={<Post />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
