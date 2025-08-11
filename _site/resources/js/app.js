var items = document.querySelectorAll('.index-list-item');

for(var x=0; x<items.length; x++) {

    items[x].classList.add('index-list-item-active')

    items[x].addEventListener('click', (e) => {
        
        var link = e.target.querySelector('a');
        
        if(link) {
            window.location.href = link.href;
        }

    });

}



const observer_sp = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {

        // If the element is visible
        if (entry.isIntersecting) {
            console.log('intersecting!');
            entry.target.classList.remove('sp-slidein-start');
            entry.target.classList.add('sp-slidein-animate');
        }
    });
}, { threshold: 0.25 });

function animate_sp(el, type) {
    el.classList.add(`sp-slidein-start`);
    observer_sp.observe(el);
}

window.addEventListener('load', (e) => {
    var els = document.querySelectorAll('.sp-animate-slidein');

    for(var x=0; x<els.length; x++) {
        animate_sp(els[x]);
    }
});