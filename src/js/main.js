const jobBtn = document.querySelector('.job-button')
const eduBtn = document.querySelector('.edu-button')
const langBtn = document.querySelector('.language-button')
const skillBtn = document.querySelector('.skills-button')
const btnDeleteAll = document.querySelector('.btn-delete-all')
const downloadBtn = document.querySelector('.download')

const createJob = (data = {}) => {
	const jobContainer = document.querySelector('.cv-box-job')
	const form = document.createElement('form')
	form.classList.add('job-form', 'form')
	form.setAttribute('data-id', data.id || Date.now().toString())
	form.innerHTML = `
	<label for="company" class="label">Firma:</label>
	<input type="text" placeholder="np. IT Software house" id="company" name="company" class="input" value="${
		data.company || ''
	}">	
	<label for="job-title" class="label">Stanowisko:</label>
	<input type="text" placeholder="np. Specjalista" id="job-title" name="job-title" class="input" value="${
		data.role || ''
	}">
	<label for="job-start" class="label">Od:</label>
	<input type="month" id="job-start" name="job-start" class="input" value="${data.start || ''}">
	<label for="job-end" class="label">Do:</label>
	<input type="month" id="job-end" name="job-end" class="input" value="${data.end || ''}">	
	<label for="job-description" class="label">Opis:</label>
	<textarea id="job-description" name="job-description" class="textarea">${data.description || ''}</textarea>
	<button type="button" class="delete">Usuń</button>`
	form.querySelectorAll('input, textarea').forEach(input => {
		input.addEventListener('input', saveJobData)
	})
	form.querySelector('.delete').addEventListener('click', () => {
		form.remove()
		saveJobData()
	})
	jobContainer.appendChild(form)
}
const generateUserJob = () => {
	const previewJob = document.querySelector('.cv-preview-job')
	const savedData = JSON.parse(localStorage.getItem('jobData')) || []
	if (savedData.length > 0) {
		previewJob.innerHTML = '<h2 class="cv-preview-job-title">Doświadczenie:</h2>'
	}
	savedData.forEach(data => {
		const jobBox = document.createElement('div')
		jobBox.classList.add('preview-job-box')
		const jobTitle = document.createElement('h3')
		jobTitle.classList.add('preview-job-box-title')
		jobTitle.textContent = data.company
		const jobRole = document.createElement('h4')
		jobRole.classList.add('preview-job-role')
		jobRole.textContent = data.role
		const jobDateBox = document.createElement('div')
		jobDateBox.classList.add('preview-job-date')
		const jobFrom = document.createElement('p')
		jobFrom.classList.add('preview-job-from')
		jobFrom.textContent = data.start
		const jobTo = document.createElement('p')
		jobTo.classList.add('preview-job-to')
		jobTo.textContent = data.end
		const jobSpace = document.createElement('p')
		jobSpace.classList.add('space')
		jobSpace.textContent = '-'
		const jobDescription = document.createElement('p')
		jobDescription.classList.add('preview-job-description')
		jobDescription.textContent = data.description
		jobDateBox.append(jobFrom, jobSpace, jobTo)
		jobBox.append(jobTitle, jobRole, jobDateBox, jobDescription)
		previewJob.append(jobBox)
	})
}
const saveJobData = () => {
	const jobForms = document.querySelectorAll('.job-form')
	let jobData = []
	jobForms.forEach(form => {
		const id = form.getAttribute('data-id') || Date.now().toString()
		const jobName = form.querySelector('[name="company"]').value
		const jobRole = form.querySelector('[name="job-title"]').value
		const jobStart = form.querySelector('[name="job-start"]').value
		const jobEnd = form.querySelector('[name="job-end"]').value
		const jobDescription = form.querySelector('[name="job-description"]').value
		jobData.push({ id, company: jobName, role: jobRole, start: jobStart, end: jobEnd, description: jobDescription })
	})
	localStorage.setItem('jobData', JSON.stringify(jobData))
	const previewJob = document.querySelector('.cv-preview-job')
	previewJob.innerHTML = ''
	generateUserJob()
}
const loadJobData = () => {
	const savedData = JSON.parse(localStorage.getItem('jobData')) || []
	savedData.forEach(data => {
		createJob(data)
	})
	generateUserJob()
}
const createEduForm = (data = {}) => {
	const eduContainer = document.querySelector('.cv-box-edu')
	const form = document.createElement('form')
	form.classList.add('edu-form', 'form')
	form.setAttribute('data-id', data.id || Date.now().toString())
	form.innerHTML = `
		<label for="school" class="label">Szkoła/Uczelnia </label>
        <input type="text" class="input" name="school" placeholder="Nazwa szkoły" value="${data.school || ''}" />
		<label for="degree" class="label">Kierunek/Stopień</label>
        <input type="text" class="input" name="degree" placeholder="Stopień/tytuł" value="${data.degree || ''}" />
		<label for="edu-start" class="label">Od:</label>
        <input type="date"  class="input" name="edu-start" value="${data.start || ''}" />
		<label for="edu-end" class="label">Do:</label>
        <input type="date" class="input" name="edu-end" value="${data.end || ''}" />
        <button class="delete">Usuń</button>
    `
	form.querySelectorAll('input').forEach(input => {
		input.addEventListener('input', saveEduData)
	})
	form.querySelector('.delete').addEventListener('click', () => {
		form.remove()
		saveEduData()
	})
	eduContainer.appendChild(form)
}
const generateUserEdu = () => {
	const previewEdu = document.querySelector('.cv-preview-edu')
	const savedData = JSON.parse(localStorage.getItem('eduData')) || []
	if (savedData.length > 0) {
		previewEdu.innerHTML = '<h2 class="cv-preview-edu-title">Edukacja:</h2>'
	}
	savedData.forEach(data => {
		const eduBox = document.createElement('div')
		eduBox.classList.add('preview-edu-box')
		const eduTitle = document.createElement('h3')
		eduTitle.classList.add('preview-edu-title')
		eduTitle.textContent = data.school
		const eduRole = document.createElement('h4')
		eduRole.classList.add('preview-edu-role')
		eduRole.textContent = data.degree
		const eduDate = document.createElement('div')
		eduDate.classList.add('preview-edu-date')
		const eduFrom = document.createElement('p')
		eduFrom.classList.add('preview-edu-from')
		eduFrom.textContent = data.start
		const eduSpace = document.createElement('p')
		eduSpace.classList.add('space')
		eduSpace.textContent = '-'
		const eduTo = document.createElement('p')
		eduTo.classList.add('preview-edu-to')
		eduTo.textContent = data.end
		eduDate.append(eduFrom, eduSpace, eduTo)
		eduBox.append(eduTitle, eduRole, eduDate)
		previewEdu.append(eduBox)
	})
}
const saveEduData = () => {
	const eduForms = document.querySelectorAll('.edu-form')
	let eduData = []
	eduForms.forEach(form => {
		const id = form.getAttribute('data-id') || Date.now().toString()
		form.setAttribute('data-id', id)
		const eduSchool = form.querySelector('[name="school"]').value
		const eduRoleLvl = form.querySelector('[name="degree"]').value
		const eduStart = form.querySelector('[name="edu-start"]').value
		const eduEnd = form.querySelector('[name="edu-end"]').value
		eduData.push({ id, school: eduSchool, degree: eduRoleLvl, start: eduStart, end: eduEnd })
	})
	localStorage.setItem('eduData', JSON.stringify(eduData))
	const previewEdu = document.querySelector('.cv-preview-edu')
	previewEdu.innerHTML = ''
	generateUserEdu()
}
const loadEduData = () => {
	const savedData = JSON.parse(localStorage.getItem('eduData')) || []
	savedData.forEach(data => {
		createEduForm(data)
	})
	generateUserEdu()
}
const createLanguage = (data = {}) => {
	const langContainer = document.querySelector('.cv-box-lang')
	const form = document.createElement('form')
	form.classList.add('language-form', 'form')
	form.setAttribute('data-id', data.id || Date.now().toString())
	form.innerHTML = `
		<label for="language" class="label">Język:</label>
    	<input type="text"  class="input" id="language" name="language" placeholder="Angielski" value="${
				data.language || ''
			}">
    	<label for="level" class="label"></label>
      	<input type="text" class="input" id="level" name="level" placeholder="C1" value="${data.level || ''}">
     	<button class="delete">Usuń</button>
	`
	form.querySelectorAll('input').forEach(input => {
		input.addEventListener('input', saveLangData)
	})
	form.querySelector('.delete').addEventListener('click', () => {
		form.remove()
		saveLangData()
	})
	langContainer.appendChild(form)
}
const generateUserLang = () => {
	const previewLang = document.querySelector('.cv-preview-lang')
	const savedData = JSON.parse(localStorage.getItem('langData')) || []
	if (savedData.length > 0) {
		previewLang.innerHTML = '<h2 class="cv-preview-title">Języki:</h2>'
	}
	savedData.forEach(data => {
		const langBox = document.createElement('div')
		langBox.classList.add('preview-lang-box')
		const lang = document.createElement('p')
		lang.classList.add('preview-lang-lang')
		lang.textContent = data.language
		const langSpace = document.createElement('p')
		langSpace.classList.add('space')
		langSpace.textContent = '-'
		const langLvl = document.createElement('p')
		langLvl.classList.add('preview-lang-lvl')
		langLvl.textContent = data.level
		langBox.append(lang, langSpace, langLvl)
		previewLang.append(langBox)
	})
}
const saveLangData = () => {
	const langForms = document.querySelectorAll('.language-form')
	let langData = []
	langForms.forEach(form => {
		const id = form.getAttribute('data-id') || Date.now().toString()
		form.setAttribute('data-id', id)
		const langName = form.querySelector('[name="language"]').value
		const langLevel = form.querySelector('[name="level"]').value
		langData.push({ id, language: langName, level: langLevel })
	})
	localStorage.setItem('langData', JSON.stringify(langData))
	const previewLang = document.querySelector('.cv-preview-lang')
	previewLang.innerHTML = ''
	generateUserLang()
}
const loadLangData = () => {
	const savedData = JSON.parse(localStorage.getItem('langData')) || []
	savedData.forEach(data => {
		createLanguage(data)
	})
	generateUserLang()
}
const createSkills = (data = {}) => {
	const skillsContainer = document.querySelector('.cv-box-skills')
	const form = document.createElement('form')
	form.classList.add('skills-form', 'form')
	form.setAttribute('data-id', data.id || Date.now().toString())
	form.innerHTML = ` 
	<label class="label" for="skills">Umiętność:</label>
    <input class="input" type="text" id="skills" name="skills" value="${
			data.skill || ''
		}" placeholder="Znajmość Google Search Console">
	<button class="delete">Usuń</button>
	`
	form.querySelectorAll('input').forEach(input => {
		input.addEventListener('input', saveSkillsData)
	})
	form.querySelector('.delete').addEventListener('click', () => {
		form.remove()
		saveSkillsData()
	})
	skillsContainer.append(form)
}
const generateUserSkills = () => {
	const previewSkills = document.querySelector('.cv-preview-skills')
	const savedData = JSON.parse(localStorage.getItem('skillsData')) || []
	if (savedData.length > 0) {
		previewSkills.innerHTML = ' <h2 class="cv-preview-skills-title">Umiejętności:</h2>'
		const skillList = document.createElement('ul')
		skillList.classList.add('preview-skill-list')
		savedData.forEach(data => {
			const skillItem = document.createElement('li')
			skillItem.classList.add('preview-skill-item')
			skillItem.textContent = data.skill
			skillList.appendChild(skillItem)
		})
		previewSkills.appendChild(skillList)
	}
}
const saveSkillsData = () => {
	const skillsForms = document.querySelectorAll('.skills-form')
	let skillsData = []
	skillsForms.forEach(form => {
		const id = form.getAttribute('data-id') || Date.now().toString()
		const skill = form.querySelector('[name="skills"]').value
		skillsData.push({ id, skill: skill })
	})
	localStorage.setItem('skillsData', JSON.stringify(skillsData))
	const previewSkills = document.querySelector('.cv-preview-skills')
	previewSkills.innerHTML = ''
	generateUserSkills()
}
const loadSkillData = () => {
	const savedData = JSON.parse(localStorage.getItem('skillsData')) || []
	savedData.forEach(data => {
		createSkills(data)
	})
	generateUserSkills()
}
const generateUserDataAbout = () => {
	const aboutPreviewContainer = document.querySelector('.cv-preview-about')
	const formName = document.querySelector('#name')
	const formLastName = document.querySelector('#last-name')
	const formEmail = document.querySelector('#email')
	const formTel = document.querySelector('#tel')
	const hasData = formName.value || formLastName.value || formEmail.value || formTel.value
	const hasImage = localStorage.getItem('img')
	aboutPreviewContainer.innerHTML =
		hasData || hasImage
			? ` 
		${
			hasImage
				? `
		<div class="img-preview-box">
			<img class="img-preview" src="${localStorage.getItem('img')}" alt="Podgląd zdjęcia">
		</div>`
				: ''
		}
		${
			hasData
				? `
		<h2 class="cv-preview-title">Dane osobowe:</h2>
		${formName.value || formLastName.value ? `<p class="preview">Imię i Nazwisko:</p>` : ''}
		${
			formName.value || formLastName.value
				? `<p class="name-preview left">${formName.value + ' ' + formLastName.value}</p>`
				: ''
		}
		${formEmail.value ? `<p class="preview">Email:</p><p class="email-preview left">${formEmail.value}</p>` : ''}
		${formTel.value ? `<p class="preview">Telefon:</p><p class="tel-preview left">${formTel.value}</p>` : ''}`
				: ''
		}
	`
			: ''
}
const saveFormsDataAbout = () => {
	const inputs = document.querySelectorAll(
		'[name="name"], [name="last-name"], [name="email"], [name="tel"], [name="img"]'
	)

	inputs.forEach(input => {
		if (input.name === 'img' && input.files && input.files[0]) {
			const reader = new FileReader()
			reader.onload = function (e) {
				localStorage.setItem(input.name, e.target.result) //
				generateUserDataAbout()
			}
			reader.readAsDataURL(input.files[0])
		} else {
			localStorage.setItem(input.name, input.value)
		}
	})
	generateUserDataAbout()
}
const loadFormsUserAbout = () => {
	const inputs = document.querySelectorAll('[name="name"], [name="last-name"], [name="email"], [name="tel"] ')
	inputs.forEach(input => {
		input.value = localStorage.getItem(input.name) || ''
	})
	generateUserDataAbout()
}
document
	.querySelectorAll('[name="name"], [name="last-name"], [name="email"], [name="tel"], [name="img"]')
	.forEach(input => {
		input.addEventListener('input', saveFormsDataAbout)
	})
