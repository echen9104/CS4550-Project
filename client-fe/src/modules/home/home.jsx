import './home.less'

import Banner from '@/components/banner/banner'
import ProductCard from '@/components/card/productCard'
import BaseArea from '@/components/area/baseArea'

const Home = () => {
    const RecommendList = [
        {
            id: 1,
            title: 'Title1',
            des: 'des1',
            image: '/images/banner1.webp'
        },
        {
            id: 2,
            title: 'Title2',
            des: 'des2',
            image: '/images/banner2.webp'
        },
        {
            id: 3,
            title: 'Title3',
            des: 'des3',
            image: '/images/banner3.webp'
        },
    ]

    return (
        <div className="home-page">
            <Banner></Banner>
            <BaseArea
                title={'Recommended For You'}
                content={
                    RecommendList.map((item) => {
                        return <ProductCard info={item} key={item.id} />
                    })
                }
            ></BaseArea>
            <BaseArea
                title={'Popular Goods'}
                content={
                    RecommendList.map((item) => {
                        return <ProductCard info={item} key={item.id} />
                    })
                }
            ></BaseArea>
        </div>
    )
}

export default Home