$traceurRuntime.ModuleStore.getAnonymousModule(function() {
  "use strict";
  angular.module("kao.stretch", []).directive("stretchToBottom", function($window, $document, $timeout) {
    return {
      restrict: "A",
      replace: true,
      link: function(scope, element, attrs) {
        var originalHeight = void 0;
        var applyHeight = function() {
          var newHeight = $window.innerHeight - element.offset().top;
          element.height(newHeight);
        };
        angular.element($window).bind("resize", function() {
          scope.$apply(function() {
            applyHeight();
          });
        });
        $document.ready(function() {
          $timeout(applyHeight, 200);
        });
      }
    };
  });
  return {};
});
