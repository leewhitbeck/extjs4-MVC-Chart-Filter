Ext.define('MVC.model.Data', {
      extend: 'Ext.data.Model',
      fields: [{
          name: 'place',
          type: 'string'
      }, {
          name: 'status',
          type: 'string'
      }, {
          name: 'mag',
          type: 'int'
      }]
  });