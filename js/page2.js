document.addEventListener("DOMContentLoaded",function(){
    // 1) your books and their image arrays
    const books = {
      valentines: {
        title: "Valentine’s Edition",
        pages: [
            "../images/1.png",
            "../images/IMG_5301.PNG",
            "../images/IMG_5302.PNG",
            "../images/IMG_5303.PNG",
            "../images/IMG_5304.PNG",
            "../images/IMG_5305.PNG",
            "../images/IMG_5306.PNG",
            "../images/IMG_5307.PNG",
            "../images/IMG_5308.PNG",
            "../images/IMG_5309.PNG",
            "../images/IMG_5311.PNG",
            "../images/IMG_5319.PNG",
            "../images/IMG_5312.PNG",
            "../images/IMG_5313.PNG",
            "../images/IMG_5314.PNG",
            "../images/IMG_5315.PNG",
            "../images/IMG_5316.PNG",
            "../images/IMG_5317.PNG",
            "../images/IMG_5318.PNG"
        ]
      },
      story: {
        title: "Our Story",
        pages: [
            "../images/24.png",
            "../images/25.png",
            "../images/26.png",
            "../images/35.png",
            "../images/33.png",
            "../images/34.png",
            "../images/37.png",
            "../images/38.png",
            "../images/39.png",
            "../images/40.png",
            "../images/41.png",
            "../images/42.png",
            "../images/43.png",
            "../images/44.png",
            "../images/45.png",
            "../images/46.png",
            "../images/28.png",
            "../images/32.png",
            "../images/qr.png",
            "../images/qr.png",
            "../images/31.png"
        ]
      },
      // add more keys!
    };
  
    // refs
    const gallery       = document.getElementById("gallery");
    const photobook     = document.getElementById("photobook");
    const flipbook      = document.getElementById("flipbook");
    const bookTitleElem = document.getElementById("bookTitle");
    const bookImg       = flipbook.querySelector(".page.cover img");
    const prevBtn       = document.getElementById("prevPage");
    const nextBtn       = document.getElementById("nextPage");
    const backBtn       = document.getElementById("backToGallery");
  
    let currentBook, currentPage;
  
    // select a book
    document.querySelectorAll(".book-card").forEach(card=>{
      card.addEventListener("click",()=>{
        const key = card.dataset.key;
        if(!books[key]) return;
        loadBook(key);
      });
    });
  
    // back to gallery
    backBtn.addEventListener("click",()=>{
      photobook.hidden = true;
      gallery.hidden   = false;
    });
  
    // flip functions
    nextBtn.addEventListener("click",()=>{
      if(currentPage<currentBook.pages.length-1){
        currentPage++;
        updatePage();
      }
    });
    prevBtn.addEventListener("click",()=>{
      if(currentPage>0){
        currentPage--;
        updatePage();
      }
    });
  
    function loadBook(key){
      currentBook = books[key];
      currentPage = 0;
      bookTitleElem.textContent = currentBook.title;
      gallery.hidden   = true;
      photobook.hidden = false;
      updatePage();
    }
  
    function updatePage(){
      bookImg.src = currentBook.pages[currentPage];
      prevBtn.style.display = currentPage===0            ? "none" : "block";
      nextBtn.style.display = currentPage===currentBook.pages.length-1
                                  ? "none" : "block";
    }
  });