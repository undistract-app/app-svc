import { useQuery } from '@tanstack/react-query'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import { api } from '@/lib/api'

function HealthStatus(): React.JSX.Element {
  const { data, isPending, isError } = useQuery({
    queryKey: ['health'],
    queryFn: async () => (await api.get<{ status: string }>('/health')).data
  })

  if (isPending) return <p className="text-muted-foreground text-sm">백엔드 확인 중...</p>
  if (isError) return <p className="text-destructive text-sm">백엔드에 연결할 수 없습니다.</p>
  return <p className="text-sm">백엔드 상태: {data.status}</p>
}

function App(): React.JSX.Element {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">OffDo</h1>
      <HealthStatus />
      <Button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>테마 전환</Button>
    </div>
  )
}

export default App