const generatePreview = () => {
	generateUserDataAbout()
	generateUserJob()
	generateUserLang()
	generateUserEdu()
	generateUserSkills()
}
const clearAll = () => {
	localStorage.clear()
	const previewJob = document.querySelector('.cv-preview-job')
	const previewEdu = document.querySelector('.cv-preview-edu')
	const previewLang = document.querySelector('.cv-preview-lang')
	const previewSkills = document.querySelector('.cv-preview-skills')
	const previewAbout = document.querySelector('.cv-preview-about')
	const skillForms = document.querySelectorAll('.skills-form')
	const eduForms = document.querySelectorAll('.edu-form')
	const langForms = document.querySelectorAll('.language-form')
	const jobForms = document.querySelectorAll('.job-form')
	previewJob.textContent = ''
	previewEdu.textContent = ''
	previewLang.textContent = ''
	previewSkills.textContent = ''
	previewAbout.textContent = ''
	skillForms.forEach(form => form.remove())
	eduForms.forEach(form => form.remove())
	langForms.forEach(form => form.remove())
	jobForms.forEach(form => form.remove())
	const userName = document.querySelector('.name-preview')
	const userEmail = document.querySelector('.email-preview')
	const userTel = document.querySelector('.tel-preview')
	const userImg = document.querySelector('.img-preview')
	if (userName) userName.textContent = ''
	if (userEmail) userEmail.textContent = ''
	if (userTel) userTel.textContent = ''
	const formName = document.querySelector('#name')
	const formLastName = document.querySelector('#last-name')
	const formEmail = document.querySelector('#email')
	const formTel = document.querySelector('#tel')
	formName.value = ''
	formLastName.value = ''
	formEmail.value = ''
	formTel.value = ''
	const inputColor = document.querySelector('#colorPicker')
	const leftPreview = document.querySelector('.left-side')
	leftPreview.style.backgroundColor = '#dfdfdf'
	inputColor.value = '#dfdfdf'
}
const changeColor = () => {
	const inputColor = document.querySelector('#colorPicker')
	const leftPreview = document.querySelector('.left-side')
	leftPreview.style.backgroundColor = inputColor.value

	localStorage.setItem('savedColor', inputColor.value)
}
//LocalStorage
const loadLocalStorage = () => {
	loadFormsUserAbout()
	loadEduData()
	loadLangData()
	loadJobData()
	loadSkillData()
	const inputColor = document.querySelector('#colorPicker')
	const savedColor = localStorage.getItem('savedColor')
	if (savedColor) {
		document.querySelector('.left-side').style.backgroundColor = savedColor
		inputColor.value = savedColor
	}
	inputColor.addEventListener('input', changeColor)
}

jobBtn.addEventListener('click', createJob)
eduBtn.addEventListener('click', createEduForm)
langBtn.addEventListener('click', createLanguage)
skillBtn.addEventListener('click', createSkills)
btnDeleteAll.addEventListener('click', clearAll)
document.addEventListener('DOMContentLoaded', loadLocalStorage)
