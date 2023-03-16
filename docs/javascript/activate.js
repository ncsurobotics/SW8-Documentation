document.addEventListener('DOMContentLoaded', function () {
    const zooming = new Zooming({
        // options go here
    })
    zooming.listen('[data-zoomable]')
})