//HARDWARE OPTIONS TO CONSOLE
$(
  function() {
    $("#save").click(function() {
        $(':input:checked',"#hardwareOptions").each(function() {
            if ($(this))
              console.log( $(this).attr('name') + ': ' + $(this).attr('value'));
              // alert ( $(this).attr('name') + ': ' + $(this).attr('value'));
          });

      });

  });

//ROBOT SEARCH FILTER
(function ($) {
  jQuery.expr[':'].Contains = function(a,i,m){
    return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase())>=0;
  };
  function listFilter(header, list) {
    $('.searchbox')
      .change( function () {
      var filter = $(this).val();
      if(filter) {
        $(list).find("a:not(:Contains(" + filter + "))").parent().slideUp();
        $(list).find("a:Contains(" + filter + ")").parent().slideDown();
      } else {
        $(list).find("li").slideDown();
      }
      return false;
    })
    .keyup( function () {
      $(this).change();
    });
    }
    $(function () {
      listFilter($("#header"), $("#list"));
    });
  }(jQuery));


  //List-Array of store products
  // var productList = [
  //   'RoboDog', 'ButlerBot', 'MegaMan', 'HelloRobot', 'Inteli3', 'Inteli5', 'Inteli7', 'Ram8G', 'Ram16G', 'VRHelmet', '3DScreen', 'StereoSpeakers', 'BlueToothKeyboard', 'WirelessMouse', 'PortableMonitor', 'RoboSkin1', 'RoboSkin2', 'RoboCase'
  // ];
