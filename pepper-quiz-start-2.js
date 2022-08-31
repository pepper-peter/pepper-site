document.addEventListener('DOMContentLoaded', () => {
 document.querySelectorAll('.open-modal').forEach(trigger => {
  trigger.addEventListener('click', function(){ 
    document.querySelectorAll('body').forEach(target => target.classList.add('do-not-scroll'));
    document.querySelectorAll('.page-wrapper').forEach(target => target.classList.add('do-not-scroll')); 
    });
 });

 document.querySelectorAll('.close-me-tab').forEach(trigger => {
  trigger.addEventListener('click', function(){ 
    document.querySelectorAll('body').forEach(target => target.classList.remove('do-not-scroll'));
    document.querySelectorAll('.page-wrapper').forEach(target => target.classList.remove('do-not-scroll')); 
    });
 });

 document.querySelectorAll('.modal-close-outside-wrapper').forEach(trigger => {
  trigger.addEventListener('click', function(){ 
    document.querySelectorAll('body').forEach(target => target.classList.remove('do-not-scroll'));
    document.querySelectorAll('.page-wrapper').forEach(target => target.classList.remove('do-not-scroll')); 
    });
 });
});
