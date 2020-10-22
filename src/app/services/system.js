import cookie from 'react-cookie';
export const logoutFun = ()=> {
    cookie.remove('token');
    location.hash = '/login';
};
