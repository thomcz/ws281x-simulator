 function LedGenerator(count) {
    const initialLeds = [];

    for (let i=0; i < count; i++) {
        initialLeds.push(
            {
                ledId: `${i}`, 
                
                color: "#000"
            }
        )
    }
    return initialLeds;
}

exports.LedGenerator = LedGenerator