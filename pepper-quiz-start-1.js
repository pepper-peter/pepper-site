document.getElementById("Submit").onclick = function passDogName() {
    var dog_name = document.getElementById("dog_name").value;
    localStorage.setItem("dog_name",dog_name);
    console.log(dog_name);
    return false;
};

var Vage = 1.4;
var Vspayed = 1;
var Vactivity = 1;
var Vtreats = 0.9;
var kpd = 0;
var gpd = 0;
var kpdf = 0;
var gpdf = 0;
var Vbodyshape = 1;
var Vcurrentweight = 0;
var Vgoalweight = 0;
var ppd = 0;
var ppdh = 0;
var sppd_stone = 0;
var stone_price_coef = 4.6; //price per kg
var sppd_mobility = 0;
var mobility_price_coef = 2.2; //price per kg
var sppd_ut = 0;
var ut_price_coef = 1; //price per kg
var sppd_liver = 0;
var liver_price_coef = 2.7; //price per kg
var sppd_shine = 0;
var shine_price_coef = 1; //price per kg
var sppd_chill = 0;
var chill_price_coef = 1.2; //price per kg
var sppd_vision = 0;
var vision_price_coef = 2.5; //price per kg
var sppd_boost = 0;
var boost_price_coef = 2.1; //price per kg
var period = 0;
var final_kcal;
var final_ppd;
var final_shipping;
var final_stone_ppd = 0;
var final_mobility_ppd = 0;
var final_ut_ppd = 0;
var final_liver_ppd = 0;
var final_shine_ppd = 0;
var final_vision_ppd = 0;
var final_chill_ppd = 0;
var final_boost_ppd = 0;
var final_sup_ppd = 0;
var final_food_price_total = 0;
var final_sup_price_total = 0;
var final_order_price_total = 0;
var final_discount_amount = 0;



