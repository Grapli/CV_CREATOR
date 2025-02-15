// //Buttons
const jobBtn = document.querySelector('.job-button')
const eduBtn = document.querySelector('.edu-button')
const langBtn = document.querySelector('.language-button')
const skillBtn = document.querySelector('.skills-button')

// Funkcja generująca nowy formularz dla doświadczenia zawodowego
const createJob = () => {
	const cvBoxJob = document.querySelector('.cv-box-job')

	const jobForm = document.createElement('form')
	jobForm.classList.add('job-form')
	jobForm.setAttribute('action', '')

	const fields = [
		{ label: 'Firma:', type: 'text', id: 'company', name: 'company', placeholder: 'np. IT Software house' },
		{ label: 'Stanowisko:', type: 'text', id: 'job-title', name: 'job-title', placeholder: 'np. Specjalista' },
		{ label: 'Od:', type: 'month', id: 'job-start', name: 'job-start' },
		{ label: 'Do:', type: 'month', id: 'job-end', name: 'job-end' },
		{ label: 'Opis:', type: 'textarea', id: 'job-description', name: 'job-description' },
	]

	fields.forEach(field => {
		const label = document.createElement('label')
		label.setAttribute('for', field.id)
		label.textContent = field.label

		let input
		if (field.type === 'textarea') {
			input = document.createElement('textarea')
		} else {
			input = document.createElement('input')
			input.setAttribute('type', field.type)
			if (field.placeholder) {
				input.setAttribute('placeholder', field.placeholder)
			}
		}
		input.setAttribute('id', field.id)
		input.setAttribute('name', field.name)
		jobForm.append(label, input)
	})

	const deleteBtn = document.createElement('button')
	deleteBtn.classList.add('delete')
	deleteBtn.textContent = 'Usuń'
	deleteBtn.addEventListener('click', e => {
		e.preventDefault()
		jobForm.remove()
	})
	jobForm.append(deleteBtn)
	cvBoxJob.append(jobForm)
}
// Funkcja generująca nowy formularz dla edukacji
const createEdu = () => {
	const cvBoxEdu = document.querySelector('.cv-box-edu')
	const eduForm = document.createElement('form')

	eduForm.classList.add('edu-form')
	eduForm.setAttribute('action', '')

	const fields = [
		{ label: 'Szkoła/Uczelnia:', type: 'text', id: 'school', name: 'school' },
		{ label: 'Kierunek/Stopień:', type: 'text', id: 'degree', name: 'degree' },
		{ label: 'Od:', type: 'month', id: 'edu-start', name: 'edu-start' },
		{ label: 'Do:', type: 'month', id: 'edu-end', name: 'edu-end' },
	]

	fields.forEach(field => {
		const label = document.createElement('label')
		label.setAttribute('for', field.id)
		label.textContent = field.label

		let input

		input = document.createElement('input')
		input.setAttribute('type', field.type)
		if (field.placeholder) {
			input.setAttribute('placeholder', field.placeholder)
		}

		input.setAttribute('id', field.id)
		input.setAttribute('name', field.name)
		eduForm.append(label, input)
	})
	const deleteBtn = document.createElement('button')
	deleteBtn.classList.add('delete')
	deleteBtn.textContent = 'Usuń'
	deleteBtn.addEventListener('click', e => {
		e.preventDefault()
		eduForm.remove()
	})
	eduForm.append(deleteBtn)
	cvBoxEdu.append(eduForm)
}
// Funkcja generująca nowy formularz dla poziomu języka
const createLanguage = () => {
	const cvBoxLang = document.querySelector('.cv-box-lang')
	const langForm = document.createElement('form')
	langForm.setAttribute('action', '')
	langForm.classList.add('language-form')
	const fields = [
		{ label: 'Język:', type: 'text', id: 'language', name: 'language', placeholder: 'np. Angielski' },
		{ label: 'Poziom:', type: 'text', id: 'level', name: 'level', placeholder: 'np. C1' },
	]

	fields.forEach(field => {
		const label = document.createElement('label')
		label.setAttribute('for', field.id)
		label.textContent = field.label

		let input
		input = document.createElement('input')
		input.setAttribute('type', field.type)
		if (field.placeholder) {
			input.setAttribute('placeholder', field.placeholder)
		}

		input.setAttribute('id', field.id)
		input.setAttribute('name', field.name)
		langForm.append(label, input)
	})
	const deleteBtn = document.createElement('button')
	deleteBtn.classList.add('delete')
	deleteBtn.textContent = 'Usuń'
	deleteBtn.addEventListener('click', e => {
		e.preventDefault() 
		langForm.remove() 
	})
	langForm.append(deleteBtn)
	cvBoxLang.append(langForm)
}

const createSkills = () => {
	const cvBoxSkills = document.querySelector('.cv-box-skills')
	const skillForm = document.createElement('form')
	skillForm.setAttribute('action', '')
	skillForm.classList.add('skills-form')

	const fields = [
		{ label: 'Umiejętności:', type: 'text', id: 'skills', name: 'skills', placeholder: 'HTML, CSS, JavaScript' },
	]
	fields.forEach(field => {
		const label = document.createElement('label')
		label.setAttribute('for', field.id)
		label.textContent = field.label

		let input
		input = document.createElement('input')
		input.setAttribute('type', field.type)
		if (field.placeholder) {
			input.setAttribute('placeholder', field.placeholder)
		}

		input.setAttribute('id', field.id)
		input.setAttribute('name', field.name)
		skillForm.append(label, input)
	})
	const deleteBtn = document.createElement('button')
	deleteBtn.classList.add('delete')
	deleteBtn.textContent = 'Usuń'
	deleteBtn.addEventListener('click', e => {
		e.preventDefault()
		skillForm.remove()
	})
	skillForm.append(deleteBtn)
	cvBoxSkills.append(skillForm)
}

jobBtn.addEventListener('click', createJob)
eduBtn.addEventListener('click', createEdu)
langBtn.addEventListener('click', createLanguage)
skillBtn.addEventListener('click', createSkills)
