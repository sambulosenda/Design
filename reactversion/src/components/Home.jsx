import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import './Home.css';


class Home extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Link to="/about">
                    <Button bsStyle="primary">About</Button>
                    </Link>
                </Grid>
            </div>
        );
    }
}

export default Home;