$('.final-button').on('click', function(){
   
    if($("input[name='plan_selection'][value='Half']").is(":checked")){
        $('.final_plan_selected').text("半餐方案");
        $('.final_plan_selected').val("半餐方案");
        final_kcal = kpdf;
        final_ppd = ppdh;
        final_shipping = 200;
        $('.final_kcal_out').text(final_kcal);
        $('.final_kcal_out').val(final_kcal);
        $('.final_ppd').text(final_ppd);
        $('.final_ppd').val(final_ppd);
        $('.final_shipping_fee').text("$"+final_shipping);
        $('.final_shipping_fee').val(final_shipping);
        $('.sup-block').addClass('hide-block');
	$("input[name='supplement_selection_stone']").prop("checked",false).prev('.w-checkbox-input').removeClass('w--redirected-checked');
	$("input[name='supplement_selection_mobility']").prop("checked",false).prev('.w-checkbox-input').removeClass('w--redirected-checked');
	$("input[name='supplement_selection_ut']").prop("checked",false).prev('.w-checkbox-input').removeClass('w--redirected-checked');
	$("input[name='supplement_selection_liver']").prop("checked",false).prev('.w-checkbox-input').removeClass('w--redirected-checked');
	$("input[name='supplement_selection_shine']").prop("checked",false).prev('.w-checkbox-input').removeClass('w--redirected-checked');
	$("input[name='supplement_selection_vision']").prop("checked",false).prev('.w-checkbox-input').removeClass('w--redirected-checked');
	$("input[name='supplement_selection_chill']").prop("checked",false).prev('.w-checkbox-input').removeClass('w--redirected-checked');
	$("input[name='supplement_selection_boost']").prop("checked",false).prev('.w-checkbox-input').removeClass('w--redirected-checked');

    }else{
        $('.final_plan_selected').text("全餐方案");
        $('.final_plan_selected').val("全餐方案");
        final_kcal = kpd;
        final_ppd = ppd;
        final_shipping = 0;
        $('.final_kcal_out').text(final_kcal);
        $('.final_kcal_out').val(final_kcal);
        $('.final_ppd').text(final_ppd);
        $('.final_ppd').val(final_ppd);
        $('.final_shipping_fee').text("免運");
        $('.final_shipping_fee').val(final_shipping);
        $('.sup-block').removeClass('hide-block');
    }

    if($('.sup-check:checked').length==0){
        $('.no-sup').removeClass('hide-block'); 
    }else{
        $('.no-sup').addClass('hide-block');
      }

    
    if($("input[name='recipe_selection_duck']").is(":checked")){
        $('.final_duck_selected').removeClass('hide-block');
        }else{
        $('.final_duck_selected').addClass('hide-block');}
    if($("input[name='recipe_selection_beef']").is(":checked")){
        $('.final_beef_selected').removeClass('hide-block');
        }else{
        $('.final_beef_selected').addClass('hide-block');}
    if($("input[name='recipe_selection_lamb']").is(":checked")){
        $('.final_lamb_selected').removeClass('hide-block');
        }else{
        $('.final_lamb_selected').addClass('hide-block');}
    if($("input[name='recipe_selection_chicken']").is(":checked")){
        $('.final_chicken_selected').removeClass('hide-block');
        }else{
        $('.final_chicken_selected').addClass('hide-block');}

    if($("input[name='supplement_selection_stone']").is(":checked")){
        $('.final_stone_selected').removeClass('hide-block');
        final_stone_ppd = sppd_stone;
        $('.final_stone_ppd').text(final_stone_ppd);
        }else{
        $('.final_stone_selected').addClass('hide-block');
        final_stone_ppd = 0;
        $('.final_stone_ppd').text(final_stone_ppd);}
    if($("input[name='supplement_selection_mobility']").is(":checked")){
        $('.final_mobility_selected').removeClass('hide-block');
        final_mobility_ppd = sppd_mobility;
        $('.final_mobility_ppd').text(final_mobility_ppd);
        }else{
        $('.final_mobility_selected').addClass('hide-block');
        final_mobility_ppd = 0;
        $('.final_mobility_ppd').text(final_mobility_ppd);}
    if($("input[name='supplement_selection_ut']").is(":checked")){
        $('.final_ut_selected').removeClass('hide-block');
        final_ut_ppd = sppd_ut;
        $('.final_ut_ppd').text(final_ut_ppd);
        }else{
        $('.final_ut_selected').addClass('hide-block');
        final_ut_ppd = 0;
        $('.final_ut_ppd').text(final_ut_ppd);}
    if($("input[name='supplement_selection_liver']").is(":checked")){
        $('.final_liver_selected').removeClass('hide-block');
        final_liver_ppd = sppd_liver;
        $('.final_liver_ppd').text(final_liver_ppd);
        }else{
        $('.final_liver_selected').addClass('hide-block');
        final_liver_ppd = 0;
        $('.final_liver_ppd').text(final_liver_ppd);}
    if($("input[name='supplement_selection_shine']").is(":checked")){
        $('.final_shine_selected').removeClass('hide-block');
        final_shine_ppd = sppd_shine;
        $('.final_shine_ppd').text(final_shine_ppd);
        }else{
        $('.final_shine_selected').addClass('hide-block');
        final_shine_ppd = 0;
        $('.final_shine_ppd').text(final_shine_ppd);}
    if($("input[name='supplement_selection_vision']").is(":checked")){
        $('.final_vision_selected').removeClass('hide-block');
        final_vision_ppd = sppd_vision;
        $('.final_vision_ppd').text(final_vision_ppd);
        }else{
        $('.final_vision_selected').addClass('hide-block');
        final_vision_ppd = 0;
        $('.final_vision_ppd').text(final_vision_ppd);}
    if($("input[name='supplement_selection_chill']").is(":checked")){
        $('.final_chill_selected').removeClass('hide-block');
        final_chill_ppd = sppd_chill;
        $('.final_chill_ppd').text(final_chill_ppd);
        }else{
        $('.final_chill_selected').addClass('hide-block');
        final_chill_ppd = 0;
        $('.final_chill_ppd').text(final_chill_ppd);}
    if($("input[name='supplement_selection_boost']").is(":checked")){
        $('.final_boost_selected').removeClass('hide-block');
        final_boost_ppd = sppd_boost;
        $('.final_boost_ppd').text(final_boost_ppd);
        }else{
        $('.final_boost_selected').addClass('hide-block');
        final_boost_ppd = 0;
        $('.final_boost_ppd').text(final_boost_ppd);}

    final_sup_ppd = final_vision_ppd + final_stone_ppd + final_mobility_ppd + 
    final_ut_ppd + final_liver_ppd + final_shine_ppd + final_chill_ppd + final_boost_ppd

    final_food_price_total = final_ppd*period;
    final_sup_price_total = final_sup_ppd*period;
    final_order_price_total = final_food_price_total + final_sup_price_total + final_shipping - final_discount_amount;
    $('.final_sup_ppd').text(final_sup_ppd);
    $('.final_sup_ppd').val(final_sup_ppd);
    $('.final_food_price_total').text(final_food_price_total);
    $('.final_food_price_total').val(final_food_price_total);
    $('.final_sup_price_total').text(final_sup_price_total);
    $('.final_sup_price_total').val(final_sup_price_total);
    $('.final_order_price_total').text(final_order_price_total);
    $('.final_order_price_total').val(final_order_price_total);
});

