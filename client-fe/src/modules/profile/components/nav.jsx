import '../assets/nav.less'
import { Link, useLocation } from 'react-router-dom'

const Nav = () => {

    const location = useLocation()

    const routes = [
        {
            key: 1,
            path: '/profile/info',
            title: 'User Info',
        },
        {
            key: 2,
            path: '/profile/like',
            title: 'Likes',
        }
    ]

    return (
        <div className="nav-component">
            {
                routes.map((item) => {
                    return (
                        <Link
                            key={item.key}
                            to={item.path}
                            className={
                                [
                                    'nav-component-item',
                                    location.pathname == item.path ? 'active' : ''
                                ].join(' ')}
                        >
                            { item.title }
                        </Link>
                    )
                })
            }
        </div>

    )
}

export default Nav