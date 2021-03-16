import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Search from './components/Search'
import NavigationBar from './components/NavigationBar'
import FavoriteMovie from './components/FavoriteMovie'

function App() {
  return (
    <Router>
      <NavigationBar></NavigationBar>
      <Container>
        <Route path='/' component={Search} exact></Route>
        <Route path='/favMovie' component={FavoriteMovie}></Route>
      </Container>
    </Router>
  )
}

export default App
