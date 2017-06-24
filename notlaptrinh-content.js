var urls = [{
	u: '/',
	t: 'Nốt Lập Trình'
}, {
	u: '/simple-auto-surf',
	t: 'Chương trình auto surf đơn giản - Nốt Lập Trình'
}];

var url = urls[parseInt(Math.random() * urls.length)];

document.title = url.t;
window.history.pushState(null, null, url.u);

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create','UA-101589231-1');
ga('send','pageview');
ga('send','event','auto','hit',window.location.hostname || 'undefine');
