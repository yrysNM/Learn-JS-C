const findFrequencies = (str) => {
    const listArr = str.split(" ").filter(item => parseInt(item));
    console.log(listArr);
    const obj = {};
    for (let i = 0; i < listArr.length; i++) {
        const currentArr = listArr[i];
        if (currentArr != null) {
            if (!obj[currentArr]) {
                obj[currentArr] = 1;
            } else {
                obj[currentArr]++;
            }
        }
    }
    return obj;
}

const str = `405 510 520 880 820 780 810 405
555
790 505 610 620 650 680 350 530
495
480 695 610 710 810 525 530 680
705
370 760 590 705 300 590 390 460
590
450 540 690 480 420 410 595 750
620
850 585 690 570 560`;
console.log(findFrequencies(str));