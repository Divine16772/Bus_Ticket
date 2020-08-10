function confirmReserve(){
    let values =[]
    for(let i=0; i<6;i++){
       values=[...values,$("input")[i].value]
      }
     
     localStorage.setItem("reserve",JSON.stringify(values))
   $('#form2submit').click();
}
function firstclass(amount){
   
    return (70/100*amount + amount);
}
function vip(amount){
    return (1/2*amount + amount);
}
let k=20;
function spin(){
    $(".load").fadeIn(600);
    
    setTimeout(() => {
        $("#spinner").css("transform",`rotateZ(${k}deg)`)
        k+=10;
        if(k<1400)spin();
        else finish()
  }, 50);
}


function finish(){
console.log("finished")
$(".load").fadeOut(600,()=>{
    $("main").fadeOut(200,()=>{
        $("main").html("<div class='success msg'><label > Thank You for Trusting us... be sure to leave a review on our services</label><br/><label class='label blue'>Your Reservation has been made</label></div>").show(1000)
    })

})
k=0;
}