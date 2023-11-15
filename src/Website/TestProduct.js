<!DOCTYPE html>
<html lang="en">
    <script>
        async function getShoe() {
   
   // Storing response
   const response = await fetch(window.location.origin + "/items/item/1");
  
   // Storing data in form of JSON
   var data = await response.json();
   console.log(data);
   if (response) {
       hideloader();
   }
   show(data);
}
        let slideIndex = 1;
        showSlides(slideIndex);

        // Next/previous controls
        function plusSlides(n) {
        showSlides(slideIndex += n);
        }

        // Thumbnail image controls
        function currentSlide(n) {
        showSlides(slideIndex = n);
        }

        function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
        }
    </script>
    <style>
       @import url('https://fonts.googleapis.com/css?family=Lato:400,700');

        
        html {
        display: grid;
        min-height: 100%;
        background-color: #090909;
        }
        header, nav {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }   

        nav{
                color: #fff;
                z-index: 90;
                position: relative;
            }
            nav a, header a {
                color: #fff;
                text-decoration: none;
            }
            nav .headerC{
                max-width: 1400px;
                padding: 1em 2em;
                margin: 0 auto;
            }

            nav .headerC > div {
                display: grid;
                grid-template-columns: 1fr 6fr;
                align-items: center;
            }

            nav .menu,
            nav form,
            .footer,
            .footer .watch {
                display:flex;
                justify-content: space-between;
                align-items: center;

            }
            nav ul {
                list-style-type:none;
                padding: 0;
                display: inline-block;
            }
            nav ul li {
                display: inline-block;
                margin: 0 0.5em;
            }
            nav ul a {
                font-size: 0.8em;
                text-transform: uppercase;
            }
            nav form{
                margin-right: 0;
            }
            nav form input{
                background: transparent;
                color: #fff;
                width: 12em;
                Padding: 0.5em 1em;
                border: none;
                outline: none;
            }
            nav form input::placeholder {
                color: #fff;
            }
            .logo {
                width: 4em;
                display: inline-block;
            }
            .nav-btn{
                background: rgb(255, 255, 255);
                color: #fff;
                width: 2.8em;
                height: 2.8em;
                border-radius: 50%;
                border: none;
                outline: none;
                cursor: pointer;
                transition: 0.3s;
                font-size: 1em;
            }
            .nav-btn:hover {
                background: rgb(255, 255, 255);
            }
            nav .headerC.menu-btn {
                display: none;
            }
        header{
            height: 12vh;
            background: #090909;
            position: relative;
            overflow: hidden;
            color: #fff;
        }

        body {
        display: grid;
        background: #74F854;
        font-family: 'Lato', sans-serif;
        text-transform: uppercase;
        }

        .container {
        position: relative;
        margin: auto;
        overflow: hidden;
        bottom: 50px;
        width: 1000px;
        height: 450px;
        background: #F5F5F5;
        box-shadow: 5px 5px 15px rgba(#090909, .5);
        border-radius: 10px;
        }

        p {
        font-size: 0.6em;
        color: #090909;
        letter-spacing: 1px;
        }

        h1 {
        font-size: 1.2em;
        color:  #4E4E4E;
        margin-top: -5px;
        }

        h2 {
        color: #74F854;
        margin-top: -5px;
        }

        .images {
        width: 290px;
        margin-top: 47px;
        }

        .slideshow-buttons {
        top: 70%;
        display: none;
        }

        .one, .two, .three, .four {
        position: absolute;
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: #74F854;
        }

        .one {
        left: 22%;
        }
        .two {
        left: 27%;
        }
        .three {
        left: 32%;
        }
        .four {
        left: 37%;
        }

        #product{
        position: absolute;
        width: 40%;
        height: 100%;
        top: 10%;
        left: 60%;
        }

        .desc {
        text-transform: none;
        letter-spacing: 0;
        margin-bottom: 17px;
        color:  #4E4E4E;
        font-size: .7em;
        line-height: 1.6em;
        margin-right: 25px;
        text-align: justify;
        }

        button {
        background: darken(#74F854, 10%);
        padding: 10px;
        display: inline-block;
        outline: 0;
        border: 0;
        margin: -1px;
        border-radius: 2px;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: #F5F5F5;
        cursor: pointer;
        &:hover {
            background: #74F854;
            transition: all .4s ease-in-out;
        }
        }

        .add {
        width: 67%;
        }

        .like {
        width: 22%;
        }

        .sizes {
        display: grid;
        color: #74F854;
        grid-template-columns: repeat(auto-fill, 30px);
        width: 60%;
        grid-gap: 4px;
        margin-left: 20px;
        margin-top: 5px;
        &:hover {
            cursor: pointer;
        }
        }

        .pick {
        margin-top: 11px;
        margin-bottom:0;
        margin-left: 20px;
        }

        .size {
        padding: 9px;
        border: 1px solid #74F854;
        font-size: 0.7em;
        text-align: center;
        &:hover{
            background: #74F854;
            color: #F5F5F5;
            transition: all .4s ease-in-out;
        }
        }

        .focus{
        background: #74F854;
        color: #F5F5F5;
        }

        footer {
        position: absolute;
        bottom: 0;
        right: 0;
        font-size: 0.8em;
        text-transform: uppercase;
        padding: 10px;
        p {
            letter-spacing: 3px;
        }
        a {
            color: #ffffff;
            text-decoration: none;
            &:hover {
            color: #7d7d7d;
            }
        }
        }
        .slideshow-container {
        max-width: 1000px;
        position: relative;
        margin: auto;
        }

        /* Hide the images by default */
        .mySlides {
        display: none;
        }

        /* Next & previous buttons */
        .prev, .next {
        cursor: pointer;
        position: absolute;
        top: 50%;
        width: auto;
        margin-top: -22px;
        padding: 16px;
        color: #74F854;
        font-weight: bold;
        font-size: 18px;
        transition: 0.6s ease;
        border-radius: 0 3px 3px 0;
        user-select: none;
        }

        /* Position the "next button" to the right */
        .next {
        right: -125px;
        border-radius: 3px 0 0 3px;
        }

        /* On hover, add a black background color with a little bit see-through */
        .prev:hover, .next:hover {
        background-color: rgba(0,0,0,0.8);
        }

        /* Caption text */
        .text {
        color: #f2f2f2;
        font-size: 15px;
        padding: 8px 12px;
        position: absolute;
        bottom: 8px;
        width: 100%;
        text-align: center;
        }

        /* Number text (1/3 etc) */
        .numbertext {
        color: #74F854;
        font-size: 12px;
        padding: 8px 12px;
        position: absolute;
        top: 0;
        }

        /* The dots/bullets/indicators */
        .dot {
        cursor: pointer;
        height: 15px;
        width: 15px;
        margin: 0 2px;
        background-color: #bbb;
        border-radius: 50%;
        display: inline-block;
        transition: background-color 0.6s ease;
        }

        .active, .dot:hover {
        background-color: #717171;
        }

        /* Fading animation */
        .fade {
        animation-name: fade;
        animation-duration: 1.5s;
        }

        @keyframes fade {
        from {opacity: .4} 
        to {opacity: 1}
        }
    </style>
    <header>
        <nav>
           <div class = "headerC">
            <div>
                <img src="https://i.ibb.co/9yqqRjr/IMG-4576-removebg-preview-2.png" alt="logo.png" border="0" height="50px" width="50px" ></a>
                <div class="menu">
                    <ul>
                        <li>
                            <A HREF="index.html">Home</A>
                        </li>
                        <li>
                            <a href="browse.html">Browsing</a>
                        </li>
                        <li>
                            <a href="Instagram.html">Instagram</a>
                        </li>
                        <li>
                            <a href="#">News</a>
                        </li>
                        <li>
                            <a href="Discord.html">Discord</a>
                        </li>
                    </ul>
                    <form>
                        <div class = "search-icon">
                            <i class="fas fas fa-search"></i>
                            &#128270;
                        </div>
                        <input
                            type="text"
                            class="search"
                            placeholder="Search. . ."
                        />
                        <button class="nav-btn">
                            <i class="fas fa-cart-plus"></i>
                            <img src="https://i.ibb.co/9yqqRjr/IMG-4576-removebg-preview-2.png" alt="logo.png" boarder="0" height="25px" width="25px">
                        </button>
                    </form>
                </div> 
          </div>
         <div class="menu-btn">
            <i class="fas fa-bars"></i>
         </div>
        </div>
        </nav>
    </header>
    <body>
        <div class="container">
            <div class="images">
                <div class="slideshow-container">

                    <!-- Full-width images with number and caption text -->
                    <div class="mySlides fade">
                    <div class="numbertext">1 / 3</div>
                    <img src="product1-removebg-preview.png" width="400px" margin-top="47px" />
                    </div>
                
                    <div class="mySlides fade">
                    <div class="numbertext">2 / 3</div>
                    <img src="ezgif.com-webp-to-jpg-removebg-preview.png" width="400px" margin-top="47px" />
                    </div>
                
                    <div class="mySlides fade">
                    <div class="numbertext">3 / 3</div>
                    <img src="product3.jpeg" width="400px" margin-top="47px" />
                    </div>
                
                    <!-- Next and previous buttons -->
                    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                    <a class="next" onclick="plusSlides(1)">&#10095;</a>
                </div>
                <br>
                
                <!-- The dots/circles -->
                <div style="text-align:center">
                    <span class="dot" onclick="currentSlide(1)"></span>
                    <span class="dot" onclick="currentSlide(2)"></span>
                    <span class="dot" onclick="currentSlide(3)"></span>
                </div>
            </div>
            <div class="slideshow-buttons">
              <div class="one"></div>
              <div class="two"></div>
              <div class="three"></div>
              <div class="four"></div>
            </div>
            <p class="pick">choose size</p>
            <div class="sizes">
              <div class="size">5</div>
              <div class="size">6</div>
              <div class="size">7</div>
              <div class="size">8</div>
              <div class="size">9</div>
              <div class="size">10</div>
              <div class="size">11</div>
              <div class="size">12</div>
            </div>
            <div id="product">
              <p>Men's Basketball Shoe</p>
              <h1>Air Jordan 1</h1>
              <p>Chicago</p>
              <br>
              <h2>$150</h2>
              <p class="desc">The AJ1 "Chicago" was inspired by the high top Air Jordan 1 original colorway, first released in 1985. The shoe harkens back to a time when shoe boxes were often lost in inventory stockrooms, only to be found again years later.</p>
              <div class="buttons">
                <button class="add">Add to Cart</button>
                <button class="like"><span>&#9829;</span></button>
              </div>
            </div>
          </div>
    </body>
        
</html>
