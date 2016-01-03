//This controller retrieves data from the customersService and associates it with the $scope
//The $scope is ultimately bound to the customers view
userDashboardApp.controller('addressController', function ($scope, addressService) {

    //I like to have an init() for controllers that need to perform some initialization. Keeps things in
    //one place...not required though especially in the simple example below
    init();

    $scope.isViewLoading = false;
    $scope.$on('$routeChangeStart', function() {
        $scope.isViewLoading = true;
    });
    $scope.$on('$routeChangeSuccess', function() {
        $scope.isViewLoading = false;
    });
    $scope.$on('$routeChangeError', function() {
        $scope.isViewLoading = false;
    });

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

    $scope.clearAddressInput = function () {
        $scope.newAddress = {
            "country" : "USA",
            "stateOrProvince" : null
        }
    };

    function init() {
        $scope.countryList = [
            {"name": "United States", "code": "USA"}
        ];
        $scope.stateList = [
            {
                "name": "-Select state-",
                "abbreviation": null
            },
            {
                "name": "Alabama",
                "abbreviation": "AL"
            },
            {
                "name": "Alaska",
                "abbreviation": "AK"
            },
            {
                "name": "American Samoa",
                "abbreviation": "AS"
            },
            {
                "name": "Arizona",
                "abbreviation": "AZ"
            },
            {
                "name": "Arkansas",
                "abbreviation": "AR"
            },
            {
                "name": "California",
                "abbreviation": "CA"
            },
            {
                "name": "Colorado",
                "abbreviation": "CO"
            },
            {
                "name": "Connecticut",
                "abbreviation": "CT"
            },
            {
                "name": "Delaware",
                "abbreviation": "DE"
            },
            {
                "name": "District Of Columbia",
                "abbreviation": "DC"
            },
            {
                "name": "Federated States Of Micronesia",
                "abbreviation": "FM"
            },
            {
                "name": "Florida",
                "abbreviation": "FL"
            },
            {
                "name": "Georgia",
                "abbreviation": "GA"
            },
            {
                "name": "Guam",
                "abbreviation": "GU"
            },
            {
                "name": "Hawaii",
                "abbreviation": "HI"
            },
            {
                "name": "Idaho",
                "abbreviation": "ID"
            },
            {
                "name": "Illinois",
                "abbreviation": "IL"
            },
            {
                "name": "Indiana",
                "abbreviation": "IN"
            },
            {
                "name": "Iowa",
                "abbreviation": "IA"
            },
            {
                "name": "Kansas",
                "abbreviation": "KS"
            },
            {
                "name": "Kentucky",
                "abbreviation": "KY"
            },
            {
                "name": "Louisiana",
                "abbreviation": "LA"
            },
            {
                "name": "Maine",
                "abbreviation": "ME"
            },
            {
                "name": "Marshall Islands",
                "abbreviation": "MH"
            },
            {
                "name": "Maryland",
                "abbreviation": "MD"
            },
            {
                "name": "Massachusetts",
                "abbreviation": "MA"
            },
            {
                "name": "Michigan",
                "abbreviation": "MI"
            },
            {
                "name": "Minnesota",
                "abbreviation": "MN"
            },
            {
                "name": "Mississippi",
                "abbreviation": "MS"
            },
            {
                "name": "Missouri",
                "abbreviation": "MO"
            },
            {
                "name": "Montana",
                "abbreviation": "MT"
            },
            {
                "name": "Nebraska",
                "abbreviation": "NE"
            },
            {
                "name": "Nevada",
                "abbreviation": "NV"
            },
            {
                "name": "New Hampshire",
                "abbreviation": "NH"
            },
            {
                "name": "New Jersey",
                "abbreviation": "NJ"
            },
            {
                "name": "New Mexico",
                "abbreviation": "NM"
            },
            {
                "name": "New York",
                "abbreviation": "NY"
            },
            {
                "name": "North Carolina",
                "abbreviation": "NC"
            },
            {
                "name": "North Dakota",
                "abbreviation": "ND"
            },
            {
                "name": "Northern Mariana Islands",
                "abbreviation": "MP"
            },
            {
                "name": "Ohio",
                "abbreviation": "OH"
            },
            {
                "name": "Oklahoma",
                "abbreviation": "OK"
            },
            {
                "name": "Oregon",
                "abbreviation": "OR"
            },
            {
                "name": "Palau",
                "abbreviation": "PW"
            },
            {
                "name": "Pennsylvania",
                "abbreviation": "PA"
            },
            {
                "name": "Puerto Rico",
                "abbreviation": "PR"
            },
            {
                "name": "Rhode Island",
                "abbreviation": "RI"
            },
            {
                "name": "South Carolina",
                "abbreviation": "SC"
            },
            {
                "name": "South Dakota",
                "abbreviation": "SD"
            },
            {
                "name": "Tennessee",
                "abbreviation": "TN"
            },
            {
                "name": "Texas",
                "abbreviation": "TX"
            },
            {
                "name": "Utah",
                "abbreviation": "UT"
            },
            {
                "name": "Vermont",
                "abbreviation": "VT"
            },
            {
                "name": "Virgin Islands",
                "abbreviation": "VI"
            },
            {
                "name": "Virginia",
                "abbreviation": "VA"
            },
            {
                "name": "Washington",
                "abbreviation": "WA"
            },
            {
                "name": "West Virginia",
                "abbreviation": "WV"
            },
            {
                "name": "Wisconsin",
                "abbreviation": "WI"
            },
            {
                "name": "Wyoming",
                "abbreviation": "WY"
            }
        ];
    }
});
