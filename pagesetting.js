
function showdiv1() {
    document.getElementById("div1").style.display="block";
    document.getElementById("div2").style.display="none";


    $(window).scrollTop(position);
  }
  function showdiv2() {
    document.getElementById("div1").style.display="none";
    document.getElementById("div2").style.display="block";

    $(window).scrollTop(position);
  }