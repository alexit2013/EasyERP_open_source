﻿define([
    'text!templates/salesInvoice/wTrack/wTrackRows.html'
], function (wTrackRowsHeader, wTrackRows) {
    var ProductItemTemplate = Backbone.View.extend({
        el: '#linwoiceGenerateTable',
        template: _.template(wTrackRowsHeader),

        events: {
           
        },

        initialize: function (options) {
            if(!options.stopRender) {
                this.render(options);
            }
        },

        render: function (options) {
            var totalAmountContainer;
            var thisEl = this.$el;

            thisEl.html(this.template(options));

            totalAmountContainer = thisEl.find('#totalAmountContainer');

            return this;
        }
    });

    return ProductItemTemplate;
});