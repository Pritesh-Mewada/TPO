import React,{Component} from 'react';
import {Grid,Row,Col,FormGroup,Button,Radio,ControlLabel, FormControl } from "react-bootstrap";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {authentication} from '../actions/authentication';

class FrontPage extends Component{
    constructor(props) {
        super(props);
        this.state= {
            email: '',
            privilage:"Tpo"

        }
    }

    handlechange(event){
        this.setState({ [event.target.id]: event.target.value });
    }

    handleOptionChange(changeEvent) {
        this.setState({
            privilage: changeEvent.target.value
        });
    }

    render(){
        return(
            <div>
                <Grid>
                    <Row className="show-grid" style={{marginTop:100}}>
                        <Col xs={12} md={8}>
                            <h1>Placement Portal for VJTI Student !</h1>
                            <h2>Let's make placement process <b>simpler</b></h2>
                        </Col>
                        <Col xs={12} md={4}>
                            <div className="Login">
                                <form onSubmit={(e)=>{e.preventDefault()}}>
                                    <FormGroup controlId="email" bsSize="large">
                                        <ControlLabel>Email</ControlLabel>
                                        <FormControl
                                            autoFocus
                                            type="email"

                                            onChange={(e)=>this.handlechange(e)}
                                        />
                                    </FormGroup>
                                    <FormGroup controlId="password" bsSize="large">
                                        <ControlLabel>Password</ControlLabel>
                                        <FormControl
                                            type="password"
                                            onChange={(e)=>this.handlechange(e)}
                                        />
                                    </FormGroup>
                                    <input type="radio" value="Tpo" name="myRadios" onChange={(e)=>this.handleOptionChange(e)}  checked={this.state.privilage==='Tpo'}/>TPO CR
                                    <input type="radio" value="Student" name="myRadios" onChange={(e)=>this.handleOptionChange(e)}  checked={this.state.privilage==='Student'} />Student
                                    <Button
                                        block
                                        bsSize="large"
                                        type="submit"
                                        bsStyle="success"
                                        onClick={()=>{this.props.authentication(this.state)}}
                                    >
                                        Login
                                    </Button>
                                </form>
                            </div>

                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        Signin: state.signin
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({authentication: authentication}, dispatch);
}




export default connect(mapStateToProps, matchDispatchToProps)(FrontPage);