$('.discount-check-button').on('click',function(){
    //9折
    if($('#final_discount_code').val() == "HiPepper10"){
        final_discount_amount = Math.round((final_food_price_total + final_sup_price_total)*0.1);
        final_order_price_total = final_food_price_total + final_sup_price_total + final_shipping - final_discount_amount;
        $('#final_discount_code').val('');
        $('.discount-error-message').addClass('hide-block');
        //$('.discount-input-block').addClass('hide-block');
        $('.discount-success-block').removeClass('hide-block');
        $('.discount-code-name').text("HiPepper10 (為您第一箱打9折!)");
        $('.final_discount_amount').text("- $"+final_discount_amount);
        $('.final_discount_amount').val(final_discount_amount);
        $('.final_order_price_total').text(final_order_price_total);
        $('.final_order_price_total').val(final_order_price_total);

    }
    //7折
    else if($('#final_discount_code').val() == "HiPepper30"){
        final_discount_amount = Math.round((final_food_price_total + final_sup_price_total)*0.3);
        final_order_price_total = final_food_price_total + final_sup_price_total + final_shipping - final_discount_amount;
        $('#final_discount_code').val('');
        $('.discount-error-message').addClass('hide-block');
        //$('.discount-input-block').addClass('hide-block');
        $('.discount-success-block').removeClass('hide-block');
        $('.discount-code-name').text("HiPepper30 (為您第一箱打7折!)");
        $('.final_discount_amount').text("- $"+final_discount_amount);
        $('.final_discount_amount').val(final_discount_amount);
        $('.final_order_price_total').text(final_order_price_total);
        $('.final_order_price_total').val(final_order_price_total);
    }
    //5折
    else if($('#final_discount_code').val() == "HiPepper50"){
        final_discount_amount = Math.round((final_food_price_total + final_sup_price_total)*0.5);
        final_order_price_total = final_food_price_total + final_sup_price_total + final_shipping - final_discount_amount;
        $('.discount-error-message').addClass('hide-block');
        $('#final_discount_code').val('');
        //$('.discount-input-block').addClass('hide-block');
        $('.discount-success-block').removeClass('hide-block');
        $('.discount-code-name').text("HiPepper50 (為您第一箱打5折!)");
        $('.final_discount_amount').text("- $"+final_discount_amount);
        $('.final_order_price_total').text(final_order_price_total);

    }
    //免單
    else if($('#final_discount_code').val() == "VVVIP"){
        final_discount_amount = (final_food_price_total + final_sup_price_total);
        final_order_price_total = final_food_price_total + final_sup_price_total + final_shipping - final_discount_amount;
        $('#final_discount_code').val('');
        $('.discount-error-message').addClass('hide-block');
        //$('.discount-input-block').addClass('hide-block');
        $('.discount-success-block').removeClass('hide-block');
        $('.discount-code-name').text("VVVIP (為您第一箱免單!)");
        $('.final_discount_amount').text("- $"+final_discount_amount);
        $('.final_discount_amount').val(final_discount_amount);
        $('.final_order_price_total').text(final_order_price_total);
        $('.final_order_price_total').val(final_order_price_total);
    }
    //錯誤
    else{
        final_discount_amount = 0;
        final_order_price_total = final_food_price_total + final_sup_price_total + final_shipping - final_discount_amount;
        $('#final_discount_code').val('');
        $('.discount-error-message').removeClass('hide-block');
        $('.discount-input-block').removeClass('hide-block');
        $('.discount-success-block').addClass('hide-block');
    }
});

