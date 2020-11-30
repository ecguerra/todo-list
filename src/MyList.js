import React, {Component} from 'react'
import ListItem from './ListItem.js'

class MyList extends Component {

  constructor(props) {
    super()
    this.state = {
      toDoItemArray: props.theList,
      newItem: ''
    }
  }

  clearList(e) {
    console.log('Clearing list')
    this.setState({
      toDoItemArray: []
    })
  }

  newItemChange(e) {
    this.setState({
      newItem: e.target.value
    })
  }

  addItem(e) {
    e.preventDefault()
    let tempArray = this.state.toDoItemArray.map((item,index) => (
      <ListItem doThis={item} key={index} />
    ))
    tempArray.push(this.state.newItem)
    this.setState({
      toDoItemArray: tempArray,
      newItem: ''
    })

  }

  render() {
    let todoItems = this.state.toDoItemArray.map((item, index) => (
      <ListItem doThis={item} key={index} />
    ))
    return(
      <>
      <h1>Things I Should Stop Procrastinating:</h1>
      <ul>
        {todoItems}
      </ul>
      <button onClick={(e) => this.clearList(e)}>Finished the list!</button>
      <form>
        <input type='text'
          placeholder='type a to-do item here'
          onChange={(e) => this.newItemChange(e)}
          value={this.state.newItem}
        />
        <button onClick={(e) => this.addItem(e)}>Add a New To-Do!</button>
      </form>
      </>
    )
  }
}

export default MyList
