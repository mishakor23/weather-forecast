import React from 'react';

class GoogleMap extends React.Component {
  componentDidMount() {
    new window.google.maps.Map(this.refs.map, {
      zoom: 10,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      },
      disableDefaultUI: true
    });
  }

  render() {
    return (
      <div ref="map" />
    );
  }

}

export default GoogleMap;
