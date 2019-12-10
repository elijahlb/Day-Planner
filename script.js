$(document).ready(function() {
    $("#date").append(moment().format('MMMM Do YYYY'))
    

    /*var currentTime = moment(currentTime).format("hh:mm:ss")*/

    var currentTime = moment('09:20:00');
    
    var before9 = moment('09:00:01')
    var after9 = moment('10:00:00')
    
    var before10 = moment('10:00:01')
    var after10 = moment('11:00:00')

    var before11 = moment('11:00:01')
    var after11 = moment('12:00:00')

    var before12 = moment('12:00:01')
    var after12 = moment('13:00:00')

    var before13 = moment('13:00:01')
    var after13 = moment('14:00:00')

    var before14 = moment('14:00:01')
    var after14 = moment('15:00:00')

    var before15 = moment('15:00:01')
    var after15 = moment('16:00:00')

    var before16 = moment('16:00:01')
    var after16 = moment('17:00:00')

    var before17 = moment('17:00:01')
    var after17 = moment('18:00:00')

    var timeArr = $(".time").toArray();

    // LOADS SAVED VALUES ---------------------------------------------------------
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



        if (currentTime > before9 || currentTime < after9) {
            var newColor9 = timeArr.slice(1, 9);
            var currentTime9 = timeArr[0];
            $(newColor9).addClass("time-left")
            $(currentTime9).addClass("current-time")

        } else if (currentTime > before10 || currentTime < after10) {
            var past10 = timeArr.slice(0,0)
            var newColor10 = timeArr.slice(2, 9);
            var currentTime10 = timeArr[1];
            $(newColor10).addClass("time-left")
            $(currentTime10).addClass("current-time")
            $(past10).addClass("passed-time")

        } else if (currentTime > before11 || currentTime < after11) {
            var past11 = timeArr.slice(0,1)
            var newColor10 = timeArr.slice(3, 9);
            var currentTime10 = timeArr[1];
            $(newColor10).addClass("time-left")
            $(currentTime10).addClass("current-time")
            $(past11).addClass("passed-time")
            
        }else if (currentTime > before12 || currentTime < after12) {
            var past12 = timeArr.slice(0,2)
            var newColor10 = timeArr.slice(4, 9);
            var currentTime10 = timeArr[1];
            $(newColor10).addClass("time-left")
            $(currentTime10).addClass("current-time")
            console.log("true")
            $(past12).addClass("passed-time")
            
            
        }else if (currentTime > before13 || currentTime < after13) {
            var past13 = timeArr.slice(0,3)
            var newColor10 = timeArr.slice(5, 9);
            var currentTime10 = timeArr[1];
            $(newColor10).addClass("time-left")
            $(currentTime10).addClass("current-time")
            $(past13).addClass("passed-time")
            
        }else if (currentTime > before14 || currentTime < after14) {
            var past14 = timeArr.slice(0,4)
            var newColor10 = timeArr.slice(6, 9);
            var currentTime10 = timeArr[1];
            $(newColor10).addClass("time-left")
            $(currentTime10).addClass("current-time")
            $(past14).addClass("passed-time")
            
        }else if (currentTime > before15 || currentTime < after15) {
            var past15 = timeArr.slice(0,5)
            var newColor10 = timeArr.slice(7, 9);
            var currentTime10 = timeArr[1];
            $(newColor10).addClass("time-left")
            $(currentTime10).addClass("current-time")
            $(past15).addClass("passed-time")
            
        }else if (currentTime > before16 || currentTime < after16) {
            var past16 = timeArr.slice(0,6)
            var newColor10 = timeArr.slice(8, 9);
            var currentTime10 = timeArr[1];
            console.log(past16)
            $(newColor10).addClass("time-left")
            $(currentTime10).addClass("current-time")
            $(past16).addClass("passed-time")
            
        }else if (currentTime > before17 || currentTime < after17) {
            var past17 = timeArr.slice(0,7)
            var newColor10 = timeArr.slice(9, 9);
            var currentTime10 = timeArr[1];
            $(newColor10).addClass("time-left")
            $(currentTime10).addClass("current-time")
            $(past17).addClass("passed-time")
            
        } else {
            var noTime = timeArr.slice(0,9);
            $(noTime).addClass("no-time");
        }

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


