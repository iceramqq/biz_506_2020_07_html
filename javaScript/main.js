var div_list = document.getElementsByTagName("div");

for(var i = 0 ; i < div_list.length; i++){
    var red =Math.floor(Math.random() * 256) // 0 ~ 255
    var green =Math.floor(Math.random() * 256) // 0 ~ 255
    var blue =Math.floor(Math.random() * 256) // 0 ~ 255

    //
    //
    //
    //
    //백틱 이상에서만 사용가능한 연산자
    var s = "rgb("+red+","+green+","+blue+")"
    var coler_string = `rgb( ${red},${green},${blue})`
    div_list[i].style.backgroundColor = coler_string
    div_list[i].innerHTML = coler_string

}