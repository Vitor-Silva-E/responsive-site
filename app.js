const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
        entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
    });
    
    
     const hiddenElements = document.querySelectorAll('.hidden');
     hiddenElements.forEach((el) => observer.observe(el))
//
  
const observerT = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
        entry.target.classList.add('show-T');
        } else {
            entry.target.classList.remove('show-T');
        }
    });
    });
    
    
     const hiddenElementT = document.querySelectorAll('.hidden-T');
     hiddenElementT.forEach((el) => observerT.observe(el))
