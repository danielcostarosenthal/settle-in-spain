// 1. GLOBAL VARIABLES
const burger = document.querySelector('.burger')
const contactDetails = document.querySelector('#header-phone-sticky')
const menuContainer = document.querySelector('.menu-container')
const menuLinks = document.querySelector('.menu-links')
const menuSticky = document.querySelector('.menu-sticky')
const menuStickyMobile = document.querySelector('.menu-sticky-mobile')
const activeLinks = document.querySelector('.menu-links-active')

const modalContactBackground = document.querySelector('.modal-contact-background')
const body = document.querySelector('body')
const contactBtn = document.querySelector('.header-phone-input input')
const contactFooterBtn = document.querySelector('.footer .header-phone-input input')
const contactImg = document.querySelector('.contact img')
const closeBtn = document.querySelector('#close-btn')
const submitBtn = document.querySelector('#submit')

const contactWhatsapp = document.querySelector('.contact-whatsapp img')
const hiddenSections = document.querySelectorAll('.faded')
const allHeadingsAndParagraphs = document.querySelectorAll('.fly-in')
const goHomeBtns = document.querySelectorAll('.go-home img')

const inputs = document.querySelectorAll('.modal-contact input, .modal-contact textarea')
const nameInput = document.querySelector('#username')
const emailInput = document.querySelector('#your-email')
const messageTextarea = document.querySelector('#your-message')

const dropdownItems = document.querySelectorAll('.dropdown-item')

const sectionHome = document.querySelector('.section-legal-services')
const sectionLinkButtonHome = document.querySelector('.dropdown-item-home')
const sectionCompany = document.querySelector('.section-accent-company-formation')
const sectionLinkButtonCompany = document.querySelector('.dropdown-item-company')
const sectionVat = document.querySelector('.section-vat')
const sectionLinkButtonVat = document.querySelector('.dropdown-item-vat')
const sectionEmployer = document.querySelector('.section-accent-employer')
const sectionLinkButtonEmployer = document.querySelector('.dropdown-item-employer')
const sectionRealEstate = document.querySelector('.section-real-estate')
const sectionLinkButtonRealEstate = document.querySelector('.dropdown-item-real-estate')
const sectionTaxation = document.querySelector('.section-accent-taxation')
const sectionLinkButtonTaxation = document.querySelector('.dropdown-item-taxation')
const sectionImmigration = document.querySelector('.section-immigration')
const sectionLinkButtonImmigration = document.querySelector('.dropdown-item-immigration')
const sectioninheritance = document.querySelector('.section-accent-inheritance')
const sectionLinkButtonInheritance = document.querySelector('.dropdown-item-inheritance')
const sectionLitigation = document.querySelector('.section-litigation')
const sectionLinkButtonLitigation = document.querySelector('.dropdown-item-litigation')
const sectionAccounting = document.querySelector('.section-accent-accounting')
const sectionAbout = document.querySelector('.section-about')
const sectionLinkButtonAccounting = document.querySelector('.dropdown-item-accounting')
const sectionLinkButtonAbout = document.querySelector('.dropdown-item-about')

const boxAlert = document.querySelector('.modal-leave')
const boxAlertElements = document.querySelector('.modal-leave-elements')
const modalLeaveOkButton = document.querySelector('.modal-button-ok')
const modalLeaveCancelButton = document.querySelector('.modal-button-cancel')

// 2. FUNCTIONS
// 2.1 Hide contact modal contact
const hideContactModal = () => {
	contactImg.style.display = 'block'
	contactWhatsapp.style.display = 'block'
	modalContactBackground.classList.remove('modal-contact-background-active')
	toggleScrollForBody()
	removeErrorColor()
}

// 2.2 Show contact modal contact
const showContactModal = () => {
	contactImg.style.display = 'none'
	contactWhatsapp.style.display = 'none'
	modalContactBackground.classList.add('modal-contact-background-active')
}

// 2.3 Hide contact buttons
const hideContactButtons = () => {
	contactImg.style.opacity = 0
	contactImg.style.visibility = 'hidden'
	contactWhatsapp.style.opacity = 0
	contactWhatsapp.style.visibility = 'hidden'
}

// 2.4 Show contact buttons
const showContactButtons = () => {
	contactImg.style.opacity = 1
	contactImg.style.visibility = 'visible'
	contactWhatsapp.style.opacity = 1
	contactWhatsapp.style.visibility = 'visible'
}

