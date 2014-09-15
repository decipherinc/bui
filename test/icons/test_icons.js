/* global QUnit, jQuery */

(function ($) {
  'use strict';

  QUnit.module('BUI icons');

  QUnit.asyncTest('sanity check', function () {
    var $bui = $('<div>').addClass('bui-icons');
    var $fixture = $('#qunit-fixture');
    $fixture.append($bui);

    function parse($icon) {
      var text = $icon.text().trim();
      var classRx = /icon-.+\s/;
      var codeRx = /\((.+)\)/;

      var cls = classRx.match(text).trim();
      var code = codeRx.match(text)[1];
      return {
        cls: cls,
        code: code
      };
    }

    function test() {
      QUnit.start();
      var $icons = $('#source').context().find('.iconsContainer p'); 
      $icons.each(function () {
          var parsed = parse($(this));
          var $cls = $('<i>').addClass(parsed.cls);
          $bui.append($cls);
          var content = $cls.attr('data-content');
          QUnit.equals(content, parsed.code, parsed.cls);
      });
    }

    //$.ajax({type: "POST",url:"../../index.html",dataType:"html",success: function(data) {$('#source').html(data);}});

    $('<iframe/>', {
      id:'source',
      src:'https://raw.githubusercontent.com/decipherinc/bui/master/index.html',
      load: test
    }).appendTo($fixture);
  });
})(jQuery);