import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styles from './ItemFilter.module.scss';
 
export class ItemFilter extends Component {
  state= {
    term:'',
  }

  onChangeFilter = (ev) => {
    const field = ev.target.name
    const value = ev.target.value 
    console.log('field, value',field, value)
    this.setState( {[field]:value} /*diconstract state */ , () =>{
      this.props.onSetFilter({...this.state})
    })
  }

  render(){
    const {term} = this.state
    return <div className={styles.ItemFilter}>
      <span>Filter categories: </span><input name="term" type="text" value={term} onChange={this.onChangeFilter}/>
    </div>
  }
}

// ItemFilter.propTypes = {};

// ItemFilter.defaultProps = {};

export default ItemFilter;
