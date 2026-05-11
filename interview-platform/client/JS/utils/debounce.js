export const debounce =
(fn, delay) => {

  let timer;

  return (...args) => {

    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};


searchInput.addEventListener(
  'input',

  debounce((e) => {
    console.log(e.target.value);
  }, 500)
);

