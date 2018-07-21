/**
 * Created by laikanz on 17/11/23.
 */
var menuList=[
    { href:'incomeView.html',class:'linecons-desktop',text:'收入概览'},
    { href:'chargeSet.html',class:'linecons-cog',text:'收费设置'},
    { href:'wechatWelcome.html',class:'linecons-comment',text:'微信欢迎语设置'},
    { href:'personManage.html',class:'linecons-note',text:'客户管理'},
    { href:'customer.html',class:'linecons-cloud',text:'经销商管理'},
    { href:'systemMsg.html',class:'linecons-mail',text:'系统消息'},
    { href:'videoPatrol.html',class:'linecons-beaker',text:'视频巡查'},
    { href:'bannerManage.html',class:'linecons-photo',text:'Banner管理'},
    { href:'categoryManage.html',class:'linecons-tag',text:'分类管理'},
    { href:'subscibeHot.html',class:'linecons-attach',text:'视频列表'},
    { href:'setAdvertising.html',class:'linecons-megaphone',text:'广告设置'},
    { href:'feedback.html',class:'linecons-pencil',text:'意见反馈'},
    { href:'salesManage.html',class:'linecons-user',text:'销售人员管理'},
    { href:'developerManage.html',class:'linecons-diamond',text:'开发者管理'},
    { href:'teacherList.html',class:'linecons-user',text:'教师列表'},
    { href:'opreationCount.html',class:'fa-bar-chart',text:'运营统计'},
    { href:'presentRecord.html',class:'fa-calculator',text:'提现记录'},
    { href:'authentication.html',class:'fa-gavel',text:'审核认证'}
]

function buildMenu(n){
    var menu='';
    for(var i=0;i<menuList.length;i++){
        menu +="<li> <a href='"+menuList[i].href+"'> <i class='"+menuList[i].class+"'></i> <span class='title'>"+menuList[i].text+"</span> </a> </li>"
    }
    $('#main-menu').html(menu);
    $("#main-menu li:nth-child("+n+")").attr('class','open active');
}