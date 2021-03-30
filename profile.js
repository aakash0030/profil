
var categoryitem=document.querySelectorAll('.categoryitem');
var activecat=document.querySelectorAll('.activecat');
var cath=document.querySelectorAll('.cath');
function fun(pos)
{
  for(var i=0;i<categoryitem.length;i++)
    {
     categoryitem[i].style.display= "none";
     cath[i].classList.remove('activecat');
     }
  categoryitem[pos].style.display= "block";
  cath[pos].classList.add('activecat');
}