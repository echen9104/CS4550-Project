import { useState } from 'react'
import Nav from '@/components/nav/nav'
import Footer from '@/components/footer/footer'
import './app.less'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <Nav></Nav>
            <div className="view-box"></div>
            <Footer></Footer>
        </div>
    )
}

export default App
