
var mshow = 
`<div class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted moviescroll">
    <div class="mui-scroll clearfix">
        <a class="mui-control-item block videolist" v-for="(item,idx) in movietype" :key="idx">
        	<div class="chart" @tap="godetail(item.id,item.title)">
	            <img class="show-pic vm g10" v-if="item.images" src="../images/k.jpg" :data-lazyload="'https://images.weserv.nl/?url='+item.images.small.substring(7)" alt="">
				<img class="show-pic vm g10" v-if="item.cover_url" src="../images/k.jpg" :data-lazyload="'https://images.weserv.nl/?url='+item.cover_url.substring(7)" alt="">
				<img class="show-pic vm g10" v-if="item.cover" src="../images/k.jpg" :data-lazyload="'https://images.weserv.nl/?url='+item.cover.substring(7)" alt="">
				<img class="show-pic vm g10" v-if="item.image" src="../images/k.jpg" :data-lazyload="'https://images.weserv.nl/?url='+item.image.substring(7)" alt="">
			</div>
		    <p class="name">{{item.title}}</p>
			<div class="score">
	
	            <div class="score-box" v-if="item.score">
	              <div v-if="item.score >= 9">
	                <div class="star10"></div>
	              </div>
	              <div v-else-if="item.score >= 8 && item.score <9">
	                <div class="star9"></div>
	              </div>
	              <div v-else-if="item.score >= 7 && item.score <8">
	                <div class="star8"></div>
	              </div>
	              <div v-else-if="item.score >= 6 && item.score <7">
	                <div class="star7"></div>
	              </div>
	              <div v-else-if="item.score >= 5 && item.score <6">
	                <div class="star6"></div>
	              </div>
	              <div v-else-if="item.score >= 4 && item.score <5">
	                <div class="star5"></div>
	              </div>
	              <div v-else-if="item.score >= 3 && item.score <4">
	                <div class="star4"></div>
	              </div>
	              <div v-else-if="item.score >= 2 && item.score <3">
	                <div class="star3"></div>
	              </div>
	              <div v-else-if="item.score >= 1 && item.score <0">
	                <div class="star2"></div>
	              </div>
	              <div v-else>
	                <div class="star1"></div>
	              </div>
	            </div>
	
	            <div class="score-box" v-if="item.subtype">
	              <div v-if="item.rating.average >= 9">
	                <div class="star10"></div>
	              </div>
	              <div v-else-if="item.rating.average >= 8 && item.rating.average <9">
	                <div class="star9"></div>
	              </div>
	              <div v-else-if="item.rating.average >= 7 && item.rating.average <8">
	                <div class="star8"></div>
	              </div>
	              <div v-else-if="item.rating.average >= 6 && item.rating.average <7">
	                <div class="star7"></div>
	              </div>
	              <div v-else-if="item.rating.average >= 5 && item.rating.average <6">
	                <div class="star6"></div>
	              </div>
	              <div v-else-if="item.rating.average >= 4 && item.rating.average <5">
	                <div class="star5"></div>
	              </div>
	              <div v-else-if="item.rating.average >= 3 && item.rating.average <4">
	                <div class="star4"></div>
	              </div>
	              <div v-else-if="item.rating.average >= 2 && item.rating.average <3">
	                <div class="star3"></div>
	              </div>
	              <div v-else-if="item.rating.average >= 1 && item.rating.average <0">
	                <div class="star2"></div>
	              </div>
	              <div v-else>
	                <div class="star1"></div>
	              </div>
	            </div>

	            <p class="score-num" v-if="item.score">{{item.score}}</p>
	            <p class="score-num" v-if="item.subtype">{{item.rating.average}}</p>
	            
	            
                <div class="score-box" v-if="item.rate">
                    <div v-if="item.rate >= 9">
                        <div class="star10"></div>
                    </div>
                    <div v-else-if="item.rate >= 8 && item.rate <9">
                        <div class="star9"></div>
                    </div>
                    <div v-else-if="item.rate >= 7 && item.rate <8">
                        <div class="star8"></div>
                    </div>
                    <div v-else-if="item.rate >= 6 && item.rate <7">
                        <div class="star7"></div>
                    </div>
                    <div v-else-if="item.rate >= 5 && item.rate <6">
                        <div class="star6"></div>
                    </div>
                    <div v-else-if="item.rate >= 4 && item.rate <5">
                        <div class="star5"></div>
                    </div>
                    <div v-else-if="item.rate >= 3 && item.rate <4">
                        <div class="star4"></div>
                    </div>
                    <div v-else-if="item.rate >= 2 && item.rate <3">
                        <div class="star3"></div>
                    </div>
                    <div v-else-if="item.rate >= 1 && item.rate <0">
                        <div class="star2"></div>
                    </div>
                    <div v-else>
                        <div class="star1"></div>
                    </div>
                
                </div>
                <p class="score-num" v-if="item.rate">{{item.rate}}</p>
                
                <div class="score-box" v-if="item.publisher">
                    <div v-if="item.rating.average >= 9">
                        <div class="star10"></div>
                    </div>
                    <div v-else-if="item.rating.average >= 8 && item.rating.average <9">
                        <div class="star9"></div>
                    </div>
                    <div v-else-if="item.rating.average >= 7 && item.rating.average <8">
                        <div class="star8"></div>
                    </div>
                    <div v-else-if="item.rating.average >= 6 && item.rating.average <7">
                        <div class="star7"></div>
                    </div>
                    <div v-else-if="item.rating.average >= 5 && item.rating.average <6">
                        <div class="star6"></div>
                    </div>
                    <div v-else-if="item.rating.average >= 4 && item.rating.average <5">
                        <div class="star5"></div>
                    </div>
                    <div v-else-if="item.rating.average >= 3 && item.rating.average <4">
                        <div class="star4"></div>
                    </div>
                    <div v-else-if="item.rating.average >= 2 && item.rating.average <3">
                        <div class="star3"></div>
                    </div>
                    <div v-else-if="item.rating.average >= 1 && item.rating.average <0">
                        <div class="star2"></div>
                    </div>
                    <div v-else>
                        <div class="star1"></div>
                    </div>
                
                </div>
                <p class="score-num" v-if="item.publisher">{{item.rating.average}}</p>
	        </div>
	        
        </a>
    </div>
</div>`



