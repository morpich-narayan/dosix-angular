import { MenuItem } from "./menu.model";

export const MENU: MenuItem[] = [
    {
        id: 2,
        label: 't-hospital',
        icon: 'bx bx-buildings',
        subItems: [
            {
                id: 3,
                label: 't-dashboard',
                link: '/pages/hospital/hospital-dashboard',
                parentId: 2
            },
            {
                id: 4,
                label: 't-appointments',
                link: '/pages/hospital/doctor-appointments',
                parentId: 2
            },
            {
                id: 5,
                label: 't-staff-list',
                link: '/pages/hospital/doctor-staff-list',
                parentId: 2
            },
            {
                id: 6,
                label: 't-doctors',
                link: '/pages/hospital/doctor-list',
                parentId: 2
            },
            {
                id: 7,
                label: 't-patients',
                link: '/pages/hospital/doctor-patients',
                parentId: 2
            },
            {
                id: 7,
                label: 't-department',
                link: '/pages/hospital/doctor-department',
                parentId: 2
            }
        ]
    },
    {
        id: 2,
        label: 't-ecommerce',
        icon: 'bx bx-cart-alt',
        subItems: [
            {
                id: 3,
                label: 't-dashboard',
                link: '/pages/ecommerce/dashboard-ecommerce',
                parentId: 2
            },
            {
                id: 4,
                label: 't-products',
                link: '/pages/ecommerce/apps-ecommerce-products',
                parentId: 2
            },
            {
                id: 5,
                label: 't-add-product',
                link: '/pages/ecommerce/apps-ecommerce-add-product',
                parentId: 2
            },
            {
                id: 6,
                label: 't-shopping-cart',
                link: '/pages/ecommerce/apps-ecommerce-cart',
                parentId: 2
            },
            {
                id: 7,
                label: 't-checkout',
                link: '/pages/ecommerce/apps-ecommerce-checkout',
                parentId: 2
            },
            {
                id: 7,
                label: 't-orders',
                link: '/pages/ecommerce/apps-ecommerce-orders',
                parentId: 2
            },
            {
                id: 7,
                label: 't-customers',
                link: '/pages/ecommerce/apps-ecommerce-customers',
                parentId: 2
            }
        ]
    },
    {
        id: 9,
        label: 't-calendar',
        icon: 'bx bx-calendar',
        link: '/pages/apps-calendar',
        parentId: 8
    },
    {
        id: 10,
        label: 't-chat',
        icon: 'bx bx-chat',
        link: '/pages/apps-chat',
        parentId: 8
    },
    {
        id: 11,
        label: 't-email',
        icon: 'bx bx-envelope',
        link: '/pages/apps-email',
        parentId: 8,
    },
    {
        id: 12,
        label: 't-invoices',
        icon: 'bx bx-file',
        parentId: 8,
        subItems: [
            {
                id: 13,
                label: 't-list-view',
                link: '/pages/invoice/apps-invoices-list',
                parentId: 12
            },
            {
                id: 13,
                label: 't-overview',
                link: '/pages/invoice/apps-invoices-overview',
                parentId: 12
            },
            {
                id: 14,
                label: 't-create-invoice',
                link: '/pages/invoice/apps-invoices-create',
                parentId: 12
            }
        ]
    },
    {
        id: 39,
        label: 't-authentication',
        icon: 'bx bx-user-circle',
        parentId: 8,
        subItems: [
            {
                id: 40,
                label: 't-signin',
                link: '/auth/auth-signin',
                parentId: 39
            },
            {
                id: 40,
                label: 't-signup',
                link: '/auth/auth-signup',
                parentId: 39
            },
            {
                id: 40,
                label: 't-password-reset',
                link: '/auth/auth-pass-reset',
                parentId: 39
            },
            {
                id: 40,
                label: 't-password-create',
                link: '/auth/auth-pass-change',
                parentId: 39
            },
            {
                id: 40,
                label: 't-lock-screen',
                link: '/auth/auth-lockscreen',
                parentId: 39
            },
            {
                id: 40,
                label: 't-logout',
                link: '/auth/auth-logout',
                parentId: 39
            },
            {
                id: 40,
                label: 't-success-message',
                link: '/auth/auth-success-msg',
                parentId: 39
            },
            {
                id: 40,
                label: 't-two-step-verification',
                link: '/auth/auth-twostep',
                parentId: 39
            },
            {
                id: 40,
                label: 't-two-step-verification',
                link: '/auth/auth-signin',
                parentId: 39
            },
            {
                id: 40,
                label: 't-errors',
                parentId: 39,
                subItems: [
                    {
                        id: 40,
                        label: 't-404-error',
                        link: '/auth/auth-404',
                        parentId: 39
                    },
                    {
                        id: 40,
                        label: 't-500',
                        link: '/auth/auth-500',
                        parentId: 39
                    },
                    {
                        id: 40,
                        label: 't-503',
                        link: '/auth/auth-503',
                        parentId: 39
                    },
                    {
                        id: 40,
                        label: 't-offline-page',
                        link: '/auth/auth-offline',
                        parentId: 39
                    },
                ]
            },
        ]
    },
    {
        id: 39,
        label: 't-pages',
        icon: 'bx bxs-contact',
        parentId: 8,
        subItems: [
            {
                id: 40,
                label: 't-starter',
                link: '/pages/pages-starter',
                parentId: 39
            },
            {
                id: 40,
                label: 't-profile',
                link: '/pages/pages-profile',
                parentId: 39
            },
            {
                id: 40,
                label: 't-profile-setting',
                link: '/pages/pages-profile-settings',
                parentId: 39
            },
            {
                id: 40,
                label: 't-timeline',
                link: '/pages/pages-timeline',
                parentId: 39
            },
            {
                id: 40,
                label: 't-faqs',
                link: '/pages/pages-faqs',
                parentId: 39
            },
            {
                id: 40,
                label: 't-pricing',
                link: '/pages/pages-pricing',
                parentId: 39
            },
            {
                id: 40,
                label: 't-maintenance',
                link: '/pages/pages-maintenance',
                parentId: 39
            },
            {
                id: 40,
                label: 't-coming-soon',
                link: '/pages/pages-coming-soon',
                parentId: 39
            },
            {
                id: 40,
                label: 't-coming-soon',
                link: '/pages/pages-privacy-policy',
                parentId: 39
            },
            {
                id: 40,
                label: 't-term-conditions',
                link: '/pages/pages-term-conditions',
                parentId: 39
            },
        ]
    },
    {
        id: 43,
        label: 't-bootstrap-ui',
        icon: 'bx bx-cube',
        parentId: 8,
        subItems: [
            {
                id: 44,
                label: 't-alerts',
                link: '/pages/ui-alerts',
                parentId: 43
            },
            {
                id: 44,
                label: 't-badges',
                link: '/pages/ui-badges',
                parentId: 43
            },
            {
                id: 44,
                label: 't-buttons',
                link: '/pages/ui-buttons',
                parentId: 43
            },
            {
                id: 44,
                label: 't-colors',
                link: '/pages/ui-colors',
                parentId: 43
            },
            {
                id: 44,
                label: 't-carousel',
                link: '/pages/ui-carousel',
                parentId: 43
            },
            {
                id: 44,
                label: 't-cards',
                link: '/pages/ui-cards',
                parentId: 43
            },
            {
                id: 44,
                label: 't-images',
                link: '/pages/ui-images',
                parentId: 43
            },
            {
                id: 44,
                label: 't-tabs',
                link: '/pages/ui-tabs',
                parentId: 43
            },
            {
                id: 44,
                label: 't-dropdowns',
                link: '/pages/ui-dropdowns',
                parentId: 43
            },
            {
                id: 44,
                label: 't-accordions',
                link: '/pages/ui-accordions',
                parentId: 43
            },
            {
                id: 44,
                label: 't-modals',
                link: '/pages/ui-modals',
                parentId: 43
            },
            {
                id: 44,
                label: 't-offcanvas',
                link: '/pages/ui-offcanvas',
                parentId: 43
            },
            {
                id: 44,
                label: 't-placeholders',
                link: '/pages/ui-placeholders',
                parentId: 43
            },
            {
                id: 44,
                label: 't-progress',
                link: '/pages/ui-progress',
                parentId: 43
            },
            {
                id: 44,
                label: 't-notifications',
                link: '/pages/ui-notifications',
                parentId: 43
            },
            {
                id: 44,
                label: 't-media-object',
                link: '/pages/ui-media',
                parentId: 43
            },
            {
                id: 44,
                label: 't-embed-video',
                link: '/pages/ui-embed-video',
                parentId: 43
            },
            {
                id: 44,
                label: 't-typography',
                link: '/pages/ui-typography',
                parentId: 43
            },
            {
                id: 44,
                label: 't-lists',
                link: '/pages/ui-lists',
                parentId: 43
            },
            {
                id: 44,
                label: 't-general',
                link: '/pages/ui-general',
                parentId: 43
            },
            {
                id: 44,
                label: 't-utilities',
                link: '/pages/ui-utilities',
                parentId: 43
            },
        ]
    },
    {
        id: 46,
        label: 't-advance-ui',
        icon: 'bx bx-layer',
        parentId: 8,
        subItems: [
            {
                id: 47,
                label: 't-sweet-alerts',
                link: '/pages/sweetalert',
                parentId: 46
            },
            {
                id: 47,
                label: 't-scrollbar',
                link: '/pages/scrollbar',
                parentId: 46
            },
            {
                id: 47,
                label: 't-swiper-slider',
                link: '/pages/swiper',
                parentId: 46
            },
            {
                id: 47,
                label: 't-ratings',
                link: '/pages/ratings',
                parentId: 46
            },
            {
                id: 47,
                label: 't-scrollSpy',
                link: '/pages/scrollspy',
                parentId: 46
            },
            {
                id: 47,
                label: 't-highlight',
                link: '/pages/highlight',
                parentId: 46
            }
        ]
    },
    {
        id: 124,
        label: 't-widgets',
        icon: "bx bx-pen",
        link: '/pages/widgets'
    },
    {
        id: 138,
        label: 't-forms',
        icon: 'bx bx-copy-alt',
        subItems: [
            {
                id: 139,
                label: 't-basic-elements',
                link: '/pages/forms-elements',
                parentId: 138
            },
            {
                id: 139,
                label: 't-form-select',
                link: '/pages/forms-select',
                parentId: 138
            },
            {
                id: 139,
                label: 't-checkboxes-radios',
                link: '/pages/forms-checkboxs-radios',
                parentId: 138
            },
            {
                id: 139,
                label: 't-input-masks',
                link: '/pages/forms-masks',
                parentId: 138
            },
            {
                id: 139,
                label: 't-advanced',
                link: '/pages/forms-advanced',
                parentId: 138
            },
            {
                id: 139,
                label: 't-range-slider',
                link: '/pages/forms-range-sliders',
                parentId: 138
            },
            {
                id: 139,
                label: 't-validation',
                link: '/pages/forms-validation',
                parentId: 138
            },
            {
                id: 139,
                label: 't-wizard',
                link: '/pages/forms-wizard',
                parentId: 138
            },
            {
                id: 139,
                label: 't-file-uploads',
                link: '/pages/forms-file-uploads',
                parentId: 138
            },
            {
                id: 139,
                label: 't-layouts',
                link: '/pages/forms-layouts',
                parentId: 138
            }
        ]
    },
    {
        id: 142,
        label: 't-tables',
        icon: 'bx bx-table',
        subItems: [
            {
                id: 143,
                label: 't-basic-tables',
                link: '/pages/tables-basic',
                parentId: 142
            },
            {
                id: 143,
                label: 't-grid-js',
                link: '/pages/tables-gridjs',
                parentId: 142
            }
        ]
    },
    {
        id: 159,
        label: 't-apexcharts',
        icon: 'bx bx-pie-chart-alt-2',
        subItems: [
            {
                id: 160,
                label: 't-line',
                link: '/pages/charts-apex-line',
                parentId: 159
            },
            {
                id: 160,
                label: 't-area',
                link: '/pages/charts-apex-area',
                parentId: 159
            },
            {
                id: 160,
                label: 't-column',
                link: '/pages/charts-apex-column',
                parentId: 159
            },
            {
                id: 160,
                label: 't-bar',
                link: '/pages/charts-apex-bar',
                parentId: 159
            },
            {
                id: 160,
                label: 't-mixed',
                link: '/pages/charts-apex-mixed',
                parentId: 159
            },
            {
                id: 160,
                label: 't-timeline',
                link: '/pages/charts-apex-timeline',
                parentId: 159
            },
            {
                id: 160,
                label: 't-candlstick',
                link: '/pages/charts-apex-candlestick',
                parentId: 159
            },
            {
                id: 160,
                label: 't-boxplot',
                link: '/pages/charts-apex-boxplot',
                parentId: 159
            },
            {
                id: 160,
                label: 't-bubble',
                link: '/pages/charts-apex-bubble',
                parentId: 159
            },
            {
                id: 160,
                label: 't-scatter',
                link: '/pages/charts-apex-scatter',
                parentId: 159
            },
            {
                id: 160,
                label: 't-heatmap',
                link: '/pages/charts-apex-heatmap',
                parentId: 159
            },
            {
                id: 160,
                label: 't-treemap',
                link: '/pages/charts-apex-treemap',
                parentId: 159
            },
            {
                id: 160,
                label: 't-pie',
                link: '/pages/charts-apex-pie',
                parentId: 159
            },
            {
                id: 160,
                label: 't-radialbar',
                link: '/pages/charts-apex-radialbar',
                parentId: 159
            },
            {
                id: 160,
                label: 't-radar',
                link: '/pages/charts-apex-radar',
                parentId: 159
            },
            {
                id: 160,
                label: 't-radar',
                link: '/pages/charts-apex-polar',
                parentId: 159
            }
        ]
    },
    {
        id: 165,
        label: 't-icons',
        icon: 'bx bx-traffic-cone',
        subItems: [
            {
                id: 166,
                label: 't-remix',
                link: '/pages/icons-remix',
                parentId: 165
            },
            {
                id: 166,
                label: 't-boxicons',
                link: '/pages/icons-boxicons',
                parentId: 165
            },
            {
                id: 166,
                label: 't-materialdesign',
                link: '/pages/icons-materialdesign',
                parentId: 165
            },
            {
                id: 166,
                label: 't-bootstrap',
                link: '/pages/icons-bootstrap',
                parentId: 165
            }
        ]
    },
    {
        id: 165,
        label: 't-maps',
        icon: 'bx bx-map-alt',
        subItems: [
            {
                id: 166,
                label: 't-google',
                link: '/pages/maps-google',
                parentId: 165
            },
            {
                id: 166,
                label: 't-leaflet',
                link: '/pages/maps-leaflet',
                parentId: 165
            },
        ]
    },
    {
        id: 168,
        label: 't-multi-level',
        icon: 'bx bx-share-alt',
        subItems: [
            {
                id: 169,
                label: 't-level-1.1',
                parentId: 168
            },
            {
                id: 170,
                label: 't-level-1.2',
                parentId: 168,
                subItems: [
                    {
                        id: 171,
                        label: 't-level-2.1',
                        parentId: 170
                    },
                    {
                        id: 172,
                        label: 't-level-2.2',
                        parentId: 170,
                        subItems: [
                            {
                                id: 173,
                                label: 't-level-3.1',
                                parentId: 172
                            },
                            {
                                id: 174,
                                label: 't-level-3.2',
                                parentId: 172,

                            }
                        ]
                    }
                ]
            }
        ]
    }
]