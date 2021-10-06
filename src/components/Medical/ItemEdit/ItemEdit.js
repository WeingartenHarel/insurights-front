import React, { Component } from "react";
import ItemService  from '../../../services/categoryService';

import { connect } from 'react-redux';
import { addItem, updateItem, removeItem } from '../../../store/actions/CategoryActions';
import { NavLink, Link, withRouter } from 'react-router-dom'


class _ItemEdit extends Component {

  state = {
    Item:{
      id:null,
      name:'',
      location:{},
    },
    errMsg: ''

  }

  handleChange = ({ target }) => {
    const field = target.name
    const value = target.type === 'number' ? +target.value : target.value
    console.log('value', value)
    this.setState(prevState => ({ Item: { ...prevState.Item, [field]: value } }))
  }

  async componentDidMount(){
    const { id } = this.props.match.params
    const Item = id ? await ItemService.getItemById(id) : await ItemService.getEmptyItem()
    this.setState({ Item }) 
    console.log('Item ',this.state )
  }
  
  onSaveItem = async (ev) => {
    ev.preventDefault()
    const { Item } = this.state
    console.log('onSaveItem Item',Item)
    if (!Item.name )
        return this.setState({ errMsg: 'Please fill up all the above fields' })
    if (Item._id) await this.props.updateItem(Item)
    else await this.props.addItem(Item)
    // console.log('Item',Item)
    this.props.history.push('/')
    this.props.history.push('/')
}

onRemoveItem = async () => {
  const { Item } = this.state
  console.log('delete Item',Item)
  await this.props.removeItem(Item._id)
  console.log('deleted Item',Item)

  this.props.history.push('/')
}

  render() {
    const { Item } = this.state
    return Item &&<div>   
                    <NavLink to="/"> Home</NavLink>
                    <button onClick={this.onRemoveItem}>Delete</button>
                    <form onSubmit={this.onSaveItem}>
                        <input name="name" type="text" value={Item.name} onChange={ this.handleChange }/>        
                      <span className="form-errors">{ this.state.errMsg }</span>
                      <button>Save</button>

                    </form>
           </div> 
  }
}

const mapDispatchToProps = {
  addItem,
  updateItem,
  removeItem
}

export const ItemEdit = connect(null, mapDispatchToProps)(_ItemEdit)
