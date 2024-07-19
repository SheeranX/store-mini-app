import req from '@/utils/request'

export const getCatalogList = () => {
    return req('/miniSubCatalog/list/catalog', { method: 'get' })
}

export const getSubCatalogList = (id) => {
    return req(`/miniSubCatalog/findSubCatalogById/${id}`, { method: 'get' })
}

export const findList = (subCatalogId) => {
    return req('/miniProduct/findListBySubCatalogId', { method: 'get', data: { subCatalogId } })
}
