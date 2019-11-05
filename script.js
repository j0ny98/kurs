function suma()
    {
        
        var a = document.getElementById("a").value;
       // alert(a);
    var b = document.getElementById("b").value;
    if(a=="" || b=="")
    {
        document.getElementById("wynik").innerHTML = "Podaj 2 liczby";
    } else
    {
        a=parseFloat(a);
        b=parseFloat(b);
        var suma = a + b;
        document.getElementById("wynik").innerHTML = "wynik dzialania wynosi: "+suma;
    }
    }
    function różnica()
    {
        
        var a = document.getElementById("a").value;
       // alert(a);
    var b = document.getElementById("b").value;
    if(a=="" || b=="")
    {
        document.getElementById("wynik").innerHTML = "Podaj 2 liczby";
    } else
    {
        a=parseFloat(a);
        b=parseFloat(b);
        var suma = a - b;
        document.getElementById("wynik").innerHTML = "wynik dzialania wynosi: "+suma;
    }
    }
    function m()
    {
        
        var a = document.getElementById("a").value;
       // alert(a);
    var b = document.getElementById("b").value;
    if(a=="" || b=="")
    {
        document.getElementById("wynik").innerHTML = "Podaj 2 liczby";
    } else
    {
        a=parseFloat(a);
        b=parseFloat(b);
        var suma = a * b;
        document.getElementById("wynik").innerHTML = "wynik dzialania wynosi: "+suma;
    }
    }
    function d()
    {
        
        var a = document.getElementById("a").value;
       // alert(a);
    var b = document.getElementById("b").value;
    if(a=="" || b=="")
    {
        document.getElementById("wynik").innerHTML = "Podaj 2 liczby";
    } else
    {
        if(b==0)
        {
            document.getElementById("wynik").innerHTML = "Cholero nie dziel przez zero";
        }else
        {
        a=parseFloat(a);
        b=parseFloat(b);
        var suma = a / b;
        document.getElementById("wynik").innerHTML = "wynik dzialania wynosi: "+suma;
        }

    }
    }
