function handleFloatingButton() {
    const floatingButton = document.getElementById('floating-button')

    floatingButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
        })
    })
}

// DOM이 로드된 후 함수 실행
document.addEventListener('DOMContentLoaded', handleFloatingButton)
