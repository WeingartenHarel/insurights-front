import React, { Component } from "react";
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import styles from './Modal.module.scss';


//import services
import ItemService  from '../../../services/categoryService';
import {loadItems,getById, addItem, updateItem, removeItem,setItem } from '../../../store/actions/CategoryActions';

//import components
import { ItemList } from "../ItemList";
import ItemDetailsPage from '../ItemDetailsPage/ItemDetailsPage'

// import * as ItemList from '../ItemList'
//import { ItemList } from "../ItemList";
// import ItemList from '../ItemList'
import ItemFilter from '../ItemFilter'

export default class _Modal extends React.Component {
  state = {
    user: null,
    Items:null,
    currentItem:null,
    query: null,
    filterBy:{
      term:null
    }
  }
  async componentDidMount() {
    //  this.loadUsers()
    // //  var items = await this.props.loadItems()
    //   this.props.loadItems()
    //  console.log('home page load this.props',this.props)
  }

  setFilter = (filterBy,query) => {
    // console.log('setFilter filterBy',filterBy)
    //  this.setState({ query }, this.loadItems) // add query to state
    //  this.setState({ filterBy }, this.loadItems) // update filter by
     this.setState({ filterBy }, this.loadItems) // update filter by

    // this.setState( prevState=>({...prevState,filterBy}),this.loadItems)
    // console.log('state',this.state)
  }


  async loadItems(){
    console.log('loadItems this.state.filterBy',this.state.filterBy)
    const Items = await this.props.loadItems(this.state.filterBy)
    console.log('loadItems Items',this.props.Items, Items)
 
 }
 
 handleClick = async ( value ) => {
    console.log('this is:', value);
    this.props.parentCallback(value);
  }

  render() {
    const {currItem} = this.props
    const {Items} = this.props
    return (
      <div className={styles.HomePage}>
                    <button className={styles.btnClose} onClick={() => this.handleClick(false)} > X </button>
            <div>

          <h4 className={styles.actionsHeader}>Filter Items:</h4>
          <div className={styles.actionsContainer}>
            <ItemFilter onSetFilter={this.setFilter}/>
          </div>
          <div className={styles.medicalContainer}>
            <div className={styles.medicalList}>{Items && <ItemList Items={Items} /> }</div>

          </div>
        </div>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    user: state.userReducer.user,
    currItem: state.ItemReducer.currItem,
    Items: state.ItemReducer.Items

  }
}

const mapDispatchToProps = {
  loadItems,
}

export const Modal = connect(mapStateToProps, mapDispatchToProps)(_Modal)
