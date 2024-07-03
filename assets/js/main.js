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
