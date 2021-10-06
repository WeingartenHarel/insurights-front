import React, { Component } from "react";
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import styles from './HomePage.module.scss';

//import modal
import {Modal} from '../Medical/Modal'

import { loadUsers } from '../../store/actions/userActions';

//import services
import userService  from '../../services/userService';
import ItemService  from '../../services/categoryService';
import {loadItems,getById, addItem, updateItem, removeItem,setItem } from '../../store/actions/CategoryActions';

//import components
import { ItemList } from "../Medical/ItemList";
import ItemDetailsPage from '../Medical/ItemDetailsPage/ItemDetailsPage'

// import * as ItemList from '../ItemList'
//import { ItemList } from "../ItemList";
// import ItemList from '../ItemList'
import ItemFilter from '../Medical/ItemFilter'

export default class _HomePage extends React.Component {
  state = {
    user: null,
    Items:null,
    currentItem:null,
    query: null,
    filterBy:{
      term:null
    },
    isShowModal:false,
  }
  async componentDidMount() {
     this.loadUsers()
    //  var items = await this.props.loadItems()
     this.props.loadItems()
     console.log('home page load this.props',this.props)
  }

  componentDidUpdate(){
    //console.log('componentDidUpdate')
    //this.props.loadItems()
  }

  async loadUsers() {
    await this.props.loadUsers()
    // console.log('this.props',this.props)
    const loadedUser = await userService.getUser()
    this.setState({ user:loadedUser })
  }
  async loadItems(){
     console.log('loadItems this.state.filterBy',this.state.filterBy)
    //set filter to state
    //const Items = await ItemService.getItems(this.state.filterBy)
     const Items = await this.props.loadItems(this.state.filterBy)
     console.log('loadItems Items',this.props.Items, Items)
    //this.setState({Items})
    // console.log('loadItems setState ',this.state.Items)
  }

  setFilter = (filterBy,query) => {
    // console.log('setFilter filterBy',filterBy)
    //  this.setState({ query }, this.loadItems) // add query to state
    //  this.setState({ filterBy }, this.loadItems) // update filter by
     this.setState({ filterBy }, this.loadItems) // update filter by

    // this.setState( prevState=>({...prevState,filterBy}),this.loadItems)
    // console.log('state',this.state)
  }

  handleClick = () => {
    let isShowModal = !this.state.isShowModal;
    this.setState({isShowModal:isShowModal })
    console.log('handleClick',this.state.isShowModal)
  }

  handleCallback= (value) => {
    console.log('handleClick handleCallback',value)
    this.setState({isShowModal:value })
  }

  render() {
    const {isShowModal} = this.state
    const {currItem} = this.props
    const {Items} = this.props
    const {user} = this.props
    return (
      <div className={styles.HomePage}>
            <div>
         {user && <div className="user">  
                                    <h4 className={styles.headline}>Loged in user</h4>               
                                    <div className={styles.name}>Name: <h4>{ user.name }</h4>     </div>          
                                    <div className={styles.role}>Role: <span>{ user.role }</span>    </div>             
          </div>}
          <h4 className={styles.actionsHeader}>Actions:</h4>
          <div className={styles.actionsContainer}>
            <ItemFilter onSetFilter={this.setFilter}/>
            <button className={styles.btnAdd}> <Link to={'/Item/edit/'}> + Add Item </Link> </button>
            <button className={styles.btnAdd} onClick = {this.handleClick} > Show List </button>
          </div>
          <div className={styles.medicalContainer}>
            <div className={styles.medicalList}>{Items && <ItemList Items={Items} /> }</div>
           
            <div>
              <h4 className={styles.headlineh4}>Medical Item detail:</h4>
              {currItem &&<div className={styles.itemDetailContainer}> <ItemDetailsPage className={styles.ItemDetailsPage}/>
              </div>}
            </div>
          </div>
        </div>
        {/* Modal rendering  */}
        {isShowModal && <div className={styles.Modal}>
            <h2>Modal Medical list Rendering</h2>
            <Modal parentCallback={this.handleCallback}></Modal>
        </div>}
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
  loadUsers,
  loadItems,
}

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(_HomePage)
