const arr = [1, 2, 3, 4, 5, 6, 7];
function removeElement (array, item) {
        return array.filter((elem) => {
                if (elem !== item) {
                        return elem;
                }
        });
};
console.log(removeElement(arr, 5));