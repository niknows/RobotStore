//HARDWARE OPTIONS TO CONSOLE
$(
  function() {
    var list = "";
    $("#save").click(function() {
      $(':input:checked', "#hardwareOptions").each(function() {
        if ($(this))
          console.log($(this).attr('name') + ': ' + $(this).attr('value'));
        list += $(this).attr('name') + ': ' + $(this).attr('value') + "\n";
      });
      alert("Congratulations! You have selected the following configuration for your new computer!" + "\n" + "\n" + list);

    });

  });

//ROBOT SEARCH FILTER
(function($) {
  jQuery.expr[':'].Contains = function(a, i, m) {
    return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
  };

  function listFilter(header, list) {
    $('.searchbox')
      .change(function() {
        var filter = $(this).val();
        if (filter) {
          $(list).find("a:not(:Contains(" + filter + "))").parent().slideUp();
          $(list).find("a:Contains(" + filter + ")").parent().slideDown();
        } else {
          $(list).find("li").slideDown();
        }
        return false;
      })
      .keyup(function() {
        $(this).change();
      });
  }
  $(function() {
    listFilter($("#header"), $("#list"));
  });
}(jQuery));
