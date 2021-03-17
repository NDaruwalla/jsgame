// Change the CSS properties of a box upon button clicks.

/*  Assigned: grow, blue, fade, reset
    Bonus: border, disappear, shrink, end (delete buttons, intro, and shape and return good bye message)
*/

/* After completing the assignment by writing a lot of repeat code, it appeared that the code could be consolidated and written more efficiently. 
 I created two variables to consolidate the code in a couple of examples. 
 */

var stylesReset = {
  backgroundColor: 'orange',
  width: '150px',
  height: '150px',
 // margin: '25px',
  border: 'none',
  opacity: '100%',
  marginleft: '30%',
  margintop: '10%',
  marginbottom:'10%'
 
}

var objbox = document.getElementById('box')

// button - grow
document.getElementById('buttonGrow').addEventListener('click', function () {
  //document.getElementById('box').style.height = '250px'
  objbox.style.height = '250px'
})

// button - change to blue - solution found on w2 schools https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_style_color using style.backgroundColor
document.getElementById('buttonBlue').addEventListener('click', function () {
  document.getElementById('box').style.backgroundColor = 'blue'
})

// button - fade
document.getElementById('buttonFade').addEventListener('click', function () {
  document.getElementById('box').style.opacity = '25%'
})

// button - reset (original style="height:150px; width:150px; background-color:orange; margin:25px .style.height = "150px") 
document.getElementById('buttonReset').addEventListener('click', function () {
  Object.assign(objbox.style, stylesReset)
})

  /*Moved the commented code below into a Javascript variable called "stylesReset" and applied styling using Object.assign method
     document.getElementById('box').style.backgroundColor = 'orange',
     document.getElementById('box').style.opacity = '100%',
     document.getElementById('box').style.height = '150px',
     document.getElementById('box').style.width = '150px',
     document.getElementById('box').style.margin = '25px',
     document.getElementById('box').style.border = 'none'
  */
     //Object.assign(document.getElementById('box').style, stylesReset)

// button - border
document.getElementById('buttonAddBorder').addEventListener('click', function () {
   document.getElementById('box').style.border = 'thick solid green'
})

// button - disappear
document.getElementById('buttonDisappear').addEventListener('click', function () {
  document.getElementById('box').style.opacity = '0%'
})

// button - shrink
document.getElementById('buttonShrink').addEventListener('click', function () {
  document.getElementById('box').style.height = '25px',
  document.getElementById('box').style.width = '25px'
  //document.getElementById('box').style.margin = '25px'
})

// button - end (delete buttons, intro, and shape and return good bye message)
document.getElementById('buttonEnd').addEventListener('click', function () {
  document.getElementById('buttonGrow').remove(),
  document.getElementById('buttonBlue').remove(),
  document.getElementById('buttonFade').remove(),
  document.getElementById('buttonAddBorder').remove(),
  document.getElementById('buttonShrink').remove(),
  document.getElementById('buttonDisappear').remove(),
  document.getElementById('buttonReset').remove(),
  document.getElementById('intro').remove(),
  document.getElementById('box').remove(),
  document.getElementById('buttonEnd').remove(),
  document.getElementById('demo').innerHTML = 'Good bye!'
    })
