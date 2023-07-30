import { FormContainer, TaskInput, MinutesAmount } from '../NewCicleForm/style'
import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../contexts/CiclesContext'

export function NewCicleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        placeholder="Dê um nome ao projeto"
        list="task-suggestion"
        {...register('task')} // Retornando todos os minutos de task(input)
        disabled={!!activeCycle}
      />

      <datalist id="task-suggestion">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
        <option value="Projeto 3" />
        <option value="Projeto 4" />
      </datalist>

      <label htmlFor="minutesAmount">Durante</label>
      <MinutesAmount
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={5}
        max={60}
        min={1}
        {...register('minutesAmount', { valueAsNumber: true })} // Retornando todos os minutos de minuteAmount(input)
        disabled={!!activeCycle}
      />
      <span>Minutos.</span>
    </FormContainer>
  )
}
