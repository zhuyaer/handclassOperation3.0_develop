/**
 * Created by laikanz on 17/5/5.
 */
//销售，超管，巡警，开发者由于是同一个入口，所以需要验证token权限
$.ajax({
    type:'GET',
    data:{},
    headers:{
        access_token:$.fn.getSession('token')
    },
    url:$.severHttp+"/financial/overview",
    success:function(data){
    },
    error:function(error){
        if(error.statusText=="Forbidden"){
            window.location.href="../login.html"
        }
    }
})
