/*const init = () =>{
    const c = document.getElementById('container');
  // [...c.children].forEach(el => console.log(el)); to samo
    };

    for (let i=0;i<c.children.length;i++)
    {
        console.log(c.children[i]);
    }
*/
let buffer =0;
let op=0;
let clearFlag = false;
const handleclick = e =>{
    const d =document.getElementById('display')
    const keyCode= e.target.textContent;
    console.log(keyCode);
    switch(keyCode){
        case 'C':
        d.textContent='0';
        buffer = 0;
        op=0;
        break;

        case '+':
        case '-':
            if(op === 0){
                buffer = parseFloat(d.textContent);
            }
            else{
                buffer+= op *parseFloat(d.textContent);
            }
          //  d.textContent='';
            op =keyCode=== '+' ? 1: -1;
            clearFlag = true;
        break;

        case '=':
        if(op === 0){
            buffer = parseFloat(d.textContent);
        }
        else{
            buffer+= op *parseFloat(d.textContent);
        }
        d.textContent=buffer;
        op =0;
        ;
        break;

        default:
        if(keyCode ==='0' && d.textContent==='0')return;
        if(keyCode ==='.' && d.textContent.includes('.'))return;
        if(d.textContent==='0' || clearFlag){
            d.textContent=keyCode;
            clearFlag = false;
        }
        else
            d.textContent+=keyCode;
        break;
    }

    //  d.textContent=e.target.textContent;
//  e.target.textContent="ok";
};
const fields = [
    {txt : 1 , col: 1, row:4},
    {txt : 2 , col: 2, row:4},
    {txt : 3 , col: 3, row:4},
    {txt : 4 , col: 1, row:3},
    {txt : 5, col: 2, row:3},
    {txt : 6 , col: 3, row:3},
    {txt  :7 , col: 1, row:2},
    {txt: 8 , col: 2, row:2},
    {txt : 9 , col: 3, row:2},
    {txt :0 , col: '1/3', row:5},
    {txt :'C' , col: 4, row:2},
    {txt :'+' , col: 4, row:3},
   {txt :'-' , col: 4, row:4},
   {txt :'.' , col: 3, row:5},
   {txt :'=' , col: 4, row:5},
   {txt :'display' , col: '1/5', row:1},
];
    //'7','8','9','4','5','6','1','2','3','0','.','C','+','-','='];
const init=()=>{
    const container = document.getElementById('container');
    container.id ='container';
    fields.forEach(element =>{
        console.log(element);
        let div = document.createElement('div');
        div.textContent =element.txt;
        div.style.gridColumn=element.col;
        div.style.gridRow=element.row;
        if(element.txt==='display'){
            div.id='display';
            div.textContent='0';
        }else{
            div.addEventListener('click' ,handleclick)
        };




        container.appendChild(div);
    });
    document.body.appendChild(container);
}
window.addEventListener('DOMContentLoaded',init);
