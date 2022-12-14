import './productCard.less'

const ProductCard = (props) => {
    const { info } = props
    const { title, des, id} = info

    return (
        <div className="card-box">
            <div className="card">
                <div className="card-pic-box">
                    <img src="/images/banner1.webp" alt="" />
                </div>
                <div className="card-detail">
                    <h4 className="card-detail-title">{ title }</h4>
                    <p className="card-detail-des">{ des }</p>
                </div>
            </div>
            <div className="card loading">
                <div className="card-pic-box"></div>
                <div className="card-detail">
                    <h4 className="card-detail-title"></h4>
                    <p className="card-detail-des"></p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard