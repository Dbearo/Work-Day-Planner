
$(function () {

var hours = [9,10,11,12,19,14,15,16,17]
    $('#container').on('click', '.saveBtn', function() {
  // Get the index of the clicked button among its siblings
  var index = $(this).closest('.time-block');
  var block = $(index).index();
  // Do something with the specific child
  var input = index.find('.description').val();
  var btnNum = block.toString();
  console.log('Button ' + (btnNum) + ' clicked!');
  localStorage.setItem(btnNum,input)
});

  var currentH = dayjs().hour()
  console.log(currentH);
  $(".row").each(function(time){
    if(hours[time] < currentH){
      $(this).addClass('past')
    } else if(hours[time] == currentH){
      $(this).addClass('present')
    } else{
      $(this).addClass('future')
    }
  });

  $(".description").each(function(i) {
    var item = localStorage.getItem(i);
    $(this).text(item);
  });

  var currentDayEl = $('#currentDay');
  var currentDay = dayjs().format('dddd, MMMM D');
  currentDayEl.text(currentDay);
});
