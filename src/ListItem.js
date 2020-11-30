import React, {Component} from 'react'

class ListItem extends Component {
    render() {
        return(
            <li>{this.props.doThis}</li>
        )
    }
}

export default ListItem