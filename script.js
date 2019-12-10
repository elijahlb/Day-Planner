$(document).ready(function() {
    // LIVE DATE INSIDE JUMBOTRON
    $("#date").append(moment().format('MMMM Do YYYY'))
    

    // LOAD SAVED VALUES ---------------------------------------------------------
    var textSaved1 = localStorage.getItem("text-saved1")
    $("#formControlTextarea1").text(textSaved1)
    var textSaved2 = localStorage.getItem("text-saved2")
    $("#formControlTextarea2").text(textSaved2)
    var textSaved3 = localStorage.getItem("text-saved3")
    $("#formControlTextarea3").text(textSaved3)
    var textSaved4 = localStorage.getItem("text-saved4")
    $("#formControlTextarea4").text(textSaved4)
    var textSaved5= localStorage.getItem("text-saved5")
    $("#formControlTextarea5").text(textSaved5)
    var textSaved6 = localStorage.getItem("text-saved6")
    $("#formControlTextarea6").text(textSaved6)
    var textSaved7 = localStorage.getItem("text-saved7")
    $("#formControlTextarea7").text(textSaved7)
    var textSaved8 = localStorage.getItem("text-saved8")
    $("#formControlTextarea8").text(textSaved8)
    var textSaved9 = localStorage.getItem("text-saved9")
    $("#formControlTextarea9").text(textSaved9)
    // ---------------------------------------------------------------------------

    var timeArr = $(".time").toArray();

        var oldTime = moment().format('LT')
        var updatedTime = oldTime.split()
        var newerTime = JSON.stringify(updatedTime)

    //---------------CONDITIONS FOR TIME BLOCK CHANGES----------------------------
            if (newerTime[2] == 9) {
                var newColor9 = timeArr.slice(1, 9);
                var currentTime9 = timeArr[0];
                    $(newColor9).addClass("time-left")
                    $(currentTime9).addClass("current-time")
        } else if (newerTime[2] + newerTime[3] == 10) {
                var past10 = timeArr[0]
                var newColor10 = timeArr.slice(2, 9);
                var currentTime10 = timeArr[1];
                    $(past10).addClass("passed-time")
                    $(newColor10).addClass("time-left")
                    $(currentTime10).addClass("current-time")
        } else if (newerTime[2] + newerTime[3] == 11) {
                var past11 = timeArr.slice(0,2)
                var newColor11 = timeArr.slice(3, 9);
                var currentTime11 = timeArr[2];
                    $(past11).addClass("passed-time")
                    $(newColor11).addClass("time-left")
                    $(currentTime11).addClass("current-time")
        } else if (newerTime[2] + newerTime[3] == 12) {
                var past12 = timeArr.slice(0,3)
                var newColor12 = timeArr.slice(4, 9);
                var currentTime12 = timeArr[3];
                    $(past12).addClass("passed-time")
                    $(newColor12).addClass("time-left")
                    $(currentTime12).addClass("current-time")
        } else if (newerTime[2] == 1) {
                var past13 = timeArr.slice(0,4)
                var newColor13 = timeArr.slice(5, 9);
                var currentTime13 = timeArr[4];
                    $(past13).addClass("passed-time")
                    $(newColor13).addClass("time-left")
                    $(currentTime13).addClass("current-time")
        } else if (newerTime[2] == 2) {      
                var past14 = timeArr.slice(0,5)
                var newColor14 = timeArr.slice(6, 9);
                var currentTime14 = timeArr[5];
                    $(past14).addClass("passed-time")
                    $(newColor14).addClass("time-left")
                    $(currentTime14).addClass("current-time")
        } else if (newerTime[2] == 3) {
                var past15 = timeArr.slice(0,6)
                var newColor15 = timeArr.slice(7, 9);
                var currentTime15 = timeArr[6];
                    $(past15).addClass("passed-time")
                    $(newColor15).addClass("time-left")
                    $(currentTime15).addClass("current-time")
        } else if (newerTime[2] == 4) {
                var past16 = timeArr.slice(0,7)
                var newColor16 = timeArr.slice(8, 9);
                var currentTime16 = timeArr[7];
                    $(past16).addClass("passed-time")
                    $(newColor16).addClass("time-left")
                    $(currentTime16).addClass("current-time")
        } else if (newerTime[2] == 5) {
                var past17 = timeArr.slice(0,8)
                var newColor17 = timeArr[0]
                var currentTime17 = timeArr[8];
                    $(past17).addClass("passed-time")
                    $(newColor17).addClass("time-left")
                    $(currentTime17).addClass("current-time")
        } else {
                var currentTime18 = timeArr.slice(0,9)
                    $(currentTime18).addClass("passed-time")
        }

//----------------SAVES TEXT TO LOCAL STORAGE -------------------------------------

        $('#button1').on('click', function(){    
            var text = $("#formControlTextarea1").val();
                localStorage.setItem('text-saved1', text);
                $("#formControlTextarea1").val(localStorage.getItem('text-saved1'));

        });
        $('#button2').on('click', function(){    
            var text = $("#formControlTextarea2").val();
                localStorage.setItem('text-saved2', text);
                $("#formControlTextarea2").val(localStorage.getItem('text-saved2'));
        });
        $('#button3').on('click', function(){    
            var text = $("#formControlTextarea3").val();
                localStorage.setItem('text-saved3', text);
                $("#formControlTextarea3").val(localStorage.getItem('text-saved3'));
        });
        $('#button4').on('click', function(){    
            var text = $("#formControlTextarea4").val();
                localStorage.setItem('text-saved4', text);
                $("#formControlTextarea4").val(localStorage.getItem('text-saved4'));
        });
        $('#button5').on('click', function(){    
            var text = $("#formControlTextarea5").val();
                localStorage.setItem('text-saved5', text);
                $("#formControlTextarea5").val(localStorage.getItem('text-saved5'));
        });
        $('#button6').on('click', function(){    
            var text = $("#formControlTextarea6").val();
                localStorage.setItem('text-saved6', text);
                $("#formControlTextarea6").val(localStorage.getItem('text-saved6'));
        });
        $('#button7').on('click', function(){    
            var text = $("#formControlTextarea7").val();
                localStorage.setItem('text-saved7', text);
                $("#formControlTextarea7").val(localStorage.getItem('text-saved7'));
        });
        $('#button8').on('click', function(){    
            var text = $("#formControlTextarea8").val();
                localStorage.setItem('text-saved8', text);
                $("#formControlTextarea8").val(localStorage.getItem('text-saved8'));
        });
        $('#button9').on('click', function(){    
            var text = $("#formControlTextarea9").val();
                localStorage.setItem('text-saved9', text);
                $("#formControlTextarea9").val(localStorage.getItem('text-saved9'));
        });

});


