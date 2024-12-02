const bar = document.getElementById('bar');
const cross = document.getElementById('close');
const nav1 = document.getElementById('navbar');
 

if(bar){
    bar.addEventListener('click',() => {
        nav1.classList.add('rem-display');
    })
}

if(cross){
    cross.addEventListener('click',() => {
        nav1.classList.remove('rem-display');

    })
}


//slider Js

const dots = document.querySelectorAll('.dot');
const images = document.querySelectorAll('.slider-image');

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    // Remove active class from all dots
    dots.forEach(d => d.classList.remove('active'));

    // Add active class to the clicked dot
    dot.classList.add('active');

    // Remove hover effect from all images
    images.forEach(img => img.classList.remove('hover'));

    // Add hover effect to the corresponding image
    images[index].classList.add('hover');
  });
});

// calculator sections switching 

const buttons = document.querySelectorAll(".cal-btn");
    const forms = document.querySelectorAll(".right-section");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const targetFormId = button.getAttribute("data-form");
            
            // Hide all forms
            forms.forEach(form => {
                form.style.display = "none";
            });

            // Show the targeted form
            document.getElementById(targetFormId).style.display = "block";
        });
    });
