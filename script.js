window.addEventListener('DOMContentLoaded', function() {
    let days = document.querySelectorAll('.counter-block-input'),
        payment = document.querySelector('.payment-input'),
        totalHours = document.querySelector('.total-hours'),
        totalSum = document.querySelector('#total'),
        lastSum = document.querySelector('#last-sum'),
        twoWeeks = document.querySelector('#two-sum'),
        btn = document.querySelector('.save'), 
        sum = 0;
        payment.value = localStorage.getItem('Payment');
        let paymentPerHour = payment.value;
    let week = [0, 0, 0, 0, 0, 0, 0];
    
      for(let i = 0; i < days.length; i++) {
        days[i].value = localStorage.getItem(i);
        week[i] = +days[i].value;
        sum = week.reduce(function(sum, current) {
          return sum + current;
        }, 0); 
       totalHours.textContent = sum;
       totalSum.innerHTML = sum * paymentPerHour;
        days[i].addEventListener('input', function() {
            if(days[i].innerHTML == '') {
                week[i] = 0;
            }
            week[i] = +this.value;
            localStorage.setItem(i, week[i]);
            sum = week.reduce(function(sum, current) {
                return sum + current;
              }, 0); 
             totalHours.textContent = sum;
             totalSum.innerHTML = sum * paymentPerHour;
             twoWeeks.innerHTML = +totalSum.innerHTML + +lastSum.innerHTML;
              
        });
      }
      payment.addEventListener('input', function() {
        paymentPerHour = +this.value;
        localStorage.setItem('Payment', paymentPerHour);
        totalSum.innerHTML = sum * paymentPerHour;
      });
      btn.addEventListener('click', function () {
        lastSum.innerHTML = totalSum.innerHTML;
        for(let i = 0; i < days.length; i++) {
          
          days[i].value = 0;
          
          
        }
        week = [0, 0, 0, 0, 0, 0, 0];
        sum = week.reduce(function(sum, current) {
          return sum + current;
        }, 0); 
        totalHours.textContent = sum;
          totalSum.innerHTML = sum * paymentPerHour;
          twoWeeks.innerHTML = lastSum.innerHTML;
      });

      
    
    
    
});

