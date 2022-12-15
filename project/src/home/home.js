
const Home = () => {
    return(
        <>
            <h1>Home</h1>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="../images/home-images/jordan1.jpg" alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="../images/home-images/jordan1.jpg" alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="../images/home-images/jordan1.jpg" alt="Third slide"/>
                    </div>
                </div>
            </div>
            <img src="../images/home-images/jordan1.jpg" alt="no pic"/>
        </>
    )
}

export default Home