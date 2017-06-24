
//Mình phải tiêm file js này vào trang
var s = document.createElement('script');
s.src = chrome.extension.getURL('notlaptrinh-content.js');
document.body.appendChild(s);

//Mỗi lần tải lại trang, nó sẽ gửi đến background.js
chrome.runtime.sendMessage(null, {
	action: 'hit'
});
