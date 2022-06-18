import Header from '@/components/common/header/Header'
import Footer from '@/components/common/footer/Footer'
import Router from '@/router'

// default layout
function App() {
  return (
    <div className="App">
      <Header />
      <Router />
      <Footer />
    </div>
  )
}

export default App
