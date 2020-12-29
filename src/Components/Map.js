import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { Row } from 'react-bootstrap';


class MyMap extends Component {
    render() {
        const style = {
            width: '300px',
            height: '300px'
            }
        return (
            <Row>
                <Map 
                google={this.props.google} 
                zoom={10}
                initialCenter={{
                lat: 55.88921741491434,
                lng: 26.532401134785253
                }}
                style={style}
                />
            </Row>
        );
    }
}

export default GoogleApiWrapper({apiKey: ('AIzaSyDMgjPUaWufVL8a7jQY1Iw-uYOzkH0pt5')})(MyMap);