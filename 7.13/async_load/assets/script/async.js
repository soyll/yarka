let content = document.getElementById("content");
const motionReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function animateSections(container) {
	if (motionReduced || !container) return;

	container.querySelectorAll(":scope > section").forEach((section, index) => {
		section.style.setProperty("--reveal-delay", index * 70 + "ms");
		requestAnimationFrame(() => section.classList.add("is-visible"));
	});

	setTimeout(() => container.classList.remove("is-swapping"), 900);
}

function initPageEnter() {
	if (motionReduced) {
		document.body.classList.add("is-ready");
		return;
	}

	const onLoad = [
		["header", "reveal reveal--from-top", 0],
		["section.banner", "", 100],
		["footer", "", 200],
	];

	onLoad.forEach(([selector, classes, delay]) => {
		const el = document.querySelector(selector);
		if (!el) return;
		if (classes) el.classList.add(...classes.split(" "));
		else el.classList.add("reveal");
		if (delay) el.style.setProperty("--reveal-delay", delay + "ms");
	});

	requestAnimationFrame(() => {
		requestAnimationFrame(() => {
			document.body.classList.add("is-ready");
			document.querySelectorAll(".reveal").forEach(el => el.classList.add("is-visible"));
		});
	});
}

async function openPage(alias, to_feedback = false) {
	let promice_fetch = await fetch(`async/${alias}`);
	let result = await promice_fetch.text();

	content.classList.add("is-swapping");
	content.innerHTML = result;
	animateSections(content);

	if (to_feedback) {
		toFeedback();
	}
}

function toFeedback() {
	let feedback = document.getElementById("feedback");

	window.scrollTo({
		top: feedback.offsetTop,
		behavior: "smooth"
	});
}

initPageEnter();
openPage("main");
