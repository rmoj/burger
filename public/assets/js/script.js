$(document).ready(function() {
  console.log('Hello World');

  $('#hello').on('click', function() {
    console.log('Hello World');
  });

  $('#submit').on('click', function() {
    event.preventDefault();

    console.log('clicked');

    var newBurger = {
      burger_name: $('#txtBurgerName')
        .val()
        .trim(),
      devoured: false
    };

    console.log(newBurger);

    $.ajax('/api/burgers/', {
      type: 'POST',
      data: newBurger
    }).then(function() {
      location.reload();
    });
  });

  $('.devour').on('click', function() {
    var id = $(this).attr('id');

    console.log('clicked on button ' + id);

    $.ajax('/api/burgers/' + id, {
      type: 'PUT',
      data: true
    }).then(function() {
      location.reload();
    });
  });
});
