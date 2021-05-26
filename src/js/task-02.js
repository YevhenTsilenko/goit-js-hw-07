const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
  const ulElement = document.querySelector('#ingredients');
  const liElements = ingredients.map((ingredient) => {
      const liElement = document.createElement('li');
      liElement.textContent = ingredient;
      return liElement;
  });

  ulElement.append(...liElements);
