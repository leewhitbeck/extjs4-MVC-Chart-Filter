Ext.define('MVC.store.LocalStore', {
    extend: 'Ext.data.ArrayStore',
    model: 'MVC.model.Data',
    //mockdata for testing
    data: [
        ['Alaska',  'active', 3.2],
        ['California', 'active', 0.4  ],
        ['Mexico',    'inactive', 5.9  ],
        ['California',  'inactive', 8.4 ],
        ['Mexico',  'inactive', 7.7],
        ['Mexico',   'inactive', 8.4],
        ['California', 'active', 5.6],
        ['Alaska',  'active', 8.1],
        ['California', 'active', 5.4],
        ['Alaska', 'inactive', 4.6],
        ['Mexico', 'inactive',  3.6],
        ['Alaska',  'inactive', 6.5],
        ['Alaska',  'inactive', 5.4],
        ['Mexico',  'active', 6.6],
        ['Mexico',  'active', 7.8],
        ['California', 'active', 4.5],
        ['Alaska',  'active', 6.6],
        ['Mexico',  'active', 7.4],
        ['Alaska', 'active', 7.7],
        ['California', 'active', 5.6]
    ]
});