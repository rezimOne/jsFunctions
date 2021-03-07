function createBox(){
  let masterbox = document.createElement('div');
  masterbox.id = "masterbox";
  let box1 = document.createElement('div');
  box1.id = "box1";
  let navbar = document.createElement('div');
  navbar.className = 'navbar';
  let p1 = document.createElement('p');
  p1.id = "p1";
  let p2 = document.createElement('p');
  p2.id = "p2";
  let p3 = document.createElement('p');
  p3.id = "p3";
  let button1 = document.createElement('button');
  button1.id = 'button1';
  button1.textContent = "RUN";
  let input1 = document.createElement('input');
  input1.id = "input1";
  let button2 = document.createElement('button');
  button2.className = 'prev-next-btn';
  button2.textContent = '<';
  let button3 = document.createElement('button');
  button3.className = 'prev-next-btn';
  button3.textContent = '>';
  masterbox.append(box1);
  box1.append(navbar)
  navbar.append(p3);
  navbar.append(button2)
  navbar.append(button3)
  box1.append(p1);
  box1.append(input1);
  box1.append(button1);
  box1.append(p2);
  return masterbox;
}

document.body.append(createBox());

//przykładowa funkcja
function stringy(size){
  if(size%2 == 0 && size > 1){
    return'10'.repeat(size/2);
  }else{
    return 'Wrong size boy :D'
  }
}

p1.append(stringy);
p3.append('NAZWA FUNKCJI TUTAJ BĘDZIE SIĘ WYŚWIETLAĆ');
button1.addEventListener('click', event => {p2.innerHTML = stringy(input1.value)});
