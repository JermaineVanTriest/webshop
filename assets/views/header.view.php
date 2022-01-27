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
                                        <li><a href="/?page=home" class="nav-link nav-links-btn">home</a></li>
                                        <li><a href="/?page=cigar" class="nav-link nav-links-btn">Sigaren</a></li>
                                        <li><a href="/?page=karaf" class="nav-link nav-links-btn">Karaf</a></li>
                                        <li><a href="/?page=accessory" class="nav-link nav-links-btn">Accessories</a></li>
                                        <li><a href="/?page=login" class="nav-link nav-links-btn">Inloggen</a></li>
                                        <li><div class="col-md-3 text-end pe-1 mt-1">
                                        <li><shopping-cart ref="shoppingCart"></shopping-cart></li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </nav>    
                    </div>   
                </div>
               
        </div>
    </div>
    
                                       
    <?= !is_null($content) && array_key_exists('headerData', $content) ? $content['headerData'] : '' ?>
</header>
          