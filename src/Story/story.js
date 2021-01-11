import './story.css';
import history from './../history';
import { makeStyles } from "@material-ui/core/styles";
import sdb1v1 from "./sdb1v1.jpg";
import sdb2v2 from "./sbfrdv3.jpg";
import sdb3v2 from "./sbacc.JPG";
import sdb4v2 from "./sbmood.JPG";
import sdb5v2 from "./sbmood2.JPG";
import together1 from "./sbam1.jpg";
import together2 from "./sbam2.jpg";
import together3 from "./sbam3.jpg";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from "@material-ui/core/IconButton";
const tileData =[
    {img: sdb1v1, title:"Bengali in style",author:""},
    {img: sdb2v2, title:"Friends out", author:""},
    {img: sdb3v2, title:"Fashion in office",author:""},
    {img: sdb4v2, title:"Angry mode on",author:""},
    {img: sdb5v2, title:"Always curious",author:""},
    {img: together1, title:"Dizziness...",author:""},
    {img: together2, title:"Ummmm...",author:""},
    {img: together3, title:"Off She goes to home town",author:""}
];
const useStyles  = makeStyles(theme => ({
    root: {
        display: "flex",
        margin:"5%",
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hideen",
        backgroundColor: theme.palette.background.paper
        
    },

}));
// eslint-disable-next-line react-hooks/rules-of-hooks

const Story = (props) =>{
    const classes = useStyles();
    return (
       <div> 
           <div class="dtlmenu">
                <ul>
                    <li><a href="#Foo" onClick={() => history.push('/')}>Home</a></li>
                    <li><a href="#Foo" onClick={() => history.push('/Location')}>Location</a></li>
                    <li><a href="#Foo" onClick={() => history.push('/Story')}>Story</a></li>
                    <li><a href="#Foo" onClick={() => history.push('/details')}>Details</a></li>
                </ul>

            </div>
        <div className={classes.root } >
            <GridList cellHeight={190} className={classes.gridList} cols={2} cellWidth={400}>
                {tileData.map(tile => (
                <GridListTile key={tile.img} cols={tile.cols || 1}>
                    <img src={tile.img} alt={tile.title} mode="fit"/>
                    <GridListTileBar
                    title={tile.title}
                    
                    actionIcon={
                        <IconButton
                        aria-label={`info about ${tile.title}`}
                        className={classes.icon}
                        >
                        
                        </IconButton>
                    }
                    cellHeight={45}
                    />
                </GridListTile>
            ))}
            </GridList>
        </div>
        <div class="footerinvitatiostry">
                
        </div>  
        </div> 
    );
}
export default Story;