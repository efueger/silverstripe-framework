import $ from 'jQuery';
import React from 'react';
import ReactDOM from 'react-dom';
import CampaignAdmin from '../sections/campaign-admin/controller';

$.entwine('ss', function ($) {

    $('.cms-content.CampaignAdmin').entwine({
        onadd: function () {
            ReactDOM.render(<CampaignAdmin />, this[0]);
        },

        onremove: function () {
            ReactDOM.unmountComponentAtNode(this[0]);
        }
    });

});
