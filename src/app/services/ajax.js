import reqwest from './reqwest' ;
import {logoutFun} from './system'
import cookie from 'react-cookie';

const compluteExpire = () => {
    let date = new Date();
    date.setTime(date.getTime() + (30 * 60 * 1000));
    return date;
};

const setCookie = function () {
    if (!!cookie.load('token')) {
        cookie.save('token', cookie.load('token'), {
            expires: compluteExpire()
        });
    } else {
        window.location.hash = '/login';
    }
};

export const apiRoot = function (path) {
    return `/${path}`;
    // return `/v2/api-docs/${path}`;
};


export const getHeader = () => {
    let obj = {'Accept': 'application/json'};
    // if (!!cookie.load('token') && !!(cookie.load('token').id)) {
    //     obj['userId'] = cookie.load('token').id;
    // }
    return obj;
};

reqwest.ajaxSetup({
    dataFilter: function (data) {
        if (JSON.parse(data).code === 401) {
            logoutFun()
        }
        return data
    },
    httpError: function (error) {
        if (error.readyState === 4 && error.status === 401) {
            logoutFun()
        }
        return error
    }
});

export const ajaxMethod = (method, path, download) => {
    return reqwest({
        url: apiRoot(path),
        method: method,
        contentType: (!!download) ? 'application/octet-stream' : 'application/json;charset=UTF-8',
        headers: getHeader()
    });
};

export const ajaxGetJson = (path, params) => {
    return reqwest({
        method: 'get',
        contentType: "application/json; charset=utf-8",
        headers: getHeader(),
        url: apiRoot(path),
        data: JSON.stringify(params)
    })
};


export const ajaxDeleteJson = (path, params) => {
    return reqwest({
        method: 'delete',
        contentType: "application/json; charset=utf-8",
        headers: getHeader(),
        url: apiRoot(path),
        data: JSON.stringify(params)
    })
};


export const ajaxPostJson = (path, params) => {
    return reqwest({
        method: "POST",
        contentType: "application/json",
        headers: getHeader(),
        url: apiRoot(path),
        data: JSON.stringify(params)
    })
};

export const ajaxPutJson = (path, params) => {
    return reqwest({
        method: "put",
        contentType: "application/json; charset=utf-8",
        headers: getHeader(),
        url: apiRoot(path),
        data: JSON.stringify(params)
    })
};

export const ajaxPostForm = (path, params) => {
    return reqwest({
        method: "POST",
        headers: getHeader(),
        url: apiRoot(path),
        data: params
    })
};

export const ajaxGetForm = (path, params) => {
    return reqwest({
        method: "get",
        headers: getHeader(),
        url: apiRoot(path),
        data: params
    })
};

export const ajaxUploadImg = (path, file) => {
    return reqwest({
        method: "POST",
        contentType: false,
        processData: false,
        headers: getHeader(),
        url: apiRoot(path),
        data: file
    })
};


export const ajaxLogin = (path, params) => {
    return reqwest({
        method: "POST",
        contentType: "application/json; charset=utf-8",
        url: apiRoot(path),
        type: 'json',
        data: JSON.stringify(params)
    })
};
