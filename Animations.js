Avatar.addEventListener('mouseenter', function () {
  Profile.classList.remove('MouseLeave')
  Profile.classList.add('MouseEnter')
})

Avatar.addEventListener('mouseleave', function () {
  Profile.classList.remove('MouseEnter')
  Profile.classList.add('MouseLeave')
})

Post.addEventListener('click', function () {
  if (!(Post.classList == 'Click')) {
    Post.classList.add('Click')
    Post.style.animation = 'Test1 0.1s forwards'
  } else {
    Post.classList.remove('Click')
    Post.style.animation = 'Test2 0.1s reverse'
  }
})

Post.addEventListener('mouseenter', function () {
  if (!(Post.classList == 'Click')) {
    Post.style.animation = 'Test 1s linear infinite'
  }
})

Post.addEventListener('mouseleave', function () {
  if (!(Post.classList == 'Click')) {
    Post.style.animation = 'none'
  }
})
