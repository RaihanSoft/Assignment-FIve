// const mainBalance = document.getElementById('mainBalance')
// const inpDonateAmount = document.getElementById('inpDonateAmount')
// const btnDonate = document.getElementById('btnDonate')
// const donatedBalance = document.getElementById('donatedBalance')

// const special = document.getElementById('special')


document.getElementById('btnDonate').addEventListener('click', function () {

    // !special Model
    const special = document.getElementById('specialModel')
    special.classList.remove('hidden')
    special.classList.add('flex')
    document.getElementById('btnClose').addEventListener('click', function () {
        special.classList.add('hidden')

    })




      // ! validation One
    const inpDonateAmount = Donate('inpDonateAmount')
    if (isNaN(inpDonateAmount) || inpDonateAmount === 0){
            document.getElementById('specialModel').classList.add('hidden')
            alert("Invalid Input")
        return
    
    }




    // !function calls 
    const mainBalance = DonateInner('mainBalance')
    const donatedBalance = DonateInner('donatedBalance')
    const minusNewBalance = mainBalance - inpDonateAmount
    document.getElementById('mainBalance').innerText = minusNewBalance
    const plusNewBalance = donatedBalance + inpDonateAmount
    donatedBalance = document.getElementById('donatedBalance').innerText = plusNewBalance


  





























})