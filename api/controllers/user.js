import {db} from "../db.js";
import axios from  "axios"
import 'dotenv/config'

export const criar_usu = (req,res) => {
    const email = req.body.email;

    const requi = "SELECT * FROM usuarios WHERE email= ?"
    db.query(requi, email , (err, data) => {
        if (err) return res.json(err)

        if (data.length > 0){
            return res.status(400).json({ erro: "Usuário já cadastrado." })
        }
            
        const q = "INSERT INTO usuarios (`nome`,`email`,`senha`) VALUES(?)";
        const dados =[
            req.body.nome,
            req.body.email,
            req.body.senha,
        ];
        db.query(q, [dados], (err) => {
            if (err) return res.json(err)
    
            return res.status(200).json("usuario criado com sucesso")
        });
    })    
};

export const pegar_usu = (_,res) => {  
    const q = "SELECT * FROM usuarios"

    db.query(q, (data,err) => {
        if (err) return res.json(err);

        return res.status(200).json(data)
    })
};

export const validar_usu = (req,res) => {
    const q = "SELECT * FROM usuarios WHERE nome = ? AND email = ? AND senha = ?";

    const usu = [
        req.body.nome,
        req.body.email,
        req.body.senha,
    ];

    db.query(q, usu, (data,err) => {
        if (err) return res.json(err);

        return res.redirect('/login');
    });
};

export const get_news = async (req,res) => {
    try{
        const query = req.query.q;

        if (!query) {
            return res.status(400).json({ error: 'Parâmetro "query" é obrigatório' });
        }

        const response = await axios.get(
          `https://factchecktools.googleapis.com/v1alpha1/claims:search`,
          {
            params: {
                key: process.env.GOOGLE_API_KEY,
                query:query,
                languageCode: 'pt-BR'
          }, 
        }
        );

        res.json(response.data)
    } catch (error) {
        console.error('Erro na verificação:', error);
        
        // Tratamento mais detalhado dos erros
        if (error.response) {
            // Erro da API do Google
            res.status(error.response.status).json({ 
                error: 'Erro na API de verificação de fatos',
                details: error.response.data 
            });
        } else if (error.request) {
            // Falha na requisição
            res.status(500).json({ 
                error: 'Não foi possível conectar à API de verificação',
                details: 'O servidor não respondeu'
            });
        } else {
            // Outros erros
            res.status(500).json({ 
                error: 'Erro interno no servidor',
                details: error.message 
            });
        }
    }
}