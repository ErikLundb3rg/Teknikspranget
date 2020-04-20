import React, { Component } from "react"
import { Grid, Cell } from "react-mdl"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

 

class Template extends Component {
    
    render() {
        
        return (
            <Card style = {{maxWidth: 345, display: "inline-block", margin: "0 50px", textAlign: "left", marginTop: "40px"}}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    style ={{height: 160}}
                    image= {this.props.picture}
                    title="cosu pic"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {this.props.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" style = {{fontSize: "16px", fontWeight: "400", color: "#404040"}}>
                      {this.props.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <hr style = {{borderTop: "2px solid #833fb2", width: "90%", margin: "0 auto", padding: 0}}/>
                <CardActions>
                  <Button size="small" color="primary" style = {{fontWeight: "700", fontSize: "17px", display: this.props.linkdisplay}}>
                    <a href = {this.props.websitelink} style = {{color: "#001a33", textDecoration: "none"}}> Länk </a>
                  </Button>
                  <Button size="small" color="primary" style = {{fontWeight: "700", fontSize: "17px"}}>
                    <a href = {this.props.githublink} style = {{color: "#001a33", textDecoration: "none"}}> Github </a>
                  </Button>

                </CardActions>
            </Card>
        )
    }
    
}

export default Template;