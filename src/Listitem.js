import React from 'react'


class Listitem extends React.Component{

    togglecomplete = (e) => {
        e.preventDefault()
        this.props.togglecomplete(this.props.itemKey)
    }
    ondelete = (e) => {
        e.preventDefault()
        this.props.ondelete(this.props.itemKey)
    }

    render(){
            const style={
            backgroundColor:this.props.complete?"green":"red"

        };
        return <li className="" style={style}><span>  {this.props.textfromlist}  </span>
                <span>
                    <button onClick={this.togglecomplete}>ok</button> 
                    <button onClick={this.props.ondelete}>delete</button>
                </span>
                </li>
        
        
    }
}

export default Listitem;