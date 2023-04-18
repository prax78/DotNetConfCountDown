setInterval(getCountDown, 2000);


function getCountDown() {
    const one = Date.now();
    const two = new Date(2023, 10, 10);
    const result = two.getTime() - one;
    const today = new Date(one);

    const refhrs = 23 - today.getHours();
    const refmnts = 59 - today.getMinutes();
    const refsec = 59 - today.getSeconds();



    document.getElementById("displaycount").innerHTML = Math.floor(result / 86400000) + " " + refhrs + " " + refmnts + " " + refsec;
document.write("hi");

}