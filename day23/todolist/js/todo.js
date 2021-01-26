$(function (){

  var toDolist = {
    // 初始化
    init: function (){
      // console.log(this)//toDolist
      this.cacheElement()
      this.bindEvent()
    },
    // 缓存要操作的元素
    cacheElement: function (){
      this.$ipt = $('.ipt')
      this.$add = $('.add')
      this.$list = $('.list')
      this.$all = $('#all')
      this.$done = $('.done')
      this.$removes = $('.removes')
      this.$doneList = $('.doneList')
    },
    // 给所有元素绑定事件
    bindEvent: function (){
      var _this = this // 缓存this指向
      // 添加任务
      this.$add.click(function (){
        var iptVal = _this.$ipt.val()// 获取输入框的值
        if (!iptVal) {//空值判断
          alert('请输入内容')
          return false
        }
        // 要添加的dom结构
        var doms = `
        <li>
          <input type="checkbox">
          <span class="con">${iptVal}</span>
          <span class="remove">删除</span>
          <span class="edit">编辑</span>
        </li>
        `
        _this.$list.append(doms)//添加任务
        // 判断全选是否选中
        if (_this.$all.prop('checked')) {//全选勾选状态
          $('.list li input').prop('checked',true)
        }
        // 清空输入框
        _this.$ipt.val('')
      })
      // 编辑任务
      this.$list.on('click','.edit',function (){
        // 保存当前任务的文本
        var taskText = $(this).siblings('.con').text()
        // 用input替换当前任务文本
        $('<input class="repIpt" type="text">').replaceAll($(this).siblings('.con'))
        // 把当前值添加到input中并获得焦点
        $('.repIpt').val(taskText).focus()
      })
      // 编辑完成
      this.$list.on('blur','.repIpt',function (){
        // 保存当前输入的任务文本
        var iptVal = $(this).val()
        // 使用span替换input
        var oSpan = '<span class="con">'+iptVal+'</span>'
        $(oSpan).replaceAll($(this))
      })
      // 删除单个任务
      this.$list.on('click','.remove',function (){
        // 删除当前点击元素的父级
        $(this).parent().remove()
        // 判断是否要全选
        $('.list li input').each(function (index,ele){
          if (!$(ele).prop('checked')) {//未选中
            _this.$all.prop('checked',false)
            return false//结束each循环
          }
          _this.$all.prop('checked',true)
        })
      })
      // 勾选任务
      this.$list.on('click','li input',function (){
        // 判断是否要全选
        $('.list li input').each(function (index,ele){
          if (!$(ele).prop('checked')) {//未选中
            _this.$all.prop('checked',false)
            return false//结束each循环
          }
          _this.$all.prop('checked',true)
        })
      })
      // 点击全部
      this.$all.click(function (){
        if ($(this).prop('checked')) {
          $('.list li input').prop('checked',true)
        } else {
          $('.list li input').prop('checked',false)
        }
      })
      // 批量处理
      // this.$done.click(function (){
      //   $('.list input:checked').each(function (index,ele){
      //     // 保存当前任务的文本
      //     var taskText = $(ele).siblings('.con').text()
      //     // 插入已处理任务
      //     var doneTask = '<li>'+taskText+'</li>'
      //     _this.$doneList.append(doneTask)
      //     // 删除当前任务
      //     $(ele).parent().remove()
      //   })
      // })
      // // 批量删除
      // this.$removes.click(function (){
      //   $('.list input:checked').each(function (index,ele){
      //     $(ele).parent().remove()
      //   })
      // })
      
    }
  }
  toDolist.init()

})
