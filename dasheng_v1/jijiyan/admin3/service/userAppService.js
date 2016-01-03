userDashboardApp.service('addressService', function ($http) {
    this.validateAddress = function (addressLine1, addressLine2, city, stateOrProvince, country, postalCode, successCallback, errorCallback) {
        var endpoint = "http://localhost:8080/ooshopService/service/address/validate?"
            + "country=" + country
            + appendParam("addressLine1", addressLine1)
            + appendParam("addressLine2", addressLine2)
            + appendParam("city", city)
            + appendParam("stateOrProvince", stateOrProvince)
            + appendParam("postalCode", postalCode);
        $http({
                method: 'GET',
                url: 'addressResponse.json',
                cache: false
            }
        ).then(successCallback, errorCallback);
    };

    function appendParam(name, value) {
        return (!value) ? "" : "&" + name + "=" + value;
    }
});
