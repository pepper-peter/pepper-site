document.getElementById("Submit").onclick = function passDogName() {
    var dog_name = document.getElementById("dog_name").value;
    localStorage.setItem("dog_name",dog_name);
    console.log(dog_name);
    return false;
};

$('form input').on('keypress', function(e) {
    return e.which !== 13;
});

$('#dog_name').on('keyup', function(){
	$('.dog_name_out').text($(this).val());
});

$('#owner_email').on('keyup', function(){
	$('.final_owner_email').attr("value",$(this).val());
});

$("input[name='dog_isAllergy'][value='No']").attr("checked",true).prev('.w-radio-input').addClass('w--redirected-checked');
$("input[name='dog_isCondition'][value='No']").attr("checked",true).prev('.w-radio-input').addClass('w--redirected-checked');

var PRF = $('.plan_recommendation_out_full');
var PRH = $('.plan_recommendation_out_half');
var OPD1 = $('.owner_priority_detail_out_1');
var OPD2 = $('.owner_priority_detail_out_2');
var OPD3 = $('.owner_priority_detail_out_3');
var OP1 = $('.owner_priority_out_1');
var OP2 = $('.owner_priority_out_2');
var OP3 = $('.owner_priority_out_3');

$('#owner_priority').on('change', function() {
  if($('#owner_priority').val()=='3'){
  	$("input[name='plan_selection'][value='Half']").attr("checked",true).prev('.w-radio-input').addClass('w--redirected-checked');
    $("input[name='plan_selection'][value='Full']").attr("checked",false).prev('.w-radio-input').removeClass('w--redirected-checked');;
    PRF.addClass('hide-message');
    PRH.removeClass('hide-message');
    OPD1.addClass('hide-message');
    OPD2.addClass('hide-message');
    OPD3.removeClass('hide-message');
    OP1.addClass('hide-message');
    OP2.addClass('hide-message');
    OP3.removeClass('hide-message');
	}else if($('#owner_priority').val()=='2'){
  	$("input[name='plan_selection'][value='Full']").attr("checked",true).prev('.w-radio-input').addClass('w--redirected-checked');
    $("input[name='plan_selection'][value='Half']").attr("checked",false).prev('.w-radio-input').removeClass('w--redirected-checked');;
    PRF.removeClass('hide-message');
    PRH.addClass('hide-message');
    OPD1.addClass('hide-message');
    OPD2.removeClass('hide-message');
    OPD3.addClass('hide-message');
    OP1.addClass('hide-message');
    OP2.removeClass('hide-message');
    OP3.addClass('hide-message');
   }else if($('#owner_priority').val()=='1'){
    $("input[name='plan_selection'][value='Full']").attr("checked",true).prev('.w-radio-input').addClass('w--redirected-checked');
    $("input[name='plan_selection'][value='Half']").attr("checked",false).prev('.w-radio-input').removeClass('w--redirected-checked');
	  PRF.removeClass('hide-message');
    PRH.addClass('hide-message');
    OPD1.removeClass('hide-message');
    OPD2.addClass('hide-message');
    OPD3.addClass('hide-message');
    OP1.removeClass('hide-message');
    OP1.addClass('hide-message');
    OP1.addClass('hide-message');
  }
});


$("input[tag='bodyshape']" ).addClass('bodyshape-check');
$("input[tag='activity']" ).addClass('activity-check');
$("input[tag='recipe-check']" ).addClass('recipe-check');
$("input[tag='allergy-check']" ).addClass('allergy-check');
$("input[tag='isAllergy-check']" ).addClass('isAllergy-check');
$("input[tag='condition-check']" ).addClass('condition-check');
$("input[tag='isCondition-check']" ).addClass('isCondition-check');


$('#dog_gender').change(function() {
    if ($(this).val()=="F"){
       $('.dog_gender_out_m').hide();
	 $('.dog_gender_out_f').show();
    } else{
       $('.dog_gender_out_m').show();
	 $('.dog_gender_out_f').hide();}
});

$('.activity-check').change(function(){
	if($('.activity-check:checked').length!=0){
   $('.activity-button').addClass('button-active');
  }
});

var BGOG = $('.dog_bodygoal_out_gain');
var BGOS = $('.dog_bodygoal_out_stay');
var BGOC = $('.dog_bodygoal_out_cut');

$('.bodyshape-check').change(function(){
	if($("input[name='dog_bodyshape'][value='1']").is(":checked")){
	 $('.body-goal').removeClass("remove-wrap");
   $('#dog-bodygoalweight').val('');
   $('.bodyshape-button').removeClass("button-active");
   BGOG.addClass('show-text');
   BGOS.removeClass('show-text');
   BGOC.removeClass('show-text');
  }else if($("input[name='dog_bodyshape'][value='3']").is(":checked")){
	 $('.body-goal').removeClass("remove-wrap");
   $('#dog-bodygoalweight').val('');
   $('.bodyshape-button').removeClass("button-active");
   BGOC.addClass('show-text');
   BGOS.removeClass('show-text');
   BGOG.removeClass('show-text');
	}else if($("input[name='dog_bodyshape'][value='2']").is(":checked")){
	 $('.body-goal').addClass("remove-wrap");
   $('#dog-bodygoalweight').val('');
   $('.bodyshape-button').addClass("button-active");
   BGOS.addClass('show-text');
   BGOG.removeClass('show-text');
   BGOC.removeClass('show-text');
	}
});

