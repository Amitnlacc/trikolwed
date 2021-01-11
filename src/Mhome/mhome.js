import './mhome.css';
import history from './../history';
import invitation from './invitationpage.png';
const mhome = (props) =>{
    return (
        <div >
            <div class="dtlmenu">
                <ul>
                    <li><a href="#Foo" onClick={() => history.push('/')}>Home</a></li>
                    <li><a href="#Foo" onClick={() => history.push('/Location')}>Location</a></li>
                    <li><a href="#Foo" onClick={() => history.push('/Story')}>Story</a></li>
                    <li><a href="#Foo" onClick={() => history.push('/details')}>Details</a></li>
                </ul>
            </div>
            <div className="bg-dim">
                <img src={invitation} alt="ujjainta" class="ivitationpg"></img>
            </div>
            <div class="footerinvitatiohome">
                
            </div>
        </div>
    );
}
export default mhome;