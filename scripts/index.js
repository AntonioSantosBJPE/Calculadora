let varGlobal = {
    currentNumber: 0,
    previousNumber:0,
    previousNumberText:"",
    currentNumberText:"",
    resultCalc:0,
    validationDot:false,
    validationEqual:false
}

function createEventsBtnsNumeric(){
    let buttons = document.querySelectorAll(".btn-numeric")
    
    Array.from(buttons).forEach((element,index,array)=>{
        element.addEventListener("click", (event)=>{
              addNumberDisplay(event.target.value)
        })
    })
}

function createEventBtnDot(){
    let button = document.querySelector("#btn-dot")
    let display = document.querySelector("#display-calc")

    button.addEventListener("click", (event)=>{
        // let arrTemp = Array.from(display.innerHTML) // convertendo o texto do display em array
        // if ( !(arrTemp.includes("."))){
        //     addNumberDisplay(event.target.value)
        // }

        if (!varGlobal.validationDot){
            addNumberDisplay(event.target.value)
            varGlobal.validationDot= true
        }
    })
  
}

function createEventsBtnsOperators(){
    let buttons = document.querySelectorAll(".btn-operators")
    
    Array.from(buttons).forEach((element,index,array)=>{
        element.addEventListener("click", (event)=>{
            addOperatorDisplay(event.target.value)
            varGlobal.validationEqual=false
        })
    })
}

function createEventsExtraButtons(){

    let display = document.querySelector("#display-calc")

    let btnDel = document.querySelector("#btn-del")
    let btnReset = document.querySelector("#btn-reset")
    let btnEqual = document.querySelector("#btn-equal")

    btnDel.addEventListener("click", (event)=>{
    
        let arrTemp = Array.from(display.innerHTML) // convertendo o texto do display em array
        
        if (arrTemp[arrTemp.length-1] === "+" || arrTemp[arrTemp.length-1] === "-" || arrTemp[arrTemp.length-1] === "/" || arrTemp[arrTemp.length-1] === "x" ){
            varGlobal.validationDot= true
        } else if( arrTemp[arrTemp.length-1] === "."){
            varGlobal.validationDot= false
        }
        arrTemp.pop() // apagando o ultimo indice do array
        display.innerHTML = arrTemp.join("") // transformando o array em string e enviando para o display

    })

    btnReset.addEventListener("click", (event)=>{
        display.innerHTML = ""
        varGlobal.currentNumber = 0
        varGlobal.previousNumber = 0
        varGlobal.previousNumberText =""
        varGlobal.currentNumberText =""
        varGlobal.resultCalc = 0
        varGlobal.validationDot= false
        varGlobal.validationEqual=false
    })

    btnEqual.addEventListener("click", (event)=>{
    
        let arrTemp = Array.from(display.innerHTML)
        arrTemp.splice(0,varGlobal.previousNumberText.length)
        varGlobal.currentNumberText=arrTemp.join("")
        varGlobal.currentNumber = Number(varGlobal.currentNumberText)
       
      if(!varGlobal.validationEqual){
        if (varGlobal.previousNumberText[varGlobal.previousNumberText.length-1]==="+"){
            varGlobal.resultCalc = varGlobal.previousNumber + varGlobal.currentNumber
            display.innerHTML = `${varGlobal.resultCalc}`
    
            testDot()
            varGlobal.validationEqual=true
            
           } else if (varGlobal.previousNumberText[varGlobal.previousNumberText.length-1]==="-"){
            varGlobal.resultCalc = varGlobal.previousNumber - varGlobal.currentNumber
            display.innerHTML = `${varGlobal.resultCalc}`
    
            testDot()
            varGlobal.validationEqual=true
           }else if (varGlobal.previousNumberText[varGlobal.previousNumberText.length-1]==="/"){
            varGlobal.resultCalc = varGlobal.previousNumber / varGlobal.currentNumber
            display.innerHTML = `${varGlobal.resultCalc}`
            
            testDot()
            varGlobal.validationEqual=true
           }else if (varGlobal.previousNumberText[varGlobal.previousNumberText.length-1]==="x"){
            varGlobal.resultCalc = varGlobal.previousNumber * varGlobal.currentNumber
            display.innerHTML = `${varGlobal.resultCalc}`
    
            testDot()
            varGlobal.validationEqual=true
           }
      }

    })

    
}

