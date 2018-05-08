
var app = new Vue({
	el: '#app',
	data(){
		return{
			items:[
	            {title:'MOVIES',num:'01'},
	            {title:'TVPLAY',num:'02'},
	            {title:'ANIME',num:'03'},
	            {title:'RANKING',num:'04'},
	            {title:'SEARCH',num:'05'}
			]
		}
	},
	created(){
        this.$nextTick(()=>{
            let bHeight = document.documentElement.clientHeight;
            let group = document.getElementsByClassName('mui-slider-item');
			let indexbj = document.getElementById('index');
            indexbj.style.height = bHeight+'px'
            for(let value of group){
            	value.style.height=bHeight+'px';
            }
        });
	}
	
})



var index = new Vue({
	el: '#index',
	data(){
		return{
			weekday:'',
			dateday:'',
			tips:'',
			now:[]
		}
	},
	created(){
        let week = new Date().getDay();  
        if (week == 0) {  
            this.weekday = "星期日";  
        } else if (week == 1) {  
            this.weekday = "星期一";  
        } else if (week == 2) {  
            this.weekday = "星期二";  
        } else if (week == 3) {  
            this.weekday = "星期三";  
        } else if (week == 4) {  
            this.weekday = "星期四";  
        } else if (week == 5) {  
            this.weekday = "星期五";  
        } else if (week == 6) {  
            this.weekday = "星期六";  
        } 
        
        let myDate = new Date();
        let month = myDate.getMonth()+1; //获取当前月份(0-11,0代表1月)
        let day = myDate.getDate(); //获取当前日(1-31)
        this.dateday=month + '月'+ day+'日'
        
        let hours = myDate.getHours();
        if(hours>=6&&hours<12){
            this.tips='早安，加油'
        }else if(hours <16&&hours>=12){
            this.tips='喝杯咖啡，休息一下'
        }else if(hours <20&&hours>=16){
            this.tips='今天不加班!'
        }else{
            this.tips='夜深了，早点休息'
        }
        this.nowapi();

	},
	mounted(){

	},
	methods:{
		nowapi(){
            axios.get(`https://xkolento.cn/v2/movie/in_theaters`,{
                params:{}
            }).then(res=>{
                this.now=res.data.subjects;
                let nowstr = JSON.stringify(res.data.subjects)
                localStorage.setItem('now', nowstr);
                console.log(this.now)
            })
		}
	}
	
})


