Ext.define('MVC.view.ProgramTree', {
    extend: 'Ext.tree.Panel',
    emptyText: 'Choose a program',
    alias: 'widget.programtree',
    height: 250,
    width: 400,
    title: 'Chart Filters',
    rootVisible: false,
    useArrows: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            store: {
                root: {
                    expanded: true,
                    children: [
                        { text: "Mexico", leaf: true,checked:true },
                        { text: "Alaska", leaf: true,checked:true },
                        { text: "California", leaf: true,checked:true }
                    ]
                }
            }
        });

        me.callParent(arguments);
    }

});