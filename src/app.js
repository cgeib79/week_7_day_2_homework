document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');
});

 const form = document.querySelector("#new-item-form");
   //query new form item
   console.log(form);
   const formSubmit = function(event){
     //event object created
       event.preventDefault();

       const form = event.target;

       const word = form.word.value;
       
       const result = document.querySelector("#words");
       item = `${words}`;

       createWord(item, result); // function called

       form.reset();

       // deleteWord();
     };

     form.addEventListener("submit", formSubmit);

     const createWord = function(content, container){

       const list = document.createElement('p');
       list.textContent = content;
       // attach form selection to list
       container.appendChild(list);
     };
