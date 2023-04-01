const buttonPress = document.querySelectorAll('.listInformation .trigger')


buttonPress.forEach((trigger) => { 
    trigger.addEventListener('click', (e) => {
        const select = trigger.parentElement
        const isOpen = select.classList.contains('open')

        if(isOpen){
            select.classList.remove('open')
        }else{
            select.classList.add('open')
        }
    })
});