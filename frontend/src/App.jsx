import * as React from "react"
import { useEffect } from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

const Header = React.lazy(() => import('./components/Header'))
const Shop = React.lazy(() => import('./Pages/Shop'))
const Product = React.lazy(() => import('./Pages/Product'))
import { FullPageSpinner } from './components/lib'

const App = () => {

  useEffect(() => {
    console.log('rendered')
  })

  return (
    <React.Suspense fallback={<FullPageSpinner />}>
      <Router forceRefresh={true}>
        <Header title="Huma"/>
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/product/:productId" element={<Product />} />
        </Routes>
        <footer>This is the footer</footer>
      </Router>
    </React.Suspense>
  )
}

export default App;