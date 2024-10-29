const interrutore = document.getElementById('On')


interrutore.addEventListener('click',  function () {
    
    
    const lampadinaOff = document.getElementById('lampadina_spenta')



    if (lampadinaOff.classList.contains('off')) {
        
        //lampadinaOff.classList.remove('off')
        interrutore.innerText = 'Spegni'
        lampadinaOff.src = 'img/yellow_lamp.png'
        console.log('accendi')

    } else {
        
       // lampadinaOff.classList.add('off')
        interrutore.innerText = 'Accendi'
        lampadinaOff.src = 'img/white_lamp.png'
        console.log('spegni')
    }

    lampadinaOff.classList.toggle('off')
    
})
