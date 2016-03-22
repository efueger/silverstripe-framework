import $ from 'jQuery';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reducerRegister from 'reducer-register';

import * as configActions from '../state/config/actions';
import ConfigReducer from '../state/config/reducer';

var globalConfig = {
    lang: {},
    sections: {
        CampaignAdmin: {
            component: 'CustomContent',
            route: 'admin/campaigns',
            data: {
                forms: {
                    editForm: {
                        schemaUrl: 'admin/campaigns/schema/EditForm'
                    },
                    searchForm: {
                        schemaUrl: 'admin/campaigns/schema/SearchForm'
                    }
                }
            }
        }
    }
};

function appBoot() {
    reducerRegister.add('config', ConfigReducer);

    const initialState = {};
    const rootReducer = combineReducers(reducerRegister.getAll());
    const createStoreWithMiddleware = applyMiddleware(thunkMiddleware, createLogger())(createStore);

    // TODO: The store needs to be passed into route callbacks on the route context.
    window.store = createStoreWithMiddleware(rootReducer, initialState);

    // Set the initial config state.
    configActions.setConfig(globalConfig)(window.store.dispatch);
}

// TODO: This should be using `window.onload` but isn't because Entwine hooks are being used to set up the <Provider>.
// `window.onload` happens AFTER these Entwine hooks which means the store is undefined when the <Provider> is constructed.
$('body').entwine({ onadd: function () { appBoot(); } });
