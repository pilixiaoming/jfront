//This controller retrieves data from the customersService and associates it with the $scope
//The $scope is ultimately bound to the customers view
userDashboardApp.controller('addressController', function ($scope, addressService) {

    //I like to have an init() for controllers that need to perform some initialization. Keeps things in
    //one place...not required though especially in the simple example below
    init();

    function init() {
        // $scope.customers = customersService.getCustomers();
    }

    $scope.validateAddress = function () {
        if (!$scope.newAddress) {
            return;
        }
        var addressLine1 = $scope.newAddress.addressLine1;
        var addressLine2 = $scope.newAddress.addressLine2;
        var city = $scope.newAddress.city;
        var stateOrProvince = $scope.newAddress.stateOrProvince;
        var country = $scope.newAddress.country;
        var postalCode = $scope.newAddress.postalCode;

        addressService.validateAddress(addressLine1,addressLine2,city,stateOrProvince,country,postalCode,function(addressResponse){
            $scope.recommendedAddress = {
                addressLine1: addressResponse.data.addressLine1,
                addressLine2: addressResponse.data.addressLine2,
                city: addressResponse.data.city,
                stateOrProvince: addressResponse.data.stateOrProvince,
                country: addressResponse.data.country,
                postalCode: addressResponse.data.postalCode,
                formattedAddress: addressResponse.data.formattedAddress,
                addressLines: addressResponse.data.addressLines
            };
        });
    };

    $scope.addAddress = function () {
        $scope.recommendedAddress = {}
    };

    $scope.cancelAddress = function () {
        $scope.recommendedAddress = {}
    };
});
