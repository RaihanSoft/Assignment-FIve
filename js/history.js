document.getElementById('historyBtn').addEventListener('click', function () {


    





    const header = document.getElementById('header')
    header.classList.add('hidden')

    const container = document.getElementById('container')
    container.classList.remove('hidden')


    const btnDonation = document.getElementById('donationBtn')
    btnDonation.classList.remove('bg-prime')

    document.getElementById('historyBtn').classList.add('bg-prime')


    btnDonation.classList.add('text-gray-500')
    historyBtn.classList.remove('text-gray-500')
   
    // ! second 

    document.getElementById('donationBtn').addEventListener('click', function () {
        document.getElementById('container').classList.add('hidden')

        document.getElementById('historyBtn').classList.remove('bg-prime')
        btnDonation.classList.add('bg-prime')
        header.classList.remove('hidden')

        historyBtn.classList.add('text-gray-500')
        btnDonation.classList.remove('text-gray-500')

    })


})

// ! history start ONe

document.getElementById('btnDonate').addEventListener('click', function () {
    // ! validation One
    const inpDonateAmount = Donate('inpDonateAmount')
    if (isNaN(inpDonateAmount) || inpDonateAmount <= 0) {
        // ! reset input
        document.getElementById('inpDonateAmount').value = ''


        return

    }



    const containerDiv = document.getElementById('container')
    const inpDonateAmount2 = Donate('inpDonateAmount')
    const p = document.createElement('p')
    p.classList.add('border-2', 'w-full', 'md:w-[900px]', 'mx-auto', 'p-5', 'shadow-lg', 'rounded-lg')


    p.innerHTML =

        ` 
  <div class="border-l-4 border-prime rounded-xl  pl-4">

            <p class='font-bold text-xl mb-2'>${inpDonateAmount2.toFixed(2)} Taka is Donated for famine-2024 at Noakhali, Bangladesh</p>
            <p class="bg-gradient-to-r from-gray-100  to-prime p-2 rounded-md">${new Date()}</p>
  </div>
    
           `

    containerDiv.appendChild(p)



})
// ! history end ONe

// ! history start Two

document.getElementById('btnDonate2').addEventListener('click', function () {


    // ! validation Tne
    const inpDonateAmount = Donate('inpDonateAmount2')

    if (isNaN(inpDonateAmount) || inpDonateAmount <= 0) {
        // ! reset input
        const inpDonate = document.getElementById('inpDonateAmount2')
        inpDonate.value = '';

        return

    }

    const containerDiv = document.getElementById('container')
    const inpDonateAmount2 = Donate('inpDonateAmount2')
    const p = document.createElement('p')
    p.classList.add('border-2', 'w-full', 'md:w-[900px]', 'mx-auto', 'p-5', 'shadow-lg', 'rounded-lg')

    p.innerHTML =

    ` 
    <div class="border-l-4 border-prime rounded-xl  pl-4">
  
              <p class='font-bold text-xl mb-2'>${inpDonateAmount2.toFixed(2)}  Taka is Donated for famine-2024 at Feni, Bangladesh</p>
              <p class="bg-gradient-to-r from-gray-100  to-prime p-2 rounded-md">${new Date()}</p>
    </div>
      
             `
    containerDiv.appendChild(p)


    // ! history end TWo


})




// ! history start  THree

document.getElementById('btnDonate3').addEventListener('click', function () {



    // ! validation Tne
    const inpDonateAmount = Donate('inpDonateAmount3')

    if (isNaN(inpDonateAmount) || inpDonateAmount <= 0) {
        // ! reset input
        const inpDonate = document.getElementById('inpDonateAmount3')
        inpDonate.value = '';

        return

    }


    const containerDiv = document.getElementById('container')
    const inpDonateAmount3 = Donate('inpDonateAmount3')
    const p = document.createElement('p')
    p.classList.add('border-2', 'w-full', 'md:w-[900px]', 'mx-auto', 'p-5', 'shadow-lg', 'rounded-lg')

    p.innerHTML =
    ` 
    <div class="border-l-4 border-prime rounded-xl  pl-4">
  
              <p class='font-bold text-xl mb-2'>${inpDonateAmount3.toFixed(2)} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
              <p class="bg-gradient-to-r from-gray-100  to-prime p-2 rounded-md">${new Date()}</p>
    </div>
      
             `

    containerDiv.appendChild(p)


    // ! history end three



})

