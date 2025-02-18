// //Buttons
const jobBtn = document.querySelector('.job-button')
const eduBtn = document.querySelector('.edu-button')
const langBtn = document.querySelector('.language-button')
const skillBtn = document.querySelector('.skills-button')
const btnGenerate = document.querySelector('.btn-generate')
const btnDeleteAll = document.querySelector('.btn-delete-all')

// Funkcje generujące nowy formularz
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
// Funkcje dodające dane do preview
const generateUserDataAbout = () => {
	const userName = document.querySelector('.name-preview')
	const userEmail = document.querySelector('.email-preview')
	const userTel = document.querySelector('.tel-preview')
	const userImg = document.querySelector('.img-preview')
	const formName = document.querySelector('#name')
	const formLastName = document.querySelector('#last-name')
	userName.textContent = formName.value + ' ' + formLastName.value
	const formEmail = document.querySelector('#email')
	userEmail.textContent = formEmail.value
	const formTel = document.querySelector('#tel')
	userTel.textContent = formTel.value
}

const generateUserJob = () => {
	const previewJob = document.querySelector('.cv-preview-job')

	previewJob.innerHTML = '<h2 class="cv-preview-job-title">Doświadczenie:</h2>'

	const jobForms = document.querySelectorAll('.job-form')

	jobForms.forEach(form => {
		const jobBox = document.createElement('div')
		jobBox.classList.add('preview-job-box')
		const jobTitle = document.createElement('h3')
		jobTitle.classList.add('preview-job-box-title')
		const jobRole = document.createElement('h4')
		jobRole.classList.add('preview-job-role')
		const jobDateBox = document.createElement('div')
		jobDateBox.classList.add('preview-job-date')
		const jobFrom = document.createElement('p')
		jobFrom.classList.add('preview-job-from')
		const jobTo = document.createElement('p')
		jobTo.classList.add('preview-job-to')
		const jobSpace = document.createElement('p')
		jobSpace.classList.add('space')
		jobSpace.textContent = '-'
		const jobDescription = document.createElement('p')
		jobDescription.classList.add('preview-job-description')
		const formJobCompany = form.querySelector('[name="company"]')
		const formJobRole = form.querySelector('[name="job-title"]')
		const formJobStart = form.querySelector('[name="job-start"]')
		const formJobEnd = form.querySelector('[name="job-end"]')
		const formJobDescription = form.querySelector('[name="job-description"]')
		jobTitle.textContent = formJobCompany.value || 'Brak nazwy firmy'
		jobRole.textContent = formJobRole.value || 'Brak stanowiska'
		jobFrom.textContent = formJobStart.value || '????-??'
		jobTo.textContent = formJobEnd.value || '????-??'
		jobDescription.textContent = formJobDescription.value || 'Brak opisu'
		jobDateBox.append(jobFrom, jobSpace, jobTo)
		jobBox.append(jobTitle, jobRole, jobDateBox, jobDescription)
		previewJob.append(jobBox)
	})
}
const generateUserLang = () => {
	const previewLang = document.querySelector('.cv-preview-lang')

	previewLang.innerHTML = '<h2 class="cv-preview-title">Języki:</h2>'

	const langForms = document.querySelectorAll('.language-form')

	langForms.forEach(form => {
		const langBox = document.createElement('div')
		langBox.classList.add('preview-lang-box')

		const lang = document.createElement('p')
		lang.classList.add('preview-lang-lang')
		const langSpace = document.createElement('p')
		langSpace.classList.add('space')
		langSpace.textContent = '-'
		const langLvl = document.createElement('p')
		langLvl.classList.add('preview-lang-lvl')

		const formLang = form.querySelector('[name="language"]')
		const formLangLvl = form.querySelector('[name="level"]')

		lang.textContent = formLang.value
		langLvl.textContent = formLangLvl.value

		langBox.append(lang, langSpace, langLvl)
		previewLang.append(langBox)
	})
}

const generateUserEdu = () => {
	const previewEdu = document.querySelector('.cv-preview-edu')

	previewEdu.innerHTML = '<h2 class="cv-preview-edu-title">Edukacja:</h2>'

	const eduForms = document.querySelectorAll('.edu-form')

	eduForms.forEach(form => {
		const eduBox = document.createElement('div')
		eduBox.classList.add('preview-edu-box')

		const eduTitle = document.createElement('h3')
		eduTitle.classList.add('preview-edu-title')

		const eduRole = document.createElement('h4')
		eduRole.classList.add('.preview-edu-role')

		const eduDate = document.createElement('div')
		eduDate.classList.add('preview-edu-date')

		const eduFrom = document.createElement('p')
		eduFrom.classList.add('preview-edu-from')

		const eduSpace = document.createElement('p')
		eduSpace.classList.add('space')
		eduSpace.textContent = '-'

		const eduTo = document.createElement('p')
		eduTo.classList.add('preview-edu-to')

		const eduSchool = form.querySelector('[name="school"]')
		const eduRoleLvl = form.querySelector('[name="degree"]')
		const eduStart = form.querySelector('[name="edu-start"]')
		const eduEnd = form.querySelector('[name="edu-end"]')

		eduTitle.textContent = eduSchool.value
		eduRole.textContent = eduRoleLvl.value
		eduFrom.textContent = eduStart.value
		eduTo.textContent = eduEnd.value

		eduDate.append(eduFrom, eduSpace, eduTo)
		eduBox.append(eduTitle, eduRole, eduDate)
		previewEdu.append(eduBox)
	})
}

const generatePreview = () => {
	generateUserDataAbout()
	generateUserJob()
	generateUserLang()
	generateUserEdu()
}

//LocalStorage

jobBtn.addEventListener('click', createJob)
eduBtn.addEventListener('click', createEdu)
langBtn.addEventListener('click', createLanguage)
skillBtn.addEventListener('click', createSkills)
btnGenerate.addEventListener('click', generatePreview)
