Vue.component('newUser', {
    data() {
        return {
            email: "",
            firstName: "",
            lastName: "",
            password: "",
            confirm_password: "",
            email: "Controleer u E-mail adress"
        }
    },
    mounted() {
        this.getElementsById();
    },
    template:
        `
<form class="needs-validation" id="newUser" novalidate>

    <div class="row">

        <div class="col">

            <div class="row">
                <div class="col">
                    <div class="form-floating mb-3">
                        <input class="form-control" id="firstname" name="first_name" placeholder="First Name"
                            v-model="firstName" required>
                        <label for="firstname" class="form-label">Voornaam</label>
                        <div class="invalid-feedback">
                            Er is geen voornaam ingegevuld
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="form-floating mb-3">
                        <input class="form-control" id="lastname" name="last_name" placeholder="Last Name"
                            v-model="lastName" required>
                        <label for="lastname" class="form-label">Achternaam</label>
                        <div class="invalid-feedback">
                        Er is geen achternaam ingegevuld
                        </div>
                    </div>
                </div>
            </div>

            

            <div class="form-floating mb-3">
                <input type="email" class="form-control" id="email" name="E-mail" placeholder="name@example.com"
                    @change="validateEmail" required>
                <label for="email" class="form-label">E-mail</label>
                <div class="invalid-feedback">
                    {{ email }}
                </div>
            </div>

            <div class="form-floating mb-3">
                <input type="password" class="form-control" name="password" placeholder="password" id="password"
                    @change="validatePassword" required>
                <label for="password" class="form-label">Wachtwoord</label>
                <div class="invalid-feedback">
                    Er is geen wachtwoord ingevuld.
                </div>
            </div>

            <div class="form-floating mb-3">
                <input type="password" class="form-control" placeholder="password" id="confirm_password"
                    @keyup="validatePassword" required>
                <label for="password" class="form-label">Bevestig u wachtwoord</label>
                <div class="invalid-feedback">
                    Wachtwoord komt niet overeen.
                </div>
            </div>

        </div>

        <div class="col">

            <div class="form-check">
                <input class="form-check-input" type="checkbox" id="invalidCheck" required>
                <label class="form-check-label" for="invalidCheck">Ik ga akkoord met onze<a data-bs-toggle="collapse"
                        href="#collapseExample" role="button" aria-expanded="false"
                        aria-controls="collapseExample">algemeen voorwaarden</a></label>
                <div class="invalid-feedback">
                    You must agree before submitting.
                </div>
            </div>

            <div class="collapse" id="collapseExample">
                <div class="card card-body">
               
                <h6>Voorwaarden</h6>
                <p>
                    Leeftijdsgrens: we accepteren geen bestellingen van personen jonger dan 18 jaar.
                </p>
                <p>
                    Door akkoord te gaan met de leveringsvoorwaarden, bevestigt u dat u ouder bent dan 18 jaar.
            
                </p>
            
            
            <h6>Privacybeleid:</h6>
                <p>
                    Dit beleid is gericht op het verduidelijken welke informatie over de klant wordt verzameld en hoe deze informatie 
                    wordt gebruikt. Sigaarshop doet er alles aan om de privacy van zijn klanten te garanderen.
                </p>
             
            
            <h6>Ons beleid met betrekking tot uw persoonlijke gegevens:</h6>
                <p>
                    Volgens deze wetgeving moeten we toestemming vragen om uw gegevens in onze database te gebruiken en op te slaan
                    zodra u een aankoop doet bij Sigaarshop. Alle persoonlijke gegevens die u bij ons achterlaat of die we via een 
                    verkoopovereenkomst verkrijgen, worden door Sigaarshop bewaard. In deze functie mag Sigaarshop 
                    informatie doorgeven aan een derde partij.
                </p>
                <p>
                    De persoonlijke gegevens worden alleen gebruikt met het doel dat we onze verplichtingen tegenover u 
                    kunnen nakomen in een verkoopovereenkomst en in de communicatie tussen Sigaarshop en de klant.</p>
                <p><strong>
                    Zie ook "Privacybeleid"
                </p></strong>
             
            
            <h6>Order bevestiging:</h6>
                <p>
                    De orderbevestiging die u per e-mail ontvangt, is geen contract en betekent niet automatisch dat 
                    uw bestelling wordt geaccepteerd. Het is slechts een opname van uw wens om een ​​product tegen een bepaalde prijs 
                    te kopen. Bij het plaatsen van uw bestelling gaat u akkoord met alle voorwaarden op deze site, de 
                    verkoopvoorwaarden, inclusief onze leveringsvoorwaarden.
                </p>
                <p>
                    Sigaarshop behoudt zich het recht voor om de bestelling om welke reden dan ook te accepteren, in te houden of te beperken. Een beslissing voor niet-uitvoering van een bestelling kan onder meer gebaseerd zijn op het niet beschikbaar zijn van een product of fouten in de prijs of productbeschrijving van het product dat u op deze website vindt.
                </p>
                <p>
                    Bij het plaatsen van uw bestelling gaat u ermee akkoord dat Sigaarshop de totale aansprakelijkheid is, volgens enige juridische theorie of claim, beperkt tot de aankoopprijs die u voor het product hebt betaald.
                </p>
             
            
            <h6>Betalingsopties:</h6>
                <p>
                    Ideal, Paypal en bankoverschrijving
                </p>
                <p>
                    Zie hieronder "Beveiligde betaling"
                </p>
             
            
            <h6>Leveringen:</h6>
                <p>
                    Op het moment dat de bestelling wordt geplaatst, moet het openstaande bedrag vooraf worden betaald op de bankrekening die hiervoor is opgegeven, die u vindt op de orderbevestiging. Na ontvangst van de betaling zullen we overgaan tot verzending. In geval van een niet-tijdige levering of gewijzigde prijs van een besteld product, zal Sigaarshop u hiervan per e-mail op de hoogte stellen en kan als zodanig niet aansprakelijk worden gesteld. Alle bestellingen worden gedaan volgens de informatie die op de webshop wordt verstrekt.
                </p>
                <p>
                    Sigaarshop kan niet aansprakelijk worden gesteld voor het verzuim van leveringen veroorzaakt door derden.
                </p>
                <p>
                    De vermelde prijzen voor onze aangeboden producten zijn in euro's, inclusief BTW en exclusief verzendkosten.
                </p>
                <p>
                    Als u een bestelling om welke reden dan ook wenst te annuleren, is dit alleen mogelijk als het pakket nog niet door Sigaarshop is verzonden. Sigaarshop zal het door u betaalde bedrag binnen 2 weken retourneren.
                </p>
                <p>
                    Te vroege of te late aflevering geeft u geen recht op compensatie of het recht om uw bestelling te annuleren of de overeenkomst te ontbinden, tenzij de leveringsdatum zodanig is dat redelijkerwijs verwacht kan worden dat u de overeenkomst niet nakomt.
                </p>
             
            
            <h6>Rest:</h6>
                <p>
                    Als een artikel tijdelijk niet beschikbaar is, wordt de volledige bestelling genoteerd als een restvermelding totdat deze volledig kan worden afgeleverd. U wordt dan hiervan op de hoogte gebracht.
                </p>
             
            
            <h6>Garantie:</h6>
                <p>
                    Al onze producten hebben een garantie van 90 dagen, defect bij aflevering moet u binnen 7 dagen per e-mail aan Sigaarshop worden gemeld. Als dit niet wordt gemeld of als het product zonder kennisgeving wordt geretourneerd, wordt het niet geaccepteerd.
                </p>
                
            
            <h6>Terug recht: </h6>
                <p>
                    U hebt het recht om het artikel binnen 14 dagen na onze bezorgdatum op eigen kosten te retourneren. Het artikel moet ongebruikt en in de originele onbeschadigde verpakking zijn, zo niet, dan hebt u geen recht op een goede geld-terug-garantie.
                </p>
                <p>
                    Goede geld-terug-garantie omvat geen verzendkosten. Het retourrecht en retouren worden alleen geaccepteerd als u ons voor het eerst per e-mail hebt gecontacteerd. Voer uw bestelnummer en de reden voor het retourneren in uw e-mail in. Wacht op verdere instructies van ons per e-mail.
                </p>
             
            
            <h6>Klachten:</h6>
                <p>
                    Als het geleverde artikel niet klopt of verkeerd wordt afgeleverd, moet u per e-mail contact met ons opnemen . Klachten moeten binnen 7 dagen na de leveringsdatum plaatsvinden. Voer uw bestelnummer en de reden voor retour in uw e-mail in.
                </p>
            
                <p>
                    Wij kunnen geen aansprakelijkheid aanvaarden voor de gevolgen van type- of zetwerk op deze site.
                </p>
                <p><strong>
                    Door akkoord te gaan met de leveringsvoorwaarden, bevestigt u dat u ouder bent dan 18 jaar!
                </p></strong>


                </div>
            </div>

            <div class="form-check">
                <input class="form-check-input" type="checkbox" id="invalidCheck" required>
                <label class="form-check-label" for="invalidCheck">Ik ben 18 jaar of ouder</a></label>
                <div class="invalid-feedback">
                    U moet aangeven of u 18 jaar of ouder ben.
                </div>
            </div>
        <button class="btn btn-primary" @click="submitForm($event)">Aan maken</button>
    </div>
</form>
`,
    methods: {
        getElementsById: function () {
            this.password = document.getElementById("password");
            this.confirm_password = document.getElementById("confirm_password");
            this.email = document.getElementById("email")
        },
        validatePassword: function () {
            if (this.password.value != this.confirm_password.value) {
                this.confirm_password.setCustomValidity("Passwords Don't Match");
                this.confirm_password.classList.add("is-invalid");
            } else {
                this.confirm_password.setCustomValidity('');
                this.confirm_password.classList.remove("is-invalid");
            }
        },
        validateEmail: function () {
            let self = this;
            axios({
                method: 'POST',
                url: `?page=newuser&action=checkEmail`,
                data: {
                    email: this.email.value,
                },
                headers: {
                    "X-Requested-With": "XMLHttpRequest"
                }
            }).then(function (response) {
                if (response.data.message) {
                    console.log(response.data.message);
                    self.email.setCustomValidity("email already exists");
                    self.email = email.validationMessage;
                    self.email.classList.add("is-invalid");
                } else {
                    self.email.setCustomValidity("");
                    self.email.classList.remove("is-invalid");
                }
            }).catch(function (error) {
            });
        },
        
        
        submitForm: function (event) {
            event.preventDefault()
            event.stopPropagation()

            let form = document.getElementById("newUser")
            form.classList.add('was-validated')

            if (form.checkValidity()) {
                axios({
                    method: 'POST',
                    url: `?page=newuser&action=submitForm`,
                    data: {
                        first_name: this.firstName,
                        last_name: this.lastName,
                        email: this.email.value,
                        password: this.password.value,
                    },
                    headers: {
                        "X-Requested-With": "XMLHttpRequest"
                    }
                }).then(function (response) {
                    console.log(response);
                }).catch(function (error) {
                    console.log(error)
                });
                window.location.href = "/";
            }
        }
    }
});