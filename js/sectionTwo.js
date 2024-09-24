document.getElementById('btnDonate2').addEventListener('click', function () {

    // ! validation One
    const inpDonateAmount = Donate('inpDonateAmount2')
    const mainBalance = DonateInner('mainBalance')
    if (isNaN(inpDonateAmount) || inpDonateAmount <= 0 || inpDonateAmount > mainBalance) {
        alert("Invalid Input")
        document.getElementById('inpDonateAmount2').value='';
        return

    }

    // !special Model
    const special = document.getElementById('specialModel')
    special.classList.remove('hidden')
    special.classList.add('flex')
    document.getElementById('btnClose').addEventListener('click', function () {
    special.classList.add('hidden')

        
        // ! reset input
    document.getElementById('inpDonateAmount2').value='';
 
    

    })

    // !function calls 
    const donatedBalance = DonateInner('donatedBalance2')
    const minusNewBalance = mainBalance - inpDonateAmount
    document.getElementById('mainBalance').innerText = minusNewBalance
    const plusNewBalance = donatedBalance + inpDonateAmount
    donatedBalance = document.getElementById('donatedBalance2').innerText = plusNewBalance;




})