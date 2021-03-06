function createBox(){
  let masterbox = document.createElement('div');
  masterbox.id = "masterbox";

  let box1 = document.createElement('div');
  box1.id = "box1";

  let box2 = document.createElement('div');
  box2.id = "box2";

  let box3 = document.createElement('div');
  box3.id = "box3";

  let p1 = document.createElement('p');
  p1.id = "p1";

  let p2 = document.createElement('p');
  p2.id = "p2";

  let p3 = document.createElement('p');
  p3.id = "p3";

  let input1 = document.createElement('input');
  input1.id = "input1";

  let button1 = document.createElement('button');
  button1.id = 'button1';
  button1.textContent = "RUN";

  masterbox.append(box1);
  masterbox.append(box2);
  masterbox.append(box3);
  box1.append(p3);
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
p3.append('NAZWA FUNKCJI');
button1.addEventListener('click', event => {p2.innerHTML = stringy(input1.value)});
