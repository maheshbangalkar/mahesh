			const scriptURL = 'https://script.google.com/macros/s/AKfycbyB7v8TizC-HnbHQ_vmTIVMozJ5Z_kJFTGAPdTE8qt9dlt5opuT6Yw6NhZRBHzg_CXX/exec'
            const form = document.forms['google-sheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => alert("Thanks for giving Feedback..!"))
                .catch(error => console.error('Error!', error.message))
            });