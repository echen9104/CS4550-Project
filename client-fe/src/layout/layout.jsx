import Nav from '@/components/nav/nav'
import Footer from '@/components/footer/footer'
import './layout.less'
import UseRoute from '@/router/index'
import { useLocation } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store'

const Layout = () => {
    const { pathname } = useLocation()
    const isAuth = pathname == '/login' || pathname == '/register'
    return (
            <Provider store={store}>
                {
                    !isAuth
                        ?
                            (
                                <>
                                    <Nav></Nav>
                                    <div className="view-box">
                                        <div className="view-page">
                                            <UseRoute />
                                        </div>
                                    </div>
                                    <Footer></Footer>
                                </>
                            )
                        :
                            (
                                <UseRoute />
                            )
                }
            </Provider>
    )
}

export default Layout