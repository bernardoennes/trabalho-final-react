import {useState } from 'react'
import axios from 'axios';
import { Loading } from '../../elements/Loading/loading';
import styles from './createAccountPage.module.css'
import { Link } from 'react-router-dom';
import { CadastroRealizado } from './cardCadastroRealizado/cadastroRealizado';

const urlApi = 'http://localhost:8080/clientes';

export function Cadastrar(){

    //post na api
    async function PostApi(obj) {
        try {

            setLoading(true)

            const response = await axios.post(urlApi, obj, {
                headers: {
                    "Content-Type": "application/json"
                }
            })

            console.log(response.status)
            
            if(response.status === 201 || response.status === 200){
                //card com confirmação
                return(
                    <CadastroRealizado nome={userObj.nome} email={userObj.email}/>
                )
                
            }
            else{
                alert("Não funfou :(")
            }

        } 
        catch (error) {
            console.error("Erro ao cadastrar:", error.response?.data || error.message);
            alert("Erro ao cadastrar. Verifique os dados.");
        }
        finally {
            setLoading(false); // <-- encerra o loading sempre
        }
        
    
    }   

    //loading
    const [loading, setLoading] = useState(false);

    // Criar os campos a serem preenchidos
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cep, setCep] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');

    const userObj = {
        "nome": nome,
        "email": email,
        "telefone": telefone,
        "cep": cep,
        "cpf": cpf,
        "senha": senha,
        "confirmaSenha": confirmaSenha
    }

    function handleSubmit(e){
        e.preventDefault();

        if (senha !== confirmaSenha) {
            alert("As senhas não coincidem.");
            return;
        }
        
        //test com alert
        //alert(`${nome}\n${email}\n${cpf}\n${telefone}\n${cep}\n${senha}\n${confirmaSenha}\n`) 

        //chamar a funcção da api
        PostApi(userObj)
        
    }

    if(loading){
        return(
            <Loading/>
        )
    }

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
                        required
                    />
                </label>
                <br/>

                <label>
                    Email
                    <input
                        type="email"
                        placeholder="Insira seu email"
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                        required
                    />
                </label>
                <br/>

                <label>
                    CPF
                    <input
                        type="text"
                        placeholder="Insira seu CFP"
                        value={cpf}
                        onChange={(e)=> setCpf(e.target.value)}
                        required
                    />
                </label>
                <br/>

                <label>
                    Telefone
                    <input
                        type="text"
                        placeholder= "Insira seu telefone"
                        value={telefone}
                        onChange={(e)=> setTelefone(e.target.value)}
                        required
                    />
                </label>
                <br/>

                <label>
                    CEP
                    <input
                        type="text"
                        placeholder= "Insira seu CEP"
                        value={cep}
                        onChange={(e)=> setCep(e.target.value)}
                        required
                    />
                </label>
                <br/>

                <label>
                    Senha
                    <input
                        type="password"
                        placeholder= "Insira uma senha"
                        value={senha}
                        onChange={(e)=> setSenha(e.target.value)}
                        required
                    />
                </label>
                <br/>

                <label>
                    Confirme a Senha
                    <input
                        type="password"
                        placeholder= "Informe a mesma senha"
                        value={confirmaSenha}
                        onChange={(e)=> setConfirmaSenha(e.target.value)}
                        required
                    />
                </label>
                <br/>

                <button type="submit">Cadastrar</button>
                
            </form>
            {/* <div>
                <p>
                    Já possui um cadastro?
                    <Link to="/login"> 
                        Clique aqui para Logar!
                    </Link>
                </p>
            </div> */}
        </div>
    )

    
}