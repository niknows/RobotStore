  /* TODO: Move To js file */
  /*********************************************************
   *
   *   Test Checkboxes/Radio Buttons Script
   *
   *********************************************************/
   // loop through each form and handle submit event
  //  for (var i=0;i<document.forms.length;i++) {
  //    var form = document.forms[i];
  //    form.addEventListener('submit', function(e){
  //      e.preventDefault();
  //      var results = '';
  //     // loop through all checkboxes to see if checked
  //     var checkboxes = form.querySelectorAll("input[type='checkbox']");
  //     for(var k = 0; k < checkboxes.length; k++) {
  //       results += checkboxes[k].id + '=' + checkboxes[k].checked + '\n';
  //     }
  //     // loop through all radio butotns to display value
  //     var radiobuttons = form.querySelectorAll("input[type='radio']:checked");
  //     for(var m = 0; m < radiobuttons.length; m++) {
  //       results += radiobuttons[m].name + '=' + radiobuttons[m].value + '\n';
  //     }
  //     // alert results
  //     alert(results);
  //   });
  // }


//List-Array of store products
// var productList = [
//   'RoboDog', 'ButlerBot', 'MegaMan', 'HelloRobot', 'Inteli3', 'Inteli5', 'Inteli7', 'Ram8G', 'Ram16G', 'VRHelmet', '3DScreen', 'StereoSpeakers', 'BlueToothKeyboard', 'WirelessMouse', 'PortableMonitor', 'RoboSkin1', 'RoboSkin2', 'RoboCase'
// ];

// Robot search filter
$('#searchbox').keyup(function(){
   var valThis = $(this).val().toLowerCase();
    if(valThis == ""){
        $('.navList > i').show();
    } else {
        $('.navList > li').each(function(){
            var text = $(this).text().toLowerCase();
            (text.indexOf(valThis) >= 0) ? $(this).show() : $(this).hide();
        });
   };
});

// Sample Search Filter
function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";

        }
    }
}
