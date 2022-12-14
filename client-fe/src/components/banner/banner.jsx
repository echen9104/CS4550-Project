import { Carousel } from 'antd';
import './banner.less'

const Banner = () => {
    const onChange = (currentSlide) => {
        console.log(currentSlide)
    };

    const bannerList = [
        {
            id: 1,
            url: '/images/banner1.webp'
        },
        {
            id: 2,
            url: '/images/banner2.webp'
        },
        {
            id: 3,
            url: '/images/banner3.webp'
        },
    ]

    return (
        <Carousel
            autoplay={true}
            dotPosition={'right'}
            afterChange={onChange}
            className="banner-box"
        >
            {
                bannerList.map((banner) => {
                    return (
                        <div className="banner-item" key={banner.id}>
                            <a>
                                <img src={banner.url} alt="" />
                            </a>
                        </div>
                    )
                })
            }
        </Carousel>
    )
}

export default Banner