var input = document.getElementById('input'),
    result = document.getElementById('result'),
    inputType = document.getElementById('inputType'),
    resultType = document.getElementById('resultType'),
    inputTypeValue , resultTypeValue;

input.addEventListener('keyup' , myResult)
inputType.addEventListener('change' , myResult)
resultType.addEventListener('change' , myResult)

inputTypeValue = inputType.value
resultTypeValue = resultType.value

function myResult(){
    inputTypeValue = inputType.value
    resultTypeValue = resultType.value

    if(inputTypeValue === 'm' && resultTypeValue === 'm'){
        result.value = input.value
    } else if(inputTypeValue === 'm' && resultTypeValue === 'cm'){
        result.value = Number(input.value) * 100
    } else if(inputTypeValue === 'm' && resultTypeValue === 'in'){
        result.value = (Number(input.value) * 39.37).toFixed(3)
    } else if(inputTypeValue === 'm' && resultTypeValue === 'ft'){
        result.value = (Number(input.value) * 3.281).toFixed(3)
    }

    if(inputTypeValue === 'cm' && resultTypeValue === 'cm'){
        result.value = input.value
    } else if(inputTypeValue === 'cm' && resultTypeValue === 'm'){
        result.value = Number(input.value) * 100
    } else if(inputTypeValue === 'cm' && resultTypeValue === 'in'){
        result.value = (Number(input.value) / 2.54).toFixed(3)
    } else if(inputTypeValue === 'cm' && resultTypeValue === 'ft'){
        result.value = (Number(input.value) / 30.48).toFixed(3)
    }

    if(inputTypeValue === 'in' && resultTypeValue === 'in'){
        result.value = input.value
    } else if(inputTypeValue === 'in' && resultTypeValue === 'm'){
        result.value = (Number(input.value) / 39.37).toFixed(3)
    } else if(inputTypeValue === 'in' && resultTypeValue === 'cm'){
        result.value = (Number(input.value) * 2.54).toFixed(3)
    } else if(inputTypeValue === 'in' && resultTypeValue === 'ft'){
        result.value = (Number(input.value) / 12).toFixed(3)
    }

    if(inputTypeValue === 'ft' && resultTypeValue === 'ft'){
        result.value = input.value
    } else if(inputTypeValue === 'ft' && resultTypeValue === 'm'){
        result.value = (Number(input.value) / 3.281).toFixed(3)
    } else if(inputTypeValue === 'ft' && resultTypeValue === 'cm'){
        result.value = (Number(input.value) * 30.48).toFixed(3)
    } else if(inputTypeValue === 'ft' && resultTypeValue === 'in'){
        result.value = (Number(input.value) * 12).toFixed(3)
    }
    
}