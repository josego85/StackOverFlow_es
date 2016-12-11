/**
 * La vista para mostrar los usuarios de StackOverFlow_es.
 */
Ext.define('StackOverFlow_es.view.main.List', {
    extend: 'Ext.grid.Grid',
    xtype: 'mainlist',

    requires: [
        'StackOverFlow_es.store.Usuario',
        'Ext.grid.plugin.PagingToolbar'
    ],

    title: 'Usuarios GitHub',

    store: {
        type: 'usuario'
    },

    plugins: [{
        type: 'gridpagingtoolbar'
    }],

    columns: [
        {
            xtype: 'rownumberer' // this is a column type
        },{
            text: 'Usuario',
            dataIndex: 'display_name',
            align: 'left',
            width: 200,
            cell: {
	    		xtype: 'textcell',
	    		encodeHtml: false
	    	},
            renderer: function(value, p, record){
                return p.get('display_name') + ' (' + p.get('user_id') + ')';
            }
        },{
            text: 'Reputaci&oacute;n',
            dataIndex: 'reputation',
            align: 'left',
            width: 150
        },{
            text: 'Ubicaci&oacute;n',
            dataIndex: 'location',
            align: 'left',
            width: 250,
            cell: {
	    		xtype: 'textcell',
	    		encodeHtml: false
	    	}
        }
        ,{
            text: 'Fecha creaci&oacute;n',
            dataIndex: 'creation_date',
            align: 'left',
            width: 150,
            renderer: Ext.util.Format.dateRenderer('d/m/Y')
        },{
            text: 'Fecha &uacute;ltimo acceso',
            dataIndex: 'last_access_date',
            align: 'left',
            width: 200,
            renderer: Ext.util.Format.dateRenderer('d/m/Y')
        },{
            text: 'Sitio web',
            dataIndex: 'website_url',
            align: 'left',
            width: 300,
            cell: {
	    		encodeHtml: false
	    	},
            renderer: function(value) {
                return value.replace(/(https?:\/\/\S+)/g, '<a href="$1" target="_blank">$1</a>');
            }
        }
    ],

    listeners: {
        //select: 'onItemSelected'
    }
});
