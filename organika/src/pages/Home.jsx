import "./Home.css";

import { Link } from "react-router-dom";

function Home(){
    
    return(
        <div className="home page">
            <div className="home-text">
                <h2>Welcome to Organika store!</h2>
                <h4>Fresh food, 1-click away.</h4>

                <Link className="btn btn-large btn-priamry" to="/catalog">
                    Check our fresh catalog
                    <i class="fa-solid fa-circle-arrow-right"></i>
                </Link>
            </div>

        
        
        </div>


    );
}

export default Home;