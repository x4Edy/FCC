function palindrome(str) {
 //Removendo caracteres indesejados
 var rgx = /[^A-Za-z0-9]/g;
 str = str.toLowerCase().replace(rgx, '');
 //Criando o laço para validação do palindromo.
 var vlr = str.length;
 for (var x = 0; x < vlr/2; x++) {
   if (str[x] !== str[vlr - 1 - x]) {
       return false;
   }
 }
 return true;
}
palindrome("eye");
