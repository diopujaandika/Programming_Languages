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