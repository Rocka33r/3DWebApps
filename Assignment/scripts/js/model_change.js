var is_spinning = false;
var brand = "coke";

function set_camera(view){
    var cam_string = 'model__' + view + '_cam';
    document.getElementById(cam_string).setAttribute('bind', 'true');
}

function lighting(intensity)
{
    for (let i = 1; i <=4 ; i++) {
        var e = document.getElementById("model__light_" + i)
        e.setAttribute('intensity',intensity);
    }
}

function wireFrame()
{
	var e = document.getElementById('wire');
	e.runtime.togglePoints(true);
}

function set_model_active(id){
    document.getElementById("model__switcher").setAttribute("whichChoice", id)
}

function switch_brand(new_brand){
	switch(new_brand){
		case "coke":
			set_model_active(2);
			urrent_model_type = 2;
			break;
		case "sprite":
			set_model_active(1);
			urrent_model_type = 1;
			break;
		case "fanta":
			set_model_active(0);
			urrent_model_type = 0;
			break;
	}
    brand = new_brand;
    set_can_texture(brand);
    set_cup_texture(brand);
    resetColours();
}

function toggle_spin()
{
    is_spinning = !is_spinning
    document.getElementById('model__coke_bottle-TIMER').setAttribute('enabled', is_spinning);
    document.getElementById('model__sprite_bottle-TIMER').setAttribute('enabled', is_spinning);
    document.getElementById('model__fanta_bottle-TIMER').setAttribute('enabled', is_spinning);
    if(is_spinning){
        document.getElementById('spin_button').style.backgroundImage = 'url(./assets/images/buttons/pause_button.png)';
    }else{
        document.getElementById('spin_button').style.backgroundImage = 'url(./assets/images/buttons/play_button.png)';
    }
}