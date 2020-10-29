import React from 'react';
import FilterButton from './FilterButton';

const FilterButtonList = (props) => {

    // const images = props.images.map( image => {
    //     return <ImageCard key={image.id} image={image} />
    // });
    
    const onFilterSubmit = (filter) => {
        console.log(">>> == filter = ", filter)
        props.onFilterClick(filter);
    }

    const buttons = props.buttons.map( button => {
        console.log("button id = ", button.id)
        return <FilterButton key={button.id} button={button} onFilterButtonClick={onFilterSubmit} />
    });

    return (
        <div className="button-list row">{buttons}</div>
    )
}

export default FilterButtonList;