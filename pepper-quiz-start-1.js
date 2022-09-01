$('form input').on('keypress', function(e) {
    return e.which !== 13;
});

$('#dog_name').on('keyup', function(){
	$('.dog_name_out').text($(this).val());
});

$('#owner_email').on('keyup', function(){
	$('.final_owner_email').attr("value",$(this).val());
});

$("input[name='dog_activity'][value='2']").attr("checked",true).prev('.w-radio-input').addClass('w--redirected-checked');;
$("input[name='dog_bodyshape'][value='2']").attr("checked",true).prev('.w-radio-input').addClass('w--redirected-checked');;
$("input[name='dog_isAllergy'][value='No']").attr("checked",true).prev('.w-radio-input').addClass('w--redirected-checked');;
$("input[name='dog_isCondition'][value='No']").attr("checked",true).prev('.w-radio-input').addClass('w--redirected-checked');;

$('#owner_priority').on('change', function() {
  if($('#owner_priority').val()=='3'){
  	$("input[name='plan_selection'][value='Half']").attr("checked",true).prev('.w-radio-input').addClass('w--redirected-checked');;
    $("input[name='plan_selection'][value='Full']").attr("checked",false).prev('.w-radio-input').removeClass('w--redirected-checked');;
	}else{
  	$("input[name='plan_selection'][value='Full']").attr("checked",true).prev('.w-radio-input').addClass('w--redirected-checked');
    $("input[name='plan_selection'][value='Half']").attr("checked",false).prev('.w-radio-input').removeClass('w--redirected-checked');;
    }
});

$("input[tag='bodyshape']" ).addClass('bodyshape-check');
$("input[tag='recipe-check']" ).addClass('recipe-check');
$("input[tag='allergy-check']" ).addClass('allergy-check');
$("input[tag='isAllergy-check']" ).addClass('isAllergy-check');
$("input[tag='condition-check']" ).addClass('condition-check');
$("input[tag='isCondition-check']" ).addClass('isCondition-check');


$('.bodyshape-check').change(function(){
	if($("input[name='dog_bodyshape'][value='1']").is(":checked")||$("input[name='dog_bodyshape'][value='3']").is(":checked")){
	 $('.body-goal').removeClass("remove-wrap");
   $('.bodyshape-button').removeClass("button-active");
  }else{
	 $('.body-goal').addClass("remove-wrap");
   $('.bodyshape-button').addClass("button-active");
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
	}
});
   
$('.allergy-check').change(function(){
		if($('.allergy-check:checked').length==0){
    $('.allergy-ingre-button').removeClass("button-active");
	}else if($('.allergy-check:checked').length!=0){
    $('.allergy-ingre-button').addClass("button-active");
  }
});

$('.allergy-check').change(function(){
	if($("input[name='dog_allergy_fishoil']").is(":checked")){
	 $('.allergy_ingre_fishoil').show();
   $('.recipe_recommendation_duck').hide();
   $('.recipe_recommendation_beef').hide();
   $('.recipe_recommendation_chicken').hide();
   $('.recipe_recommendation_lamb').hide();
   }else{
   $('.allergy_ingre_fishoil').hide();}
   $('.recipe_recommendation_duck').show();
   $('.recipe_recommendation_beef').show();
   $('.recipe_recommendation_chicken').show();
   $('.recipe_recommendation_lamb').show();
	if($("input[name='dog_allergy_beef']").is(":checked")){
	 $('.allergy_ingre_beef').show();
   $('.recipe_recommendation_beef').hide();
   }else{
   $('.allergy_ingre_beef').hide();}
   $('.recipe_recommendation_beef').show();
 	if($("input[name='dog_allergy_duck']").is(":checked")){
	 $('.allergy_ingre_duck').show();
   }else{
   $('.allergy_ingre_duck').hide();}
 	if($("input[name='dog_allergy_lamb']").is(":checked")){
	 $('.allergy_ingre_lamb').show();
   }else{
   $('.allergy_ingre_lamb').hide();}
 	if($("input[name='dog_allergy_chicken']").is(":checked")){
	 $('.allergy_ingre_chicken').show();
   }else{
   $('.allergy_ingre_chicken').hide();}
 	if($("input[name='dog_allergy_grain']").is(":checked")){
	 $('.allergy_ingre_grain').show();
   }else{
   $('.allergy_ingre_grain').hide();}
 	if($("input[name='dog_allergy_sweetpotato']").is(":checked")){
	 $('.allergy_ingre_sweetpotato').show();
   }else{
   $('.allergy_ingre_sweetpotato').hide();}
 	if($("input[name='dog_allergy_potato']").is(":checked")){
	 $('.allergy_ingre_potato').show();
   }else{
   $('.allergy_ingre_potato').hide();}
});

$('.isCondition-check').change(function(){
	if($("input[name='dog_isCondition'][value='Yes']").is(":checked")){
	 $('.condition-option-button').removeClass("button-active");
  }else{
   $('.condition-option-button').addClass("button-active");
}
});
   
$('.condition-check').change(function(){
		if($('.condition-check:checked').length==0){
    $('.condition-option-button').removeClass("button-active");
	}else if($('.condition-check:checked').length!=0){
    $('.condition-option-button').addClass("button-active");
  }
});

$('.recipe-check').change(function(){
if($('.recipe-check:checked').length==0){
    $('.if-recipe-checked').hide(); 
}else{
    $('.if-recipe-checked').show();
  }
});
