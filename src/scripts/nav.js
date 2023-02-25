const navbar = document.querySelector(".hamburger");
const mid = document.querySelector(".mid");
const icon = document.querySelector(".logo");

navbar.addEventListener("click", () => {
	if (navbar.classList.contains("opened")) {
		throwDown([...mid.children][0]).onfinish = () => {
			mid.innerHTML = "";
		};
		navbar.classList.remove("opened");
	} else {
		navbar.classList.add("opened");
		const div = document.createElement("div");
		div.classList.add("mnavbar");
		mid.appendChild(div);
		const current = window.location.href
			.split("/")
			.pop()
			.slice(0, -5)
			.replace(".", "");

		["Home", "About", "Models"].forEach((a) => {
			const innerDiv = document.createElement("a");
			let link;
			switch (a) {
				case "Home":
					link = current === "index" ? "#" : "index.html";
					break;
				case "About":
					link = current === "about" ? "#" : "about.html";
					break;
				case "Models":
					link = current === "models" ? "#" : "models.html";
			}
			innerDiv.href = link;
			innerDiv.classList.add("mnavbar_text");
			innerDiv.innerText = a;
			div.appendChild(innerDiv);
		});
	}
});

icon.addEventListener("click", () => {
	window.location.href = "index.html";
});

window.onscroll = () => {
	if (navbar.classList.contains("opened")) {
		window.scrollTo(0, 0);
	}
};

/**
 *
 * @param {HTMLElement} elem
 */
function throwDown(elem) {
	return elem.animate(
		[
			{
				transform: "translateY(100%)",
			},
		],
		{
			duration: 1000,
			easing: "cubic-bezier(.97,.09,.71,1)",
		}
	);
}
