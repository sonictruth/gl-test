import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component.js';

const homeModule = angular.module('home', [
  uiRouter,
])

.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      template: '<home></home>',
    });
})

.component('home', homeComponent)

.name;

export default homeModule;
