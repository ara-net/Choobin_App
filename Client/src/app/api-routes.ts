const GlobalUrl = 'http://localhost:3100/api/'
export const API_ROUTE = {

    AUTH: {
        login: GlobalUrl + 'auth/login/',
        get_token: GlobalUrl + 'auth/get-token'
    },
    INVOICE: {
        GET: GlobalUrl + 'invoice/',
        POST: GlobalUrl + 'invoice/',
        UPDATE_STATUS: GlobalUrl + 'invoice/update-status',
        SAVE_PS: GlobalUrl + 'invoice/save-ps'
    },
    PRODUCT: {
        GET: GlobalUrl + 'product/',
        POST: GlobalUrl + 'product/',
        PUT: GlobalUrl + 'product/'
    },
    CATEGORY: {
        GET: GlobalUrl + 'category',
        POST: GlobalUrl + 'category/',
        PUT: GlobalUrl + 'category/'
    },
    STORE: {
        GET: GlobalUrl + 'store/',
        POST: GlobalUrl + 'store',
        PUT: GlobalUrl + 'store',
        BY: GlobalUrl + 'store/by/',
    }
}
