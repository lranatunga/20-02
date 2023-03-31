const forms = document.querySelectorAll("form");

forms.forEach((form) =>
  form.addEventListener("submit", (e) => e.preventDefault())
);

// Here are all DOM elements you need

const resultsDiv = document.querySelector(".results");
const keyInput = document.querySelector(".key");
const valueInput = document.querySelector(".value");
const removeInput = document.querySelector(".remove");
const storeBtn = document.querySelector(".store");
const showBtn = document.querySelector(".show");
const clearOneBtn = document.querySelector(".clearOne");
const clearAllBtn = document.querySelector(".clearAll");

// Add your code below
storeBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const keys = JSON.parse(localStorage.getItem("keys")) || { 
    keyEntered: [] 
  };
  // console.log(keys)
  const keyName = keyInput.value;
  keys.keyEntered.push(keyName);
  const values = JSON.parse(localStorage.getItem("values")) || {
    valueEntered: []
  };
  const valueEnter = valueInput.value;
  values.valueEntered.push(valueEnter);
  localStorage.setItem("keys", JSON.stringify(keys));
  localStorage.setItem("values", JSON.stringify(values));
});

clearOneBtn.addEventListener('click', function (event){
  event.preventDefault();
  const removeItems = removeInput.value;
  const storedData = JSON.parse(localStorage.getItem('keys'))
  const keyArray = storedData['keyEntered']
  for(let i = 0; i < keyArray.length; i++)
    if (removeItems === keyArray[i]){
      keyArray.splice(i, 1)
      localStorage.setItem('keys', JSON.stringify(storedData))
    }
  
})

showBtn.addEventListener('click', function(event){
  event.preventDefault();
  const dataLocal = Object.keys(localStorage)
  const localData = {};
  for (let i = 0; i < dataLocal.length; i++){
    localData[dataLocal[i]] = JSON.parse(localStorage.getItem(dataLocal[i]))
  }
 resultsDiv.textContent = JSON.stringify(localData)
})



clearAllBtn.addEventListener('click', function(event){
  event.preventDefault();
  localStorage.clear();
})
