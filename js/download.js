var jsonAPI = "http://219.239.146.201:8082/zhlInterfaceUnifyEntry?paramsJson=";
var paramJson = {"className":"com.zhl.unify.interfaces.move_work.service.CurrService","method":"getSingleVideoInfo","contentJson":{"videoId":"255426"}};


var getUrl = jsonAPI + JSON.stringify(paramJson);
var getImg = "http://219.239.146.203:8099/down/get.do?down=1&uid=8385793472042&file=TmV3U…DQyMzE2Ml9pY29uLmpwZw%3D%3D&sn=tfedu&sign=b412f9104d07da11c542d7af7b10f4d5";


var tempUrl = window.location.search;
var l = tempUrl.length;

//获取video id
var tempid = tempUrl.substring(tempUrl.lastIndexOf('=')+1, l);
paramJson.contentJson.videoId = tempid;

//获取视频数据
$.ajax({
	type:"get",
	dataType: "json",
	url:getUrl,
	async:true,
	success: function(data){
		var info = data.content.result;	
		$("#titleUp").html(info.videoTitle);
		var size = info.videoSize/(1024*1024);
		$("#video_size").html(size.toFixed(1));
		$(".videoSize").attr("poster",info.imgPath);
		console.log(info.imgPath);
		$("#click_times").html(info.clickTimes);
		$("#like_times").html(info.goodNum);
		$("#duration").html(info.videoDuration);
		$("#video_oname").html(info.videoOname);
		$("#video_desc").html(info.videoDesc);
		$("#video_teacher").html(info.teacherName);		
	}
});

//通过浏览器判断客户端OS
var u = navigator.userAgent, app = navigator.appVersion;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

var urlAndroid = "http://124.202.164.14/files/1193000006BE8456/dd.myapp.com/16891/29A48CE451EF9B12A6E600EE0FC095C6.apk";
var urliOS = "https://itunes.apple.com/cn/app/kai-xin-xiao-xiao-le/id791532221?mt=8&v0=WWW-GCCN-ITSTOP100-FREEAPPS&l=&ign-mpt=uo%3D4";

if(isAndroid == true){
	$("#downloadUrl").attr("href", urlAndroid);
}
else if(isiOS == true){
	$("#downloadUrl").attr("href", urliOS);
}

