<!-- HEAD VIEW PHP -->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="icon" href="/assets/images/favicon.svg" sizes="32x32">

    <title>Sigaar Shop</title>

    <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="node_modules/bootstrap-icons/font/bootstrap-icons.css">
    <link rel="stylesheet" href="/assets/css/style.css">
    <link rel="stylesheet" href="/assets/css/cart.css">

    <script src="node_modules/jquery/dist/jquery.min.js"></script>
    <script src="https://code.jquery.com/ui/1.13.0/jquery-ui.js"></script>
    <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="node_modules/vue/dist/vue.min.js"></script>
    <script src="node_modules/axios/dist/axios.min.js"></script>
    
    <script src="/assets/js/components/cart.js"></script>
    <script src="/assets/js/components/products.js"></script>
    <script src="/assets/js/artikels.js"></script>
    <script src="/assets/js/rating.js"></script>
    
    <script src="/assets/js/components/product.js"></script>
    <!-- <script src="/assets/js/components/shoppingcart.js"></script> -->
    
</head>
<body background="assets/images/webshop/background.png">  

<header>   
                <div class="container-fluid p-0">
                    <div class="nav-container">
                        <nav class="navbar">
                            <h2 id="navbar-logo"> {{ appName }} </h2>
                                <div class="menu-toggle" id="mobile-menu">
                                    <span class="bar"></span>
                                    <span class="bar"></span>
                                    <span class="bar"></span>         
                                </div>
                               
                                    <ul class="nav-menu">
                                        <li><a href="#" class="nav-link nav-links-btn">home</a></li>
                                        <li><a href="/test.html" class="nav-link nav-links-btn">test</a></li>
                                        <li><a href="#" class="nav-link nav-links-btn">About us</a></li>
                                        <li><a href="/shopcart.html" class="nav-link nav-links-btn">shopcart</a></li>
                                        <li><a href="#" class="nav-link nav-links-btn">sige up</a></li>
                                       <!-- <li><i class="bi bi-cart4 basket" style="font-size: 2em;" @click="showCart"></i></li>-->
                                    </ul>
                                </div>
                            </div>
                        </nav>    
                    </div>   
                </div>
        </header>     



    <main id="app" class="content">
        <div class="layer" @click="closeShoppingCart"></div>
        <div class="container-fluid p-0">
            