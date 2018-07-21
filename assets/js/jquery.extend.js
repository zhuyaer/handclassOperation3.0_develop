/**
 * Created by laikanz on 16/8/8.
 */
$.extend($,{
    //severHttp:"http://192.168.1.125:1337",
    //socketHttp:"http://192.168.1.125:12000",
    severHttp:"http://54.222.173.115:2000",//开发
    socketHttp:"http://54.222.173.115:12000",
    //severHttp:"http://54.223.43.157:2000",//生产
    //socketHttp:"http://54.223.43.157:12000",
     productHttp:"http://api-sbkt.lycam.tv/"

});
$.extend($.fn,{
      getSession:function (key) {
            var data = localStorage.getItem(key);
            var dataObj=JSON.parse(data)
            if(dataObj){
                  if(dataObj.time){//传值,同时传入过期时间
                        if ((new Date().getTime() - dataObj.time)/1000>dataObj.exp) {
                              // typeof callback == "function" && callback()
                              console.log('信息已过期');
                              return null;
                        }else{
                              var dataObjDatatoJson = dataObj.data
                              //console.log("dataObjDatatoJson",dataObjDatatoJson)
                              return dataObjDatatoJson;
                        }
                  }else{
                        var dataObjDatatoJson = dataObj.data
                        //console.log("dataObjDatatoJson",dataObjDatatoJson)
                        return dataObjDatatoJson;
                  }

            }else{
                  return null;
            }
           
      },
      setSession:function(key,value,exp){//变量,值,过期时间
            var curTime = new Date().getTime();
            if(value){
                  if(exp){//传值,同时传入过期时间
                     localStorage.setItem(key,JSON.stringify({data:value,time:curTime,exp:exp}));
                  }else{
                     localStorage.setItem(key,JSON.stringify({data:value}));
                  }

            }else{
                  localStorage.setItem(key,null);
            }

      }
})