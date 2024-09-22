// const mainBalance = document.getElementById('mainBalance')
// const inpDonateAmount = document.getElementById('inpDonateAmount')
// const btnDonate = document.getElementById('btnDonate')
// const donatedBalance = document.getElementById('donatedBalance')


document.getElementById('btnDonate').addEventListener('click', function () {

    const inpDonateAmount = Donate('inpDonateAmount')

    const mainBalance = DonateInner('mainBalance')

    const donatedBalance = DonateInner('donatedBalance')

    const minusNewBalance = mainBalance - inpDonateAmount
    document.getElementById('mainBalance').innerText = minusNewBalance


    const plusNewBalance = donatedBalance + inpDonateAmount
    donatedBalance = document.getElementById('donatedBalance').innerText = plusNewBalance






















})