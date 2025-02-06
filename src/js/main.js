//Buttons
const jobBtn = document.querySelector('.job-button')
const eduBtn = document.querySelector('.edu-button')
const langBtn = document.querySelector('.language-button')

const createJob = () => {
	const cvBoxJob = document.getElementsByClassName('cv-box-job')
	const jobForm = cvBoxJob.createElement('form')
	const label = jobForm.createElement('label')
	const input = jobForm.createElement('input')
	jobForm.setAttribute('action', 'atrybut')
	jobForm.classList.add('job-form')
	label.setAttribute('for', 'company')
	label.textContent = 'Firma:'
	input.setAttribute('type', 'text')
	input.setAttribute('id', 'company')
	input.setAttribute('name', 'company')

	jobForm.append(label,input)
	cvBoxJob.append(jobForm)
   
}
// createJob()
jobBtn.addEventListener('click', createJob)
