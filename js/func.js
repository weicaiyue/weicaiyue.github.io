var vm=new Vue({
	el:'#app',
	data:{
		full:true,
		remove:false,
	},
	methods:{
		removeText:()=>{
			vm.full=false;
			setTimeout(()=>{
				vm.remove=true;
			},650);
		}
	}
})