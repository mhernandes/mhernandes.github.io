var filters = document.querySelector('.filters__list_category'),
	blog_posts_tags = that_tag = tags = 0;


function verifyFilter(value) {
	blog_posts_tags = document.getElementsByClassName('post__content_tags');

	console.log(value);

	for (var i = 0; i < blog_posts_tags.length; i++) {
		that_tag = blog_posts_tags[i]; 
		tags = that_tag.getAttribute('tags');

		if (value === 'undo') {
			that_tag.parentNode.parentNode.style.display = 'block';
		} else {
			if (tags.indexOf(value) == -1) {
				that_tag.parentNode.parentNode.style.display = 'none';
			} else {
				that_tag.parentNode.parentNode.style.display = 'block';
			}
		}
	}

	blog_posts_tags = that_tag = tags = 0;
}

if (window_width < 680) {
	var post_wrapper = document.getElementsByClassName('post');
	
	if (post_wrapper.length > 0) {
		for (var i = 0; i < post_wrapper.length; i++) {
			var that = post_wrapper[i];
			that.removeChild(that.childNodes[3]);
		}
	}

	var posts_content = document.getElementsByClassName('post__content');
	
	if (posts_content.length > 0) {
		for (var k = 0; k < posts_content.length; k++) {
			var color = posts_content[k].getAttribute('color');
			posts_content[k].setAttribute('bg-color', color);
		}
	}
}