function addOperatorDisplay(operator){
    let display = document.querySelector("#display-calc")
    
    let arrTemp = Array.from(display.innerHTML) // convertendo o texto do display em array
    let arrOperators = ["+","-","/","x"]
    let existOperator = false

    arrOperators.forEach((element, index, array)=>{ 
        if ( arrTemp.includes(element)){
            existOperator = true
        }
    })
    
    if (!existOperator){
        varGlobal.previousNumber=Number(display.innerHTML)
        display.innerHTML += operator
        varGlobal.previousNumberText=display.innerHTML
        varGlobal.validationDot= false
    }


   // display.innerHTML = arrTemp.join("") // transformando o array em string e enviando para o display
}


function addNumberDisplay(value){
    let display = document.querySelector("#display-calc")
    display.innerHTML += value
}


function testDot(){
   
    let display = document.querySelector("#display-calc")

    let arr = Array.from(display.innerHTML) // convertendo o texto do display em array
            if ( (arr.includes("."))){
                varGlobal.validationDot= true
            } else{
                varGlobal.validationDot= false
            }

}

function createEventsThemes(){
    let themeLeft = document.querySelector(".box-selected-theme-left")
    let themeCenter = document.querySelector(".box-selected-theme-center")
    let themeRight = document.querySelector(".box-selected-theme-right")
    let html = document.querySelector("html")
    
    themeLeft.addEventListener("click",(event)=>{
        if (themeLeft.classList.contains("bg-color-brand-1")){

            }else{
                themeLeft.classList.toggle("bg-color-brand-1")

                if (themeCenter.classList.contains("bg-color-brand-1")){
                    themeCenter.classList.toggle("bg-color-brand-1")
                }

                if (themeRight.classList.contains("bg-color-brand-1")){
                    themeRight.classList.toggle("bg-color-brand-1")
                }

            }

            if (html.classList.contains("theme-2") ){
                html.classList.toggle("theme-2")
                html.classList.toggle("theme-1")
            } else if(html.classList.contains("theme-3")){
                html.classList.toggle("theme-3")
                html.classList.toggle("theme-1")
            }
            


    })

    themeCenter.addEventListener("click", (event)=>{
        if (themeCenter.classList.contains("bg-color-brand-1")){

        }else{
            themeCenter.classList.toggle("bg-color-brand-1")

            if (themeLeft.classList.contains("bg-color-brand-1")){
                themeLeft.classList.toggle("bg-color-brand-1")
            }

            if (themeRight.classList.contains("bg-color-brand-1")){
                themeRight.classList.toggle("bg-color-brand-1")
            }

        }

        if (html.classList.contains("theme-1") ){
            html.classList.toggle("theme-1")
            html.classList.toggle("theme-2")
        } else if(html.classList.contains("theme-3")){
            html.classList.toggle("theme-3")
            html.classList.toggle("theme-2")
        }
    })

    themeRight.addEventListener("click", (event)=>{
        if (themeRight.classList.contains("bg-color-brand-1")){

        }else{
            themeRight.classList.toggle("bg-color-brand-1")

            if (themeLeft.classList.contains("bg-color-brand-1")){
                themeLeft.classList.toggle("bg-color-brand-1")
            }

            if (themeCenter.classList.contains("bg-color-brand-1")){
                themeCenter.classList.toggle("bg-color-brand-1")
            }
        }

        if (html.classList.contains("theme-1") ){
            html.classList.toggle("theme-1")
            html.classList.toggle("theme-3")
        } else if(html.classList.contains("theme-2")){
            html.classList.toggle("theme-2")
            html.classList.toggle("theme-3")
        }



    })


}



window.addEventListener("DOMContentLoaded", ()=>{
    createEventsBtnsNumeric()
    createEventsBtnsOperators()
    createEventBtnDot()
    createEventsExtraButtons()
    createEventsThemes()
})