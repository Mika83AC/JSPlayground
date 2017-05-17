var app = {};

// Module Storage
(function (exports) {

   (function (exports) {
      var api = {
         moduleStorage: function test() {
            console.log('I\'m the storage module.');
         }
      };

      Object.assign(exports, api);
   }((typeof exports === 'undefined') ? window : exports));

}(app));

// Module Picture
(function (exports) {

   (function (exports) {
      var api = {
         modulePicture: function test() {
            console.log('I\'m the picture module.');
         }
      };

      Object.assign(exports, api);
   }((typeof exports === 'undefined') ? window : exports));

}(app));

app.moduleStorage();
app.modulePicture();
