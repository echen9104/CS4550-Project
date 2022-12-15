import { Link } from 'react-router-dom'
import './baseArea.less'

const BaseArea = (props) => {
    let { title, viewMoreUrl, content } = props

    return (
        <div className="area-box">
            <div className="card-header">
                <div className="card-title">{ title }</div>
                <Link to={viewMoreUrl}>More</Link>
            </div>
            <div className="card-content">
                <>
                    { content }
                </>
            </div>
        </div>
    )
}

export default BaseArea