// 2.5 Hide home button
const hideHomeButton = () => {
	goHomeBtns.forEach((button) => {
		button.style.opacity = 0
		button.style.transform = 'translateY(200%)'
	})
}

// 2.6 Show home button
const showHomeButton = () => {
	goHomeBtns.forEach((button) => {
		button.style.opacity = 1
		button.style.transform = 'translateY(0%)'
		button.classList.add('fade-in-home-btn')
	})
}

// 2.7 Clear form's input fields
const resetFormFields = () => {
	inputs.forEach((input) => {
		input.value = ''
		input.checked = false
	})

	userSelect.selectedIndex = 0
	messageBox.value = ''
}

// 2.8 Add mobile sticky menu
const addMobileStickyMenu = () => {
	burger.classList.add('burger-sticky')
}

// 2.8 Remove mobile sticky menu
const removeMobileStickyMenu = () => {
	burger.classList = 'burger'
}

// 2.8 Add sticky menu
const addStickyMenu = () => {
	contactDetails.classList.add('header-phone-sticky-active')
	menuContainer.classList.add('menu-sticky-mobile')
	menuLinks.style.padding = '0.5rem'
}

// 2.9 Remove sticky menu
const removeStickyMenu = () => {
	contactDetails.classList.remove('header-phone-sticky-active')
	menuContainer.classList = 'menu-container'
	menuLinks.style.padding = '0.5rem'
}

// 2.10 Toggle scrolling capability when toggling the contact modal
const toggleScrollForContactModal = () => {
	body.classList.toggle('stop-scrolling')
}

// 2.11 Toggle menu-links-active class
const toggleMenuLinksActiveClass = () => {
	menuLinks.classList.toggle('menu-links-active')
}

// 2.12 Remove menu-links-active class
const removeMenuLinksActiveClass = () => {
	menuLinks.classList.remove('menu-links-active')
}

// 2.13 Display sections and their elements
const displaySections = () => {
	hiddenSections.forEach((section) => {
		if (section.getBoundingClientRect().top < 400) {
			section.classList.add('fade-in')
			section.classList.remove('faded')
		}
		allHeadingsAndParagraphs.forEach((element) => {
			if (element.getBoundingClientRect().top < 450) {
				element.classList.add('fly-in-from-left')
			}
		})
	})
}

// 2.14 Display contact modal
const userFocus = () => {
	if (window.innerWidth >= 800) {
		return nameInput.focus()
	} else {
		return false
	}
}

const displayContactModal = () => {
	showContactModal()
	toggleScrollForContactModal()
	setTimeout(() => {
		userFocus()
	}, 250)
}

// 2.15 Reactivate scroll function on the body
const toggleScrollForBody = () => {
	if (body.classList.contains('stop-scrolling')) {
		toggleScrollForContactModal()
	}
}

const toggleOffScrollForBody = () => {
	if (!body.classList.contains('stop-scrolling')) {
		toggleScrollForContactModal()
	}
}

// 3. CLICK EVENTS
// 3.1 Burger button to toggle class
burger.addEventListener('click', () => {
	if (body.getBoundingClientRect().top <= -100) {
		menuLinks.style.top = '3rem'
	} else {
		menuLinks.style.top = 'auto'
	}
	toggleMenuLinksActiveClass()
})

// 3.3 Contact buttons to display contact modal
contactBtn.addEventListener('click', displayContactModal)
contactFooterBtn.addEventListener('click', displayContactModal)
contactImg.addEventListener('click', displayContactModal)

// 4. KEYDOWN EVENT
// 4.1 Press ESC to disable contact modal and check wheather user wants to leave it if any character has been typed in
const checkFormBeforeLeave = (e) => {
	if (e.key === 'Escape') {
		if (!userNameInput.value.length == 0 || !userEmailInput.value.length == 0 || !messageBox.value.length == 0 || userSelect.selectedIndex > 0) {
			boxAlert.classList.add('modal-leave-active')
			boxAlertElements.classList.add('modal-leave-elements-active')
		} else {
			sectionTextModal.classList.remove('modal-text-background-active')
			hideContactModal()
		}
	}
}

// 3.2 Close button to disable contact modal
closeBtn.addEventListener('click', () => {
	if (!userNameInput.value.length == 0 || !userEmailInput.value.length == 0 || !messageBox.value.length == 0 || userSelect.selectedIndex > 0) {
		boxAlert.classList.add('modal-leave-active')
		boxAlertElements.classList.add('modal-leave-elements-active')
	} else {
		hideContactModal()
		sectionTextModal.classList.remove('modal-text-background-active')
		toggleScrollForBody()
	}
})

