angular.module('app', ['ngSanitize'])
    .controller("FeedController", function($http, $scope) {

    $scope.init = function() {
        $http.get("http://www.vvhellendoorn.nl/Portals/39/2433.xml")
            .success(function(data) {
                var x2js = new X2JS();
                var json = x2js.xml_str2json( data );
                $scope.items = json.rss.channel.item;
            })
            .error(function(data) {
                console.log("ERROR: " + data);
                if(window.localStorage["entries"] !== undefined) {
                    $scope.entries = JSON.parse(window.localStorage["entries"]);
                }
            });
    };

    $scope.browse = function(v) {
        window.open(v, "_system", "location=yes");
    }
});