$(document).ready(function () {

    var bill = 0
    var porcentaje = 0
    var personas = 0
    var ultid = 0;

    $('#bill').on('input', function(){
        bill = $('#bill').val()
        console.log(bill)

        total()
    })

    $("#porcentajes .floatp").click(Element => { 
        $("#custom").val("")
        let value = Element.target.id
        porcentaje = value/100
        document.getElementById(value).className = 'floatp2'
        if(ultid!=value & ultid!=0){document.getElementById(ultid).className = 'floatp'}
        ultid = value

        total()
    })

    $("#custom").on('input', Element => {
        if(ultid!=0){document.getElementById(ultid).className = 'floatp'}
        let value = Element.target.value
        porcentaje = value/100
        
        total()
    })

    $("#nump").on('input', Element => {
        personas = Element.target.value
        console.log(personas)

        total()
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

        if(ultid!=0){document.getElementById(ultid).className = 'floatp'}
        $("#custom").val("")
        porcentaje = 0

        $("#nump").val("")
        personas = 0

        ultid = 0

        document.getElementById('tipm').innerHTML = '$0.00'
        document.getElementById('t').innerHTML = '$0.00'
    })
});

