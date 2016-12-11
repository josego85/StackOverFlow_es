Ext.define('StackOverFlow_es.store.Usuario', {
    extend: 'Ext.data.Store',

    alias: 'store.usuario',

    fields: [{
        name: 'user_id'
    },{
        name: 'display_name'
    },{
        name: 'reputation'
    },{
        name: 'location'
    },{
        name: 'creation_date',
        type: 'date',
        dateFormat: 'timestamp'
    },{
        name: 'last_access_date',
        type: 'date',
        dateFormat: 'timestamp'
    },{
        name: 'website_url',
        type: 'string'
    }],

    pageSize: 100,

    autoLoad: true,

    proxy: {
        type: 'ajax',
        url: 'https://api.stackexchange.com/2.2/users',
        method: 'GET',
        cors: true,
        useDefaultXhrHeader : false,
        extraParams: {
            'order': 'desc',
    	    'sort': 'reputation',
            'pagesize': 100,
            'site': 'es.stackoverflow'
        },
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'quota_max'
        }
    }
});
