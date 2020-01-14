addEventListener('DOMContentLoaded', () => {

    const hasTooltipLinks = document.getElementsByClassName('has-tooltip');

    for (let link of hasTooltipLinks) {
        const templateTooltip = `<div class="tooltip">
            ${link.getAttribute('title')}
        </div>`;
        link.insertAdjacentHTML("afterend", templateTooltip);
    }

    document.body.addEventListener('click', event => {
        for (let link of hasTooltipLinks) {
            link.nextElementSibling.classList.remove('tooltip_active');
        }

        if (event.target.classList.contains('has-tooltip')) {
            event.preventDefault();
            const tooltip = event.target.nextElementSibling;
            tooltip.classList.add('tooltip_active');
            tooltip.style.top = event.target.getBoundingClientRect().bottom + 'px';
            tooltip.style.left = event.target.getBoundingClientRect().left + 'px';
        }
    });
});