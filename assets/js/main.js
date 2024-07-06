// home-logo
gsap.to('.home-logo-img', {
    rotation: 900,
    duration: 1,
    scrollTrigger: {
        trigger: '.box',
        scrub: 2,
    },
})

// toggle
document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('toggle')
    const homeLogo = document.querySelector('.home-logo-img')

    toggle.addEventListener('change', function () {
        if (this.checked) {
            homeLogo.classList.add('rotating')
        } else {
            homeLogo.classList.remove('rotating')
        }
    })
})

// 모든 섹션 선택
const $sectionList = document.querySelectorAll('section')

// Intersection Observer 설정 (필요한 경우)
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active')
            } else {
                entry.target.classList.remove('active')
            }
        })
    },
    { threshold: 0.5 },
)

// 각 섹션에 observer 적용
$sectionList.forEach((section) => observer.observe(section))

// ScrollReveal 설정
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
})

// HOME 섹션
scrollReveal.reveal('.home-title, .home-logo', {
    delay: 400,
})
scrollReveal.reveal('.about-section', { delay: 200 })

// toggleSwitch에 애니메이션 추가
scrollReveal.reveal('.toggleSwitch', { delay: 300 })

scrollReveal.reveal('.about-section', { delay: 600 })

// ABOUT 섹션
scrollReveal.reveal('.about-content, .project-section', { delay: 300 })

// 네비게이션 메뉴 아이템
scrollReveal.reveal('.nav_item', { interval: 100 })

// 메일 링크
scrollReveal.reveal('.mail-link', { delay: 1000 })

// selected 슬라이드 설정
document.addEventListener('DOMContentLoaded', function () {
    const slide1 = document.getElementById('slide-1')
    const slide2 = document.getElementById('slide-2')
    const slide3 = document.getElementById('slide-3')
    const slide4 = document.getElementById('slide-4')
    const selectedItem1 = document.querySelector('.selected-item-1')
    const selectedItem2 = document.querySelector('.selected-item-2')
    const selectedItem3 = document.querySelector('.selected-item-3')
    const selectedItem4 = document.querySelector('.selected-item-4')
    const rightPortfolio = document.querySelector('.right-portfolio')

    function showSlide(slideToShow) {
        ;[slide1, slide2, slide3, slide4].forEach((slide) => {
            slide.classList.remove('active')
        })
        slideToShow.classList.add('active')
    }

    function hideAllSlides() {
        ;[slide1, slide2, slide3, slide4].forEach((slide) => {
            slide.classList.remove('active')
        })
    }

    selectedItem1.addEventListener('mouseenter', () => showSlide(slide1))
    selectedItem2.addEventListener('mouseenter', () => showSlide(slide2))
    selectedItem3.addEventListener('mouseenter', () => showSlide(slide3))
    selectedItem4.addEventListener('mouseenter', () => showSlide(slide4))

    rightPortfolio.addEventListener('mouseleave', hideAllSlides)

    // 초기 상태: 모든 슬라이드 숨기기
    hideAllSlides()
})
