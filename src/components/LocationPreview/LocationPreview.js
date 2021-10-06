import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import styles from './LocationPreview.module.scss';
import { Link } from 'react-router-dom'




class _LocationPreview extends React.Component {

  state = {
    Locations:undefined,
  }

  componentDidMount() {

    const Locations = this.props.Locations
    this.setState({ Locations }, () => {
      //console.log('location preview details this.state.Location', this.state.Locations, this.state)
      }
    )
  }

  render() {
     
    const { Locations} = this.state
    return (
      <div className={styles.locationsContainer}>
        {Locations && <div className={styles.locationsContainer}>
          <div className={styles.locationPreview}> 
            <div>{Locations.name}</div>
            <div> {Locations.cord.lat}</div>
            <div> {Locations.cord.lng}</div>
         </div> 
       </div>
       }
      </div>
      
    )
  }
}

function mapStateToProps(state) {
  return {
  }
}

const mapDispatchToProps = {

}

export const LocationPreview = connect(mapStateToProps, mapDispatchToProps)(_LocationPreview)
