const ratio = .1;
const options = {
    root : null,
    rootMargin: '0px',
    threshold : .5
}

const handleIntersect = (entries, observer) => {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-img-visible')
            observer.unobserve(entry.target)
        }
    })
}

const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('.reveal-img').forEach(function (r) {
    observer.observe(r);
})
