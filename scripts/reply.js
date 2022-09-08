// Go back to home page function
const goBackToHome = () => {
	let style = document.styleSheets[0].cssRules[0].style
	style.setProperty('display', 'block')

	setTimeout(() => {
		style.removeProperty('display')
		style.removeProperty('bottom')
		style.removeProperty('height')

		style.setProperty('height', '100%')
		style.setProperty('top', '0')
		style.setProperty('animation', 'empty 1s forwards')

		setTimeout(() => {
			style.removeProperty('display')
			style.removeProperty('height')
			style.removeProperty('top')
			style.removeProperty('animation')

			style.setProperty('display', 'none')
			style.setProperty('height', '0%')
			style.setProperty('bottom', '0')
			style.setProperty('animation', 'fill 1s forwards')
		}, 1000)
	}, 1000)
}

//DO TIME FUNCTION
const doTime = () => {
	setTimeout(() => {
		setInterval(() => {
			let amPM
			let time = new Date()
			let hours = time.getHours()
			let month = time.toLocaleString('default', { month: 'long' })
			if (!navigator.languages[0].includes('en')) {
				let capitalize = (string) => {
					return string.charAt(0).toUpperCase() + string.slice(1)
				}
				let minutes = time.getMinutes()
				let seconds = time.getSeconds()
				let miliseconds = time.getMilliseconds()
				let day = time.getDate()
				let year = time.getFullYear()
				if (hours === 12) {
					amPM = ' PM'
				} else if (hours > 12) {
					hours = hours - 12
					amPM = ' PM'
				} else {
					amPM = ' AM'
				}
				if (minutes < 10) {
					minutes = '0' + minutes
				}
				if (seconds < 10) {
					seconds = '0' + seconds
				}

				let formattedHour = `${hours}:${minutes} ${amPM}`
				let formattedDate = `${capitalize(month)} ${day}, ${year}`
				document.querySelector('#date').innerHTML = `${formattedDate}`
				document.querySelector('#time').innerHTML = `${formattedHour}`
				// document.querySelector('#time').style.padding = '.5rem 1rem'
				// document.querySelector('#time').style.backgroundColor = 'var(--main-color)'
			} else {
				let capitalize = (string) => {
					return string.charAt(0).toUpperCase() + string.slice(1)
				}
				let minutes = time.getMinutes()
				let seconds = time.getSeconds()
				let miliseconds = time.getMilliseconds()
				let day = time.getDate()
				let year = time.getFullYear()
				if (hours === 12) {
					amPM = ' PM'
				} else if (hours > 12) {
					hours = hours - 12
					amPM = ' PM'
				} else {
					amPM = ' AM'
				}
				if (minutes < 10) {
					minutes = '0' + minutes
				}
				if (seconds < 10) {
					seconds = '0' + seconds
				}
				if (day === 1 || day === 21 || day === 31) {
					day = day + 'st'
				}
				if (day === 2 || day === 22) {
					day = day + 'nd'
				}
				if (day === 3 || day === 23) {
					day = day + 'rd'
				}
				if ((day > 3 && day < 21) || (day > 23 && day < 31)) {
					day = day + 'th'
				}
				let formattedDate = `${capitalize(month)} ${day}, ${year}`
				let formattedHour = `${hours}:${minutes} ${amPM} `
				document.querySelector('#date').innerHTML = `${formattedDate}`
				document.querySelector('#time').innerHTML = `${formattedHour}`
				// document.querySelector('#time').style.padding = '.5rem 1rem'
				// document.querySelector('#time').style.backgroundColor = 'var(--main-color)'
			}
		}, 1000)
	}, 0)
}

document.addEventListener('DOMContentLoaded', doTime)