document.addEventListener('keydown', checkFormBeforeLeave)

modalLeaveOkButton.addEventListener('click', (e) => {
	e.preventDefault()
	resetForm()
	boxAlert.classList.remove('modal-leave-active')
	boxAlertElements.classList.remove('modal-leave-elements-active')
	hideContactModal()
})

modalLeaveCancelButton.addEventListener('click', (e) => {
	e.preventDefault()
	boxAlert.classList.remove('modal-leave-active')
	boxAlertElements.classList.remove('modal-leave-elements-active')
	userFocus()
})

// 5. SCROLL EVENTS
// 5.1 Display sections on scroll
window.addEventListener('scroll', () => {
	displaySections()
})

// 5.3 If window's width over 800px and there's a scroll down of 450px, show the contact/home buttons, otherwise hide home button

window.addEventListener('scroll', () => {
	if (window.innerWidth >= 800 && body.getBoundingClientRect().top <= -450) {
		//showContactButtons()
		//showHomeButton()
	} else {
		hideHomeButton()
		contactImg.style.opacity = 0
		contactImg.style.visibility = 'hidden'
	}
})

// 5.4 Activate sticky navbar if window's width is over 800px and you scrolled more than 75px, otherwise deactivate it
window.addEventListener('scroll', () => {
	if (window.innerWidth >= 800 && body.getBoundingClientRect().top <= -108) {
		addStickyMenu()
	} else {
		removeStickyMenu()
		removeMenuLinksActiveClass()
	}
})

// 5.5 Activate mobile sticky navbar if window's width is less 800px and you scrolled more than 75px, otherwise deactivate it
window.addEventListener('scroll', () => {
	if (window.innerWidth <= 800 && body.getBoundingClientRect().top <= -108) {
		addMobileStickyMenu()
	} else {
		removeMobileStickyMenu()
	}

	if (body.getBoundingClientRect().top <= -25) {
		//menuLinks
	}
	removeMenuLinksActiveClass()
})

window.addEventListener('scroll', () => {
	if (window.innerWidth >= 800 && contactFooterBtn.getBoundingClientRect().top <= 650) {
		contactImg.style.opacity = 0
		contactImg.style.visibility = 'hidden'
	}
})

window.addEventListener('DOMContentLoaded', () => {
	if (window.innerWidth >= 800 && contactFooterBtn.getBoundingClientRect().top <= 650) {
		contactImg.style.opacity = 0
		contactImg.style.visibility = 'hidden'
	}
})

window.addEventListener('resize', () => {
	if (window.innerWidth >= 800 && contactFooterBtn.getBoundingClientRect().top <= 650) {
		contactImg.style.opacity = 0
		contactImg.style.visibility = 'hidden'
	}
})

// 5.6 Add scroll class to the section titles on scroll event if the window is wider than 1200px
const sectionTitles = document.querySelectorAll('.section h2:first-child, .section-accent h2:first-child')
window.addEventListener('scroll', () => {
	if (window.innerWidth >= 1200) {
		sectionTitles.forEach((title) => {
			title.classList.add('scroll')
		})
	} else {
		sectionTitles.forEach((title) => {
			title.classList.remove('scroll')
		})
	}
})

window.addEventListener('resize', () => {
	if (window.innerWidth <= 800) {
		body.style.backgroundImage = 'linear-gradient(to bottom, hsla(0, 0%, 10%, 1), hsla(0, 0%, 10%, 0)), url(img/background/background_mobile.jpg)'
	} else {
		body.style.backgroundImage = 'linear-gradient(to bottom, hsla(0, 0%, 10%, 1), hsla(0, 0%, 10%, 0)), url(img/background/background_desktop_1.jpg)'
	}
	removeMenuLinksActiveClass()
})

// 6. RESIZE EVENTS
// 6.1 If menu-links contains the active class and window's width is over 800px, remove the active class
window.addEventListener('resize', () => {
	if (menuLinks.classList.contains('menu-links-active') && window.innerWidth >= 800) {
		removeMenuLinksActiveClass()
	}
})

// 6.2 If window's width is less than 800px hide contact buttons
window.addEventListener('resize', () => {
	if (window.innerWidth <= 800) {
		hideContactButtons()
		setTimeout(() => {}, 1000)
	}
})

