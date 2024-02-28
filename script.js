const selectBox = document.querySelectorAll(".box");

// Default value setting for input radio and div box - start.
const radio = document.querySelectorAll('input[type="radio"]');
const defaultCheck = document.querySelector('#box2-check');
defaultCheck.checked = true;

radio.forEach(otherItem =>{
    if(otherItem !== defaultCheck){
        otherItem.checked = false;
    }
});

const defaultBox = document.querySelector('.box-2');
defaultBox.style.border = "0.125em solid #FF6B82";
// ... -end.

selectBox.forEach(box => {
    // triggers when clicking div box.
    box.addEventListener("click", (e) => {

        // Check if the click event originated from within the table
        // if not
        if(!e.target.closest('.size_color--table')){

            defaultBox.style.border = null;
            document.querySelectorAll('.box').forEach(otherBox => {
                // console.log(otherBox);
                if (otherBox !== box) {
                  otherBox.classList.remove('active');
                  otherBox.querySelector('.size_color--table').classList.remove('active');
                }
            });

            // Find the radio button within the div-box
            const radio = box.querySelector('input[type="radio"]');

            // Deselect other radio buttons
            document.querySelectorAll('input[type="radio"]').forEach(otherRadio => {
                if(otherRadio !== radio){
                    otherRadio.checked = false
                }
            });
    
            // Toggle the 'active' class on the table
            const table = box.querySelector('.size_color--table');
            table.classList.toggle('active');

            // Toggle the 'active' class on the box itself
            box.classList.toggle('active');

            // Select the radio button in the current box
            radio.checked = true;
        }

        // else - we can play around with select options in a table.
    });
});
