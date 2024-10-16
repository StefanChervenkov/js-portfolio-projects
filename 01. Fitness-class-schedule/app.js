window.addEventListener('load', solve);

function solve() {
    // Initial event-listener
    document.querySelector('#next-btn').addEventListener('click', createPreview);

    // Task 1: Collect form information and create preview.
    function createPreview(e) {
        e.preventDefault();
        const nameInputEl = document.querySelector('#name');
        const emailInputEl = document.querySelector('#email');
        const contactNumberInputEl = document.querySelector('#contact-number');
        const classTypeInputEl = document.querySelector('#class-type');
        const classTimeInputEl = document.querySelector('#class-time');

        if (nameInputEl.value == '' || emailInputEl.value == '' || contactNumberInputEl.value == '' || classTypeInputEl.value == '' || classTimeInputEl.value == '') {
            return;
        }

        const previewListEl = document.querySelector('.class-info');
        
        //create a list element and add it the class attribute 'info-item'
        const listEl = document.createElement('li');
        listEl.classList.add('info-item')

        //create an article element and add it the class attribute 'personal-info'
        const articleEl = document.createElement('article');
        articleEl.classList.add('personal-info');

        // append all the paragraphs to the artcice element
        articleEl.appendChild(createParagraph(nameInputEl));
        articleEl.appendChild(createParagraph(emailInputEl));
        articleEl.appendChild(createParagraph(contactNumberInputEl));
        articleEl.appendChild(createParagraph(classTypeInputEl));
        articleEl.appendChild(createParagraph(classTimeInputEl));
        
        // append the article element to the list element
        listEl.appendChild(articleEl);
        // append the list element to the previewListEl
        previewListEl.appendChild(listEl);

        console.log(previewListEl);
        

        //clear the input fields once the preview has been created
        nameInputEl.value = '';
        emailInputEl.value = '';
        contactNumberInputEl.value = '';
        classTypeInputEl.value = '';
        classTimeInputEl.value = '';






    }

    function createParagraph(inputEl) {
        const pEl = document.createElement('p');
        pEl.textContent = inputEl.value;
        return pEl;
    }





    // Task 2: Return preview for editing.

    // Task 3: Continue with preview and create confirmation.

    // Task 4: Final view. Confirm or cancel class. 
}




