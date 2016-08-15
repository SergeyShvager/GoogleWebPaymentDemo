// @flow

import fetch from 'isomorphic-fetch';
import api from '../config/api';
import isEmpty from 'lodash/isEmpty';


export const CREATE_COMPANY_REQUEST = 'CREATE_COMPANY_REQUEST';
export const CREATE_COMPANY_SUCCESS = 'CREATE_COMPANY_SUCCESS';

const company = 'testCompany';

type Company = {
    id: string,
    title: string,
    logo: string
};

type CompanyData = {
    title: string,
    logo: string
};

function createCompanyRequest() {
    return {
        type: CREATE_COMPANY_REQUEST
    };
}

function createCompanySuccess(company: Company) {
    return {
        type: CREATE_COMPANY_SUCCESS,
        company
    };
}

export function createCompany(data: CompanyData, callback: Function) {
    return (dispatch: Function, getState: Function) => {
        const state = getState();
        const { token } = state.user;

        if (!token) {
            return;
        }

        const headers = new Headers({
            'Content-Type': 'application/json',
            'X-Id-Token': token,
            'X-Id-Provider': 'google'
        });

        dispatch(createCompanyRequest());

        return fetch(api.company.create(), {
            headers: headers,
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then(response => {
                return {
                    "id": "testCom",
                    "title": "testCom",
                    "logo": "https://cdn.colorlib.com/wp/wp-content/uploads/sites/2/2014/02/Olympic-logo.png",
                };

                // return response.json();
            })
            .then(response => {
                dispatch(createCompanySuccess(response));

                if (typeof callback == 'function') {
                    callback(response);
                }
            });
    }
}
