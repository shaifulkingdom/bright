//=================================================================================//
//                                notice-part-start
//=================================================================================//
fetch("js/json/notice.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (notices) {
        let placeholder = document.querySelector("#data-output");
        let out = "";
        for (let notice of notices) {
            out += `
			<tr>
				<td class="subject">${notice.subject}</td>
				<td class="date">${notice.date}</td>
				<td><a href="${notice.link}" target="_blank"><button>Download</button></a></td>
			</tr>
		`;
        }

        placeholder.innerHTML = out;
    });
//=================================================================================//
//                                notice-part-end
//=================================================================================//