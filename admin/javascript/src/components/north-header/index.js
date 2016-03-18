import React from 'react';
import SilverStripeComponent from 'silverstripe-component';

class NorthHeaderComponent extends SilverStripeComponent {

    render() {
        //TODO: Create breadcrumbs component
        return (
            <div className="north-header-component">
                <div className="cms-content-header-info">
                    <div className="breadcrumbs-wrapper">
                        <h2 id="page-title-heading">
                            <span className="crumb">Campaigns</span>
                        </h2>
                    </div>
                </div>
            </div>
        );
    }

}

export default NorthHeaderComponent;