$('.remove-discount').on('click', function(){
    final_discount_amount = 0;
    final_order_price_total = final_food_price_total + final_sup_price_total + final_shipping - final_discount_amount;
    $('.discount-input-block').removeClass('hide-block');
    $('.discount-success-block').addClass('hide-block');
    $('.final_discount_amount').text("— ");
    $('.final_discount_amount').val(final_discount_amount);
    $('.final_order_price_total').text(final_order_price_total);
    $('.final_order_price_total').val(final_order_price_total);
});

$('form input').on('keypress', function(e) {
    return e.which !== 13;
});

$('#dog_name').on('focusout', function(){
	$('.dog_name_out').text($(this).val());
});


$('#owner_email').on('keyup', function(){
	$('.final_owner_email').attr("value",$(this).val());
});

$('.email-button').on('click',function(){
    if(Vbodyshape == 1){
        sppd_stone = Math.round(Vcurrentweight*stone_price_coef);
        sppd_mobility = Math.round(Vcurrentweight*mobility_price_coef);
        sppd_ut = Math.round(Vcurrentweight*ut_price_coef);
        sppd_liver = Math.round(Vcurrentweight*liver_price_coef);
        sppd_shine = Math.round(Vcurrentweight*shine_price_coef);
        sppd_chill = Math.round(Vcurrentweight*chill_price_coef);
        sppd_vision = Math.round(Vcurrentweight*vision_price_coef);
        sppd_boost = Math.round(Vcurrentweight*boost_price_coef);
        kpd = Math.round((((Vcurrentweight)**.75)*70*Vage*Vspayed*Vactivity*Vtreats)/10)*10;
	gpd = Math.round((kpd/1.3)/10)*10;
    }else{
        sppd_stone = Math.round(Vgoalweight*stone_price_coef);
        sppd_mobility = Math.round(Vgoalweight*mobility_price_coef);
        sppd_ut = Math.round(Vgoalweight*ut_price_coef);
        sppd_liver = Math.round(Vgoalweight*liver_price_coef);
        sppd_shine = Math.round(Vgoalweight*shine_price_coef);
        sppd_chill = Math.round(Vgoalweight*chill_price_coef);
        sppd_vision = Math.round(Vgoalweight*vision_price_coef);
        sppd_boost = Math.round(Vgoalweight*boost_price_coef);
        kpd = Math.round((((Vgoalweight)**.75)*70*Vage*Vspayed*Vactivity*Vtreats)/10)*10;
	gpd = Math.round((kpd/1.3)/10)*10;
    }
    kpdf = kpd/2;
    gpdf = gpd/2;
    $('.dog_gram_out').text(gpd);
    $('.dog_gram_out_half').text(gpdf);
    $('.dog_kcal_out').text(kpd);
    $('.dog_kcal_out_half').text(kpdf);
    ppd = Math.round(kpd*0.48);
    ppdh =Math.round(kpd*0.48*0.6);
    $('.plan_ppd_full_out').text(ppd);
    $('.plan_ppd_half_out').text(ppdh);
    $('.sup_ppd_out_stone').text(sppd_stone);
    $('.sup_ppd_out_mobility').text(sppd_mobility);
    $('.sup_ppd_out_ut').text(sppd_ut);
    $('.sup_ppd_out_liver').text(sppd_liver);
    $('.sup_ppd_out_shine').text(sppd_shine);
    $('.sup_ppd_out_chill').text(sppd_chill);
    $('.sup_ppd_out_vision').text(sppd_vision);
    $('.sup_ppd_out_boost').text(sppd_boost);
    if(kpd < 130){
        period = 80;
    }else if(kpd>=130 && kpd <160){
        period = 65;
    }else if(kpd>=160 && kpd <190){
        period = 55;
    }else if(kpd>=190 && kpd <240){
        period = 45;
    }else if(kpd>=240 && kpd <330){
        period = 35;
    }else if(kpd>=330 && kpd <430){
        period = 28;
    }else if(kpd>=430 && kpd <600){
        period = 21;
    }else if(kpd>=600 && kpd <880){
        period = 14;
    }else if(kpd>=880 && kpd <1220){
        period = 10;
    }else if(kpd>=1230){
        period = 7;
    }
    $('.plan_period_out').text(period);
    $('.plan_period_out').val(period);
});

