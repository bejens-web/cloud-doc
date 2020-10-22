module.exports = {
    path: 'personalCenter',
    breadcrumbName: '个人中心',
    indexRoute: {
        getComponent(nextState, cb) {
            require.ensure([], (require) => {
                cb(null, require('@/scenes/personalCenter').default)
            }, 'list')
        },
    },
};
