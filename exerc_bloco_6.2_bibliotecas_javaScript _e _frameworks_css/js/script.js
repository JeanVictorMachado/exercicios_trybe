window.onload = function() {

    //INICIALIZACAO PIKADAY
    var picker = new Pikaday({
        field: document.getElementById('datepicker'),
        onSelect: function(date) {
            console.log(date);
        }
    });
}