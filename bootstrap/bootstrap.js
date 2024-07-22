   export const bootstrap = () => {
        // Funktion, um ein Skript asynchron zu laden und sicherzustellen, dass es fertig ist, bevor das nächste Skript geladen wird
        function loadScript(url, callback) {
            const script = document.createElement('script');
            script.src = url;
            script.onload = callback;
            document.body.appendChild(script);
        }

        // Bootstrap CSS einbinden
        const link = document.getElementById("themeStylesheet")
        link.rel = 'stylesheet';
        link.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css';
        document.head.appendChild(link);

        // jQuery einbinden und dann Popper.js und Bootstrap JavaScript einbinden
        loadScript('https://code.jquery.com/jquery-3.5.1.slim.min.js', function() {
            loadScript('https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js', function() {
                loadScript('https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js', function() {
                    console.log('Bootstrap ist fertig geladen');
                });
            });
        });
        
        const oldNavBar = document.querySelector(".navbar");
        oldNavBar.innerHTML = navBar();
   }

 const navBar = () => {
    return `
    <ul class="nav nav-pills nav-fill">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Much longer nav link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">Disabled</a>
  </li>
</ul>`
   }

