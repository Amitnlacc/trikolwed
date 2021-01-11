import './location.css';
import travelimg from './manikya-court.jpg';
import followpic from './profilep.jpg';
import history from './../history';
const location = (props) =>{
    return (
        <div>
            <div class="dtlmenu">
                <ul >
                    <li><a href="#Foo" onClick={() => history.push('/')}>Home</a></li>
                    <li><a href="#Foo" onClick={() => history.push('/Location')}>Location</a></li>
                    <li><a href="#Foo" onClick={() => history.push('/Story')}>Story</a></li>
                    <li><a href="#Foo" onClick={() => history.push('/details')}>Details</a></li>
                </ul>
            </div> 
            <div class="cards">
            <div class="card imagewrapper">
                    <div class="imageDtl">
                        <p class="descstyle">Venu - Hibiscus Banquets, Whitefiled, Bangalore</p>
                        
                    </div>
                    <img src={travelimg} alt="ujjainta" className="full-bg-img"></img>
                    
                </div>
        
                <div class="card imagewrapper">
                    <img src={travelimg} alt="ujjainta" className="full-bg-img"></img>
                    <div class="imageDtl">
                        <p class="descstyle">Venu - Manikya Court, Agartala, Tripura</p>
                        
                    </div>
                </div>
                <div class="card card-size">deatils ...</div>
            </div>    
            <div class="footerinvitatioloc">
                
            </div>
        </div>
    );
}
export default location;