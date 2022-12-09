import { useState } from 'react'
import Nav from '@/components/nav/nav'
import Footer from '@/components/footer/footer'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <Nav>124141</Nav>
            <Footer></Footer>
        </div>
    )
}

export default App
