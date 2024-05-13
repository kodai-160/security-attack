const { app, BrowserWindow } = require('electron');

app.on('ready', () => {
    let win = new BrowserWindow({
        webPreferences: {
            nodeIntegretion: false,
            contextIsolation: false,
            sandbox: true
        }
    });

    win.loadFile('index.html');
    win.show();
});

angular.module('myApp', []).controller('myCtrl', function($scope) {
    $scope.xssInput = 'AngularJS content goes here';
});