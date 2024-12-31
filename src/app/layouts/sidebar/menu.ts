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
                link: '/auth/pass-reset',
                parentId: 39
            },
            {
                id: 40,
                label: 't-password-create',
                link: '/auth/pass-change',
                parentId: 39
            },
            {
                id: 40,
                label: 't-lock-screen',
                link: '/auth/auth-lock-screen',
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
        label: 'MENUITEMS.APPS.LIST.SUPPORTTICKETS',
        icon: 'ph-ticket',
        parentId: 8,
        subItems: [
            {
                id: 44,
                label: 'MENUITEMS.APPS.LIST.LISTVIEW',
                link: '/tickets/list',
                parentId: 43
            },
            {
                id: 45,
                label: 'MENUITEMS.APPS.LIST.OVERVIEW',
                link: '/tickets/overview',
                parentId: 43
            }
        ]
    },
    {
        id: 46,
        label: 'MENUITEMS.APPS.LIST.REALESTATE',
        icon: 'ph-buildings',
        parentId: 8,
        subItems: [
            {
                id: 47,
                label: 'MENUITEMS.APPS.LIST.LISTINGGRID',
                link: '/real-estate/grid',
                parentId: 46
            },
            {
                id: 48,
                label: 'MENUITEMS.APPS.LIST.LISTINGLIST',
                link: '/real-estate/list',
                parentId: 46
            },
            {
                id: 49,
                label: 'MENUITEMS.APPS.LIST.LISTINGMAP',
                link: '/real-estate/map',
                parentId: 46
            },
            {
                id: 50,
                label: 'MENUITEMS.APPS.LIST.PROPERTYOVERVIEW',
                link: '/real-estate/property-overview',
                parentId: 46
            },
            {
                id: 51,
                label: 'MENUITEMS.APPS.LIST.AGENT',
                parentId: 46,
                isCollapsed: true,
                subItems: [
                    {
                        id: 52,
                        label: 'MENUITEMS.APPS.LIST.LISTVIEW',
                        link: '/real-estate/agent/list',
                        parentId: 51
                    },
                    {
                        id: 53,
                        label: 'MENUITEMS.APPS.LIST.GRIDVIEW',
                        link: '/real-estate/agent/grid',
                        parentId: 51
                    },
                    {
                        id: 54,
                        label: 'MENUITEMS.APPS.LIST.OVERVIEW',
                        link: '/real-estate/agent/overview',
                        parentId: 51
                    },
                ]
            },
            {
                id: 55,
                label: 'MENUITEMS.APPS.LIST.AGENCIES',
                parentId: 46,
                isCollapsed: true,
                subItems: [
                    {
                        id: 56,
                        label: 'MENUITEMS.APPS.LIST.LISTVIEW',
                        link: '/real-estate/agencies/list',
                        parentId: 55
                    },
                    {
                        id: 57,
                        label: 'MENUITEMS.APPS.LIST.OVERVIEW',
                        link: '/real-estate/agencies/overview',
                        parentId: 55
                    },
                ]
            },
            {
                id: 58,
                label: 'MENUITEMS.APPS.LIST.ADDPROPERTY',
                link: '/real-estate/add-properties',
                parentId: 46
            },
            {
                id: 59,
                label: 'MENUITEMS.APPS.LIST.EARNINGS',
                link: '/real-estate/earnings',
                parentId: 46
            },
        ]
    },
    {
        id: 61,
        label: 'MENUITEMS.AUTHENTICATION.TEXT',
        icon: 'ph-user-circle',
        subItems: [
            {
                id: 62,
                label: 'MENUITEMS.AUTHENTICATION.LIST.SIGNIN',
                link: '/auth/signin',
                parentId: 61,
            },
            {
                id: 63,
                label: 'MENUITEMS.AUTHENTICATION.LIST.SIGNUP',
                link: '/auth/signup',
                parentId: 61,
            },
            {
                id: 64,
                label: 'MENUITEMS.AUTHENTICATION.LIST.PASSWORDRESET',
                link: '/auth/pass-reset',
                parentId: 61,
            },
            {
                id: 65,
                label: 'MENUITEMS.AUTHENTICATION.LIST.PASSWORDCREATE',
                link: '/auth/pass-change',
                parentId: 61,
            },
            {
                id: 66,
                label: 'MENUITEMS.AUTHENTICATION.LIST.LOCKSCREEN',
                link: '/auth/lockscreen',
                parentId: 61
            },
            {
                id: 67,
                label: 'MENUITEMS.AUTHENTICATION.LIST.LOGOUT',
                link: '/auth/logout',
                parentId: 61
            },
            {
                id: 68,
                label: 'MENUITEMS.AUTHENTICATION.LIST.SUCCESSMESSAGE',
                link: '/auth/success-msg',
                parentId: 61
            },
            {
                id: 69,
                label: 'MENUITEMS.AUTHENTICATION.LIST.TWOSTEPVERIFICATION',
                link: '/auth/twostep',
                parentId: 61
            },
            {
                id: 70,
                label: 'MENUITEMS.AUTHENTICATION.LIST.ERRORS',
                parentId: 61,
                isCollapsed: true,
                subItems: [
                    {
                        id: 71,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.404ERROR',
                        link: '/auth/errors/404',
                        parentId: 70
                    },
                    {
                        id: 72,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.500',
                        link: '/auth/errors/500',
                        parentId: 70
                    },
                    {
                        id: 73,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.503',
                        link: '/auth/errors/503',
                        parentId: 70
                    },
                    {
                        id: 74,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.OFFLINE',
                        link: '/auth/errors/offline',
                        parentId: 70
                    },
                ]
            },
        ]
    },
    {
        id: 75,
        label: 'MENUITEMS.EXTRAPAGES.TEXT',
        icon: 'ph-address-book',
        subItems: [
            {
                id: 76,
                label: 'MENUITEMS.EXTRAPAGES.LIST.STARTER',
                link: '/pages/starter',
                parentId: 75
            },
            {
                id: 77,
                label: 'MENUITEMS.EXTRAPAGES.LIST.PROFILE',
                link: '/pages/profile',
                parentId: 75,
            },
            {
                id: 78,
                label: 'MENUITEMS.EXTRAPAGES.LIST.PROFILESETTINGS',
                link: '/pages/profile-settings',
                parentId: 75,
            },
            {
                id: 79,
                label: 'MENUITEMS.EXTRAPAGES.LIST.CONTACTS',
                link: '/pages/contacts',
                parentId: 75
            },
            {
                id: 80,
                label: 'MENUITEMS.EXTRAPAGES.LIST.TIMELINE',
                link: '/pages/timeline',
                parentId: 75
            },
            {
                id: 81,
                label: 'MENUITEMS.EXTRAPAGES.LIST.FAQS',
                link: '/pages/faqs',
                parentId: 75
            },
            {
                id: 82,
                label: 'MENUITEMS.EXTRAPAGES.LIST.PRICING',
                link: '/pages/pricing',
                parentId: 75
            },
            {
                id: 83,
                label: 'MENUITEMS.EXTRAPAGES.LIST.MAINTENANCE',
                link: '/pages/maintenance',
                parentId: 75
            },
            {
                id: 84,
                label: 'MENUITEMS.EXTRAPAGES.LIST.COMINGSOON',
                link: '/pages/coming-soon',
                parentId: 75
            },
            {
                id: 85,
                label: 'MENUITEMS.EXTRAPAGES.LIST.PRIVACYPOLICY',
                link: '/pages/privacy-policy',
                parentId: 75
            },
            {
                id: 86,
                label: 'MENUITEMS.EXTRAPAGES.LIST.TERMS&CONDITIONS',
                link: '/pages/term-conditions',
                parentId: 75
            }
        ]
    },
    {
        id: 88,
        label: 'MENUITEMS.BOOTSTRAPUI.TEXT',
        icon: "ph-bandaids",
        subItems: [
            {
                id: 89,
                label: 'MENUITEMS.BOOTSTRAPUI.LIST.ALERTS',
                link: '/ui/alerts',
                parentId: 88
            },
            {
                id: 90,
                label: 'MENUITEMS.BOOTSTRAPUI.LIST.BADGES',
                link: '/ui/badges',
                parentId: 88
            },
            {
                id: 91,
                label: 'MENUITEMS.BOOTSTRAPUI.LIST.BUTTONS',
                link: '/ui/button',
                parentId: 88
            },
            {
                id: 92,
                label: 'MENUITEMS.BOOTSTRAPUI.LIST.COLORS',
                link: '/ui/colors',
                parentId: 88
            },
            {
                id: 93,
                label: 'MENUITEMS.BOOTSTRAPUI.LIST.CARDS',
                link: '/ui/cards',
                parentId: 88
            },
            {
                id: 94,
                label: 'MENUITEMS.BOOTSTRAPUI.LIST.CAROUSEL',
                link: '/ui/carousel',
                parentId: 88
            },
            {
                id: 95,
                label: 'MENUITEMS.BOOTSTRAPUI.LIST.DROPDOWNS',
                link: '/ui/dropdown',
                parentId: 88
            },
            {
                id: 96,
                label: 'MENUITEMS.BOOTSTRAPUI.LIST.GRID',
                link: '/ui/grid',
                parentId: 88
            },
            {
                id: 97,
                label: 'MENUITEMS.BOOTSTRAPUI.LIST.IMAGES',
                link: '/ui/images',
                parentId: 88
            },
            {
                id: 98,
                label: 'MENUITEMS.BOOTSTRAPUI.LIST.TABS',
                link: '/ui/tabs',
                parentId: 88
            },
            {
                id: 99,
                label: 'MENUITEMS.BOOTSTRAPUI.LIST.ACCORDION&COLLAPSE',
                link: '/ui/accordion',
                parentId: 88
            },
            {
                id: 100,
                label: 'MENUITEMS.BOOTSTRAPUI.LIST.MODALS',
                link: '/ui/modal',
                parentId: 88
            },
            {
                id: 102,
                label: 'MENUITEMS.BOOTSTRAPUI.LIST.PLACEHOLDERS',
                link: '/ui/placeholder',
                parentId: 88
            },
            {
                id: 103,
                label: 'MENUITEMS.BOOTSTRAPUI.LIST.PROGRESS',
                link: '/ui/progress',
                parentId: 88
            },
            {
                id: 104,
                label: 'MENUITEMS.BOOTSTRAPUI.LIST.NOTIFICATIONS',
                link: '/ui/notification',
                parentId: 88
            },
            {
                id: 105,
                label: 'MENUITEMS.BOOTSTRAPUI.LIST.MEDIAOBJECT',
                link: '/ui/media',
                parentId: 88
            },
            {
                id: 106,
                label: 'MENUITEMS.BOOTSTRAPUI.LIST.EMBEDVIDEO',
                link: '/ui/embed-video',
                parentId: 88
            },
            {
                id: 107,
                label: 'MENUITEMS.BOOTSTRAPUI.LIST.TYPOGRAPHY',
                link: '/ui/typography',
                parentId: 88
            },
            {
                id: 108,
                label: 'MENUITEMS.BOOTSTRAPUI.LIST.LISTS',
                link: '/ui/lists',
                parentId: 88
            },
            {
                id: 109,
                label: 'MENUITEMS.BOOTSTRAPUI.LIST.LINKS',
                link: '/ui/links',
                parentId: 88
            },
            {
                id: 110,
                label: 'MENUITEMS.BOOTSTRAPUI.LIST.GENERAL',
                link: '/ui/general',
                parentId: 88
            },
            {
                id: 111,
                label: 'MENUITEMS.BOOTSTRAPUI.LIST.UTILITIES',
                link: '/ui/utility',
                parentId: 88
            },
        ]
    },
    {
        id: 112,
        label: 'MENUITEMS.ADVANCEUI.TEXT',
        icon: "ph-stack-simple",
        subItems: [
            {
                id: 113,
                label: 'MENUITEMS.ADVANCEUI.LIST.SWEETALERTS',
                link: '/advance-ui/sweetalert',
                parentId: 112
            },

            {
                id: 115,
                label: 'MENUITEMS.ADVANCEUI.LIST.SCROLLBAR',
                link: '/advance-ui/scrollbar',
                parentId: 112
            },
            {
                id: 116,
                label: 'MENUITEMS.ADVANCEUI.LIST.SWIPERSLIDER',
                link: '/advance-ui/swiper',
                parentId: 112
            },
            {
                id: 117,
                label: 'MENUITEMS.ADVANCEUI.LIST.RATTINGS',
                link: '/advance-ui/ratings',
                parentId: 112
            },
            {
                id: 118,
                label: 'MENUITEMS.ADVANCEUI.LIST.HIGHLIGHT',
                link: '/advance-ui/highlight',
                parentId: 112
            },
            {
                id: 119,
                label: 'MENUITEMS.ADVANCEUI.LIST.SCROLLSPY',
                link: '/advance-ui/scrollspy',
                parentId: 112
            }
        ]
    },
    {
        id: 120,
        label: 'MENUITEMS.CUSTOMUI.TEXT',
        badge: 'MENUITEMS.CUSTOMUI.BADGE',
        icon: "ph-wrench",
        subItems: [
            {
                id: 121,
                label: 'MENUITEMS.CUSTOMUI.LIST.RIBBONS',
                link: '/custom-ui/ribbons',
                parentId: 120
            },
            {
                id: 122,
                label: 'MENUITEMS.CUSTOMUI.LIST.PROFILE',
                link: '/custom-ui/profile',
                parentId: 120
            },
            {
                id: 123,
                label: 'MENUITEMS.CUSTOMUI.LIST.COUNTER',
                link: '/custom-ui/counter',
                parentId: 120
            }
        ]
    },
    {
        id: 124,
        label: 'MENUITEMS.WIDGETS.TEXT',
        icon: "ph-paint-brush-broad",
        link: '/apps/widgets'
    },
    {
        id: 125,
        label: 'MENUITEMS.FORMS.TEXT',
        icon: 'ri-file-list-3-line',
        subItems: [
            {
                id: 126,
                label: 'MENUITEMS.FORMS.LIST.BASICELEMENTS',
                link: '/forms/element',
                parentId: 125
            },
            {
                id: 127,
                label: 'MENUITEMS.FORMS.LIST.FORMSELECT',
                link: '/forms/select',
                parentId: 125
            },
            {
                id: 128,
                label: 'MENUITEMS.FORMS.LIST.CHECKBOXS&RADIOS',
                link: '/forms/checkboxs-radios',
                parentId: 125
            },
            {
                id: 129,
                label: 'MENUITEMS.FORMS.LIST.PICKERS',
                link: '/forms/pickers',
                parentId: 125
            },
            {
                id: 130,
                label: 'MENUITEMS.FORMS.LIST.INPUTMASKS',
                link: '/forms/masks',
                parentId: 125
            },
            {
                id: 131,
                label: 'MENUITEMS.FORMS.LIST.ADVANCED',
                link: '/forms/advanced',
                parentId: 125
            },
            {
                id: 132,
                label: 'MENUITEMS.FORMS.LIST.RANGESLIDER',
                link: '/forms/range-sliders',
                parentId: 125
            },
            {
                id: 133,
                label: 'MENUITEMS.FORMS.LIST.VALIDATION',
                link: '/forms/validation',
                parentId: 125
            },
            {
                id: 134,
                label: 'MENUITEMS.FORMS.LIST.WIZARD',
                link: '/forms/wizard',
                parentId: 125
            },
            {
                id: 135,
                label: 'MENUITEMS.FORMS.LIST.EDITORS',
                link: '/forms/editors',
                parentId: 125
            },
            {
                id: 136,
                label: 'MENUITEMS.FORMS.LIST.FILEUPLOADS',
                link: '/forms/file-uploads',
                parentId: 125
            },
            {
                id: 137,
                label: 'MENUITEMS.FORMS.LIST.FORMLAYOUTS',
                link: '/forms/layouts',
                parentId: 125
            }
        ]
    },
    {
        id: 138,
        label: 'MENUITEMS.TABLES.TEXT',
        icon: 'ph-table',
        subItems: [
            {
                id: 139,
                label: 'MENUITEMS.TABLES.LIST.BASICTABLES',
                link: '/tables/basic',
                parentId: 138
            },
            {
                id: 140,
                label: 'MENUITEMS.TABLES.LIST.GRIDJS',
                link: '/tables/gridjs',
                parentId: 138
            },
            {
                id: 141,
                label: 'MENUITEMS.TABLES.LIST.LISTJS',
                link: '/tables/listjs',
                parentId: 138
            }
        ]
    },
    {
        id: 142,
        label: 'MENUITEMS.CHARTS.TEXT',
        icon: 'ph-chart-pie-slice',
        subItems: [
            {
                id: 143,
                label: 'MENUITEMS.CHARTS.LIST.LINE',
                link: '/charts/apex-line',
                parentId: 142
            },
            {
                id: 144,
                label: 'MENUITEMS.CHARTS.LIST.AREA',
                link: '/charts/apex-area',
                parentId: 142
            },
            {
                id: 145,
                label: 'MENUITEMS.CHARTS.LIST.COLUMN',
                link: '/charts/apex-column',
                parentId: 142
            },
            {
                id: 146,
                label: 'MENUITEMS.CHARTS.LIST.BAR',
                link: '/charts/apex-bar',
                parentId: 142
            },
            {
                id: 147,
                label: 'MENUITEMS.CHARTS.LIST.MIXED',
                link: '/charts/apex-mixed',
                parentId: 142
            },
            {
                id: 148,
                label: 'MENUITEMS.CHARTS.LIST.TIMELINE',
                link: '/charts/apex-timeline',
                parentId: 142
            },
            {
                id: 148,
                label: 'MENUITEMS.CHARTS.LIST.RANGEAREA',
                link: '/charts/range-area',
                parentId: 142
            },
            {
                id: 148,
                label: 'MENUITEMS.CHARTS.LIST.FUNNEL',
                link: '/charts/funnel',
                parentId: 142
            },
            {
                id: 149,
                label: 'MENUITEMS.CHARTS.LIST.CANDLSTICK',
                link: '/charts/apex-candlestick',
                parentId: 142
            },
            {
                id: 150,
                label: 'MENUITEMS.CHARTS.LIST.BOXPLOT',
                link: '/charts/apex-boxplot',
                parentId: 142
            },
            {
                id: 151,
                label: 'MENUITEMS.CHARTS.LIST.BUBBLE',
                link: '/charts/apex-bubble',
                parentId: 142
            },
            {
                id: 152,
                label: 'MENUITEMS.CHARTS.LIST.SCATTER',
                link: '/charts/apex-scatter',
                parentId: 142
            },
            {
                id: 153,
                label: 'MENUITEMS.CHARTS.LIST.HEATMAP',
                link: '/charts/apex-heatmap',
                parentId: 142
            },
            {
                id: 154,
                label: 'MENUITEMS.CHARTS.LIST.TREEMAP',
                link: '/charts/apex-treemap',
                parentId: 142
            },
            {
                id: 155,
                label: 'MENUITEMS.CHARTS.LIST.PIE',
                link: '/charts/apex-pie',
                parentId: 142
            },
            {
                id: 156,
                label: 'MENUITEMS.CHARTS.LIST.RADIALBAR',
                link: '/charts/apex-radialbar',
                parentId: 142
            },
            {
                id: 157,
                label: 'MENUITEMS.CHARTS.LIST.RADAR',
                link: '/charts/apex-radar',
                parentId: 142
            },
            {
                id: 158,
                label: 'MENUITEMS.CHARTS.LIST.POLARAREA',
                link: '/charts/apex-polar',
                parentId: 142
            },
            {
                id: 159,
                label: 'MENUITEMS.CHARTS.LIST.Slope',
                link: '/charts/apex-slope',
                isNew: true,
                parentId: 143
            },
        ]
    },
    {
        id: 159,
        label: 'MENUITEMS.ICONS.TEXT',
        icon: 'ph-traffic-cone',
        subItems: [
            {
                id: 160,
                label: 'MENUITEMS.ICONS.LIST.REMIX',
                link: '/icons/remix',
                parentId: 159
            },
            {
                id: 161,
                label: 'MENUITEMS.ICONS.LIST.BOXICONS',
                link: '/icons/boxicons',
                parentId: 159
            },
            {
                id: 162,
                label: 'MENUITEMS.ICONS.LIST.MATERIALDESIGN',
                link: '/icons/materialdesign',
                parentId: 159
            },
            {
                id: 163,
                label: 'MENUITEMS.ICONS.LIST.BOOTSTRAP',
                link: '/icons/bootstrap',
                parentId: 159
            },
            {
                id: 164,
                label: 'MENUITEMS.ICONS.LIST.PHOSPHOR',
                link: '/icons/phosphor',
                parentId: 159
            }
        ]
    },
    {
        id: 165,
        label: 'MENUITEMS.MAPS.TEXT',
        icon: 'ph-map-trifold',
        subItems: [
            {
                id: 166,
                label: 'MENUITEMS.MAPS.LIST.GOOGLE',
                link: '/maps/google',
                parentId: 165
            },
            {
                id: 167,
                label: 'MENUITEMS.MAPS.LIST.VECTOR',
                link: '/maps/vector',
                parentId: 165
            },
            {
                id: 167,
                label: 'MENUITEMS.MAPS.LIST.LEAFLET',
                link: '/maps/leaflet',
                parentId: 165
            }
        ]
    },
    {
        id: 168,
        label: 'MENUITEMS.MULTILEVEL.TEXT',
        icon: 'bi bi-share',
        subItems: [
            {
                id: 169,
                label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.1',
                parentId: 168
            },
            {
                id: 170,
                label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.2',
                parentId: 168,
                subItems: [
                    {
                        id: 171,
                        label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL2.1',
                        parentId: 170
                    },
                    {
                        id: 172,
                        label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL2.2',
                        parentId: 170,
                        subItems: [
                            {
                                id: 173,
                                label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL2.LEVEL3.1',
                                parentId: 172
                            },
                            {
                                id: 174,
                                label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL2.LEVEL3.2',
                                parentId: 172,

                            }
                        ]
                    }
                ]
            }
        ]
    }
]