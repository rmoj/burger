$(document).ready(function() {
  $('#submit').on('click', function() {
    var newBurger = {
      burger_name: $('#txtBurgerName')
        .val()
        .trim(),
      devoured: false
    };

    $.ajax('/api/burgers/', {
      type: 'POST',
      data: newBurger
    }).then(function() {
      location.reload();
    });
  });

  $('.devour').on('click', function() {
    var id = $(this).attr('id');

    $.ajax('/api/burgers/' + id, {
      type: 'PUT',
      data: { devoured: true }
    }).then(function() {
      location.reload();
    });
  });
});
