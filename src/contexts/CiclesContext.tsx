import { ReactNode, createContext, useState } from 'react'

interface CreateCycleData {
  task: string
  minutesAmount: number
}

interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface CyclesContextType {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amountSecondsPass: number
  markCurrentCycleAsFinished: () => void
  setSecondsPassed: (seconds: number) => void
  createNewCycle: (data: CreateCycleData) => void
  interruptCurrentCycle: () => void
}

export const CyclesContext = createContext({} as CyclesContextType)

interface CyclesContextProviderProps {
  children: ReactNode // tudo que estiver aninhado nos componentes do react tem que possuir um react node
}

export function CyclesContextProvider({
  children,
}: CyclesContextProviderProps) {
  const [cycles, setCycle] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPass, setAmountSecondsPass] = useState(0)

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPass(seconds)
  }

  function markCurrentCycleAsFinished() {
    setCycle((state) =>
      state.map((cycle) =>
        cycle.id === activeCycleId
          ? { ...cycle, finishedDate: new Date() }
          : cycle,
      ),
    )
  }

  function createNewCycle(data: CreateCycleData) {
    const newCycle: Cycle = {
      id: new Date().getTime().toString(),
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    setCycle((state) => [...state, newCycle])
    setActiveCycleId(newCycle.id)
    setAmountSecondsPass(0)
  }

  function interruptCurrentCycle() {
    setActiveCycleId(null)

    setCycle((state) =>
      state.map((cycle) =>
        cycle.id === activeCycleId
          ? { ...cycle, finishedDate: new Date() }
          : cycle,
      ),
    )
  }

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        markCurrentCycleAsFinished,
        amountSecondsPass,
        setSecondsPassed,
        createNewCycle,
        interruptCurrentCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
