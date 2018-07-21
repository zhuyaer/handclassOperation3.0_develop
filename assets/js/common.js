/**
 * Created by laikanz on 16/9/2.
 */
//token有效期1天,检验未通过登录访问的网页权限
var tokenport=$.fn.getSession('token');
//console.log("tokenport",tokenport)
if(tokenport){
    //验证通过
}else{//token过期,记住密码未过期
    window.location.href="../login.html"
}
function formatDate(time, format){
    var t = new Date(time);
    var tf = function(i){return (i < 10 ? '0' : '') + i};
    return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function(a){
        switch(a){
            case 'yyyy':
                return tf(t.getFullYear());
                break;
            case 'MM':
                return tf(t.getMonth() + 1);
                break;
            case 'mm':
                return tf(t.getMinutes());
                break;
            case 'dd':
                return tf(t.getDate());
                break;
            case 'HH':
                return tf(t.getHours());
                break;
            case 'ss':
                return tf(t.getSeconds());
                break;
        }
    })
};
function isEmptyObject(e) {
    var t;
    for (t in e)
        return !1;
    return !0
}
var totableZH={
    "sProcessing":"正在加载中......",
    "sLengthMenu":"每页显示 _MENU_ 条记录",
    "sZeroRecords":"对不起，查询不到相关数据！",
    "sEmptyTable":"表中无数据存在！",
    "sInfo":"当前显示 _START_ 到 _END_ 条，共 _TOTAL_ 条记录",
    "sInfoEmpty":"当前显示0条记录",
    "sInfoFiltered":"数据表中共为 _MAX_ 条记录",
    "sSearch":"搜索",
    "oPaginate":{
        "sFirst": "首页",
        "sPrevious":"上一页",
        "sNext": "下一页",
        "sLast": "末页"
    }
}
var totableZHTitle={
    "sProcessing":"正在加载中......",
    "sLengthMenu":"每页显示 _MENU_ 条记录",
    "sZeroRecords":"对不起，查询不到相关数据！",
    "sEmptyTable":"表中无数据存在！",
    "sInfo":"当前显示 _START_ 到 _END_ 条，共 _TOTAL_ 条记录",
    "sInfoEmpty":"当前显示0条记录",
    "sInfoFiltered":"数据表中共为 _MAX_ 条记录",
    "sSearch":"搜索",
    "sSearchPlaceholder":"搜索标题",
    "oPaginate":{
        "sFirst": "首页",
        "sPrevious":"上一页",
        "sNext": "下一页",
        "sLast": "末页"
    }
}

var totableTeacherTitle={
    "sProcessing":"正在加载中......",
    "sLengthMenu":"每页显示 _MENU_ 条记录",
    "sZeroRecords":"对不起，查询不到相关数据！",
    "sEmptyTable":"表中无数据存在！",
    "sInfo":"当前显示 _START_ 到 _END_ 条，共 _TOTAL_ 条记录",
    "sInfoEmpty":"当前显示0条记录",
    "sInfoFiltered":"数据表中共为 _MAX_ 条记录",
    "sSearch":"搜索",
    "sSearchPlaceholder":"搜索关键字",
    "oPaginate":{
        "sFirst": "首页",
        "sPrevious":"上一页",
        "sNext": "下一页",
        "sLast": "末页"
    }
}
var paging=[
    [5,10,20], [5,10,20]
]

function sortBy(order){//排序依据
  return function(obj1,obj2){
     var value1=obj1[order]
     var value2=obj2[order]
     if(value1<value2){
         return -1;
     }else if(value1>value2){
         return 1;
     }else {
         return 0;
     }
  }
}
$(function(){
    //下角标
    var obj="&copy;"+new Date().getFullYear()+"&nbsp&nbsp<strong>LYCAM+</strong>"
    $('.footer-text').html(obj)

    //搜索年份
    $("#theYear2").html(fromToNow())
    $("#theYear").html(fromToNow())
})

function fromToNow(time){
    var time=+time||2016
    var nowYear=+new Date().getFullYear()
    var htm=''
    for(var i=nowYear;i>time-1;i--){
        htm+='<option value='+i+'>'+i+'</option>'
        if(i==time){
            return htm
        }
    }
}