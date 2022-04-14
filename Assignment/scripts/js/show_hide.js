$(document).ready(function (){

    showHome();
})

function showModel($modelName){
    $("#home").hide();
    $("#model").show();

    $('#coke_gallery').hide()
    $('#coke_description_model').hide()
    $('#sprite_gallery').hide()
    $('#sprite_description_model').hide()
    $('#fanta_gallery').hide();
    $('#fanta_description_model').hide();


    switch ($modelName){
        case 'coke':
            $('#coke_gallery').show()
            $('#coke_description_model').show()
            break;
        case 'sprite':
            $('#sprite_gallery').show()
            $('#sprite_description_model').show()
            break;
        case 'fanta':
            $('#fanta_gallery').show();
            $('#fanta_description_model').show();
            break;
        default:
            break;
    }
    switch_brand($modelName);
}

function showHome(){
    brand = 'coke';
    resetColours();
    $("#home").show();
    $("#model").hide();
}



