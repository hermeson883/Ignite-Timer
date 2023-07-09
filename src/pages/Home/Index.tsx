import { Play } from '@phosphor-icons/react'
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmount,
  Separator,
  StartCountDownButton,
  TaskInput,
} from './style'

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            placeholder="Dê um nome ao projeto"
            list="task-suggestion"
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
            min={5}
          />
          <span>Minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountDownButton type="submit" disabled>
          <Play />
          Começar
        </StartCountDownButton>
      </form>
    </HomeContainer>
  )
}
