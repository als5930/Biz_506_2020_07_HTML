var div_list = document.getElementsByTagName("div")

    for(var i =0; i<div_list.length; i++){
        var red = Math.floor(Math.random()*256); // 0~255
        var grenn = Math.floor(Math.random()*256); // 0~255
        var blue = Math.floor(Math.random()*256); // 0~255

        // 10진수를 16진수 문자열로바꾸기


        //background-Color
        //backgroundColor
        // 백틱(` : 숫자키 1번 왼쪽에 있는 문자)
        var s = "rgb(" + red + " , " + grenn + blue + ")"
        var color_string =`rgb( ${red}, ${green},  ${blue})` ;
        div_list[i].style.backgroundColor = color_string
        div_list[i].innerHTML = color_string
    }