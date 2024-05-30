function popOver(id, placement) {
    let popover = new bootstrap.Popover(document.getElementById(id), {
        trigger: 'focus',
        placement: placement
    });
}
//popover
popOver('demo1', 'top');
popOver('demo2', 'right');
popOver('demo3', 'bottom');
popOver('demo4', 'left');

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#scrollspy-nav',
})