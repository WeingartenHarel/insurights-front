import React, { Component } from 'react'
import { connect } from 'react-redux'

import PropTypes from 'prop-types';
import styles from './ItemPreview.module.scss';
import { NavLink, Link, withRouter } from 'react-router-dom'

// import 
import {setItem, addItem, updateItem, removeItem } from '../../../store/actions/CategoryActions';


export class ItemPreview extends React.Component {

  state = {
    Item: null
  }
  componentDidMount() {
    const Item = this.props.Item
      this.setState({ Item }, () => {
      }
    )
    
  }

  handleChange = ({ target }) => {
    //console.log('handleChange target',target)
    //console.log('handleChange target .data.Item',this.state.Item)// send all object with data to action
    //const field = target.name
    //const value = target.type === 'number' ? +target.value : target.value;
    //const value = this.state.Item;
    //console.log('value', value);
    this.props.parentCallback(this.state.Item);
    //this.setState(prevState => ({ Item: this.state.Item }))
    
  }

   handleClick = async ( Item ) => {

    await this.props.setItem(Item)
    console.log('this is:', this.props);
    console.log('this is this.props.currItem' , this.props.currItem);
  }

  render() {
    const { Item } = this.state;
    // console.log('render',Item)
    return Item && <div className={styles.itemContainer}>
            <div className={styles.btnDetails}>
              {/* <Link  to={`/Item/details/${Item._id}`}>  </Link> */}
              <button className={styles.btn} onClick={() => this.handleClick(Item)}>
              {Item.name}
              </button>
            </div>
            <div className={styles.actions}>
              <input className={styles.checkBox} type="checkbox" data-item={`${Item}`} value={`${this.state.Item}`} name={`${Item._id}`} onChange={ this.handleChange }/>
              <Link to={`/Item/edit/${Item._id}`}>
                  <button className={styles.btnUpdate}>Edit</button>
              </Link>
            </div>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    currItem: state.ItemReducer.currItem
  }
}

const mapDispatchToProps = {
  setItem
}

ItemPreview.propTypes = {};

ItemPreview.defaultProps = {}; 

export default connect(mapStateToProps, mapDispatchToProps)(ItemPreview);