/// 7. IS IN VIEWPORT
// 7.1 Activate home button active class when section is reached by scroll
const toggleButtonHome = new IntersectionObserver(
	(entries) => {
		if (entries[0].isIntersecting === true) {
			sectionLinkButtonHome.classList.add('dropdown-item-active')
		} else {
			sectionLinkButtonHome.classList.remove('dropdown-item-active')
		}
	},
	{ threshold: [0.75] }
)

// 7.2 Activate company button active class when section is reached by scroll
const toggleButtonCompany = new IntersectionObserver(
	(entries) => {
		if (entries[0].isIntersecting === true) {
			sectionLinkButtonCompany.classList.add('dropdown-item-active')
		} else {
			sectionLinkButtonCompany.classList.remove('dropdown-item-active')
		}
	},
	{ threshold: [0.75] }
)

// 7.3 Activate vat button active class when section is reached by scroll
const toggleButtonVat = new IntersectionObserver(
	(entries) => {
		if (entries[0].isIntersecting === true) {
			sectionLinkButtonVat.classList.add('dropdown-item-active')
		} else {
			sectionLinkButtonVat.classList.remove('dropdown-item-active')
		}
	},
	{ threshold: [0.75] }
)

// 7.4 Activate employer button active class when section is reached by scroll
const toggleButtonEmployer = new IntersectionObserver(
	(entries) => {
		if (entries[0].isIntersecting === true) {
			sectionLinkButtonEmployer.classList.add('dropdown-item-active')
		} else {
			sectionLinkButtonEmployer.classList.remove('dropdown-item-active')
		}
	},
	{ threshold: [0.75] }
)

// 7.5 Activate real-estate button active class when section is reached by scroll
const toggleButtonRealEstate = new IntersectionObserver(
	(entries) => {
		if (entries[0].isIntersecting === true) {
			sectionLinkButtonRealEstate.classList.add('dropdown-item-active')
		} else {
			sectionLinkButtonRealEstate.classList.remove('dropdown-item-active')
		}
	},
	{ threshold: [0.75] }
)

// 7.6 Activate taxation button active class when section is reached by scroll
const toggleButtonTaxation = new IntersectionObserver(
	(entries) => {
		if (entries[0].isIntersecting === true) {
			sectionLinkButtonTaxation.classList.add('dropdown-item-active')
		} else {
			sectionLinkButtonTaxation.classList.remove('dropdown-item-active')
		}
	},
	{ threshold: [0.75] }
)

// 7.7 Activate immigration button active class when section is reached by scroll
const toggleButtonImmigration = new IntersectionObserver(
	(entries) => {
		if (entries[0].isIntersecting === true) {
			sectionLinkButtonImmigration.classList.add('dropdown-item-active')
		} else {
			sectionLinkButtonImmigration.classList.remove('dropdown-item-active')
		}
	},
	{ threshold: [0.75] }
)

// 7.8 Activate inheritance button active class when section is reached by scroll
const toggleButtoninheritance = new IntersectionObserver(
	(entries) => {
		if (entries[0].isIntersecting === true) {
			sectionLinkButtonInheritance.classList.add('dropdown-item-active')
		} else {
			sectionLinkButtonInheritance.classList.remove('dropdown-item-active')
		}
	},
	{ threshold: [0.75] }
)

// 7.9 Activate litigation button active class when section is reached by scroll
const toggleButtonLitigation = new IntersectionObserver(
	(entries) => {
		if (entries[0].isIntersecting === true) {
			sectionLinkButtonLitigation.classList.add('dropdown-item-active')
		} else {
			sectionLinkButtonLitigation.classList.remove('dropdown-item-active')
		}
	},
	{ threshold: [0.75] }
)

// 7.10 Activate accounting button active class when section is reached by scroll
const toggleButtonAccounting = new IntersectionObserver(
	(entries) => {
		if (entries[0].isIntersecting === true) {
			sectionLinkButtonAccounting.classList.add('dropdown-item-active')
		} else {
			sectionLinkButtonAccounting.classList.remove('dropdown-item-active')
		}
	},
	{ threshold: [0.75] }
)

// 7.10 Activate about button active class when section is reached by scroll
const toggleButtonAbout = new IntersectionObserver(
	(entries) => {
		if (entries[0].isIntersecting === true) {
			sectionLinkButtonAbout.classList.add('dropdown-item-active')
		} else {
			sectionLinkButtonAbout.classList.remove('dropdown-item-active')
		}
	},
	{ threshold: [1] }
)

