<!DOCTYPE html>
<html>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js">
</script>
<body>

<div ng-app="">
 
<p>Input something in the input box:</p>
<p>First integer: <input type="number" ng-model="first"></p>
<p ng-bind="first"></p>
<p>Second integer: <input type="number" ng-model="second"></p>
<p ng-bind="second"></p>
<p>Sum : {{first + second}}<p>
<p>Multiply : {{first * second}}<p>
<p>Divide : {{first / second}}<p>
<p>Substraction : {{first - second}}<p>
<table border = "1">
<div ng-app="" ng-init="nums=[1,2,3,4,5,6,7,8,9,10];
  						digits = [2,3,4,5,6,7,8,9,10]">
    <div ng-repeat="y in digits" style="float:left">
      <ul>
        <li ng-repeat="x in nums">
          {{y}} * {{x}} = {{y * x }}
        </li>
      </ul>
    </div>
    </table>
  </div>

</body>
</html>
