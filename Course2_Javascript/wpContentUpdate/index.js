let h1 = document.querySelector('h1')
const arr = ['Example Domain', 'First Click', 'Second Click', 'Third Click']
const handleClicks = () => {
    switch (h1.innerHTML) {
        case arr[0]:
            h1.innerHTML = arr[1]
            break;
        case arr[1]:
            h1.innerHTML = arr[2]
            break;
        case arr[2]:
            h1.innerHTML = arr[3]
            break;
        default:
            h1.innerHTML = arr[0]
            break;
    }
}

h1.addEventListener('click', handleClicks)