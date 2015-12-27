/*#######################################################################
  
  Dan Wahlin
  http://twitter.com/DanWahlin
  http://weblogs.asp.net/dwahlin
  http://pluralsight.com/training/Authors/Details/dan-wahlin

  Normally like the break AngularJS controllers into separate files.
  Kept them together here since they're small and it's easier to look through them.
  example. 

  #######################################################################*/


//This controller retrieves data from the customersService and associates it with the $scope
//The $scope is ultimately bound to the customers view
userDashboardApp.controller('addressController', function ($scope, addressService) {

    //I like to have an init() for controllers that need to perform some initialization. Keeps things in
    //one place...not required though especially in the simple example below
    init();

    function init() {
       // $scope.customers = customersService.getCustomers();
    }

    $scope.addAddress = function () {
        //var firstName = $scope.newCustomer.firstName;
        //var lastName = $scope.newCustomer.lastName;
       // var city = $scope.newCustomer.city;
        addressService.addAddress("","","","","","",function(addressResponse){
            $scope.addressResponse = addressResponse.data;
            console.log($scope.addressResponse);
        });
        //$scope.newCustomer.firstName = '';
        //$scope.newCustomer.lastName = '';
        //$scope.newCustomer.city = '';
    };

    $scope.deleteCustomer = function (id) {
        customersService.deleteCustomer(id);
    };
});
