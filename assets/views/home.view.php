<div class="row">
    <center>
        <div id="intern-link" class="container"></div>
            <div class="col align-self-center">
                <div class="clearfix">                    
                    <p style="float: left;">
                        <img src="https://www.freeiconspng.com/uploads/black-tick-icon-png-33.png" height="200px" width="200px" ></p>
                            <p><strong>&#10004; Gratis verzending Nederland v.a. €60,-</strong></p>
                            <p><strong>&#10004; Voor 15:00 uur besteld, dezelfde dag verzonden</strong></p>
                            <p><strong>&#10004; Snel en vertrouwd</strong></p>
                            <p><strong>&#10004; Sigaren over de hele wereld</strong></p>
                            <p><strong>&#10004; Bereikbaar voor advies</strong></p>
                    </p>
                </div>  
            </div>
        </div>
    </center>
</div>


<container>
    <div class="row">
        <center>
                <div class="col-md-4">
                <div id="carousel " class="carousel carousel-dark slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                <img src="/assets/images/webshop/aaa1.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5 id="carouselText">First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                <img src="/assets/images/webshop/aaa2.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                </div>
                </div>
                <div class="carousel-item">
                <img src="/assets/images/webshop/aaa3.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
        </center>
    </div>
        </container>


<container>
    <div class="row">
        <center>
            <div class="col-md-2">
                <div id="intern-link" class="container"></div>
                    <div class="col align-self-center">
                        <ul>
                            <li>
                                <center><a href="#Welke-sigaar">Welke sigaar past bij mij?</a></center>
                            </li>
                            <li>
                                <center><a href="#Waarom-humidor">Waarom heb ik een humidor nodig?</a></center>
                            </li>
                            <li>
                                <center><a href="#Knip-sigaar">Hoe knip je een sigaar?</a></center>
                            </li>
                            <li>
                            <center><a href="#Sigaar-aansteken">Hoe kan ik het beste mijn sigaar aansteken?</a></center>
                            </li>
                        </ul>  
                    </div>
                </div>           
            </div>
        </center>
    </div>
</container>

<div class="container">
        <div class="row">
            <?php foreach ($products as $product) : ?>
                <div class="col-md-4 pt-3">
                    <img class="wrap" src="<?= $_ENV['IMAGE_PATH'] . $product['image']  ?>" width="100%">
                    
                        <button class="btn btn-small addToCart" data-product-id="1" class="btn btn-small" >
                            <i class="bi bi-cart4"></i>In winkelwagen</a></button>
                        <button a href="#" class="btn btn-small">
                            <i class="bi bi-info-circle"></i>Meer informatie</a></button>
                </div>
            <?php endforeach ?>
        </div>
    </div>



                    <nav>
                    <div class="container-fluid p-0">
                        <header class="my-header">
                            <div class="row">
                                <div class="col-md-12 text-center pt-4">
                                    <div class="container"></div>

                                       <h3 class="text-center ">Welke sigaar past bij mij?</h3>
                                       <p><a name="Welke-sigaar"></a></p>
                                       <p class="text-center">Een sigaar kiezen is niet heel moeilijk, bent u een beginnende roker? Start dan met een dunnere sigaar. 
                                       Dikkere sigaren zijn vaak te heftig voor een onervaren sigarenroker en worden daardoor als niet lekker 
                                       ervaren. Daarnaast rookt u een dunne sigaar ook minder lang, namelijk een halfuurtje. Dit is voor een 
                                       beginner voldoende. Bent u een ervaren roker, kom dan naar onze sigarenwinkel, hier verlenen wij u de 
                                       service om de beste sigaar te kiezen die inspeelt op uw wensen.</p>
                   
                                       <p><a name="Waarom-humidor"></a></p>
                                       <p class="text-center">Een humidor is en klimaat-controlerende box die de luchtvochtigheid regelt, zodat je sigaren goed blijven. 
                                       Sigaren hebben namelijk een bepaalde luchtvochtigheid nodig om ervoor te zorgen dat ze goed branden en zo 
                                       goed mogelijk smaken. Het hebben van een humidor is dus een must!</p>
                   
                                       <h3 class="text-center">Hoe knip je een sigaar?</h3>
                                       <p><a name="Knip-sigaar"></a></p>
                                       <p class="text-center">Als u niet zeker weet hoe u precies moet knippen, 
                                       bekijk dan onze youtube filmpje. 
                                       Let op dat u niet te veel afknipt, want het dekblad kan loslaten. 
                                       Zorg dat u de sigaar afknipt op de zogenoemde schouder.</p>
               
                   
                                       <h3 class="text-center">Hoe kan ik het beste mijn sigaar aansteken?</h3>
                                       <p><a name="Sigaar-aansteken"></a></p>
                                       <p class="text-center">Voor het aansteken is het belangrijk dat u een butaan-aansteker of lucifers gebruikt. 
                                       Andere aanstekers gebruiken gassen die de smaak van uw sigaar beïnvloeden.</p>
                                   </div>
                               </div> 
                           </header>
                       </nav>
 


<div class="container">
    <cart-form ref="cartComponent" class="cart"></cart-form>
    <products></products>
</div>

