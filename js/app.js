const interrutoreOn = document.getElementById('On')

const interrutoreOff = document.getElementById('Off')


const lampadinaOff = document.getElementById('lampadina_spenta')

const lampadinaOn = document.getElementById('lampadina_accesa')


interrutoreOn.addEventListener('click',  function () {

    lampadinaOff.classList.add('invisible')
    interrutoreOn.classList.add('invisible')


    lampadinaOn.classList.remove('invisible')
    interrutoreOff.classList.remove('invisible')

})

interrutoreOff.addEventListener('click', function () {

    lampadinaOn.classList.add('invisible')
    interrutoreOff.classList.add('invisible')


    lampadinaOff.classList.remove('invisible')
    interrutoreOn.classList.remove('invisible')
})


