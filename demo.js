<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title> DEMO </title>
        <!--Link To CSS-->
        <link rel="stylesheet" href="demo-style.css">
            <!--Box Icons-->
            <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
    </head>
    <body>
   <!--Header -->
   <header>
    <!--Nav-->
    <div class="nav container">
        <a href="#" class="logo">NEXAMOVE FAISHION </a>
        <!--Cart-Icon-->
        <a href="signup.html"> <i class="fas fa-shopping-cart userIcon"></i> </a>
    </div>
   
</header>
<!--Shop-->
<section class="shop container">
    <h2 class="section-title">Shop Products </h2>
    <!--Content-->
    <div class="shop-cotent">
    <!--Box 1-->
<div class="product-box">
<img src="img/IMG_20240804_175124.jpg" alt="" class="product-img">
<h2 class="product-title">OVERSIZED  T-SHIRT</h2>
<span class="price">₹699</span>
<i class="bx bx-shopping-bag" add-cart></i>
</div>
</div>

 <!--Box 1-->
 <div class="product-box">
    <img src="img/IMG_20240804_175124.jpg" alt="" class="product-img">
    <h2 class="product-title">OVERSIZED  T-SHIRT</h2>
    <span class="price">₹699</span>
    <i class="bx bx-shopping-bag" add-cart></i>
    </div>
    </div>
     <!--Box 1-->
<div class="product-box">
    <img src="img/IMG_20240804_175124.jpg" alt="" class="product-img">
    <h2 class="product-title">OVERSIZED  T-SHIRT</h2>
    <span class="price">₹699</span>
    <i class="bx bx-shopping-bag" add-cart></i>
    </div>
    </div>
     <!--Box 1-->
<div class="product-box">
    <img src="img/IMG_20240804_175124.jpg" alt="" class="product-img">
    <h2 class="product-title">OVERSIZED  T-SHIRT</h2>
    <span class="price">₹699</span>
    <i class="bx bx-shopping-bag" add-cart></i>
    </div>
    </div>




</section>

    </body>
</html>
/* Google Fonts */

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');


    . {
        font-family: "Baskervville SC", system-ui;
        font-weight: 400;
        font-style: normal;
      margin:  0;
      padding: 0;
      scroll-padding-top: 2rem;
      scroll-behavior: smooth;
      box-sizing: border-box;
      list-style: none;
      text-decoration: none;

      
}
:root{
    --main-color: #fd4646;
    --text-color: #171427;
    --bg-color: #fff;
}
img{
    width: 100%;
}
body{
    color: var(--text-color);

}
.container{
max-width: 1068px;
margin: auto;
width: 100%;
}
section{
padding: 4rem 0 3rem;




}




/* Header*/
header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: var(--bg-color);
    box-shadow: 0 px 4px hsl(0, 4%, 15% / 10%);
}
.nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;
}
.logo{
    font-size: 1.1rem;
    color: var(--text-color);
    font-weight: 400;
}
#cart-icon{
    font-size: 1.8rem;
    cursor: pointer;
    
}
.section-title{
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
}
.shop{
    margin-top: 2rem;
}
/* Shop  Content */
.shop container{
.shop-content{
display: grid;
grid-template-columns: repeat(auto-fit) minmax(220px, auto-fit);

}
}