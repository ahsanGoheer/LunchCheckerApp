(function(){
'use strict';

angular.module("LunchCheck",[])
.controller("LunchCheckController",LunchCheckController);
LunchCheckController.$inject=["$scope"];
function LunchCheckController($scope){
    $scope.foodItems='';
    $scope.message='Welcome to the Lunch Check Application';
    $scope.messageColor='gray';
    $scope.CheckIfTooMuch=function()
    {
        console.log($scope.foodItems.length);
        if(isEmpty($scope.foodItems))
        {
            DisplayMessage("Please enter data first.","red");
        }
        else
        {
            var messageContents=CheckItems($scope.foodItems);
            DisplayMessage(messageContents[0],messageContents[1]);
        }
    }

    

    function isEmpty(foodItems)
    {
       return foodItems.length<=0&&foodItems!=undefined;
    }
    function DisplayMessage(messageText,messageColor)
    {
        $scope.message=messageText;
        $scope.messageColor=messageColor;
    }
    function CheckItems(foodItems)
    {
        var itemsList = foodItems.split(",");
        return itemsList.length<=3?['Enjoy!','green']:['Too Much!','red'];
    }

}
})();