document.getElementById('historyBtn').addEventListener('click', function () {

    const header = document.getElementById('header')
    header.classList.add('hidden')

    const container = document.getElementById('container')
    container.classList.remove('hidden')


    const btnDonation = document.getElementById('donationBtn')
    btnDonation.classList.remove('bg-[#B4F461]')

    document.getElementById('historyBtn').classList.add('bg-[#B4F461]')
// ! second 

    document.getElementById('donationBtn').addEventListener('click', function () {
        document.getElementById('container').classList.add('hidden')

        document.getElementById('historyBtn').classList.remove('bg-[#B4F461]')
        btnDonation.classList.add('bg-[#B4F461]')
        header.classList.remove('hidden')

    })


})

// ! history start ONe

document.getElementById('btnDonate').addEventListener('click', function () {


    const containerDiv = document.getElementById('container')
    const inpDonateAmount = Donate('inpDonateAmount')
    const p = document.createElement('p')
    p.classList.add('border-2' , 'w-full', 'md:w-[800px]', 'mx-auto', 'p-5' , 'shadow-lg','rounded-lg')


    p.innerHTML =

        ` 
            <p class='font-bold text-xl mb-2'>${inpDonateAmount} Taka is Donated for famine-2024 at Feni, Bangladesh</p>
            <p class="bg-gray-100 p-2 rounded-md">${new Date()}</p>
    
           `

    containerDiv.appendChild(p)


})
// ! history end ONe

// ! history start Two

document.getElementById('btnDonate2').addEventListener('click', function () {

    const containerDiv = document.getElementById('container')
    const inpDonateAmount = Donate('inpDonateAmount2')
    const p = document.createElement('p')
    p.classList.add('border-2' , 'w-full', 'md:w-[800px]', 'mx-auto', 'p-5', 'shadow-lg','rounded-lg')

    p.innerHTML =

    ` 
    <p class='font-bold text-xl mb-2'>${inpDonateAmount} Taka is Donated for Flood Relief in Feni,Bangladesh</p>
      <p class="bg-gray-100 p-2 rounded-md">${new Date()}</p>

   `
    containerDiv.appendChild(p)


    // ! history end TWo


})



// ! history start  THree

document.getElementById('btnDonate3').addEventListener('click', function () {


    const containerDiv = document.getElementById('container')
    const inpDonateAmount3 = Donate('inpDonateAmount3')
    const p = document.createElement('p')
    p.classList.add('border-2' , 'w-full', 'md:w-[800px]', 'mx-auto', 'p-5','shadow-lg','rounded-lg')

    p.innerHTML =

    ` 
    <p class='font-bold text-xl mb-2'>${inpDonateAmount3} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
    <p class="bg-gray-100 p-2 rounded-md">${new Date()}</p>

   `

    containerDiv.appendChild(p)


    // ! history end three






})

