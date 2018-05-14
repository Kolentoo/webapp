
var subjectscroll = 
`
<div class="subject">
	<div class="swiper-container swipeshow" v-if="item">
	    <div class="swiper-wrapper">
	        <div class="swiper-slide"  v-for="(list,idx) in item" :key="idx">
	            <div class="chart" @tap="godetail(list.id,list.title)">
	                <img class="mpic vm" :src="list.cover?'https://images.weserv.nl/?url='+list.cover.substring(7):''" alt="">
	                <img class="corner" src="../images/corner.png" alt="">
	                <p class="number">{{idx+1}}</p>
	            </div>
	            <p class="mname tc" v-if="list.title">{{list.title}}</p>
	            <p class="score tc" v-if="list.rating">评分：{{list.rating}}</p>
	        </div>
	    </div>
	</div>
	<div class="swiper-container swipeshow" v-if="people">
	    <div class="swiper-wrapper">
	        <div class="swiper-slide"  v-for="(list,idx) in people" :key="idx">
	            <div class="chart">
	                <img class="mpic vm" :src="list.avatar?'https://images.weserv.nl/?url='+list.avatar.substring(7):''" alt="">
	                <img class="corner" src="../images/corner.png" alt="">
	                <p class="number">{{idx+1}}</p>
	            </div>
	            <p class="mname tc" v-if="list.name">{{list.name}}</p>
	        </div>
	    </div>
	</div>
</div>
`


Vue.component('subjectscroll', {
    template: subjectscroll,
    props:['item','people'],
    data(){
    	return{

    	}
    },
    created(){
    	this.$nextTick(()=>{
			var mySwiper = new Swiper ('.swipeshow', {
				freeMode : true,
			    direction: 'horizontal',
			    slidesPerView: 3,
	            slidesPerGroup: 3,
	            spaceBetween: 10
			}) 
    	})

    },
    methods: {
		godetail(mid,mname){
			let curl = window.location.href;
			if(curl.indexOf('film')>-1){
				mui.openWindow({
				  url: `../html/detail.html?mid=${mid}`,
				  id: mid,
				  styles: {                             // 窗口参数 参考5+规范中的WebviewStyle,也就是说WebviewStyle下的参数都可以在此设置
				    titleNView: {                       // 窗口的标题栏控件
				      titleText:mname,                // 标题栏文字,当不设置此属性时，默认加载当前页面的标题，并自动更新页面的标题
				      titleColor:"#333",             // 字体颜色,颜色值格式为"#RRGGBB",默认值为"#000000"
				      type:'transparent',
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
			}else{
				mui.openWindow({
				  url: `../html/bookdetail.html?mid=${mid}`,
				  id: mid,
				  styles: {                             // 窗口参数 参考5+规范中的WebviewStyle,也就是说WebviewStyle下的参数都可以在此设置
				    titleNView: {                       // 窗口的标题栏控件
				      titleText:mname,                // 标题栏文字,当不设置此属性时，默认加载当前页面的标题，并自动更新页面的标题
				      titleColor:"#333",             // 字体颜色,颜色值格式为"#RRGGBB",默认值为"#000000"
				      type:'transparent',
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
			}

		}
    }
})