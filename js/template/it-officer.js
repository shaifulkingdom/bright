//=================================================================================//
//                                it-officer-part-start
//=================================================================================//
fetch("js/json/it-officer.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (persons) {
        let placeholder = document.querySelector("#data-output");
        let out = "";
        for (let person of persons) {
            out += `
			<tr>
				<td class="image"><img src="${person.image}" alt="image"></td>
				<td class="name">${person.name}</td>
                <td class="designation">${person.designation}</td>
                <td class="phone email">
                    <a href="tel:${person.phone}">${person.phone}</a>
                    <a href="mailto:${person.email}">${person.email}</a>
                </td>
                <td class="email"><a href="mailto:${person.email}">${person.email}</a></td>
			</tr>
		`;
        }

        placeholder.innerHTML = out;
    });
//=================================================================================//
//                               it-officer-part-end
//=================================================================================//