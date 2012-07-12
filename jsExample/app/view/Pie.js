Ext.define('MVC.view.Pie', {
    extend:'Ext.chart.Chart',
    alias : 'widget.pie',
    width: 500,
    height: 600,
    animate: true,
    shadow: true,
    insetPadding: 25,
    theme: 'Base:gradients',
    store: 'MVC.store.LocalStore',
    suspendEvents:true,
        series: [{
            type: 'pie',
            field: 'mag',
            showInLegend: false,
            highlight: {
              segment: {
                margin: 20
              }
            },
            label: {
                field: 'place',
                display: 'rotate',
                contrast: true,
                font: '18px "Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif'
            },
            animate: true
        }]
    });