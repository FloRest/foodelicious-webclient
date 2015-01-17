'use strict';

var viewModule = angular.module('foodelicious.views', ['ngRoute', 'ngMaterial', 'foodelicious.apiService'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/signin', {
            templateUrl: 'views/signViews/signin.html',
            controller: 'SignInController'
        });

        $routeProvider.when('/signup', {
            templateUrl: 'views/signViews/signup.html',
            controller: 'SignUpController'
        });

        $routeProvider.when('/feed', {
            templateUrl: 'views/feed/feed.html',
            controller: 'FeedController'
        });

        $routeProvider.when('/profile/:id?', {
            templateUrl: 'views/profile/profile.html',
            controller: 'ProfileController'
        });

        $routeProvider.when('/recipes', {
            templateUrl: 'views/recipes/recipes.html',
            controller: 'RecipesController'
        });

        $routeProvider.when('/recipe/create', {
            templateUrl: 'views/recipes/recipeForm.html',
            controller: 'RecipeFormController'
        });

        $routeProvider.when('/recipe/:id', {
            templateUrl: 'views/recipes/recipe.html',
            controller: 'RecipeController'
        });

        $routeProvider.when('/parameters', {

        });

        $routeProvider.otherwise({redirectTo: '/signin'});
    }])
;