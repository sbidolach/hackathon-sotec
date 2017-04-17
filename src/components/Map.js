import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';

class Map extends React.Component {
  static defaultProps = {
    center: {lat: 51.52, lng: -0.085},
    zoom: 16,
    projects: {}
  };

  onChildClick = (key, { id }) => {
      console.log('onChildClick');
  }

  render() {
    const { projects } = this.props

    return (
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCkwfHICB6QowBNjiGBZc12MH2HbdZnHbM" }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        onChildClick={this.onChildClick}
      >
      { Object.keys(projects).map((key, index) => {
          const p = projects[key]
          return (
              <Marker
                key={p.id}
                lat={p.lat}
                lng={p.lng}
                text={p.name}
                icon={p.icon}
                {...p}/>
          ) ;
      })}
      </GoogleMapReact>
    );
  }
}

export default Map
