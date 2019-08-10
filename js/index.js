// 监听li的点击事件
/**
 * 1 获取全局变量
 * 2 判断点击的li属性
 * 3 调用封装好的模态框方法
 * 4 建立提交按钮点击事件，调用封装的提交点击事件方法
 */
// 全局变量
var flag = false;
$('#todoes').on('click', 'li', function () {
  var $li = $(this);
  if ($li.hasClass('list-group-item-info')) {
    $('.message .modal-body').text('是否已完成？？')
  }
  if ($li.hasClass('list-group-item-warning')) {
    $('.message .modal-body').text('是否进行？？')
  }
  $('.message').modal();
  $('#confirm').click(function () {
    changeListGroup($li)
  })
})



/**
 * 
 * @param {封装}  
 */
// 点击改变li状态的方法
function changeListGroup($li) {
  if ($li.hasClass('list-group-item-info')) {
    $li.removeClass("list-group-item-info");
    $li.addClass("list-group-item-success");
  }
  if ($li.hasClass('list-group-item-warning')) {
    $li.removeClass("list-group-item-warning");
    $li.addClass("list-group-item-info");
  }
  $('.message').modal('hide');
}