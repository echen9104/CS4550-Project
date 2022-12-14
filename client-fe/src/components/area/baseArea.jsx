import { Link } from 'react-router-dom'
import './baseArea.less'

const BaseArea = (props) => {
    let { title, viewMoreUrl, content } = props

    return (
        <div class="area-box">
            <div class="card-header">
                <div class="card-title">{ title }</div>
                <Link to={viewMoreUrl}>More</Link>
            </div>
            <div class="card-content">
                <>
                    { content }
                </>
            </div>
        </div>
    )
}

export default BaseArea