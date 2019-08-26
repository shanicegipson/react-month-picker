import React, {Component} from 'react';

class MonthItem extends Component {


    alertMonth = (event) => {
        let Month = this.props.item.name;
        console.log('click');
        alert(Month);
    }
    render(){
        let Month = this.props.item.name;
        console.log('Looking to get name of Month', Month);
        return(
            <div>
                <ul onClick={this.alertMonth}>{this.props.item.name}</ul>
            </div>
            
        )
        
    }
}

export default MonthItem;