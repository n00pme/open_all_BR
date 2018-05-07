console.log('open all BR started');

document.ondblclick = function(){
	chrome.runtime.sendMessage({greeting:grab_links()}, function(response) {
		console.log(response.farewell);
	});
	add_border()
};


function add_border(){
	for (var i = 1; i < 11; i++) {
		document.getElementById(i)
		.getElementsByClassName('t')[0]
		.getElementsByTagName('a')[0]
		.style.border = "1px solid red"
	}
}


function grab_links(){
	links=[]
	for (var i = 1; i < 11; i++) {
		link=document.getElementById(i).getElementsByClassName('t')[0].getElementsByTagName('a')[0].href

		links = links.concat(link);
	}
	console.log(links)

	links_json=JSON.stringify(links);

	return links_json;
}





