
var app = angular.module('starterApp', ['ui.router', 'ngMaterial']);

app.config(function ($stateProvider,$urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider.state("home", {
        url: "/home",
        controller: "homeCtrl",
        templateUrl: "app/views/homeView.html"
    })
    $stateProvider.state("form", {
        url: "/form",
        controller: "formCtrl",
        templateUrl: "app/views/formView.html"
    })
    $stateProvider.state("text", {
        url: "/text",
        controller: "textCtrl",
        templateUrl: "app/views/textstyleView.html"
    })
  
});

app.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('indigo', {
          'default': '400', // by default use shade 400 from the palette for primary intentions
          'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
          'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
          'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
      })
      .accentPalette('amber')
      .warnPalette('red')
    .backgroundPalette('grey');
});

