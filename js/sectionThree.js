document.getElementById('btnDonate3').addEventListener('click', function () {

    // ! validation One
    const inpDonateAmount = Donate('inpDonateAmount3')
    const mainBalance = DonateInner('mainBalance')
    if (isNaN(inpDonateAmount) || inpDonateAmount <= 0 || inpDonateAmount > mainBalance) {
        alert("Invalid Input")
        const inpDonate = document.getElementById('inpDonateAmount3')
        inpDonate.value = '';

        return

    }


    // !special Model
    const special = document.getElementById('specialModel')
    special.classList.remove('hidden')
    special.classList.add('flex')
    document.getElementById('btnClose').addEventListener('click', function () {
        special.classList.add('hidden')

        // ! reset 
        const inpDonate = document.getElementById('inpDonateAmount3')
        inpDonate.value = '';



    })


    // !function calls 
    const donatedBalance = DonateInner('donatedBalance3')
    const minusNewBalance = mainBalance - inpDonateAmount
    document.getElementById('mainBalance').innerText = minusNewBalance
    const plusNewBalance = donatedBalance + inpDonateAmount
    donatedBalance = document.getElementById('donatedBalance3').innerText = plusNewBalance;

})