// 7.11 Initializing the OBSERVER functions
toggleButtonHome.observe(sectionHome)
toggleButtonCompany.observe(sectionCompany)
toggleButtonVat.observe(sectionVat)
toggleButtonEmployer.observe(sectionEmployer)
toggleButtonRealEstate.observe(sectionRealEstate)
toggleButtonTaxation.observe(sectionTaxation)
toggleButtonImmigration.observe(sectionImmigration)
//toggleButtoninheritance.observe(sectioninheritance)
//toggleButtonLitigation.observe(sectionLitigation)
toggleButtonAccounting.observe(sectionAccounting)
toggleButtonAbout.observe(sectionAbout)

// 8. SMOOTH SCROLL with jQuery

$('a').on('click', function (e) {
	if (this.hash !== '') {
		e.preventDefault()
		const hash = this.hash
		$('html, body').animate(
			{
				scrollTop: $(hash).offset().top
			},
			1200
		)
	}
})

var supportsPassive = false
try {
	window.addEventListener(
		'test',
		null,
		Object.defineProperty({}, 'passive', {
			get: function () {
				supportsPassive = true
			}
		})
	)
} catch (e) {}

const html = document.querySelector('html')

window.addEventListener('DOMContentLoaded', () => {
	html.style.scrollBehavior = 'smooth'
})

// 10. TEXT MODAL
const sectionTextModal = document.querySelector('.modal-text-background')
const modalTextCloseButton = document.querySelector('#modal-text-close-btn')
const modalTextOkButton = document.querySelector('.modal-text-btn')
const modalImg = document.querySelector('.modal-img')
const homeBtns = document.querySelectorAll('.show-text-modal')

// Function to display the text modal
const showTextModal = (element) => {
	//let div = element.parentNode.lastElementChild
	//let img = element.parentNode.firstElementChild.firstElementChild
	let content = element.parentNode.lastElementChild.lastElementChild.innerHTML
	let title = element.parentNode.lastElementChild.firstElementChild.innerHTML

	if (title) {
		document.querySelector('.modal-text-content').innerHTML = content
		document.querySelector('.modal-text-title').innerHTML = title
		sectionTextModal.classList.add('modal-text-background-active')
		hideContactButtons()
		toggleScrollForContactModal()
	}
}

const hideTextModal = () => {
	sectionTextModal.classList.remove('modal-text-background-active')
	toggleScrollForContactModal()
}

modalTextCloseButton.addEventListener('click', hideTextModal)
modalTextOkButton.addEventListener('click', hideTextModal)

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
				document.querySelector('#time-email').innerHTML = `${formattedDate}, ${formattedHour} Central European Time`
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
				document.querySelector('#time-email').innerHTML = `${formattedDate}, ${formattedHour} Central European Time`
				// document.querySelector('#time').style.padding = '.5rem 1rem'
				// document.querySelector('#time').style.backgroundColor = 'var(--main-color)'
			}
		}, 1000)
	}, 0)
}

document.addEventListener('DOMContentLoaded', doTime)

//FORM VALIDATION
const form = document.querySelector('form')
const formInputs = document.querySelectorAll('input, textarea')
const userNameInput = document.querySelector('#username')
const userEmailInput = document.querySelector('#useremail')
const userSelect = document.querySelector('#userservice')
const messageBox = document.querySelector('#usermessage')
const terms = document.querySelector('#terms')
const termsLink = document.querySelector('.terms-link')
const termsText = document.querySelector('.terms-text')

const removeErrorColor = () => {
	userNameInput.style.border = '0.125rem solid hsl(225, 15%, 50%)'
	userEmailInput.style.border = '0.125rem solid hsl(225, 15%, 50%)'
	userSelect.style.border = '0.125rem solid hsl(225, 15%, 50%)'
	messageBox.style.border = '0.125rem solid hsl(225, 15%, 50%)'
	termsText.classList.remove('terms-link-error')
	termsLink.classList.remove('terms-link-error')
	resetForm()
}

formInputs.forEach((input) => {
	input.addEventListener('input', () => {
		if (input.value == '' || input.value == null) {
			input.style.border = '0.125rem solid hsl(350, 100%, 40%)'
		} else {
			input.style.border = '0.125rem solid hsl(225, 15%, 50%)'
		}
	})
})

