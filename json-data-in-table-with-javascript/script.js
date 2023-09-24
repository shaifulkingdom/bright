fetch("json/notice.json")
	.then(function (response) {
		return response.json();
	})
	.then(function (notices) {
		let placeholder = document.querySelector("#data");
		let out = "";
		for (let notice of notices) {
			out += `
			<tr>
				<td>${notice.subject}</td>
				<td><a href="${notice.link}" target="_blank">
				<button>Download</button>
				</a></td>
				<td>${notice.date}</td>
			</tr>
		`;
		}

		placeholder.innerHTML = out;
	});