// Add 'active' class to the clicked link
var links = document.getElementsByTagName('a');
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function() {
    var current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace(' active', '');
    this.className += ' active';
  });
}
