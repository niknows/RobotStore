  /* TODO: Move To js file */
  /*********************************************************
   *
   *   Test Checkboxes/Radio Buttons Script
   *
   *********************************************************/
   // loop through each form and handle submit event
   for (var i=0;i<document.forms.length;i++) {
     var form = document.forms[i];
     form.addEventListener('submit', function(e){
       e.preventDefault();
       var results = '';
      // loop through all checkboxes to see if checked
      var checkboxes = form.querySelectorAll("input[type='checkbox']");
      for(var k = 0; k < checkboxes.length; k++) {
        results += checkboxes[k].id + '=' + checkboxes[k].checked + '\n';
      }
      // loop through all radio butotns to display value
      var radiobuttons = form.querySelectorAll("input[type='radio']:checked");
      for(var m = 0; m < radiobuttons.length; m++) {
        results += radiobuttons[m].name + '=' + radiobuttons[m].value + '\n';
      }
      // alert results
      alert(results);
    });
  }

// //AJAX Loader
//   $body = $("body");
//
//   $(document).on({
//       ajaxStart: function() { $body.addClass("loading");    },
//        ajaxStop: function() { $body.removeClass("loading"); }
//   });

// //Initiates an AJAX request on click
//   $(document).on("click", function(){
//       $.get("/mockjax");
// });


//List-Array of store products
var productList = [
  'RoboDog', 'ButlerBot', 'MegaMan', 'HelloRobot', 'Inteli3', 'Inteli5', 'Inteli7', 'Ram8G', 'Ram16G', 'VRHelmet', '3DScreen', 'StereoSpeakers', 'BlueToothKeyboard', 'WirelessMouse', 'PortableMonitor', 'RoboSkin1', 'RoboSkin2', 'RoboCase'
];

  // Script from robots.html begining on line 89
  // <script>
  //   var robo = document.querySelector('#robo1').createShadowRoot();
  //   /*Step1*/
  //   let prdTemplate = document.querySelector('#producttemplate');
  //   /*Step2*/
  //   let clone = document.importNode(prdTemplate.content, true);
  //   /*Step3*/
  //
  //   clone.querySelector('#pimage').src = '../images/roboDog.png';
  //   clone.querySelector('#lblName').textContent = 'R.E.T';
  //
  //  /*Step4*/
  //   robo.appendChild(clone);
  //   let userTemplate = document.querySelector('#user');
  //   let userClone = document.importNode(userTemplate.content, true);
  //   document.body.appendChild(userClone);
  //     let addressTemplate = document.querySelector('#address');
  //     let addressClone = document.importNode(addressTemplate.content, true);
  //   document.body.appendChild(addressClone);
  // </script>
