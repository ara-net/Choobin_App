import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [

    {
        path: '', title: 'محصولات', icon: 'ft-layout', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
            { path: '/products/necklace', title: 'گردنبند', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/products/bracelet', title: 'دستبند', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/products/ring', title: 'انگشتر', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/products/set', title: 'ست', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/products/clock', title: 'ساعت', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/products/serving-board', title: 'تخته سرو', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/products/decor', title: 'دکوری', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },

        ]
    },
    { path: '/categories', title: 'دسته بندی', icon: 'ft-tag', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: '/store', title: 'انبار', icon: 'ft-shopping-cart', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    {

        path: '', title: 'سفارشات', icon: 'ft-clipboard', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
            { path: '/order/new', title: 'ثبت سفارش', icon: 'ft-edit', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/order/list', title: 'لیست سفارشات', icon: 'ft-list', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
        ]
    },
    // {
    //     path: '', title: 'حسابداری', icon: 'ft-align-left', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false,
    //     submenu: [
    //         {
    //             path: '', title: 'صورتحساب ها', icon: '', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
    //                 { path: '/invoices/incoming', title: 'وارده', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    //                 { path: '/invoices/issued', title: 'صادره', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
    //             ]
    //         }
    //     ]
    // }
];
