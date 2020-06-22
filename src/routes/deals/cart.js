$(document).ready(function(){
  $("#add-to-cart-btn").click(function(){
    $('#cartTable > tbody:last-child').append('<tr><td>123</td></tr><tr><td>123</td></tr>');
  });
});