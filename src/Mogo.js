import ApiTool from './api'
console.log('ssss');
let Mogo = {
	init() {},
	ApiTool: ApiTool,
	isApp: location.port == '',
	/**当前最上层的window的名称 */
    currWinName: 'root',
	version: '1.1.0',
	/**
	 * 滚去处理
	 *
	 * @param {Function} cb 回调
	 */
	onScrollHandle(cb){
		document.body.onscroll = ()=>{
			var _top = document.body.scrollTop || document.documentElement.scrollTop;
			cb(_top);
		}
	},
	apiReady: function(cb){
		let timeout, _cb = ()=>{
			timeout && clearTimeout(timeout);
			cb();
			if(!window.api){
				window.api = {
					setPrefs: function(){},
					getPrefs: function(){},
					confirm: function(info){ console.log('confirm',info); },
					openApp: function(info){ console.log('open App'+info.uri) },
					closeToWin: function(info){ console.log('closetoWin') },
					closeFrame: function(){ console.log('api.closeFrame'); },
					toast: function(){ console.log('toasted') },
					hideProgress: function(){ console.log('hide progress') },
					setFrameGroupIndex: function(info){ console.log(`set frame group index groupName= ${info.name}`) },
					require: function(){ console.log('require---') },
					openFrame: function(url,config){ console.log('openFrame',url,JSON.stringify(config)); },
					openFrameGroup: function(){ console.log('openFrameGroup') },
					refreshHeaderLoadDone: function(){ console.log('call method == refreshHeaderLoadDone') },
					pageParam: { ____name: 'ddefault api pageParam' },
					openWin: function(url,config){ console.log('openWin',url,JSON.stringify(config)); },
					test: function(){ console.log('call method == test') },
					refreshHeaderLoading: function(){ console.log('call method == refreshHeaderLoading') },
					sendEvent: function(info){ console.log('call method == sendEvent'+info.name) },
					addEventListener: function(){ console.log('call method == addEventListener') },
					setRefreshHeaderInfo: function(){ console.log('call method == setRefreshHeaderInfo') },
					setStatusBarStyle: function(){ console.log('set status bar style'); },
					safeArea: { top: 0 },
					closeWin: function(){ console.log('close win') },
				}
			}
		};
		window.apiready = _cb;
		timeout = setTimeout(_cb,2000);
	},
	openOuter: function(config){
		this.openWin(`outer${Date.now()}`,{
			url: `./can_outer.html`,
			bounces: config.bouncds,
			pageParam: config.pageParam
		});
	},
	openWin: function (name = 'test', config = {}) {
		var fixname = name;
		this.currWinName = fixname;
		api.openWin({
			name: fixname,
			url: config.url || './' + name + ".html",
			rect: config.rect || {
				x: 0,
				y: 0,
				w: "auto",
				h: "auto"
			},
			pageParam: config.pageParam || {},
			useWKWebView: false,
			vScrollBarEnabled: false,
			bounces: !!config.bounces,
			reload: !!config.reload,
			scrollToTop: config.scrollToTop == undefined ? true : config.scrollToTop,
			bgColor: config.bgColor || "#fff",
			slidBackEnabled : config.slidBackEnabled == undefined ? true : config.slidBackEnabled,
			slidBackType : config.slidBackType || 'edge',
			animation : config.animation || null
		});
	},
	openFrame: function (name, config) {
		config = config || {};
		api.openFrame({
			name: name,
			url: config.url || './' + name + ".html",
			rect: config.rect || {
				x: 0,
				y: 0,
				w: "auto",
				h: "auto"
			},
			pageParam: config.pageParam || {},
			useWKWebView: false,
			vScrollBarEnabled: false,
			bounces: config.bounces == undefined ? true : config.bounces,
			reload: !!config.reload,
			scrollToTop: config.scrollToTop == undefined ? true : config.scrollToTop,
			bgColor: config.bgColor || "#fff",
			animation: config.animation || null
		});
	},
	/**下拉刷新**/
	setRefreshHeaderInfo(callback,config){
		config = config || {};
		if(window.api){
			api.setRefreshHeaderInfo({
				bgColor: config.bgColor || '#fff',
				textDown: config.textDown || '下拉刷新...',
				textUp: config.textUp || '松开刷新...'
			}, callback);
		}else{
			callback();
		}
	},
	/**上拉刷新 **/
	setRefreshFooterInfo(callback){
		if(window.api){
			api.addEventListener({
				name:'scrolltobottom',
				extra:{
					threshold:0            //设置距离底部多少距离时触发，默认值为0，数字类型
				}
			}, callback);
		}else{
			callback();
		}
	},


	setStorage(key,val){
		return ApiTool.setStorage(key,val);
	},

	getStorage(key){
		return ApiTool.getStorage(key);
	},

	rmStorage(key){
		return ApiTool.rmStorage(key);
	},
	clearStorage(){
		return ApiTool.clearStorage();
	},
}
export default Mogo;
