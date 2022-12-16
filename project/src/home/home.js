import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const Home = () => {
    const {currentUser} = useSelector((state) => state.users)
    const {postings} = useSelector((state) => state.postings)
    return(
        <>
            <h1>Home</h1>
            {
                currentUser ?
                    <h4>Welcome back {currentUser.firstName}!</h4> :
                    <h4>Welcome to ShoeScan, the one stop shop for all your sneaker buying and selling needs.</h4>
            }
            <div className="card mt-4 mb-4">
                <img src="https://images.complex.com/complex/images/c_crop,h_1077,w_1915,x_0,y_0/c_fill,dpr_2.0,f_auto,q_auto,w_1400/fl_lossy,pg_1/dcakbazum3qa5aplqdis/most-anticipated-sneaker-releases-of-2022?fimg-ssr"
                     className="img-fluid" alt=""/>
                <div className="card-body">
                    <div className="card-title">
                        <span className="fs-1">Most anticipated sneakers of 2022</span>
                        <Link to="/search">
                            <button className="btn btn-primary float-end">Shop Now</button>
                        </Link>
                    </div>
                </div>
            </div>
            {
                currentUser &&
                <div>
                    <h1>Here are your current listings:</h1>
                    <ul className="list-group mt-4">
                        {
                            postings.length !== 0 ? postings.map((post) =>
                                <li key={post._id} className="list-group-item">
                                    <img height={100}
                                         src={post.image}/>
                                    <Link to={`/details/${post.skuID}`}>
                                        ${post.asking} for {post.name}
                                    </Link>
                                </li>) :
                                <h2>No current listings</h2>
                        }
                    </ul>
                </div>
            }
        </>
    )
}

export default Home