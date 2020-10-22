import userAuth from './userAuth'

export default [{
    path: '/',
    breadcrumbName: '首页',
    indexRoute: {
        getComponent(nextState, cb) {
            require.ensure([], (require) => {
                cb(null, require('@/scenes/home').default)
            }, 'HomePage')
        },
    },
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('@/components/menu').default)
        }, 'MenuBox')
    },
    childRoutes: [
        //个人中心
        require('./PersonalCenter'),
    ],
    // onEnter: userAuth
},
    //隐私协议
    {
        path: '/privacy',
        getComponent(nextState, cb) {
            require.ensure([], (require) => {
                cb(null, require('@/scenes/privacy').Privacy)
            }, 'privacy')
        },
    },
]
