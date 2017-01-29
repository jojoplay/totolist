import React from 'react';
import Listitem from './Listitem'

class List extends React.Component{
	render(){

		const texts = this.props.textfromapp;
		const a = texts.map( (text,key) => {
			return (
			<Listitem 
			key={key}  
			textfromlist={text.text} complete={text.complete}  
			togglecomplete={this.props.togglecomplete}
			itemKey={key}
			ondelete={this.props.ondelete}
			/>)
		});

		console.log(a)

		return(
			<ul>
				{a}
			</ul>

			)
	}

}

export default List;