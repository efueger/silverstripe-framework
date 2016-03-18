import React from 'react';
import SilverStripeComponent from 'silverstripe-component';

class GridFieldCellComponent extends SilverStripeComponent {

    render() {
        return (
            <div href="#" className='grid-field-cell-component'>{this.props.children}</div>
        );
    }

}

export default GridFieldCellComponent;
