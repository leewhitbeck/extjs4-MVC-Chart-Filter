Ext.define('MVC.controller.Main', {
    extend: 'Ext.app.Controller',
    views: ['MVC.view.ProgramTree'],

    refs: [{
        ref: 'programtree',
        selector: 'programtree'
    }],
    init: function() {
        this.control({
            
            'programtree': {
                checkchange: this.onTreeCheckChange
            }
        });

        //todo: remove hardcoded values and pull from the tree view
        this.filters=['Mexico','Alaska','California'];
    },
    onTreeCheckChange: function(view,record) {
        var items =this.filters;
        var filteredItems = [];

        if(!view.data.checked) {
            Ext.iterate(items, function(key, value) {
                if(key !== view.data.text){
                    filteredItems.push(key);
                }
            });
            this.filters = filteredItems;
        }
        else{

            this.filters.push(view.data.text);

        }
        if(this.filters.length > 0){
            this.loadStoreWithfilters(view.data.text);
        }


    },

    loadStoreWithfilters:function(val) {
        var filters = this.filters;

        var mystore = this.application.getMVCStoreLocalStoreStore();

        if(mystore.filters.items.length > 0){
            mystore.clearFilter(true);

        }
    
        var myfilter = new Ext.util.Filter({
            filterFn: function(item) {
                var searchTerm = item.data.place;
                for (i=0; i<filters.length; i++)
                {
                    return searchTerm === filters[i]
                }      
               
            }
        });
        mystore.filter(myfilter);

    }


});