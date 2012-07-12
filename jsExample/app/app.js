Ext.Loader.setConfig({enabled:true});


Ext.application({
    name: 'MVC',
    controllers:['MVC.controller.Main'],
    stores:['MVC.store.LocalStore'],
    launch:function() {
      Ext.create('MVC.Viewport');
    }
});