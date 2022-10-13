import { Envelope, Lock } from 'phosphor-react'
import { Button } from './components/Button'
import { Checkbox } from './components/Checkbox'
import { Heading } from './components/Heading'
import { Text } from './components/Text'
import { TextInput } from './components/TextInput'
import './styles/global.css'
import { Logo } from './styles/logo'

export function App() {
  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <Logo />
        <Heading size="lg" className="text-gray-100 mt-4">
          Ignite Lab
        </Heading>

        <Text size="lg" className="text-gray-400 mt-1">
          {' '}
          Faça login é comece a usar!
        </Text>
      </header>
      <form className="flex flex-col items-stretch mt-10 w-full max-w-sm">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold " size="sm">
            Endereço de e-mail
          </Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input
              type="email"
              id="email"
              placeholder="Digite seu E-mail!"
            />
          </TextInput.Root>
        </label>
        <label htmlFor="password" className="flex flex-col gap-3 mt-6">
          <Text className="font-semibold " size="sm">
            Sua Senha
          </Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input
              type="password"
              id="password"
              placeholder="*******"
            />
          </TextInput.Root>
        </label>
        <label htmlFor="remember" className=" flex gap-2 mt-4">
          <Checkbox id="remember" />
          <Text className="text-gray-200" size="sm">
            Lembrar-me por 30 dias!
          </Text>
        </label>
        <Button className="mt-7" type="submit">
          Entrar na plataforma
        </Button>
      </form>
      <footer className="mt-8 flex flex-col justify-center items-center gap-4">
        <a
          href=""
          className=" underline text-gray-400 text-sm hover:text-gray-200"
        >
          Esqueceu sua senha?
        </a>
        <a
          href=""
          className="underline text-gray-400 text-sm hover:text-gray-200"
        >
          Não possui conta? Crie uma agora!
        </a>
      </footer>
    </div>
  )
}
