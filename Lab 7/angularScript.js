var app = angular.module('ImageGallery', []);

app.controller('GalleryController', function($scope, $http) {
    this.images = [];
    this.selectedImage = null;
    let randomStartIndex = Math.floor(Math.random() * 50);
    for (let i = 1; i <= 20; i++) {
      this.images.push({
        url: `https://picsum.photos/id/` + (i + randomStartIndex) +`/50/50`,
        index: (i + randomStartIndex)
      });
    }

    this.setCurrentImage = function(index) {
      this.selectedImage = 'https://picsum.photos/id/' + index + '/350/350';    };
    this.setCurrentImage(0);
});