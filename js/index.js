// 监听li的点击事件
/*
 * 1 获取全局变量
 * 2 判断点击的li属性
 * 3 调用封装好的模态框方法
 * 4 建立提交按钮点击事件，调用封装的提交点击事件方法
 */

// 内容栏添加内容
/**
 * 1 获取输入框新输入的内容
 * 2 验证输入框非空，使用了去除空格的方法
 * 3 通过获取li标签，获取点击事件的内容
 * 4 添加标签
 * 5 构建标签内容结构
 * 6 发送内容后，输入框清空
 * 7 点击按钮后，模态框消失
 */

// 监听li的点击事件
// 全局变量
var flag = false;
$("#todoes").on("click", "li", function() {
  var $li = $(this);
  if ($li.hasClass("list-group-item-info")) {
    $(".message .modal-body").text("是否已完成？？");
  }
  if (
    !$li.hasClass("list-group-item-success") &&
    !$li.hasClass("list-group-item list-group-item-info")
  ) {
    $(".message .modal-body").text("是否进行？？");
  }
  $(".message").modal();
  $("#confirm").click(function() {
    changeListGroup($li);
  });
});

// 获取提交按钮，设置点击事件
$("#todoBtn").click(function() {
  // 添加模态框
  $(".todo").modal("show");
});

// 添加新内容
$("#addTodo").click(function() {
  addTodo();
});

// 回车键触发
$("#todo").keydown(function(event) {
  if (event.keyCode == 13) {
    addTodo();
  }
});
/**
 *
 * @param {封装}
 */
// 日期格式化
Date.prototype.fmt = function(fmt) {
  var o = {
    "M+": this.getMonth() + 1, //月份
    "d+": this.getDate(), //日
    "h+": this.getHours(), //小时
    "m+": this.getMinutes(), //分
    "s+": this.getSeconds(), //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    S: this.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(
      RegExp.$1,
      (this.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
  return fmt;
};

// 去除空格方法
String.prototype.trim = function() {
  return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
};

// 点击改变li状态的方法
function changeListGroup($li) {
  if ($li.hasClass("list-group-item-info")) {
    $li.removeClass("list-group-item-info");
    $li.addClass("list-group-item-success");
  }
  if (
    !$li.hasClass("list-group-item-success") &&
    !$li.hasClass("list-group-item list-group-item-info")
  ) {
    $li.addClass("list-group-item-info");
  }
  $(".message").modal("hide");
}

function addTodo() {
  var $todo = $("#todo");
  if (!$todo.val().trim()) {
    console.log("仅空格，不输出");
    return;
  }
  var li = document.createElement("li");
  li.classList.add("list-group-item");
  li.innerText = new Date().fmt("yyyy-MM-dd hh:mm:ss") + " " + $todo.val(); //添加内容
  $(".list-group").append(li);
  // 发送后，输入框置空
  $todo.val("");
  $(".todo").modal("hide");
}
