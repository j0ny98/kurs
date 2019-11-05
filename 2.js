function oblicz(dzialanie)
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

        switch(dzialanie)
        {
            case 1:
                    document.getElementById("wynik").innerHTML = "wynik dzialania wynosi: "+ (a+b);
            break;
            case 2:
                    document.getElementById("wynik").innerHTML = "wynik dzialania wynosi: "+ (a-b);
            break;
            case 3:
                    document.getElementById("wynik").innerHTML = "wynik dzialania wynosi: "+ (a*b);
            break;
            case 4:
                    if(b==0)
                    {
                        document.getElementById("wynik").innerHTML = "Cholero nie dziel przez zero";
                    }else
                    {
                    document.getElementById("wynik").innerHTML = "wynik dzialania wynosi: "+(a/b);
                    }
            break;
        }

    }
    };
function jest_cyfra(x)
{
    var dl = x.length;
    for(i=0;i<dl;i++)
    {
        //if(x.charAt(i)=="0" || x.charAt(i)=="1" || x.charAt(i)=="2" || x.charAt(i)=="3" || x.charAt(i)=="4" || x.charAt(i)=="5" || x.charAt(i)=="6" || x.charAt(i)=="7" || x.charAt(i)=="8" || x.charAt(i)=="9")
        if(x.charCodeAt(i)>=48 && x.charCodeAt(i)<=57)
        return true;
    }
    return false;
};
    function wer()
    {
        var haslo = document.getElementById("haslo").value;
        var dl = haslo.length;
        if(haslo=="")
        document.getElementById("wyn").innerHTML = '<span style="color:red;"> Hasło jest puste </span>';
        else if(dl>=7 && jest_cyfra(haslo))
        document.getElementById("wyn").innerHTML = '<span style="color:green;"> Hasło jest Dobre </span>';
        else if(dl>=4 && dl<=6 && jest_cyfra(haslo))
        document.getElementById("wyn").innerHTML = '<span style="color:blue;"> Hasło jest średnie </span>';
        else
        document.getElementById("wyn").innerHTML = '<span style="color:yellow;"> Hasło jest słabe </span>';
    };