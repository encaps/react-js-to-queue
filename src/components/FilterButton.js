import React from 'react';

class FilterButton extends React.Component {

    constructor(props) {
        super(props);
    }

    onFilterClick = (filter) => {
        console.log("on click ", filter.title)
        this.props.onFilterButtonClick(filter.title);
    }
    

    render() {

        const {title} = this.props.button;

        return(
            // <div><button type="button" className="btn btn-primary mt-2 ml-2" onClick={() => this.onFilterSubmit({title})}>{title}</button></div> 
            <div><button type="button" className="btn btn-primary mt-2 ml-2" onClick={() => this.onFilterClick({title})}>{title}</button></div> 
        )
    }
}

export default FilterButton;