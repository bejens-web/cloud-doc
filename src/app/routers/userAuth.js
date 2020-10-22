import cookie from 'react-cookie';

/*用户访问权限拦截器*/
function GetQueryString(name) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    let r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}

export default function userAuth(nextState, replace, next) {
    if (GetQueryString('token')) {
        cookie.save('token', GetQueryString('token'));
    }
    const data = cookie.load('token');
    if (!!data) {
        if (!!(data.name) && !!(data.id)) {
            next()
        } else {
            location.hash = '/improveInfo';
        }
    } else {
        location.hash = '/login';
    }
}
