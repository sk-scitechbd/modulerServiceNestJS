import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class AppService {
  async getHello() : Promise<any> {
    let parsedJsonData
    let inputOne = 1, inpuptTwo = 1
    let output: any = null
    console.log("fsdfsdf");
   
    let data = fs.readFileSync('./search_rules.json', 'utf8')
      // if (error) {
      //   console.log(`ERROR: ${error}`)
      //   return
      // }

      parsedJsonData = JSON.parse(data)
      // console.log(`rules: ${JSON.stringify(data)}`)

      parsedJsonData.run.forEach(data => {
        if (data.rule === "addition") {
          output = addition(inputOne, inpuptTwo)
          console.log({ result: output, rule: data })
        }
        if (data.rule === "subtraction") {
          output = subtraction(inputOne, inpuptTwo)
          console.log({ result: output, rule: data })
        }
        if (data.rule === "multiplication") {
          output = multiplication(inputOne, inpuptTwo)
          console.log({ result: output, rule: data })
        }
        if (data.rule === "divide") {
          output = divide(inputOne, inpuptTwo)
          console.log({ result: output, rule: data })
        }
      })


      parsedJsonData.result = output
      console.log(JSON.stringify(parsedJsonData))
    // })
    console.log("fsdfsdf 2");
   
    return parsedJsonData;
  }
}

function addition(param1: number, param2: number): number {
  const result = param1 + param2
  return result
}

function subtraction(param1: number, param2: number): number {
  const result = param1 - param2
  return result
}

function multiplication(param1: number, param2: number): number {
  const result = param1 * param2
  return result
}

function divide(param1: number, param2: number): number {
  const result = param1 / param2
  return result
}