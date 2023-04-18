setInterval(getCountDown, 2000);
let colorlist=['#FF1414','#FF147A','#FF14C9','#FF14F0','#C114FF','#A214FF','#8214FF','#2414FF','#147AFF','#14E8FF','#14FFC9','#14FF72','#14FF2C','#5BFF14','#B9FF14','#FFE814'];


function getCountDown() {
    const one = Date.now();
    const two = new Date(2023, 10, 10);
    const result = two.getTime() - one;
    const today = new Date(one);

    const refhrs = 23 - today.getHours();
    const refmnts = 59 - today.getMinutes();
    const refsec = 59 - today.getSeconds();

  

    document.getElementById("displaycount").innerHTML = Math.floor(result / 86400000) + " " + refhrs + " " + refmnts + " " + refsec;
    document.getElementById("note").innerHTML = "This is my personal countdown app to countdown";

    document.getElementById("note1").innerHTML = "the number of approx. days left in 2023 for the annual DotNet event";
    
    document.getElementById("note2").innerHTML = new Date( Date.now()).toDateString();
   

  
    colorlist.map(x=>document.getElementById("note2").style.color=x);
    colorlist.pop();
    

    if(colorlist.length==0)
    {
        colorlist=['#FF1414','#FF147A','#FF14C9','#FF14F0','#C114FF','#A214FF','#8214FF','#2414FF','#147AFF','#14E8FF','#14FFC9','#14FF72','#14FF2C','#5BFF14','#B9FF14','#FFE814'];
    }


    
    
   
   
    
}
 
