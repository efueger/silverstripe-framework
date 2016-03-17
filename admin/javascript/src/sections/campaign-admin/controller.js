import React from 'react';
import SilverStripeComponent from 'silverstripe-component';
import GridField from '../../components/grid-field';
import GridFieldHeader from '../../components/grid-field-header';
import GridFieldHeaderCell from '../../components/grid-field-header-cell';
import GridFieldRow from '../../components/grid-field-row';
import GridFieldCell from '../../components/grid-field-cell';

class CampaignAdminContainer extends SilverStripeComponent {

    constructor(props) {
        super(props);

        // TODO: This will be an AJAX call and it's response stored in state.
        this.mockData = {
            campaigns: [
                {
                    title: 'SilverStripe 4.0 release',
                    description: 'All the stuff related to the 4.0 announcement',
                    changes: 20
                }
            ]
        };
    }

    render() {
        const columnNames = ['title', 'changes'];

        const headerCells = columnNames.map((columnName, i) => <GridFieldHeaderCell key={i}>{columnName}</GridFieldHeaderCell>);
        const header = <GridFieldHeader>{headerCells}</GridFieldHeader>;

        const rows = this.mockData.campaigns.map((campaign, i) => {
            const cells = columnNames.map((columnName, i) => {
                return <GridFieldCell key={i}>{campaign[columnName]}</GridFieldCell>
            });
            return <GridFieldRow key={i}>{cells}</GridFieldRow>;
        });

        return <GridField header={header} rows={rows} />;
    }

}

export default CampaignAdminContainer;