$('#dog_currentweight').change(function(){
    Vcurrentweight = $(this).val();
});

$('#dog_bodygoalweight').change(function(){
    Vgoalweight = $(this).val();
});

$('#dog_agemonthyear').change(function(){
	if($('#dog_agemonthyear').val() == 2 && $('#dog_agenum').val() < 11){
		Vage = 1.7;}
	else{
		Vage = 1.4;}
});
  
$('#dog_agenum').change(function(){
	if($('#dog_agemonthyear').val() == 2 && $('#dog_agenum').val() < 11){
		Vage = 1.7;}
	else{
		Vage = 1.4;}
});

$('#dog_spayed').change(function(){
	if($(this).val() == 2){
	Vspayed = 1.2;
    }else{
	    Vspayed = 1;
    }
  });


/*$('#dog_activity').change(function(){
	if ($(this).val() == 1){
		Vactivity = .9;
	}else if($(this).val() == 3){
		Vactivity = 1.1;}
	else{
		Vactivity = 1;}
});*/



$('#dog_treatsfrequency').change(function(){
	if ($(this).val() == 2){
		Vtreats = 1;
	}else if($(this).val() == 3){
		Vtreats = 0.8;}
	else{
		Vtreats = 0.9;}
});

$("input[name='plan_selection'][value='Full']").attr("checked",true).prev('.w-radio-input').addClass('w--redirected-checked');
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

var x = "validity.valid||(value='')";
$('#dog_agenum').attr("oninput",x);
$('#dog_currentweight').attr("oninput",x);
$('#dog_bodygoalweight').attr("oninput",x);


$('#owner_priority').on('change', function() {
  if($('#owner_priority').val()=='3' && $(window).width() > 767){
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
        $('.div-block-step-2').removeClass('hide-block');
        $('.move-down-block-2').addClass('hide-block');
    }else if($('#owner_priority').val()=='3' && $(window).width() <= 767){
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
        $('.div-block-step-2-mobile').removeClass('hide-block-mobile');
        $('.move-down-block-2-mobile').addClass('hide-block-mobile');
	}else if($('#owner_priority').val()=='2' && $(window).width() > 767){
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
        $('.move-down-block-2').removeClass('hide-block'); 
        $('.div-block-step-2').addClass('hide-block'); 
   }else if($('#owner_priority').val()=='2' && $(window).width() <= 767){
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
        $('.div-block-step-2-mobile').addClass('hide-block-mobile');
        $('.move-down-block-2-mobile').removeClass('hide-block-mobile');
   }else if (($('#owner_priority').val()=='1' && $(window).width() > 767)){
        $("input[name='plan_selection'][value='Full']").attr("checked",true).prev('.w-radio-input').addClass('w--redirected-checked');
        $("input[name='plan_selection'][value='Half']").attr("checked",false).prev('.w-radio-input').removeClass('w--redirected-checked');
        PRF.removeClass('hide-message');
        PRH.addClass('hide-message');
        OPD1.removeClass('hide-message');
        OPD2.addClass('hide-message');
        OPD3.addClass('hide-message');
        OP1.removeClass('hide-message');
        OP2.addClass('hide-message');
        OP3.addClass('hide-message');
        $('.move-down-block-2').removeClass('hide-block');
        $('.div-block-step-2').addClass('hide-block');
  }else if (($('#owner_priority').val()=='1' && $(window).width() <= 767)){
        $("input[name='plan_selection'][value='Full']").attr("checked",true).prev('.w-radio-input').addClass('w--redirected-checked');
        $("input[name='plan_selection'][value='Half']").attr("checked",false).prev('.w-radio-input').removeClass('w--redirected-checked');
        PRF.removeClass('hide-message');
        PRH.addClass('hide-message');
        OPD1.removeClass('hide-message');
        OPD2.addClass('hide-message');
        OPD3.addClass('hide-message');
        OP1.removeClass('hide-message');
        OP2.addClass('hide-message');
        OP3.addClass('hide-message');
        $('.div-block-step-2-mobile').addClass('hide-block-mobile');
        $('.move-down-block-2-mobile').removeClass('hide-block-mobile');
  }
});


