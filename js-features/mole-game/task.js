let success = document.getElementById("dead");
let miss = document.getElementById("lost");

function getHole( index ) {
    document.getElementById(`hole${index}`).onclick = function() {
        if (document.getElementById(`hole${index}`).classList.contains('hole_has-mole')) {
            let numSuccess = Number(success.textContent);
            numSuccess++;
            success.textContent = numSuccess;
            if (success.textContent == 10) {
                alert('Победа!!!');
                success.textContent = 0;
            }
        }else {
            let numMiss = Number(miss.textContent);
            numMiss++;
            miss.textContent = numMiss;
            if (miss.textContent == 5) {
                alert('Вы проиграли.');
                miss.textContent = 0;
            }            
        }

    }  
}

for (let i = 1; i < 10; i++) {
    getHole(i);
}