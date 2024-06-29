function calculate() {
    let initialVolume = $("#initialVolume").val().replace(',', '.');
    let initialCon = $("#initialCon").val().replace(',', '.');
    let targetCon = $("#targetCon").val().replace(',', '.');
    let reqWater = $("#reqWater");
    let finalVolume = $("#finalVolume");


    console.log(initialVolume);
    console.log(initialCon);
    console.log(targetCon);

    if (initialCon > targetCon) {
        let reqWaterCalc = ((initialVolume * initialCon / 100) - (initialVolume * targetCon) / 100)/(targetCon / 100);
        let finalVolumeCalc = parseFloat(reqWaterCalc) + parseFloat(initialVolume);
        reqWater.val(reqWaterCalc.toFixed(2));
        finalVolume.val(finalVolumeCalc.toFixed(2));
        $("#label").text("Szükséges higító anyag [liter]");
    } else if (initialCon < targetCon) {
        let reqWaterCalc = (initialVolume * targetCon / 100 - initialVolume * initialCon / 100) / (1 - initialVolume / 100);
        let finalVolumeCalc = parseFloat(reqWaterCalc) + parseFloat(initialVolume);
        reqWater.val(reqWaterCalc.toFixed(2));
        finalVolume.val(finalVolumeCalc.toFixed(2));
        $("#label").text("Szükséges adalék [liter]");
    };

}