Vue.component('login-modal', {
    data() {
        return {
            Email: "",
            password: "",
            loginError: "",
            login_client: "",
            
        }
    },
    mounted() {
        this.getElementsById();
    },
    template:
        `
        <div class="container">
  <div class="row">
        <div class="col-9"></div>
            <div class="col-4">                
    <h1>Inloggen</h1>
    </form>
        <form form method="POST" action="?page=login&function=login" onsubmit="return false;">
        <div id="login-form" class="mb-3" class="col-6 col-md-4">
            <label for="exampleInputEmail1" class="form-label">Email adres</label>
                <input type="email"required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">Wij zullen nooit gegevens delen.</div>
        </div>
            <div class="mb-3">
                        <input type="password" class="form-control" name="password" placeholder="password" id="login-password">
                <label for="exampleInputPassword1" class="form-label">Wachtwoord</label>
                <input type="password" required class="form-control" id="exampleInputPassword1">
          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" required class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">Ben 18 jaar en ouder</label>
          </div>
                <button type="button" type="submit" value="Login" class="btn btn-primary btn-lg">log in</button>
        
      </form>
    </section>
    </div>


    
    <div id="login_client" class="col-6">
    <div class="row" class="col-6 col-md-4">
    <h2 id="login_client">Nieuwe klant</h2>
    <p>
        Redenen om een account aan te maken:
    </p>
                <div class="clearfix">
                <div id="login_client">                    
                    
                            <p id="login_client"> <strong>&#10004; Beheer al je bestellingen en retouren op één plek </strong></p>
                            <p><strong>&#10004; Bestel sneller met je bewaarde adresgegevens</strong></p>
                            <p><strong>&#10004; Je winkelwagen altijd en overal opgeslagen </strong></p>
                            <p><strong>&#10004; Sigaren over de hele wereld</strong></p>
                            <p><strong>&#10004; Bereikbaar voor advies</strong></p>
                    </p>
                    <a class="btn btn-primary" href="/?page=register" role="button">Account aanmaken</a>
                </div>  
            </div>
        </div>
        
    </center>
</div>



    


         </div>
  </div>
</div>




<script>
    $(document).ready(function() {
        $('form').on('submit', function() {
            axios({
                url: '?page=login&function=login',
                method: 'POST',
                data: $(this).serialize(),
                headers: {
                    "X-Requested-With": "XMLHttpRequest"
                }
            }).then(function(response) {
                console.log(response);
            })

        });
    });
</script>
`,
    methods: {
        getElementsById: function () {
            this.password = document.getElementById("login-password");
            this.email = document.getElementById("login-email")
            this.welcom = document.getElementById("login_client")
        },
        validateSubmit: function () {
            let self = this;
            let form = document.getElementById("login-form")
            form.classList.add('was-validated')
            if (form.checkValidity()) {
                axios({
                    method: 'POST',
                    url: `?page=login&action=verifyLogin`,
                    data: {
                        email: this.email.value,
                        password: this.password.value,
                    },
                    headers: {
                        "X-Requested-With": "XMLHttpRequest"
                    }
                }).then(function (response) {
                    if (response.data.success) {
                        console.log("true")
                        document.cookie = "loggedIn=true";
                        window.location.href = "/";
                    } else {
                        self.email.value = "";
                        self.password.value = "";
                        form.classList.remove('was-validated');
                        self.loginError = "Incorrect email or password. Please try again"
                    }
                }).catch(function (error) {
                    console.log("error:", error)
                });

            }
        }
    }
});