import React, { Component } from 'react'
import { connect } from 'react-redux'

import PropTypes from 'prop-types';
import styles from './ItemList.module.scss';
import { Link } from 'react-router-dom'

import ItemService  from '../../../services/categoryService';
import { removeItem ,removeItems} from '../../../store/actions/CategoryActions';


import ItemPreview from '../ItemPreview'
// import {ItemDetailsPage} from '../ItemDetailsPage'

class _ItemList extends React.Component {
    
    constructor(props){
      super(props);
      this.state = {
        // Items: this.props.Items,
        SelectedCategories : [],
     
    }
  }
    componentDidMount() {
      console.log(' this.state', this.props.Items);
    }
    
    componentDidUpdate(){
      //console.log('item list componentDidUpdate',this.props.Items)
    }
   
    handleCallback = (childData) =>{
      console.log('handleCallback childData',childData)
      var SelectedCategories = [...this.state.SelectedCategories]; // make a separate copy of the array
      var index = SelectedCategories.indexOf(childData)
      
      if (index !== -1) {
        SelectedCategories.splice(index, 1);
        console.log('array deleted item',SelectedCategories,'index',index)        
        this.setState(prevState => ({
          SelectedCategories: SelectedCategories
        }) , () =>{
         console.log('item list this.state.Item SelectedCategories', this.state.SelectedCategories, this.state)
        })
        return
      }else{
        this.setState(prevState => ({
          SelectedCategories: [...prevState.SelectedCategories, childData]
        }) , () =>{
          console.log('details this.state.Item', this.state.SelectedCategories, this.state)
        })
      }
    }

    onDeleteItem = async () =>{
        var SelectedCategories = this.state.SelectedCategories
        console.log('SelectedCategories',SelectedCategories)
        await this.removeItems(SelectedCategories)
    }

    async removeItems(SelectedCategories) {  
      await console.log('removeItem',SelectedCategories) 
      await this.props.removeItems(SelectedCategories) 
      this.resetSelectedCategories();

    }

    resetSelectedCategories(){
      console.log("resetSelectedCategories")
      this.setState(prevState => ({
        SelectedCategories: []
      }) , () =>{
       console.log('resetSelectedCategories', this.state.SelectedCategories)
      })
    }

  render() {
    const { SelectedCategories } = this.state
    const { Items } = this.props

    return<div>
     {SelectedCategories.length > 0 && <div className={styles.actions}>
      <button className={styles.btnDelete} onClick={this.onDeleteItem}>Delete Selected Items</button>
   
      </div>}
    <h2>Medical services list</h2>
      <ul className={styles.ItemList}> 
            {Items &&
              Items.map(Item => <ItemPreview parentCallback={this.handleCallback} Item={ Item } key={ Item._id } />)
            }
      </ul>
  </div>
    
  }
}

function mapStateToProps(state) {
  return {
    Items: state.ItemReducer.Items,
    Item: state.ItemReducer.currItem
  }
}

const mapDispatchToProps = {
  removeItem,
  removeItems,
}

export const ItemList = connect(mapStateToProps, mapDispatchToProps)(_ItemList)
