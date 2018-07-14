document.addEventListener("DOMContentLoaded", () => {
	let arrow_to_article = document.querySelector(".fa-angle-double-down");
	let arrow_to_beginnig = document.querySelector(".fa-angle-up");
	let goal_article = document.querySelector(".element-to-scroll");
	let goal_beginning = document.getElementsByTagName("body")[0];
	arrow_to_article.addEventListener("click", () => {
		goal_article.scrollIntoView();
	})
	arrow_to_beginnig.addEventListener("click", () => {
		goal_beginning.scrollIntoView();
	})
})


var forEach = function (t, o, r) {
	if ("[object Object]" === Object.prototype.toString.call(t))
		for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
	else
		for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t)
};
var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
	forEach(hamburgers, function (hamburger) {
		hamburger.addEventListener("click", function () {
			this.classList.toggle("is-active");
		}, false);
	});
}
