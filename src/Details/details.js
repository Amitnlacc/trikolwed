import history from './../history';
import './details.css';
const Detail = (props) =>{

return (
    <div>
        <div class="dtlmenu">
            <ul>
                <li class="firtli"><a href="#Foo" onClick={() => history.push('/')}>Home</a></li>
                <li><a href="#Foo" onClick={() => history.push('/Location')}>Location</a></li>
                <li><a href="#Foo" onClick={() => history.push('/Story')}>Story</a></li>
                <li><a href="#Foo" onClick={() => history.push('/details')}>Details</a></li>
            </ul>
        </div>
        <div class="cards">
            
            <div class="card card-size">
                <p class="engheader"> Engagement </p>
                <div class="infoDetl">
                    <div class="locDetail">
                        <p>Location</p>
                        <p class="nallu"> Hibiscus Banquets, Whitefield</p>
                    </div>
                    <div class="linecard"></div>
                    <div class="gmap">
                        <p >Map Link</p>
                        <p class="nallu" onClick={()=> window.open("https://g.page/hibiscus-banquets","_blank")}> https://g.page/hibiscus-banquets</p>
                    </div>    
                    <div class="linecard2"></div>
                    <div class="etiming">
                        <p>Timing</p>
                        <p class="nallu">04/02/2021 10 A:M - 4 P:M</p>
                    </div>
                    <div class="linecard3"></div>
                </div>
            </div>
            <div class="card card-size">
            <p class="engheader"> Marriage </p>
            <div class="infoDetl">
                    <div class="locDetail">
                        <p>Location</p>
                        <p class="nallu"> Manikya Court, Agartala</p>
                    </div>
                    <div class="linecard"></div>
                    <div class="gmap">
                        <p >Map Link</p>
                        <p class="nallu" onClick={()=> window.open("https://goo.gl/maps/pzQxni2GDUyAM3ev7","_blank")}> Manikya-Court click here</p>
                    </div>
                    <div class="linecard2"></div>
                    <div class="etiming">
                        <p>Timing</p>
                        <p class="nallu">26/04/2021 Evening</p>
                    </div>
                    <div class="linecard3"></div>
                </div>
            </div>
            <div class="card card-size">
            <p class="engheader"> Reception </p>
            <div class="infoDetl">
                    <div class="locDetail">
                        <p>Location</p>
                        <p class="nallu"> TBD, Bangalore</p>
                    </div>
                    <div class="linecard"></div>
                    <div class="gmap">
                        <p >Map Link</p>
                        <p class="nallu"> Upcoming link</p>
                    </div>
                    <div class="linecard2"></div>
                    <div class="etiming">
                        <p>Timing</p>
                        <p class="nallu">End of April (TBD)</p>
                    </div>
                    <div class="linecard3"></div>
                </div>
            </div>
            <div class="footerinvitatio">
                
        </div> 
        </div>
    </div>
);
}
export default Detail;