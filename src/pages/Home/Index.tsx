import { useContext } from 'react'
import { NewCicleForm } from './NewCicleForm'
import { Countdown } from './CountDown'
import { Play, Stop } from '@phosphor-icons/react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import zod from 'zod'
import {
  HomeContainer,
  StartCountDownButton,
  StopCountDownButton,
} from './style'
import { CyclesContext } from '../../contexts/CyclesContext'

/*
import React from 'react'// Isso é um nameSpace uma maneira de importar tudo desse arquivo 'react' centralizado na palavra React 
*/

// Controled vs Uncontroled

/*
  Controled: São campos de input onde o react controla esses elementos diretamente.O estado do componente é alterado conforme o usuário faz alterações na minha enntrada de dados.

  Uncontroled: São componentes que são gerenciados pela propria DOM ao invés do React
*/

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(5, 'O ciclo precisa de no minimo 5 minutos')
    .max(60, 'O ciclo precisa de no maximo 60 minutos'),
})

type NewCycleForm = zod.infer<typeof newCycleFormValidationSchema>

// interface Cycle {
//   id: string
//   task: string
//   minutesAmount: number
//   startDate: Date
//   interruptedDate?: Date
//   finishedDate?: Date
// }

export function Home() {
  const { createNewCycle, interruptCurrentCycle, activeCycle } =
    useContext(CyclesContext)
  const newCycleForm = useForm<NewCycleForm>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { handleSubmit, watch, reset } = newCycleForm

  function handleCreateNewCycle(data: NewCycleForm) {
    createNewCycle(data)
    reset()
  }

  const task = watch('task')
  const isSubmitDisabled = !task // 'Vendo se tem algo dentro da task'

  /*
   *Pop Drilling -> Quando a gente tem muitas propriedades apenas para comunicação entre componentes
   *Context API -> Permite partilhar informações entre varios componentes ao mesmo tempo
   
  */

  return (
    <HomeContainer>
      <form action="" onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCicleForm />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <StopCountDownButton onClick={interruptCurrentCycle} type="button">
            <Stop size={24} />
            interromper
          </StopCountDownButton>
        ) : (
          <StartCountDownButton type="submit" disabled={isSubmitDisabled}>
            <Play size={24} />
            Começar
          </StartCountDownButton>
        )}
      </form>
    </HomeContainer>
  )
}
