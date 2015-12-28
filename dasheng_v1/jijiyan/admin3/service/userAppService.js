userDashboardApp.service('addressService', function ($http) {
    //this.getCustomers = function () {
    //    return customers;
    //};
    var testData = {
        "addressLine1": "550 Harley Dr.",
        "addressLine2": "Apt 3",
        "stateOrProvince": "Ohio",
        "city": "Columbus",
        "country": "USA",
        "postalCode": "43202"
    };
    this.addAddress = function (addressLine1, addressLine2, stateOrProvince, city, country, postalCode, successCallback, errorCallback) {
        $http({
                method: 'GET',
                url: 'addressResponse.json',
                data: testData,
                cache: true
            }
        ).then(successCallback, errorCallback);
    };
});