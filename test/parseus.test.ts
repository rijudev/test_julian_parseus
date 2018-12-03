import Parser, { Field } from '../src'
import { unmatchType } from '../src/helpers/utils'

class Eligibility {
  @Field({
    isVirtual: true,
    type: 'unique'
  })
  key: string

  @Field({
    name: 'patient_eligibility_list_group_id'
  })
  groupId: number
}

class Patient {
  @Field({
    isVirtual: true,
    type: 'unique'
  })
  key: string

  @Field({
    name: 'patient_id'
  })
  id: number

  @Field({
    name: 'patient_patient_num'
  })
  patientNum: string

  @Field({
    name: 'patient_mod_start_date',
    readOnly: true
  })
  modStartDate: string

  @Field({
    name: 'patient_patient_eligibility_list',
    model: Eligibility
  })
  eligibilities: Eligibility[]

  @Field({
    name: 'patient_eligibility'
  })
  eligibility: Eligibility

  @Field({
    name: 'patient_decimal_value',
    fixed: 3,
    type: 'decimal'
  })
  decimalValue: number
}

const data = {
  patient_id: '1',
  patient_patient_num: 'TEST01',
  patient_decimal_value: 0.1234123,
  patient_mod_start_date: '2018-11-30T16:03:39.823571Z',
  patient_patient_eligibility_list: [
    {
      patient_eligibility_list_group_id: 2
    },
    {
      patient_eligibility_list_group_id: 2
    }
  ],
  patient_eligibility: {
    patient_eligibility_list_group_id: 1
  }
}

describe(`Parseus[payload]`, () => {
  test('should work using to ', () => {
    const PatientParser = Parser(Patient)

    let startDate = new Date().getMilliseconds()
    const marshall = Parser(Patient).to(data)
    let endDate = new Date().getMilliseconds()
    console.log(`Object unmarshalled in ${endDate - startDate} ms`)

    const nstart = new Date().getMilliseconds()
    const unmarshall = Parser(Patient).to(data)
    // const marshall = Parser(Patient).to(data)
    const enddate = new Date().getMilliseconds()
    console.log(`Object unmarshalled in ${enddate - nstart} ms`)

    console.log(marshall)
    console.log(unmarshall)
  })

  // test('should work using from ', () => {
  //   let startDate = new Date().getMilliseconds()
  //   const patient = Parser(Patient).from(data)
  //   console.log(patient)
  //   let endDate = new Date().getMilliseconds()
  //   console.log(`Object unmarshalled in ${endDate - startDate} ms`)
  // })
})
