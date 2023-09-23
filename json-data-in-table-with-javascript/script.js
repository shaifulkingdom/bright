fetch("notice.json")
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
				<td>${notice.date}</td>
			</tr>
		`;
		}

		placeholder.innerHTML = out;
	});