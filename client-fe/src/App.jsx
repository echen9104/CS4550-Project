import { useState } from 'react'
import Layout from './layout/layout'
import { HashRouter as Router } from 'react-router-dom'


function App() {
    const [count, setCount] = useState(0)

    return (
        <Router>
            <div className="App">
                <Layout></Layout>
            </div>
        </Router>
        
    )
}

export default App
