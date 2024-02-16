export const bubbleSort = (array) => {

    const animations = [] ;
    const n = array.length ;

    for (let i = 0; i < n - 1 ; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            animations.push([j , j + 1]);

            if(array[j] > array[j + 1]){

                animations.push([j, j + 1, true]);
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

    return animations ;
};