mui('.moviescroll').scroll({
	scrollY: true, //是否竖向滚动
	scrollX: true, //是否横向滚动
	startX: 0, //初始化时滚动至x
	startY: 0, //初始化时滚动至y
	indicators: false, //是否显示滚动条
	bounce: true, //是否启用回弹
	deceleration: 0.1 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});

Vue.component('mshow', {
    template: mshow,
    props:['movietype'],
    data(){
    	return{

    	}
    },
    created(){
		this.$nextTick(()=>{

		})
    },
    methods: {
    	godetail(mid,mname){
    		let curl = window.location.href;
    		if(curl.indexOf('index')>-1){
				mui.openWindow({
				  url: `./html/detail.html?mid=${mid}`,
				  id: mid,
				  styles: {                             // 窗口参数 参考5+规范中的WebviewStyle,也就是说WebviewStyle下的参数都可以在此设置
				    titleNView: {                       // 窗口的标题栏控件
				      titleText:mname,                // 标题栏文字,当不设置此属性时，默认加载当前页面的标题，并自动更新页面的标题
				      titleColor:"#333",             // 字体颜色,颜色值格式为"#RRGGBB",默认值为"#000000"
				      titleSize:"17px",                 // 字体大小,默认17px
				      backgroundColor:"#fff",        // 控件背景颜色,颜色值格式为"#RRGGBB",默认值为"#F7F7F7"
				      progress:{                        // 标题栏控件的进度条样式
				        color:"#00FF00",                // 进度条颜色,默认值为"#00FF00"  
				        height:"2px"                    // 进度条高度,默认值为"2px"         
				      },
				      splitLine:{                       // 标题栏控件的底部分割线，类似borderBottom
				        color:"#CCCCCC",                // 分割线颜色,默认值为"#CCCCCC"  
				        height:"1px"                    // 分割线高度,默认值为"2px"
				      },
				      autoBackButton:true
				    }
				  }
				});
			}else if(curl.indexOf('book')>-1){
				mui.openWindow({
				  url: `../html/bookdetail.html?mid=${mid}`,
				  id: mid,
				  styles: {                             // 窗口参数 参考5+规范中的WebviewStyle,也就是说WebviewStyle下的参数都可以在此设置
				    titleNView: {                       // 窗口的标题栏控件
				      titleText:mname,                // 标题栏文字,当不设置此属性时，默认加载当前页面的标题，并自动更新页面的标题
				      titleColor:"#333",             // 字体颜色,颜色值格式为"#RRGGBB",默认值为"#000000"
				      titleSize:"17px",                 // 字体大小,默认17px
				      backgroundColor:"#fff",        // 控件背景颜色,颜色值格式为"#RRGGBB",默认值为"#F7F7F7"
				      progress:{                        // 标题栏控件的进度条样式
				        color:"#00FF00",                // 进度条颜色,默认值为"#00FF00"  
				        height:"2px"                    // 进度条高度,默认值为"2px"         
				      },
				      splitLine:{                       // 标题栏控件的底部分割线，类似borderBottom
				        color:"#CCCCCC",                // 分割线颜色,默认值为"#CCCCCC"  
				        height:"1px"                    // 分割线高度,默认值为"2px"
				      },
				      autoBackButton:true
				    },
					waiting:{
				      autoShow:false,//自动显示等待框，默认为true
				      title:'正在加载...'
				    }
				  }
				});
			}else{
				mui.openWindow({
				  url: `../html/detail.html?mid=${mid}`,
				  id: mid,
				  styles: {                             // 窗口参数 参考5+规范中的WebviewStyle,也就是说WebviewStyle下的参数都可以在此设置
				    titleNView: {                       // 窗口的标题栏控件
				      titleText:mname,                // 标题栏文字,当不设置此属性时，默认加载当前页面的标题，并自动更新页面的标题
				      titleColor:"#333",             // 字体颜色,颜色值格式为"#RRGGBB",默认值为"#000000"
				      titleSize:"17px",                 // 字体大小,默认17px
				      backgroundColor:"#fff",        // 控件背景颜色,颜色值格式为"#RRGGBB",默认值为"#F7F7F7"
				      progress:{                        // 标题栏控件的进度条样式
				        color:"#00FF00",                // 进度条颜色,默认值为"#00FF00"  
				        height:"2px"                    // 进度条高度,默认值为"2px"         
				      },
				      splitLine:{                       // 标题栏控件的底部分割线，类似borderBottom
				        color:"#CCCCCC",                // 分割线颜色,默认值为"#CCCCCC"  
				        height:"1px"                    // 分割线高度,默认值为"2px"
				      },
				      autoBackButton:true
				    }
				  },
				waiting:{
			      autoShow:false,//自动显示等待框，默认为true
			      title:'正在加载...'
			    }
				});
			}
    	}
    }
})