// 6.4 Change the select's border color upon change event
userSelect.addEventListener('change', () => {
	if (userSelect.selectedIndex >= 0) {
		userSelect.style.border = '0.125rem solid hsl(225, 15%, 50%)'
		messageBox.focus()
	}
})

// Function to validate the name for the form
const validateName = () => {
	let userNameValue = userNameInput.value
	let nameRegex = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-,])*$/
	if (nameRegex.test(userNameValue) && userNameValue.length >= 2) {
		console.log('NAME OK')
		userNameInput.style.border = '0.125rem solid hsl(225, 15%, 50%)'
		userEmailInput.focus()
		return true
	} else {
		console.log('NAME NOT VALID')
		userNameInput.placeholder = 'Please enter a valid name'
		userNameInput.value = ''
		userNameInput.style.border = '0.125rem solid hsl(350, 100%, 40%)'
		terms.checked = false
		userFocus()
		return false
	}
}

const validateEmail = () => {
	let userEmailValue = userEmailInput.value
	if (/^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/.test(userEmailValue)) {
		console.log('EMAIL OK')
		userEmailInput.style.border = '0.125rem solid hsl(225, 15%, 50%)'
		userEmailInput.blur()
		return true
	} else {
		if (userNameInput.value.length > 1 || messageBox.value.length > 1) {
			userEmailInput.focus()
		}
		userEmailInput.placeholder = 'Please enter a valid email'
		console.log('EMAIL NOT VALID')
		userEmailInput.style.border = '0.125rem solid hsl(350, 100%, 40%)'
		terms.checked = false
		return false
	}
}

const validateService = () => {
	let options = document.querySelector('#userservice').selectedIndex
	if (options == null || options == 0) {
		console.log('SERVICE NOT VALID')
		userSelect.selectedIndex = 0
		userSelect.style.border = '0.125rem solid hsl(350, 100%, 40%)'
		return false
	} else {
		console.log('SERVICE OK')
		userSelect.style.border = '0.125rem solid hsl(225, 15%, 50%)'
		return true
	}
}

const validateMessage = () => {
	let userMessageValue = messageBox.value
	if (userMessageValue.length >= 5) {
		console.log('MESSAGE OK')
		messageBox.style.border = '0.125rem solid hsl(225, 15%, 50%)'
		terms.focus()
		return true
	} else {
		console.log('MESSAGE NOT VALID')
		messageBox.placeholder = 'Please state your query...'
		terms.checked = false
		messageBox.style.border = '0.125rem solid hsl(350, 100%, 40%)'
		if (validateName() && validateEmail() && validateService()) {
			messageBox.focus()
		}
		return false
	}
}

const validateTerms = () => {
	if (!terms.checked) {
		termsText.classList.add('terms-link-error')
		termsLink.classList.add('terms-link-error')
		console.log('TERMS NOT VALID')
		if (validateName() && validateEmail() && validateService() && validateMessage()) {
			terms.focus
		}
		return false
	} else {
		termsText.classList.remove('terms-link-error')
		termsLink.classList.remove('terms-link-error')
		console.log('TERMS OK')
		return true
	}
}

terms.addEventListener('change', () => {
	if (!terms.checked) {
		termsText.classList.add('terms-link-error')
		termsLink.classList.add('terms-link-error')
	}
	termsText.classList.remove('terms-link-error')
	termsLink.classList.remove('terms-link-error')
})

const resetForm = () => {
	userNameInput.value = ''
	userNameInput.placeholder = 'Your name'
	userFocus()

	userEmailInput.value = ''
	userEmailInput.placeholder = 'Your email'

	userSelect.selectedIndex = 0

	messageBox.value = ''
	messageBox.placeholder = 'Type your message here...'

	terms.checked = false
}

const validateForm = (e) => {
	let name = validateName()
	let email = validateEmail()
	let service = validateService()
	let message = validateMessage()
	let terms = validateTerms()

	if (name == true && email == true && service == true && message == true && terms == true) {
		submitBtn.innerText = 'SENDING...'
		setTimeout(() => {
			window.location = 'reply.html'
			setTimeout(() => {
				resetForm()
				form.submit()
				submitBtn.innerText = 'SEND'
			}, 500)
		}, 1500)
	} else {
		terms.checked = false
		console.log('FORM NOT VALID')
		e.preventDefault()
		return false
	}
}

submitBtn.addEventListener('click', validateForm)

setInterval(() => {
	console.clear()
}, 15 * 1000)
