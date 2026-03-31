const startDate = new Date('2026-03-07')
const today = new Date()
const day = Math.floor((today - startDate) / 86400000) + 1
document.querySelector('.home-status').innerHTML = 
  `<span class="home-dot" aria-hidden="true">●</span> Learning in public · Day ${day}`

const filterBtns = document.querySelectorAll('.filter-btn')
const projectItems = document.querySelectorAll('.work-item')

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {

    // Aktifkan button yang diklik
    filterBtns.forEach(b => b.classList.remove('active'))
    btn.classList.add('active')

    const filter = btn.dataset.filter

    projectItems.forEach(item => {
      if (filter === 'all' || item.dataset.type === filter) {
        item.style.display = ''
      } else {
        item.style.display = 'none'
      }
    })
  })
})