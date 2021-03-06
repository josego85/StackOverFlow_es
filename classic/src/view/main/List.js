/**
 * This view is an example list of people.
 */
Ext.define('StackOverFlow_es.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'StackOverFlow_es.store.Usuario'
    ],

    title: 'Usuarios GitHub',

    store: {
        type: 'usuario'
    },

    columns: [
        {
            xtype: 'rownumberer' // this is a column type
        },{
            text: 'Usuario',
            dataIndex: 'display_name',
            align: 'left',
            width: 200,
            renderer: function(value, p, record){
                return record.get('display_name') + ' (' + record.get('user_id') + ')';
            }
        },{
            text: 'Reputaci&oacute;n',
            dataIndex: 'reputation',
            align: 'left'
        },{
            text: 'Ubicaci&oacute;n',
            dataIndex: 'location',
            align: 'left',
            flex: 3
        },{
            text: 'Fecha creaci&oacute;n',
            dataIndex: 'creation_date',
            align: 'left',
            flex: 1,
            renderer: Ext.util.Format.dateRenderer('d/m/Y')
        },{
            text: 'Fecha &uacute;ltimo acceso',
            dataIndex: 'last_access_date',
            align: 'left',
            flex: 1,
            renderer: Ext.util.Format.dateRenderer('d/m/Y')
        },{
            text: 'Sitio web',
            dataIndex: 'website_url',
            align: 'left',
            flex: 2,
            renderer: function(value) {
                return value.replace(/(https?:\/\/\S+)/g, '<a href="$1" target="_blank">$1</a>');
            }
        }
    ],

    dockedItems: [{
        xtype: 'pagingtoolbar',
        afterPageText: 'de {0}',
        beforePageText: 'P\u00e1gina',
        displayInfo: true,
        displayMsg: 'Mostrando {0} - {1} de {2}',
        emptyMsg: 'Sin datos para mostrar',
        firstText: 'Primera P\u00e1gina',
        lastText: '\u00daltima P\u00e1gina',
        nextText: 'Siguiente P\u00e1gina',
        prevText: 'P\u00e1gina Previa',
        refreshText: 'Actualizar',
        dock: 'bottom'
    }],

    listeners: {
        //select: 'onItemSelected'
    }
});
