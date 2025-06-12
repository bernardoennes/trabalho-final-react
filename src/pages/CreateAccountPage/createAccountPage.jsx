import {useState } from 'react'

export function Cadastrar(){
    // Criar os campos a serem preenchidos
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cep, setCep] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');

    function handleSubmit(e){
        e.preventDefault();

        
        alert(`${nome}\n${email}\n${cpf}\n${telefone}\n${cep}\n${senha}\n${confirmaSenha}\n`) //test com alert
        //chamar a funcção da api
    }

    //passar no return...
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Cadastro</h1>

                <label>
                    Nome
                    <input
                        type="text"
                        placeholder="Insira seu nome"
                        value={nome}
                        onChange={(e)=> setNome(e.target.value)}
                    />
                </label>

                <label>
                    Email
                    <input
                        type="email"
                        placeholder="Insira seu email"
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                    />
                </label>

                <label>
                    CPF
                    <input
                        type="text"
                        placeholder="Insira seu CFP"
                        value={cpf}
                        onChange={(e)=> setCpf(e.target.value)}
                    />
                </label>

                <label>
                    Telefone
                    <input
                        type="text"
                        placeholder= "Insira seu telefone"
                        value={telefone}
                        onChange={(e)=> setTelefone(e.target.value)}
                    />
                </label>

                <label>
                    CEP
                    <input
                        type="text"
                        placeholder= "Insira seu CEP"
                        value={cep}
                        onChange={(e)=> setCep(e.target.value)}
                    />
                </label>

                <label>
                    Senha
                    <input
                        type="password"
                        placeholder= "Insira uma senha"
                        value={senha}
                        onChange={(e)=> setSenha(e.target.value)}
                    />
                </label>

                <label>
                    Confirme a Senha
                    <input
                        type="password"
                        placeholder= "Informe a mesma senha"
                        value={confirmaSenha}
                        onChange={(e)=> setConfirmaSenha(e.target.value)}
                    />
                </label>

                <button type="submit">Cadastrar</button>
                
            </form>
        </div>
    )

    // Criar funcção asíncrona q envia os dados para a Api
    // Devolver uma resposta para o user e enviar ele para a pág. de Login(Karen)
}