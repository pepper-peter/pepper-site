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

$("input[tag='recipe-check']" ).addClass('recipe-check');
$("input[tag='allergy-check']" ).addClass('allergy-check');
$("input[tag='isAllergy-check']" ).addClass('isAllergy-check');
$("input[tag='condition-check']" ).addClass('condition-check');
$("input[tag='isCondition-check']" ).addClass('isCondition-check');

$('.isAllergy-check').change(function(){
	if($("input[name='dog_isAllergy'][value='Yes']").is(":checked")){
	 $('.allergy-ingre-button').removeClass("button-active");
  }else{
   $('.allergy-ingre-button').addClass("button-active");
}
});
   
$('.allergy-check').change(function(){
		if($('.allergy-check:checked').length==0){
    $('.allergy-ingre-button').removeClass("button-active");
	}else if($('.allergy-check:checked').length!=0){
    $('.allergy-ingre-button').addClass("button-active");
  }
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
