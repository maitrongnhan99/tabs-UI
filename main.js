const $ = document.querySelector.bind(document),
        $$ = document.querySelectorAll.bind(document)

const tabs = $$('.tab__item'),
        panes = $$(".tab__pane"),
        underline = $('.underline'),
        activeTab = $('.tab__item.active'),
        underlineStyle = underline.style

// underline for tab active
underlineStyle.width = activeTab.offsetWidth + 'px'
underlineStyle.left = activeTab.offsetLeft + 'px'

tabs.forEach((tab, index) => {
    let pane = panes[index]

    tab.onclick = function() {
        // remove tab active
        activeTab.classList.remove('active')
        $('.tab__pane.active').classList.remove('active')

        // add underunderline for tab when click
        underlineStyle.width = this.offsetWidth + 'px'
        underlineStyle.left = this.offsetLeft + 'px'

        this.classList.add('active')
        pane.classList.add('active')
    }
});