// Adding Fade In Effect
$(document).ready(function () {

    $(".home").fadeIn(1500).removeClass("hidden");
    $(".login").fadeIn(1500).removeClass("hidden");
    $(".register").fadeIn(1500).removeClass("hidden");
    $(".contact-us").fadeIn(1500).removeClass("hidden");
});

// Generating Random Quote from an Api
var category = 'happiness'
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
    headers: { 'X-Api-Key': '' },
    contentType: 'application/json',
    success: function (result) {
        var existingText = $('#quote').text();
        var apiQuote = result[0].quote;
        var newText = existingText + ' ' + apiQuote;
        $('#quote').text(newText);
        
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});

// Generating a random hobby from an api with angular js

angular.module('notehub', [])
    .controller('HobbiesController', function ($scope, $http) {
        $scope.hobbies = [];

        $scope.getHobbies = function () {
            var category = 'general';
            var apiKey = '';
            var apiUrl = 'https://api.api-ninjas.com/v1/hobbies?category=' + category;

            $http({
                method: 'GET',
                url: apiUrl,
                headers: { 'X-Api-Key': apiKey },
                contentType: 'application/json'
            }).then(function (response) {
                var hobby = response.data.hobby;

                // Assign the hobby value to the $scope.hobbies
                $scope.hobbies = [hobby];
            }).catch(function (error) {
                console.error('Error:', error);
            });
        };
    });



