
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// You must escape any backward slashes. "\\"

let custom_text_header = `
<div class="custom-text-header"> <pre>                     __                             ___       __  
  /  _/________  / | / /   | / ___/
   / // ___/ __ \/  |/ / /| | \__ \ 
 _/ // /  / /_/ / /|  / ___ |___/ / 
/___/_/   \____/_/ |_/_/  |_/____/  
                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
