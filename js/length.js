function lengthConverter(unit ,valNum) {
    valNum = parseFloat(valNum);

    const inputInches = document.getElementById("inputInches");
    const inputFeet = document.getElementById("inputFeet");
    const inputYards = document.getElementById("inputYards");
    const inputMiles = document.getElementById("inputMiles");
    const inputMillimeters = document.getElementById("inputMillimeters");
    const inputCentimeters = document.getElementById("inputCentimeters");
    const inputMeters = document.getElementById("inputMeters");
    const inputKilometers = document.getElementById("inputKilometers");

    if (unit === "inputInches") {
        inputFeet.value=(valNum * 0.083333).toFixed(3);
        inputYards.value=(valNum * 0.027778).toFixed(3);
        inputMiles.value=(valNum * 0.000015783).toFixed(6);
        inputMillimeters.value=(valNum / 0.039370).toFixed();
        inputCentimeters.value=(valNum / 0.39370).toFixed(1);
        inputMeters.value=(valNum / 39.370).toFixed(3);
        inputKilometers.value=(valNum / 39370).toFixed(6);
    }
    if (unit === "inputFeet") {
        inputInches.value=(valNum * 12).toFixed(2);
        inputYards.value=(valNum * 0.33333).toFixed(2);
        inputMiles.value=(valNum * 0.00018939).toFixed(5);
        inputMillimeters.value=(valNum / 0.0032808).toFixed();
        inputCentimeters.value=(valNum / 0.032808).toFixed(1);
        inputMeters.value=(valNum / 3.2808).toFixed(2);
        inputKilometers.value=(valNum / 3280.8).toFixed(5);
    }
    if (unit === "inputYards") {
        inputInches.value=(valNum * 36).toFixed();
        inputFeet.value=(valNum * 3).toFixed();
        inputMiles.value=(valNum * 0.00056818).toFixed(5);
        inputMillimeters.value=(valNum / 0.0010936).toFixed();
        inputCentimeters.value=(valNum / 0.010936).toFixed(1);
        inputMeters.value=(valNum / 1.0936).toFixed(2);
        inputKilometers.value=(valNum / 1093.6).toFixed(5);
    }
    if (unit === "inputMiles") {
        inputInches.value=(valNum * 63360).toFixed();
        inputFeet.value=(valNum * 5280).toFixed();
        inputYards.value=(valNum * 1760).toFixed();
        inputMillimeters.value=(valNum / 0.00000062137).toFixed();
        inputCentimeters.value=(valNum / 0.0000062137).toFixed(1);
        inputMeters.value=(valNum / 0.00062137).toFixed();
        inputKilometers.value=(valNum / 0.62137).toFixed(2);
    }
    if (unit === "inputMillimeters") {
        inputInches.value=(valNum * 0.039370).toFixed(3);
        inputFeet.value=(valNum * 0.0032808).toFixed(4);
        inputYards.value=(valNum * 0.0010936).toFixed(4);
        inputMiles.value=(valNum * 0.00000062137).toFixed(7);
        inputCentimeters.value=(valNum / 10).toFixed(2);
        inputMeters.value=(valNum / 1000).toFixed(3);
        inputKilometers.value=(valNum / 1000000).toFixed(6);
    }
    if (unit === "inputCentimeters") {
        inputInches.value=(valNum * 0.39370).toFixed(2);
        inputFeet.value=(valNum * 0.032808).toFixed(3);
        inputYards.value=(valNum * 0.010936).toFixed(3);
        inputMiles.value=(valNum * 0.0000062137).toFixed(6);
        inputMillimeters.value=(valNum * 10).toFixed();
        inputMeters.value=(valNum / 100).toFixed(3);
        inputKilometers.value=(valNum / 100000).toFixed(6);
    }
    if (unit === "inputMeters") {
        inputInches.value=(valNum * 39.370).toFixed(2);
        inputFeet.value=(valNum * 3.2808).toFixed(2);
        inputYards.value=(valNum * 1.0936).toFixed(2);
        inputMiles.value=(valNum * 0.00062137).toFixed(5);
        inputMillimeters.value=(valNum * 1000).toFixed();
        inputCentimeters.value=(valNum / 0.01).toFixed();
        inputKilometers.value=(valNum / 1000).toFixed(5);
    }
    if (unit === "inputKilometers") {
        inputInches.value=(valNum * 39370).toFixed();
        inputFeet.value=(valNum * 3280.8).toFixed();
        inputYards.value=(valNum * 1093.6).toFixed();
        inputMiles.value=(valNum * 0.62137).toFixed(2);
        inputMillimeters.value=(valNum * 1000000).toFixed();
        inputCentimeters.value=(valNum * 100000).toFixed();
        inputMeters.value=(valNum * 1000).toFixed();
    }
}