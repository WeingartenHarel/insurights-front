import React, { Component } from 'react'
import { connect } from 'react-redux';

// import PropTypes from 'prop-types';
import styles from './ItemDetailsPage.module.scss';
import ItemService  from '../../../services/categoryService';
import { NavLink, Link, withRouter } from 'react-router-dom'
import { LocationPreview } from '../../LocationPreview';

//redux donnect

//import funcitons from services
import { loadLocations,getById,addLocation }  from '../../../store/actions/LocationActions';
import { addItem, updateItem, removeItem } from '../../../store/actions/CategoryActions';

// import service
import locationService from '../../../services/locationService';

import GoogleMapReact from 'google-map-react';

// const AnyReactComponent = ({ text }) => 
// <div className={styles.locationContainer}>
// <img className="locationText" alt="" src="http://maps.google.com/mapfiles/ms/icons/blue-dot.png"/>
//   <span className={styles.locationText}>{text}</span>

// </div>;

export class ItemDetailsPage extends Component {
  state = 
      {
        Item:null,
        ItemUpdate:[],
        categoryLocations:[],
        location:'a',
        center: {
          lat: 32.08028091682708,
          lng: 34.76671832397856
        },
        zoom: 16
      }

  async componentDidMount(){
    //const Item = await ItemService.getItemById(this.props.Item._id)
    // const Item = this.props.Item
    console.log('item detail page componentDidMount Item',this)
    // const Item = await ItemService.getItemById(this.props.match.params.id)
    // this.setState({ Item })   
    // this.loadLocations()

  }

  // componentDidUpdate(prevProps, prevState, snapshot){
  // // Typical usage (don't forget to compare props):
  //   // if (this.props.userID !== prevProps.userID) {
  //   //   this.fetchData(this.props.userID);
  //   // }
  //   // console.log('componentDidUpdate this state', this,prevProps, prevState, snapshot);
  // }

  async loadLocations() {
    if (!this.state.Item.locations) return;
    const locations = this.state.Item.locations;
    for (var i = 0 ; i < locations.length ; i++){
      await this.props.getById(locations[i])
      this.setState(prevState => ({
        categoryLocations: [...prevState.categoryLocations, this.props.currLocation]
      }))
    }
    
  }

  //  handleMapClick = async (e) => {
  //    let category = this.state.Item
  //    let name = this.randomName();
  //    let location = {
  //       _id:null,
  //       name:name,
  //       cord:{
  //         lng:e.lng,
  //         lat:e.lat,
  //       }
  //     }
      
  //     let locationSaved = await this.updateLocations(location)
  //     category.locations.push(locationSaved._id)
  //     this.setState({category});      // console.log('handleMapClick categoryLocations',this.state.categoryLocations)
  //     this.setState(prevState => ({
  //       categoryLocations: [...prevState.categoryLocations, location]
  //     }))
  // }
  
  // async updateLocations(location){
  //     let locationSaved = await this.props.addLocation(location)
  //     return locationSaved;
  // }
  // onSaveItem = async (ev) => {
  //   const { Item } = this.state
  //   if (Item._id) await this.props.updateItem(Item)
  //   else await this.props.addItem(Item)
  // }

  // randomName(length = 10) {
  //   var txt = ''
  //   var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  //   for (var i = 0; i < length; i++) {
  //     txt += possible.charAt(Math.floor(Math.random() * possible.length))
  //   }
  //   return txt
  // }

  render(){
    const { Item,categoryLocations,center,zoom  } = this.state
    const { currItem  } = this.props
    return (
      <div>
        {/* <div><NavLink to="/"> Home</NavLink> </div> */}
        {currItem && <div className={styles.ItemDetailsPage}>                        
                        <h4 className={styles.Itemheadline}>{currItem.name}</h4>
                        Medical services:
                        {currItem && <ul className={styles.itemList}>    
                              {/* {currItem.services.stage1.length &&
                                currItem.services.stage1.map(service => <li>{service.name}</li>)
                                              
                              } */}
                        </ul>} 
                    </div>}
      </div>
    )
  }

} 

function mapStateToProps(state) {
  return {
    // locations: state.LocationReducer.Locations,
    // currLocation: state.LocationReducer.currLocation
    // currItem: state.CategoryReducer.currItem
    // currItem: state.ItemReducer.currItem,
    currItem: state.ItemReducer.currItem

  }
}

const mapDispatchToProps = {
  loadLocations,
  addLocation,
  getById,
  addItem,
  updateItem,
  removeItem
}
 

ItemDetailsPage.propTypes = {};

ItemDetailsPage.defaultProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetailsPage) ;