$('.isAllergy-check').change(function(){
	if($("input[name='dog_isAllergy'][value='Yes']").is(":checked")){
	 $('.allergy-ingre-button').removeClass("button-active");
   $('.recipe_recommendation_out_1').show();
   $('.recipe_recommendation_out_2').hide();
  }else{
   $('.allergy-ingre-button').addClass("button-active");
   $('.recipe_recommendation_out_2').show();
   $('.recipe_recommendation_out_1').hide();
   $("input[tag='allergy-check']").prop("checked",false).prev('.w-checkbox-input').removeClass('w--redirected-checked');
   $('.no-recipe-message').removeClass('show-message');
   $('.fishoil-message').removeClass('show-message');
	}
});
   
$('.allergy-check').change(function(){
		if($('.allergy-check:checked').length==0){
    $('.allergy-ingre-button').removeClass("button-active");
    $('.fishoil-message').removeClass('show-message');
 //   $('.no-recipe-message').removeClass('show-message');
	}else if($("input[name='dog_allergy_fishoil']").is(":checked")){
   $('.fishoil-message').addClass('show-message');
   $('.allergy-ingre-button').removeClass("button-active");
 //  $('.no-recipe-message').removeClass('show-message');
  }else {
    $('.allergy-ingre-button').addClass("button-active");
    $('.fishoil-message').removeClass('show-message');
  }
});

var AIB = $('.allergy_ingre_beef');
var RRB = $('.recipe_recommendation_beef');
var AID = $('.allergy_ingre_duck');
var RRD = $('.recipe_recommendation_duck');
var AIL = $('.allergy_ingre_lamb');
var RRL = $('.recipe_recommendation_lamb');
var AIC = $('.allergy_ingre_chicken');
var RRC = $('.recipe_recommendation_chicken');

$('.allergy-check').change(function(){  
	if($("input[name='dog_allergy_beef']").is(":checked")){
		 AIB.show();
  	 RRB.addClass('hide-block');
   	}else{
 		  AIB.hide();
  		RRB.removeClass('hide-block');}
 	if($("input[name='dog_allergy_duck']").is(":checked")){
		 AID.show();
     RRD.addClass('hide-block');
 	  }else{
  	 AID.hide();
     RRD.removeClass('hide-block');}
 	if($("input[name='dog_allergy_lamb']").is(":checked")){
		 AIL.show();
     RRL.addClass('hide-block');
 	  }else{
 		 AIL.hide();
     RRL.removeClass('hide-block');}
 	if($("input[name='dog_allergy_chicken']").is(":checked")){
		 AIC.show();
     RRC.addClass('hide-block');
 	  }else{
 		 AIC.hide();
     RRC.removeClass('hide-block');}
  if($("input[name='dog_allergy_chicken']").is(":checked")&&
  $("input[name='dog_allergy_beef']").is(":checked")&&
  $("input[name='dog_allergy_lamb']").is(":checked")&&
  $("input[name='dog_allergy_duck']").is(":checked")){
  	$('.allergy-ingre-button').removeClass("button-active");
 	 	$('.no-recipe-message').addClass('show-message');
  }else{
 		 $('.no-recipe-message').removeClass('show-message');}
});


$('.isCondition-check').change(function(){
	if($("input[name='dog_isCondition'][value='Yes']").is(":checked")){
	 $('.sup_recommendation_out_1').show();
   $('.sup_recommendation_out_2').hide();
	 $('.condition-option-button').removeClass("button-active");
  }else{
   $("input[tag='condition-check']").prop("checked",false).prev('.w-checkbox-input').removeClass('w--redirected-checked');
   $('.condition-option-button').addClass("button-active");
   $('.sup_recommendation_out_1').hide();
   $('.sup_recommendation_out_2').show();
}
});
   
$('.condition-check').change(function(){
		if($('.condition-check:checked').length==0){
    $('.condition-option-button').removeClass("button-active");
	}else if($('.condition-check:checked').length!=0){
    $('.condition-option-button').addClass("button-active");
  }
});


var SROS = $('.sup_recommendation_out_stone');
var SROM = $('.sup_recommendation_out_mobility');
var SROL = $('.sup_recommendation_out_liver');
var SROSH = $('.sup_recommendation_out_shine');
var SROU = $('.sup_recommendation_out_ut');
var SROC = $('.sup_recommendation_out_chill');
var SROV = $('.sup_recommendation_out_vision');
var SROB = $('.sup_recommendation_out_boost');
$('.condition-check').change(function(){  
	if($("input[name='dog_condition_stone']").is(":checked")){
  	 SROS.removeClass('hide-message');
   	}else{
 		  SROS.addClass('hide-message');}
	if($("input[name='dog_condition_mobility']").is(":checked")){
  	 SROM.removeClass('hide-message');
   	}else{
 		  SROM.addClass('hide-message');}
	if($("input[name='dog_condition_liver']").is(":checked")){
  	 SROL.removeClass('hide-message');
   	}else{
 		  SROL.addClass('hide-message');}
	if($("input[name='dog_condition_shine']").is(":checked")){
  	 SROSH.removeClass('hide-message');
   	}else{
 		  SROSH.addClass('hide-message');}
	if($("input[name='dog_condition_ut']").is(":checked")){
  	 SROU.removeClass('hide-message');
   	}else{
 		  SROU.addClass('hide-message');}
	if($("input[name='dog_condition_chill']").is(":checked")){
  	 SROC.removeClass('hide-message');
   	}else{
 		  SROC.addClass('hide-message');}
	if($("input[name='dog_condition_vision']").is(":checked")){
  	 SROV.removeClass('hide-message');
   	}else{
 		  SROV.addClass('hide-message');}
	if($("input[name='dog_condition_boost]").is(":checked")){
  	 SROB.removeClass('hide-message');
   	}else{
 		  SROB.addClass('hide-message');}
});

$('.recipe-check').change(function(){
if($('.recipe-check:checked').length==0){
    $('.if-recipe-checked').hide(); 
}else{
    $('.if-recipe-checked').show();
  }
});
