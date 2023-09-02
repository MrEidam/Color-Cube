/*function CColor(color){
    document.querySelectorAll('.side').forEach((element) => {
        element.style.background = 
        'linear-gradient(to bottom, #151515, '+color+')';
    });
    document.getElementById('top').style.setProperty('--color', color);

    //before.style.setProperty('--color',color)

    // active marking
    document.getElementsByClassName('cl').forEach(function(item){
        item.classList.remove('active');
    })
    event.target.classList.add('active');


    
}*/
let Shadow
function CColor(color, rgb) {
    // Change the background of elements with the class 'side'
    document.querySelectorAll('.side').forEach((element) => {
        element.style.background = 'linear-gradient(to bottom, #151515, ' + color + ')';
    });

    // Set the '--color' CSS variable on the #top element
    let before = document.getElementById('before')
    before.style.setProperty('--color', color);
    document.getElementById('after').style.setProperty('--color', color);

    /*
    // Box - Shadow
    Shadow = {
            a:`0 0 120px rgba(${rgb}0.2)`,
            b:`,0 0 200px rgba(${rgb}0.4)`,
            c:`,0 0 300px rgba(${rgb}0.6)`,
            d:`,0 0 400px rgba(${rgb}0.8)`,
            e:`,0 0 500px rgba(${rgb}1)
        ;`}
    document.getElementById('before').style.setProperty('--sh', `${Shadow.a}${Shadow.b}${Shadow.c}${Shadow.d}${Shadow.e}`);

    // Construct the box-shadow property
    const boxShadowValue = `0 0 120px rgba(${rgb}, 0.2), 0 0 200px rgba(${rgb}, 0.4), 0 0 300px rgba(${rgb}, 0.6), 0 0 400px rgba(${rgb}, 0.8), 0 0 500px rgba(${rgb}, 1)`;

    // Set the box-shadow property directly
    document.getElementById('before').style.boxShadow = boxShadowValue;*/

    // Shadow
    Shadow = `0 0 120px ${color+'33'},0 0 200px ${color+'66'},0 0 300px ${color+'99'},0 0 400px ${color+'cc'}`
    let Shadow4 = `,0 0 500px ${color};`
    before.style.boxShadow = Shadow// + Shadow4


    // Active marking
    let elementsWithClClass = document.getElementsByClassName('cl');
    Array.from(elementsWithClClass).forEach(function (item) {
        item.classList.remove('active');
    });

    event.target.classList.add('active');
    console.log(Shadow);
}