$("input[tag='bodyshape']" ).addClass('bodyshape-check');
$("input[tag='activity']" ).addClass('activity-check');
$("input[tag='recipe-check']" ).addClass('recipe-check');
$("input[tag='sup-check']" ).addClass('sup-check');
$("input[tag='allergy-check']" ).addClass('allergy-check');
$("input[tag='isAllergy-check']" ).addClass('isAllergy-check');
$("input[tag='condition-check']" ).addClass('condition-check');
$("input[tag='isCondition-check']" ).addClass('isCondition-check');


$('#dog_gender').change(function() {
    if ($(this).val()=="M"){
       $('.dog_gender_out_m').removeClass('hide-block');
	 $('.dog_gender_out_f').addClass('hide-block');;
    } else{
       $('.dog_gender_out_m').addClass('hide-block');;
	 $('.dog_gender_out_f').removeClass('hide-block');}
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
   $('#dog_bodygoalweight').val('');
   $('.bodyshape-button').removeClass("button-active");
   $('html,body').animate({scrollTop: $('#goalweight-block').offset().top},'slow');
   BGOG.addClass('show-text');
   BGOS.removeClass('show-text');
   BGOC.removeClass('show-text');
   Vbodyshape = 2;
  }else if($("input[name='dog_bodyshape'][value='3']").is(":checked")){
	 $('.body-goal').removeClass("remove-wrap");
   $('#dog_bodygoalweight').val('');
   $('.bodyshape-button').removeClass("button-active");
   $('html,body').animate({scrollTop: $('#goalweight-block').offset().top},'slow');
   BGOC.addClass('show-text');
   BGOS.removeClass('show-text');
   BGOG.removeClass('show-text');
   Vbodyshape = 2;
	}else if($("input[name='dog_bodyshape'][value='2']").is(":checked")){
	 $('.body-goal').addClass("remove-wrap");
   $('#dog_bodygoalweight').val('');
   $('.bodyshape-button').addClass("button-active");
   BGOS.addClass('show-text');
   BGOG.removeClass('show-text');
   BGOC.removeClass('show-text');
   Vbodyshape = 1;
	}
});


$('.activity-check').change(function(){
	if($("input[name='dog_activity'][value='1']").is(":checked")){
   		Vactivity = 0.9;
  	}else if($("input[name='dog_activity'][value='3']").is(":checked")){
   		Vactivity = 1.1;
	}else if($("input[name='dog_activity'][value='2']").is(":checked")){
   		Vactivity = 1;
	}
});

$('.isAllergy-check').change(function(){
	if($("input[name='dog_isAllergy'][value='Yes']").is(":checked")){
	 $('.allergy-ingre-button').removeClass("button-active");
     $('.allergy-option-block').removeClass("pointer-none");
     $('.recipe_recommendation_out_1').show();
     $('.recipe_recommendation_out_2').hide();
  }else{
   $('.allergy-ingre-button').addClass("button-active");
   $('.allergy-option-block').addClass("pointer-none");
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
    $('.condition-option-block').removeClass("pointer-none");
	$('.sup_recommendation_out_1').show();
    $('.sup_recommendation_out_2').hide();
	$('.condition-option-button').removeClass("button-active");
  }else{
    $('.condition-option-block').addClass("pointer-none");
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
    if ($(window).width() > 767) {
        if($('.recipe-check:checked').length==0){
            $('.move-down-block').addClass('hide-block'); 
            $('.if-recipe-checked').hide(); 
            $('.if-plan-checked').hide();
        }else{
            $('.move-down-block').removeClass('hide-block'); 
        }
    }else{
        if($('.recipe-check:checked').length==0){
            $('.move-down-block-mobile').addClass('hide-block-mobile'); 
            $('.if-recipe-checked').hide(); 
            $('.if-plan-checked').hide();
        }else{
            $('.move-down-block-mobile').removeClass('hide-block-mobile'); 
        }
    }
});

$('.move-down-button').on('click', function(){
    $('.if-recipe-checked').show();
});

$('.move-down-button-2').on('click', function(){
    $('.if-plan-checked').show();
    if($(window).width()>767){
        $('.div-block-step-3').removeClass('hide-block');
        $('.div-block-step-3-mobile').addClass('hide-block-mobile');
    }else if ($(window).width()<=767){
        $('.div-block-step-3-mobile').removeClass('hide-block-mobile');
        $('.div-block-step-3').addClass('hide-block');
    }
});

