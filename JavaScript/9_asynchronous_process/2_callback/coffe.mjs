export function makeCoffe(callback) {
    const estimationTime = 5000;

    const inSecond = Math.ceil(estimationTime/1000);
    console.log(`Mohon menunggu. Peramusaji sedang membuat kopi dalam ${inSecond} detik`);

    setTimeout(() => {
        // Do Some Taks To Make Coffe...
        console.log('Pramusaji selesai membuat kopi.');

        callback();
    }, estimationTime);
}

export function sendCoffee(callback) {
    const estimationTime = 2000;

    console.log('Pramusaji sendang mengatarkan kopi pesanan');

    setTimeout(() => {
        // Do some tasks to send coffee...

        console.log('Pramusaji sudah samapi ke meja.');
        callback();
    }, estimationTime);
}