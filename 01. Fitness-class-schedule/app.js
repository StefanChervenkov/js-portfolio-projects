window.addEventListener('load', solve);

function solve() {
    // Initial event-listener
    const nextBtn = document.querySelector('#next-btn');
    nextBtn.addEventListener('click', createPreview);

    const nameInputEl = document.querySelector('#name');
    const emailInputEl = document.querySelector('#email');
    const contactNumberInputEl = document.querySelector('#contact-number');
    const classTypeInputEl = document.querySelector('#class-type');
    const classTimeInputEl = document.querySelector('#class-time');

    const initialInputElementsArr = [nameInputEl, emailInputEl, contactNumberInputEl, classTypeInputEl, classTimeInputEl];

    // Task 1: Collect form information and create preview.
    function createPreview(e) {
        e.preventDefault();


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

        //create the edit and continue buttons 
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.classList.add('edit-btn');
        editBtn.addEventListener('click', editContent)

        const continueBtn = document.createElement('button');
        continueBtn.textContent = 'Continue';
        continueBtn.classList.add('continue-btn');
        continueBtn.addEventListener('click', continueFromPreview)

        // append the article element to the list element
        listEl.appendChild(articleEl);
        //append the buttons to the list element
        listEl.appendChild(editBtn);
        listEl.appendChild(continueBtn);
        // append the list element to the previewListEl
        previewListEl.appendChild(listEl);

        //clear the input fields once the preview has been created
        nameInputEl.value = '';
        emailInputEl.value = '';
        contactNumberInputEl.value = '';
        classTypeInputEl.value = '';
        classTimeInputEl.value = '';

        // disable the next button
        nextBtn.disabled = true;


    }

    function createParagraph(inputEl) {
        const pEl = document.createElement('p');
        pEl.textContent = inputEl.value;
        return pEl;
    }

    function editContent(e) {
        //load the information back to the input fields
        const inputDataArr = Array.from(document.querySelectorAll('li.info-item article.personal-info p'));
        initialInputElementsArr.map((element, index) => { element.value = inputDataArr[index].textContent })

        //enable the next Button
        nextBtn.disabled = false;

        //remove the list item from the ul element
        e.target.parentNode.remove();

    }

    function continueFromPreview(e) {
        const listEl = e.target.parentNode;
        const confirmListEl = listEl.cloneNode(true);
        const confirmClassEl = document.querySelector('ul.confirm-class');
        // make changes to the confirmListEl
        confirmListEl.classList.remove('info-item');
        confirmListEl.classList.add('continue-info');

        // remove the edit and continue buttons
        Array.from(confirmListEl.querySelectorAll('button')).forEach(el => el.remove());

        // create cancel and confirm buttons
        const cancelBtn = document.createElement('button');
        cancelBtn.textContent = 'Cancel';
        cancelBtn.classList.add('cancel-btn');
        cancelBtn.addEventListener('click', (e) => {
            e.target.parentNode.remove();
            nextBtn.disabled = false;
        })

        const confirmBtn = document.createElement('button');
        confirmBtn.textContent = 'Confirm';
        confirmBtn.classList.add('confirm-btn');

        confirmListEl.appendChild(cancelBtn);
        confirmListEl.appendChild(confirmBtn);

        //move the list element from preview to confirm pane
        confirmClassEl.appendChild(confirmListEl);
        //remove the list element from the preview pane
        listEl.remove();

    }




    // Task 2: Return preview for editing.

    // Task 3: Continue with preview and create confirmation.

    // Task 4: Final view. Confirm or cancel class. 
}




