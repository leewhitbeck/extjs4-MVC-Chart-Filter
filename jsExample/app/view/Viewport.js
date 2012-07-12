Ext.define('MVC.Viewport', {
    extend: 'Ext.container.Viewport',
    layout: 'fit',
    renderTo:Ext.getBody(),
    requires:['MVC.view.Pie','MVC.view.ProgramTree'],

    initComponent: function() {
        this.items = {
            dockedItems: [{
                dock: 'top',
                xtype: 'toolbar',
                height: 20,
                items: [  {
                    xtype: 'component',
                    html: 'Filtering Charts Example Using Tree'
                }]
            }],
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [{
                width: 150,
                xtype: 'panel',
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
                items: [{
                    xtype: 'programtree',
                    flex: 1
                }]
            }, {
                xtype: 'container',
                flex: 1,
                border: false,
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
                items: [{
                    xtype: 'pie'
                }]
            }]
        };

        this.callParent();
    }
});

