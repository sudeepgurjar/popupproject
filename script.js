const counterButton = document.getElementById('counterButton');
const popupImage = document.getElementById('popupImage');
const closeButton = document.getElementById('closeButton');

// When the counter button is clicked, show the pop-up image
    counterButton.addEventListener('click', function() {
    popupImage.style.display = 'block'; // Show the pop-up
});

// When the close button is clicked, hide the pop-up
closeButton.addEventListener('click', function() {
    popupImage.style.display = 'none'; // Hide the pop-up
});

// Close the pop-up when clicking outside the image (optional)
window.addEventListener('click', function(event) {
    if (event.target === popupImage) {
        popupImage.style.display = 'none'; // Hide the pop-up if clicked outside
    }
});
var val=0;
var c=document.getElementById('count')
var eo=document.getElementById('evenOdd')
function incr()
{
val++;
if(val<=20)
{
c.textContent=val;
}
else 
{
alert("Value should not more tham 20")
}
//  if(val%2==0)
//  {
//   eo.textContent="EVEN"
//  }
//  else
//  {
//   eo.textContent="ODD"
//  }
}
function decr()
{
val--;
// c.textContent=val;
if(val<0)
{
    alert("Number should not be less than zero")
}
else 
{
    c.textContent=val;
}
}
function reset()
{
val=0
c.textContent=val;
eo.textContent="EVEN"

}