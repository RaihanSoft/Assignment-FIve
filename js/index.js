

document.getElementById('btnDonate').addEventListener('click', function () {

    // ! validation One
    const inpDonateAmount = Donate('inpDonateAmount')
    const mainBalance = DonateInner('mainBalance')

    if (isNaN(inpDonateAmount) || inpDonateAmount <= 0 || inpDonateAmount > mainBalance) {
        alert("Invalid Input")
        document.getElementById('inpDonateAmount').value='';
        return
    }

    // !special Model
    const special = document.getElementById('specialModel')
    special.classList.remove('hidden')
    special.classList.add('flex')
    document.getElementById('btnClose').addEventListener('click', function () {
        special.classList.add('hidden')
        // ! reset input
        const inpDonate = document.getElementById('inpDonateAmount')
        inpDonate.value = '';
   

    })

    // ! function call 

    const donatedBalance = DonateInner('donatedBalance')
    const minusNewBalance = mainBalance - inpDonateAmount
    document.getElementById('mainBalance').innerText = minusNewBalance
    const plusNewBalance = donatedBalance + inpDonateAmount
    donatedBalance = document.getElementById('donatedBalance').innerText = plusNewBalance

})

