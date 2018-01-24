class Dialog{
	constructor(){
		this.oDiv = null;
		this.oP = null;
		this.oInput = null;
		this.oDivs = null;
		this.timer = null;
		this.num = 0;
		this.settings = {
			even:'onclick',
			time:1,
			auto:false
		};
		this.init();
	}
	init(){
		this.create();
		this.click();
	}
	create(){
		this.oP = document.createElement('p');
		this.oP.innerHTML = '<input type="button" value="按钮1" style="background: yellow;"/>'+
				'<input type="button" value="按钮2" />'+
				'<input type="button" value="按钮3" />';
		document.body.appendChild(this.oP);	
		this.oDiv = document.createElement('div');
		this.oDiv.innerHTML = '<div class="div" style="display: block;">111</div>'+
				'<div class="div" style="display: none;">222</div>'+
				'<div class="div" style="display: none;">333</div>';
		document.body.appendChild(this.oDiv);
		this.oInput = this.oP.getElementsByTagName('input');
		this.oDivs = this.oDiv.getElementsByClassName('div');
	}
	click(){	
		for(var i=0;i<this.oInput.length;i++){
			var _this = this;
			(function(i){
				_this.oInput[i][_this.settings.even] = function(){
					for(var j=0;j<_this.oInput.length;j++){
						_this.oDivs[j].style.display = 'none';
						_this.oInput[j].style.background = '';
					}
					_this.oDivs[i].style.display = 'block';
					_this.oInput[i].style.background = 'yellow';
				}
			})(i)
			
		}
	}
}
let dialog = new Dialog();