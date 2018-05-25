document.addEventListener("DOMContentLoaded",()=>{
    let arrow_to_article = document.querySelector(".fa-angle-double-down");
    let arrow_to_beginnig= document.querySelector(".fa-angle-up");
    let goal_article = document.querySelector(".element-to-scroll");
    let goal_beginning = document.getElementsByTagName("body")[0];
    arrow_to_article.addEventListener("click",()=>{
        goal_article.scrollIntoView();
    })    
    arrow_to_beginnig.addEventListener("click",()=>{
        goal_beginning.scrollIntoView();
    })
})