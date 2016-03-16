import React from 'react';
import SilverStripeComponent from 'silverstripe-component';
import GridField from '../../components/grid-field';

class CampaignAdminContainer extends SilverStripeComponent {

    render() {
        return (
            <GridField />
        );
    }

}

CampaignAdminContainer.propTypes = {};

export default CampaignAdminContainer;
