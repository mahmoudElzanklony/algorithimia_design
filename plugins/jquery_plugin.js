import $ from 'jquery'
window.$ = $;




$(document).ready(function (){


  // click on dots box
  $('#__nuxt').on('click','.fixed-dots ul li',function (){
    $(this).parent().find('.active').removeClass();
    $(this).addClass('active');
    document.getElementById($(this).attr('to')).scrollIntoView();
  });

  // delete
  $('#__nuxt').on('click','.delete',function (){
    var target = $(event.target);
    Swal.fire({
      title: localStorage.lang == 'ar'?'هل أنت متأكد من عملية المسح':'are you sure from delete operation',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#035397',
      cancelButtonColor: '#aaa',
      confirmButtonText: localStorage.lang == 'ar'?'تأكيد':'confirm',
      cancelButtonText:localStorage.lang == 'ar'?'الغاء':'cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        Toast.fire({
          icon: 'success',
          title: localStorage.lang == 'ar'?'تمت عملية المسح بنجاح':'deleted operation done successfully'
        })
        if(target.attr('parent-until')){
          target.parentsUntil('#__nuxt').eq([target.attr('parent-until')]).remove();
        }
        if(target.hasClass('remove-element')){
           target.parent().parent().parent().remove();
        }
      }
    })

  });




  // preview image at box
  $('#__nuxt').on('change','.preview-image',function (){
    var file_data = event.target.files[0];
    var allowed_extensions = ['png','jpg','jpeg','gif','svg','webp'];
    if(allowed_extensions.includes(file_data.type.split('/')[1])){
      console.log(document.querySelector($(this).attr('selector')));
      document.querySelector($(this).attr('selector')).src = URL.createObjectURL(file_data);
    }else{
      // its not an image
      if(localStorage.lang == 'ar'){
        var msg = 'لقد قمت بتحميل ملف ليس صورة من فضلك حاول مرة اخري';
      }else{
        var msg = 'You uploaded a file not an image please try again';
      }
      Toast.fire({
        icon:'error',
        title:msg,
      })
    }
  });

  $('#__nuxt').on('change','input[type="file"]',function (){
    /*var file_data = event.target.files;
    var name = '';
    for(let item of file_data){
      name += item.name + '  ';
    }
    console.log(name)*/
    console.log(event.target.files.length);
    $(this).next().html(event.target.files.length + ' ' +(event.target.files.length == 1 ? 'file':'files') +' uploaded ');
  });

  $('#__nuxt').on('click','.add_another_item',function (){
    var target = $(event.target);
    var main_section = target.parent().next();
    var output = '<div class="form-group mb-2 position-relative has_icon">';
    output += main_section.html();
    output += '<span class="delete_icon"><i class="red bi bi-trash cursor-pointer delete" parent-until="1"></i></span>';
    output += '</div>';
    target.parent().parent().append(output)
  });

  // toggle between small images
  $('#__nuxt').on('click','.images .small img',function () {
     var src = $(this).attr('src');
     $(this).parent().parent().find('.image img').attr('src',src);
     if($(this).parent().parent().find('a').length > 0){
       $(this).parent().parent().find('a').attr('href',src)
     }
  });

  // control show hide parent element
  $('#__nuxt').on('click','.section-title-control span:last-of-type',function (){
      $(this).parent().next().slideToggle();
      if($(this).find('i').hasClass('bi-arrow-down-short')){
          $(this).find('i').removeClass('bi-arrow-down-short').addClass('bi-arrow-up-short');
      }else{
        $(this).find('i').removeClass('bi-arrow-up-short').addClass('bi-arrow-down-short');
      }
  });

  // toggle question answer

  $('#__nuxt').on('click','.question_answer .head p span:last-of-type i',function (){
    var parent = $(this).parent().parent().parent().parent();
    parent.parent().parent().parent().parent().find('i').removeClass('bi-chevron-up').addClass('bi-chevron-down')
    parent.parent().parent().parent().parent().find('.body').slideUp();
    if(parent.find('i').hasClass('bi-chevron-down')){
      parent.find('i').removeClass('bi-chevron-down').addClass('bi-chevron-up')
    }else{
      parent.find('i').removeClass('bi-chevron-up').addClass('bi-chevron-down')
    }
    parent.find('.body').slideToggle();
  });

  $('#__nuxt').on('click','.modal ul.list-types li',function (){
    console.log($(this));
    console.log($(this).index());
    $(this).parent().find('.active').removeClass('active');
    $(this).addClass('active');
    $(this).parentsUntil('.modal').eq($(this).parentsUntil('.modal').length - 1).find('.content > div').fadeOut();
    $(this).parentsUntil('.modal').eq($(this).parentsUntil('.modal').length - 1).find('.content > div').eq($(this).index()).fadeIn();
  });

  // control of variety of data up and down
  $('#__nuxt').on('click','.variety_data .one_variety .heading p span:last-of-type',function (){
    $(this).parent().parent().next().slideToggle();
    if($(this).find('i').hasClass('bi-caret-down-fill')){
      $(this).find('i').removeClass('bi-caret-down-fill').addClass('bi-caret-up-fill');
    }else{
      $(this).find('i').removeClass('bi-caret-up-fill').addClass('bi-caret-down-fill');
    }
  });

  // choose checkbox item
  $('#__nuxt').on('change','.checkbox-item input',function (){
    $(this).parent().siblings().removeClass('active');
    $(this).parent().addClass('active');
  });

  // toggle between dynamic tabs
  $('#__nuxt').on('click','.dynamic_tabs ul li',function (){
    if(event.target.tagName.toLocaleLowerCase() == 'p'){
      $(event.target).parent().parent().addClass('active').siblings().removeClass('active')
    }else if(event.target.tagName.toLocaleLowerCase() == 'p'){
      $(event.target).parent().addClass('active').siblings().removeClass('active')
    }else{
      $(event.target).addClass('active').siblings().removeClass('active')
    }
  });


  // copy item
  $('#__nuxt').on('click','.copy_item',function (){
    var search = $(event.target).attr('search');
    if($(search).length > 0){
      var tag = $(event.target).attr('tag');
      var tag_class = $(event.target).attr('tag_class');
      var output = '<'+tag+' class="'+tag_class+'">';
      output += '<span class="red delete-icon-line"><i class="bi bi-trash3 delete" parent-until="1"></i></span>';
      output += $(search)[0].innerHTML;
      output += '</'+tag+'>';
    }
    if(output){
       $($(event.target).attr('created_at')).append(output);
    }
  });

  // search js
  $('#__nuxt').on('keyup','.js_search',function (){
    var search = $(event.target).attr('search');
    var filter_area = $($(event.target).attr('filter_area'));
    for(let item of filter_area){
      var find = $(event.target).attr('find');
      console.log($(item).find(find).html())
      console.log(event.target.value)
      if($(item).find(find).html().toLocaleLowerCase().indexOf(event.target.value.toLocaleLowerCase()) >= 0 ){
        $(item).show();
      }else{
        $(item).hide();
      }
    }
  });

  // small image clickable js
  $('#__nuxt').on('click','.small_images img',function (){
    $(event.target).parent().parent().prev().attr('src',event.target.getAttribute('src'))
  });

  // toggle open , close box modal
  $('#__nuxt').on('click','.open-box-modal',function (){
    console.log($('.modal'));
    // $('.modal').modal('show');
  });


  // toggle dots action slide up and down
  // start
  $('#__nuxt').on('click',function (){
    $('.dots-action li.dots > ul').slideUp();
  });
  $('#__nuxt').on('click','.dots-action li.dots',function (e){
    e.stopPropagation();
    $('.dots-action li.dots > ul').slideUp();
    $(this).find('>ul').slideToggle();
  });
  $('#__nuxt').on('click','.dots-action li.dots ul',function (e){
    e.stopPropagation();
    $('.dots-action li.dots > ul').slideUp();
  });
  // end


  // ----------------------------------start of job description-----------------------------------------------------

  // hide drop down list
  $('#__nuxt').on('click',function (e){
    $('.search-drop-down').slideUp();
    $('.dl i').removeClass('bi bi-chevron-up').addClass('bi bi-chevron-down');
  });

  $('#__nuxt').on('click','.dl',function (e){
    if($('.dl i').hasClass('bi bi-chevron-down')){
      $('.search-drop-down').slideDown();
      $('.dl i').removeClass('bi bi-chevron-down').addClass('bi bi-chevron-up');
    }else {
      $('.search-drop-down').slideUp();
      $('.dl i').removeClass('bi bi-chevron-up').addClass('bi bi-chevron-down');
    }
  });

  // drop down list search
  $('#__nuxt').on('keyup','.search_drop_down_input',function (e){
    e.stopPropagation();
    if($(this).val().length == 0){
      $('.' + $(this).attr("search_at")).slideUp();
      $(this).parent().next().find('i').removeClass('bi bi-chevron-up').addClass('bi bi-chevron-down');
    }else {
      $('.' + $(this).attr("search_at")).slideDown();
      $(this).parent().next().find('i').removeClass('bi bi-chevron-down').addClass('bi bi-chevron-up');
    }
  });

  // ----------------------------------end of job description-----------------------------------------------------

  // show button at buttom of page
  $(window).on('scroll',function (e){
    if($(window).scrollTop() > 300){
      $('.up').fadeIn();
    }else{
      $('.up').fadeOut();
    }
  });
  // go to up of page
  $('#__nuxt').on('click','.up',function (e){
    $(window).scrollTop(0)
  });


  // see changes of id of url
/*  var main_sections = $('body #__nuxt #__layout > div').children();
  $(window).on('scroll',function (){
    let current_scroll = window.pageYOffset;
    for(let section of main_sections){
      if(section.classList.contains('current_page')){

      }else{
        if(current_scroll <= section.offsetHeight){
          console.log(section);
        }
      }
    }
  });*/
})
