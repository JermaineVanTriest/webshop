<login-modal></login-modal>

   

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