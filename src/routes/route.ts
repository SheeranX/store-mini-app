const tabbar = [{
    name: 'home',
    path: 'pages/index/index'
}, {
    name: 'catalog',
    path: 'pages/catalog/index'
}, {
    name: 'cart',
    path: 'pages/cart/index'
}, {
    name: 'user-center',
    path: 'pages/usercenter/index'
}]
const subPagesRoute = [{
    name: 'product-details',
    path: 'subpages/product-details/index'
}]

const getAllRoute = () => {
    const _tabbar = tabbar.map(item => ({ ...item, isTab: true }))
    return [..._tabbar, ...subPagesRoute]
}

const getRoutes = () => {
    const _routes = getAllRoute()
    const names = _routes.map(i => i.name)
    const paths = _routes.map(i => i.path)
    const _nameSet = [...new Set(names)]
    const _pathSet = [...new Set(paths)]
    if (paths.length > _pathSet.length || names.length > _nameSet.length) {
        throw new Error('路由重复')
    }
    return paths
}

module.exports = {
    tabbar,
    subPagesRoute,
    getAllRoute,
    getRoutes
}
