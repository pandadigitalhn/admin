import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id: 'applications',
        title: 'Applications',
        translate: 'NAV.APPLICATIONS',
        type: 'group',
        icon: 'apps',
        children: [
            {
                id: 'dashboards',
                title: 'Dashboards',
                translate: 'NAV.DASHBOARDS',
                type: 'collapsable',
                icon: 'dashboard',
                children: [
                    {
                        id: 'project',
                        title: 'Project',
                        type: 'item',
                        url: '/apps/dashboards/project'
                    }
                ]
            },
            {
                id: 'calendar',
                title: 'Calendar',
                translate: 'NAV.CALENDAR',
                type: 'item',
                icon: 'today',
                url: '/apps/calendar'
            },
            {
                id: 'contacts',
                title: 'Contacts',
                translate: 'NAV.CONTACTS',
                type: 'item',
                icon: 'account_box',
                url: '/apps/contacts'
            }
        ]
    },
    {
        id: 'pages',
        title: 'Pages',
        type: 'group',
        icon: 'pages',
        children: [
            {
                id: 'authentication',
                title: 'Authentication',
                type: 'collapsable',
                icon: 'lock',
                badge: {
                    title: '10',
                    bg: '#525e8a',
                    fg: '#FFFFFF'
                },
                children: [
                    {
                        id: 'login',
                        title: 'Login',
                        type: 'item',
                        url: '/pages/auth/login'
                    },
                    {
                        id: 'login-v2',
                        title: 'Login v2',
                        type: 'item',
                        url: '/pages/auth/login-2'
                    },
                    {
                        id: 'register',
                        title: 'Register',
                        type: 'item',
                        url: '/pages/auth/register'
                    },
                    {
                        id: 'register-v2',
                        title: 'Register v2',
                        type: 'item',
                        url: '/pages/auth/register-2'
                    },
                    {
                        id: 'forgot-password',
                        title: 'Forgot Password',
                        type: 'item',
                        url: '/pages/auth/forgot-password'
                    },
                    {
                        id: 'forgot-password-v2',
                        title: 'Forgot Password v2',
                        type: 'item',
                        url: '/pages/auth/forgot-password-2'
                    },
                    {
                        id: 'reset-password',
                        title: 'Reset Password',
                        type: 'item',
                        url: '/pages/auth/reset-password'
                    },
                    {
                        id: 'reset-password-v2',
                        title: 'Reset Password v2',
                        type: 'item',
                        url: '/pages/auth/reset-password-2'
                    },
                    {
                        id: 'lock-screen',
                        title: 'Lock Screen',
                        type: 'item',
                        url: '/pages/auth/lock'
                    },
                    {
                        id: 'mail-confirmation',
                        title: 'Mail Confirmation',
                        type: 'item',
                        url: '/pages/auth/mail-confirm'
                    }
                ]
            },
            {
                id: 'invoice',
                title: 'Invoice',
                type: 'collapsable',
                icon: 'receipt',
                children: [
                    {
                        id: 'modern',
                        title: 'Modern',
                        type: 'item',
                        url: '/pages/invoices/modern'
                    },
                    {
                        id: 'compact',
                        title: 'Compact',
                        type: 'item',
                        url: '/pages/invoices/compact'
                    }
                ]
            }
        ]
    }
];
