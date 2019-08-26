import React, {Component} from 'react';
import MonthItem from '../MonthItem/MonthItem';


class MonthList extends Component{
    render() {
        console.log('Checking Props', this.props);

        const monthListArray =this.props.MonthList.map((item,index) => {
        return(
                <MonthItem 
                    key={index} 
                    getMonthCallback={this.props.getMonthCallback}
                    item={item} />
            )
        });
        console.log(monthListArray);

        return (
            <div>
                {monthListArray}
            </div>
        )
    }
}

export default MonthList;