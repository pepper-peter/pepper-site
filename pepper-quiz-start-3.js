Webflow.push(function () {
  const $forwardButton = $(".next-tag");
  const $backButton = $(".link-back");
  const $submitButton = $("#Submit");
  const $form = $("#Pepper-Quiz");

  const tabsClass = "pepper-quiz-tabs";
  const paneClass = "tab-panel";
  const linkClass = "quiz-tab-link";

  const fields = $("input, select, textarea").not(
    ":input[type=button], :input[type=submit], :input[type=reset]"
  );
  
	$forwardButton.on("click", moveForward);
	$backButton.on("click", moveBackward);
	$submitButton.on("click", submitForm);
  $(".form-field").keydown(function() {buttonActive($(this));});
 	$(".form-field").focusout(function(){buttonActive($(this));});
  $(".email-field").keydown(function() {emailValid($(this));});
 	$(".email-field").focusout(function(){emailValid($(this));});
  $(".final-form-field").keydown(function() {buttonActiveSubmit($(this));});
 	$(".final-form-field").focusout(function(){buttonActiveSubmit($(this));});
  
  function emailValid(item){
  	const currentTab = item.closest("." + paneClass);
    const $siblingButton = currentTab.find(".next-tag");
    const email = currentTab.find(".email-field").val();
    let validNew = validateFieldsNext(currentTab);
    if(IsEmail(email) == false || validNew == false) {
			$('.invalid-email-alert').show();
      $siblingButton.removeClass("button-active");
			return false;
    }else{
      $('.invalid-email-alert').hide();
      $siblingButton.addClass("button-active");
     }
   }
 

	function buttonActive(item) {
    const currentTab = item.closest("." + paneClass);
    const $siblingButton = currentTab.find(".next-tag");
    // Validate required fields before moving forward
  	let validNew = validateFieldsNext(currentTab);
  	if (validNew == true) {
      $siblingButton.addClass("button-active");
    }else{
    	$siblingButton.removeClass("button-active");
    }
  }
  
  function buttonActiveSubmit(item) {
  const currentTab = item.closest("." + paneClass);
    const $siblingButtonSubmit = currentTab.find(".submit-tag");
    // Validate required fields before moving forward
  	let validNew = validateFieldsSubmit(currentTab);
  	if (validNew == true) {
      $siblingButtonSubmit.addClass("button-active");
    }else{
    	$siblingButtonSubmit.removeClass("button-active");
    }
  }
  
  function validateFieldsNext(currentTab) {
   let requiredFields = $(currentTab).find(".form-field");
   let required = true;
   for (let index = 0; index < requiredFields.length; index++) {
     const $requiredField = $(requiredFields[index]);
     if ($requiredField.val() == '') {
      required = false; 
     }
    }return required;
  }
   
  
  	function validateFieldsSubmit(currentTab) {
    let requiredFields = $(currentTab).find(".final-form-field");
    let required = true;
    for (let index = 0; index < requiredFields.length; index++) {
      const $requiredField = $(requiredFields[index]);
      if ($requiredField.val() == '') {
       required = false;
      }
    }return required;
  }

  function moveForward(el) {
    el.preventDefault();
    const $target = $(el.currentTarget);
    const currentTab = $target.closest("." + paneClass);
    const tabIndex = $target
      .closest("." + tabsClass)
      .data("current")
      .split(" ")[1];

    let nextIndex = parseInt(tabIndex) + 1;
  
  	$target.closest("." + tabsClass).data("current", "Tab " + nextIndex);
    $("." + linkClass).removeClass("w--current");
    $($("." + linkClass)[nextIndex-1]).addClass("w--current");
    $("." + paneClass).removeClass("w--tab-active");
    $($("." + paneClass)[nextIndex-1]).addClass("w--tab-active");
  }
  
  function moveBackward(el) {
    el.preventDefault();
    const $target = $(el.currentTarget);
    const currentTab = $target.closest("." + paneClass);
    const tabIndex = $target
      .closest("." + tabsClass)
      .data("current")
      .split(" ")[1];

    nextIndex = parseInt(tabIndex) - 1;

    $target.closest("." + tabsClass).data("current", "Tab " + nextIndex);
    $("." + linkClass).removeClass("w--current");
    $($("." + linkClass)[nextIndex - 1]).addClass("w--current");
    $("." + paneClass).removeClass("w--tab-active");
    $($("." + paneClass)[nextIndex - 1]).addClass("w--tab-active");
  }
  
	 function IsEmail(email) {
   	 var regex =/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		 if (!regex.test(email)) {
				return false;
				}else {
				return true;
				}
		}

   function submitForm(e) {
    e.preventDefault();
    $form.submit();
   }
   
});
