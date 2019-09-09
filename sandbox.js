  const para = document.querySelector('p');
  console.log(para);

  const para1 = document.querySelector('.error');
  console.log(para1);

  const para2 = document.querySelector('div.error');
  console.log(para2);

  const paras = document.querySelectorAll('p');
  console.log(paras[0]);

  paras.forEach(para => {
      console.log(para);
  });

  const errors = document.querySelectorAll('.error');
  console.log(errors);