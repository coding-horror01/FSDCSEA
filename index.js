const bulbContainer = document.getElementById('bulbContainer');

       
        document.getElementById('addBulbBtn').addEventListener('click', function() {
            const numBulbs = parseInt(document.getElementById('numBulbs').value);

            
            for (let i = 0; i < numBulbs; i++) {
                
                const bulbDiv = document.createElement('div');
                bulbDiv.classList.add('bulb');

                
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';

               
                checkbox.addEventListener('change', function() {
                    if (checkbox.checked) {
                        bulbDiv.classList.add('on');
                    } else {
                        bulbDiv.classList.remove('on');
                    }
                });

                
                const label = document.createElement('label');
                label.innerText = 'Light Bulb';

                
                const bulbWrapper = document.createElement('div');
                bulbWrapper.appendChild(bulbDiv);
                bulbWrapper.appendChild(checkbox);
                bulbWrapper.appendChild(label);

                
                bulbContainer.appendChild(bulbWrapper);
            }
        });