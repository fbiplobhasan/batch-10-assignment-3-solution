// 50জন যাত্রী যাবে বাসে,15জন মাইক্রোতে,বাকি থাকলে কতজন থাকলো প্রতিজনের রিক্সাভাড়া ২০ টাকা দরে হিসাব বাহির করা।

function rikshawVara(peoples) {
    const bus = 50;
    const micro = 15;
    const rikshawCost = 20;
    
    const remainAfterBus = peoples % bus;
    const remainAfterMicro = remainAfterBus % micro;
    return remainAfterMicro * rikshawCost;
}


console.log(rikshawVara(234));