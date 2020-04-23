

let name = 'Dora';

console.log(name + " 's apples");
console.log('Hello world!');

$('h1').text('WE are having a break');
$ ('p').html('StayAtHomeCodingCamp, Likes:<strong>13</strong'>);
$('strong').css('background','lime');

let color = 'blue';

$('h2').toggleClass('blue');
$('h2').toggleClass('blue');

$('ul').append('<li>My name is ' + name + '</li>');
$('ul').append('<li id="special-list-item">Removable ' + name + '</li>');

$('#special-list-item').remove();

let addButtonHandler = () => {
   if ($('li').length < 5) {
    $('ul').append('<li>My name is ' + name + '</li>');

   }
    
   $('ul').append('<li>My name is ' + name + '</li>');
}

$('#add-button').click(addButtonHandler);

$('#remove-button').click(() => {
    $('li:last-child').remove();
});


//This is the fourth part
let age = 12;

console.log('Starting the if');
console.log('This is a sentence');


if (age < 18) {
console.log('Not old enough to drive');
} else {
    console.log('Old enoguht to drink');
}
console.log('This is after if');


// This is a javascript comment

/*
This is a multiline JavaScript comment.
*/

