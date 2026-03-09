# manually ek kaam kar like jaise hi gp of radio btn se ek click baki sare uncheck

    if same name toh ye func auto aati hai like if ek check baki uncheck
    <h3>Select one option</h3>
    
    <label>
      <input type="radio" name="choice" value="A"> Option A
    </label>
    <br>
    
    <label>
      <input type="radio" name="choice" value="B"> Option B
    </label>
    <br>
    
    <label>
      <input type="radio" name="choice" value="C"> Option C
    </label>
    <br>
    
    <label>
      <input type="radio" name="choice" value="D"> Option D
    </label>
    
    
    if name diff
    onclick se 
    <!DOCTYPE html>
    <html>
    <head>
    <title>Radio JS Control</title>
    </head>
    
    <body>
    
    <h3>Select One</h3>
    
    <label>
    <input type="radio" name="a" onclick="selectRadio(this)"> Option A
    </label>
    <br>
    
    <label>
    <input type="radio" name="b" onclick="selectRadio(this)"> Option B
    </label>
    <br>
    
    <label>
    <input type="radio" name="c" onclick="selectRadio(this)"> Option C
    </label>
    <br>
    
    <label>
    <input type="radio" name="d" onclick="selectRadio(this)"> Option D
    </label>
    
    <script>
    
    function selectRadio(selected){
    
    const radios = document.querySelectorAll('input[type="radio"]')
    
    radios.forEach(radio=>{
    radio.checked = false
    })
    
    selected.checked = true
    
    }
    
    </script>
    
    </body>
    </html>
    
    
    event listners se 
    
    <!DOCTYPE html>
    <html>
    <body>
    
    <h3>Select One</h3>
    
    <label>
    <input type="radio" name="a"> Option A
    </label>
    <br>
    
    <label>
    <input type="radio" name="b"> Option B
    </label>
    <br>
    
    <label>
    <input type="radio" name="c"> Option C
    </label>
    <br>
    
    <label>
    <input type="radio" name="d"> Option D
    </label>
    
    <script>
    
    const radios = document.querySelectorAll('input[type="radio"]');
    
    radios.forEach(radio => {
    
      radio.addEventListener("change", function(){
    
        radios.forEach(r => r.checked = false);
    
        this.checked = true;
    
      });
    
    });
    
    </script>
    
    </body>
    </html>

