$(document).ready(function () {

    var bill = 0
    var porcentaje = 0
    var personas = 0
    var ultid = 0;

    $('.dato').focus(Element => { 
        Element.target.className = 'dato foco'
    });
    $('.dato').blur(Element => { 
        Element.target.className = 'dato sinfoco'
    });

    function validar(valor,id){
        if(valor != 0){
            document.getElementById(id).className = 'dato'
            document.getElementById("s"+id).className = 'spanhidden'
            console.log(valor)
            total()
        }
        else{
            document.getElementById(id).className = 'dato datozero'
            document.getElementById("s"+id).className = 'spanvis'
        }
    }

    $('#bill').on('input', function(){
        bill = $('#bill').val()
        validar(bill,'bill')
    })

    $("#porcentajes .porcent").click(Element => { 
        $("#custom").val("")
        let value = Element.target.id
        porcentaje = value/100
        document.getElementById(value).className = 'porcent2 float'
        if(ultid!=value & ultid!=0){document.getElementById(ultid).className = 'porcent float'}
        ultid = value

        total()
    })

    $("#custom").on('input', Element => {
        if(ultid!=0){document.getElementById(ultid).className = 'porcent float'}
        let value = Element.target.value
        porcentaje = value/100
        
        total()
    })

    $("#nump").on('input', Element => {
        personas = Element.target.value
        validar(personas,'nump')
    })

    function total(){
        if(bill != 0 & porcentaje != 0 & personas != 0){
            let tipm = (bill*porcentaje)/personas
            let total = (bill/personas)+tipm
            document.getElementById('tipm').innerHTML = '$' + tipm.toFixed(2)
            document.getElementById('t').innerHTML = '$' + total.toFixed(2)
        }
    }    

    $("#reset").click(function(){
        $("#bill").val("")
        bill = 0

        if(ultid!=0){document.getElementById(ultid).className = 'porcent float'}
        $("#custom").val("")
        porcentaje = 0

        $("#nump").val("")
        personas = 0

        ultid = 0

        document.getElementById('tipm').innerHTML = '$0.00'
        document.getElementById('t').innerHTML = '$0.00'

        document.getElementById('bill').className = 'dato'
        document.getElementById('nump').className = 'dato'
        document.getElementById("sbill").className = 'spanhidden'
        document.getElementById("sbill").className = 'spanhidden'
    })
});

