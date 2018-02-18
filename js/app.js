var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {

	$scope.sAcStatus = "OFF";
	$scope.sACMode = "set mode";
	$scope.systemStatus = $scope.sAcStatus == "ON" ? "System ON" : "System OFF";
	$scope.sFanSpeed = "set fan speed";
	$scope.aAcStatus = ["AUTO", "COOL", "FAN"];
	$scope.MessageAC = "AC Starts when temp goes beyond xx C";

	$scope.sACModes = "";
	$scope.sFanSpeeds  = "";

	$scope.changeMode = function() {
		var idx = $scope.aAcStatus.indexOf($scope.sACMode);
		idx = (idx + 1) % 3;
		$scope.sACMode = $scope.aAcStatus[idx];
		if ($scope.sACMode == "FAN") {
			$scope.sFanSpeed = "LOW";
			$scope.sFanSpeeds = "LOW";
		}
		$scope.sACModes = $scope.sACMode;
	}

	$scope.changeFanSpeed = function() {
		if ($scope.sFanSpeed == "HIGH") {
			$scope.sFanSpeed = "LOW";
			$scope.sFanSpeeds = "LOW";
		} else if($scope.sFanSpeed == "LOW") {
			$scope.sFanSpeed = "HIGH";
			$scope.sFanSpeeds = "HIGH";
		} else {
			$scope.sFanSpeed = "HIGH";
			$scope.sFanSpeeds = "HIGH";
		}
	}

	$scope.getAcModeEnabled = function() {
		return $scope.sAcStatus == "ON" ? false : true;
	}

	$scope.getFanModeStatus = function() {
		return $scope.sACMode == "FAN" ? false : true;
	}

	$scope.chnageStatus = function() {
		var powerButton =  document.getElementById('powerButton');
		if ($scope.sAcStatus == "OFF") {
			powerButton.style.backgroundColor = "green";
			$scope.sAcStatus = "ON";
			$scope.systemStatus = "System ON";
		} else {
			powerButton.style.backgroundColor = "red";
			$scope.sAcStatus = "OFF";
			$scope.systemStatus = "System OFF";
			$scope.sACMode = "set mode";
			$scope.sACModes = "";
			$scope.sFanSpeed = "set fan speed";
			$scope.sFanSpeeds = ""
		}
	}

	$scope.updateTemperature = function() {
		if (!$scope.sTemperature) {
			$scope.MessageAC  = "AC Starts when temp goes beyond xx C";
		} else {
			$scope.MessageAC  = "AC Starts when temp goes beyond " +  $scope.sTemperature + " C";
		}
	}
});