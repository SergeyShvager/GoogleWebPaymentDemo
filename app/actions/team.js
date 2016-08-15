// @flow

import fetch from 'isomorphic-fetch';
import api from '../config/api';
import isEmpty from 'lodash/isEmpty';


export const FETCH_TEAMS_REQUEST = 'FETCH_TEAMS_REQUEST';
export const FETCH_TEAMS_SUCCESS = 'FETCH_TEAMS_SUCCESS';
export const CREATE_TEAM_REQUEST = 'CREATE_TEAM_REQUEST';
export const CREATE_TEAM_SUCCESS = 'CREATE_TEAM_SUCCESS';

const company = 'testCompany';

type TeamData = {
    title: string
};

function requestTeams() {
    return {
        type: FETCH_TEAMS_REQUEST
    };
}

function receiveTeams(teams: { counters: Array<Object>, teams: Array<Object> }) {
    return {
        type: FETCH_TEAMS_SUCCESS,
        teams
    }
}

function shouldFetchTeams(teams) {
    return isEmpty(teams.teams);
}

export function fetchTeams() {
    return (dispatch: Function, getState: Function) => {
        const state = getState();
        const { token } = state.user;

        if (!token) {
            return;
        }

        if (!shouldFetchTeams(state.teams)) {
            return;
        }

        const headers = new Headers({
            'Content-Type': 'application/json',
            'X-Id-Token': state.user.token,
            'X-Id-Provider': 'google'
        });

        dispatch(requestTeams());

        return fetch(api.team.get(company), {
            headers: headers,
            method: 'GET'
        })
            .then(response => response.json())
            .then(response => {
                dispatch(receiveTeams(response));
            });
    }
}

function createTeamRequest() {
    return {
        type: CREATE_TEAM_REQUEST
    };
}

function createTeamSuccess() {
    return {
        type: CREATE_TEAM_REQUEST
    };
}

export function createTeam(data: TeamData, callback?: Function) {
    return (dispatch, getState) => {
        const state = getState();
        const { token } = state.user;

        if (!token) {
            return;
        }

        const headers = new Headers({
            'Content-Type': 'application/json',
            'X-Id-Token': state.user.token,
            'X-Id-Provider': 'google'
        });

        dispatch(createTeamRequest());

        return fetch(api.team.create(company), {
            headers: headers,
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(response => {
                dispatch(createTeamSuccess(response));

                if (typeof callback === 'function') {
                    callback(response);
                }
            });

    }
}