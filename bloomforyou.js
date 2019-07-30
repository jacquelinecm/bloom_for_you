function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
function StressReliefHomepage() {
  document.getElementById("Welcomestressrelief").innerHTML = "To your Sanctuary";
}
function Developers() {
  document.getElementById("whoweare").innerHTML = "Our Story";
}


function function1() {


  var skintype= parseInt(document.querySelector('input[name = "skintype"]:checked').value);
  //alert(skintype);


  var numofproducts = parseInt(document.querySelector('input[name = "products"]:checked').value);
  //alert(numofproducts);

  var sunprotect = parseInt(document.querySelector('input[name = "sunprotect"]:checked').value);
  //alert(sunprotect);
  var improve = parseInt(document.querySelector('input[name = "improve"]:checked').value);
  //alert(improve);
  var price = parseInt(document.querySelector('input[name = "price"]:checked').value);
  //alert(price);



  var total= skintype + numofproducts + sunprotect + improve + price;

  return total;

}




//document.getElementById("").innerHTML = "hi";



 //  if(total <= 5) {
 //    document.getElementById("myImage").src="https://alsoknownasmama.com/wp-content/uploads/2017/08/vsco-photo-2-32.jpg";
 //    //alert("OnLoad image"+image );
 //
 // //document.write("<img src = 'https://www.theballeronabudget.com/wp-content/uploads/2017/12/popular-skincare-products-of-2017-1-e1513727420212.jpg'>")
 //  //document.getElementById("answer").innerHTML = "test";
 //  }
 //
 //  if(total >=answer2 && total < 7) {
 //    document.getElementById("answer2").innerHTML = url("https://eastwestromance.files.wordpress.com/2014/08/imag0515_1.jpg");
 //  }
 //
 //  if(total >=answer3) {
 //    document.getElementById("answer3").innerHTML = url("https://www.theballeronabudget.com/wp-content/uploads/2017/12/popular-skincare-products-of-2017-1-e1513727420212.jpg");
 //  }







function function2(){
  total = function1();

  if(total <= 5) {
    alert("Use Cetaphil Cleanser and mositurizer for all skin types and neutroguena SPF 35");
    }else if (total == 10){
      alert("Use ");
    }else if (total == 15){
      alert("hi");
    }else if (total == 7) {
      alert("e ");
    }else if (total== 6){
      alert("l");
    }else if (total== 8){
      alert("z");
    }else if (total== 9){
      alert("k");
    }else if (total == 11){
      alert("p");
    }else if (total== 12){
      alert("s");
    } else if(total==13){
      alert("a");
    }else if (total==14){
      alert("d");}
}

// return false; // required to not refresh the page; just leave this here
//  end the submit function
