(function() {
    'use strict';
    angular.module("frolicApp.app").controller("viewController", ["viewService", "$location", "$rootScope", "ENDPOINT_CONSTANTS", function(viewService, $location, $rootScope, ENDPOINT_CONSTANTS) {
        var self = this;
        self.itemDetails = {};
        self.responseMessage = "";
        $rootScope.showCategoryLink = false;
        self.item_id = $location.search().q;
        self.imageUrl = ENDPOINT_CONSTANTS.API_DOMAIN + ENDPOINT_CONSTANTS.IMAGE_URL;
        /*
        @name init
        @params none
        @description initialize the controller
        */
        function init() {
            self.getItemDetails(self.item_id);
        }

        /*
        @name getCategories
        @params none
        @description gets all the categories
        */
        self.getItemDetails = function(itemId) {
            viewService.getItemDetails(itemId).then(function(data) {
                if (angular.isDefined(data)) {
                    self.itemDetails = data.items;
                } else {
                    self.responseMessage = "Some unexpected error occurred";
                    self.responseCode = "7864";
                }
            });
        };
        init();
    }]);
})();