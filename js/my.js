function add(){
	n1.value=++n1.value;
	s1.innerHTML="¥"+n1.value*99.99+".00";
}
function jian(){
	if(n1.value<=0){
		alert("请直接清除该商品");
		return;
	}
	n1.value=--n1.value;
	s1.innerHTML="¥"+n1.value*99.99;
}